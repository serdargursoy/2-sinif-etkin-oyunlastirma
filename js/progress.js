// ==========================================
// 📊 Progress & Rewards System
// ==========================================

const ProgressManager = {
  STORAGE_KEY: 'sihirli_orman_data',

  defaultData() {
    return {
      profiles: [],
      currentProfileId: null
    };
  },

  defaultProfile(name) {
    return {
      id: Date.now().toString(36),
      name: name,
      avatar: '🧚',
      avatarBg: 0,
      level: 1,
      totalStars: 0,
      totalPoints: 0,
      streak: 0,
      lastPlayDate: null,
      badges: [],
      subjectProgress: {
        math: { 'dogal-sayilar': { completed: [], bestScore: 0 }, 'toplama-cikarma': { completed: [], bestScore: 0 } },
        english: { 'greetings': { completed: [], bestScore: 0 }, 'numbers': { completed: [], bestScore: 0 } },
        turkish: { 'okuma-anlama': { completed: [], bestScore: 0 }, 'kelime-bilgisi': { completed: [], bestScore: 0 } },
        life: { 'okulda-hayat': { completed: [], bestScore: 0 }, 'saglikli-hayat': { completed: [], bestScore: 0 } }
      },
      dailyQuests: { date: null, quests: [], completed: [] },
      stats: { totalAnswered: 0, totalCorrect: 0, totalWrong: 0, playTime: 0, sessionsCount: 0 },
      wrongAnswers: [],
      settings: { soundEnabled: true, parentPin: '1234' },
      createdAt: new Date().toISOString()
    };
  },

  load() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : this.defaultData();
    } catch { return this.defaultData(); }
  },

  save(data) {
    try { localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data)); } catch (e) { console.error('Save failed', e); }
  },

  getProfiles() {
    return this.load().profiles;
  },

  getProfile(id) {
    const data = this.load();
    return data.profiles.find(p => p.id === id);
  },

  getCurrentProfile() {
    const data = this.load();
    if (!data.currentProfileId) return null;
    return data.profiles.find(p => p.id === data.currentProfileId) || null;
  },

  createProfile(name) {
    const data = this.load();
    const profile = this.defaultProfile(name);
    data.profiles.push(profile);
    data.currentProfileId = profile.id;
    this.save(data);
    return profile;
  },

  switchProfile(id) {
    const data = this.load();
    if (data.profiles.find(p => p.id === id)) {
      data.currentProfileId = id;
      this.save(data);
    }
  },

  deleteProfile(id) {
    const data = this.load();
    data.profiles = data.profiles.filter(p => p.id !== id);
    if (data.currentProfileId === id) {
      data.currentProfileId = data.profiles.length > 0 ? data.profiles[0].id : null;
    }
    this.save(data);
  },

  updateProfile(id, updates) {
    const data = this.load();
    const idx = data.profiles.findIndex(p => p.id === id);
    if (idx === -1) return;
    data.profiles[idx] = { ...data.profiles[idx], ...updates };
    this.save(data);
    return data.profiles[idx];
  },

  resetProfileData(id) {
    const data = this.load();
    const idx = data.profiles.findIndex(p => p.id === id);
    if (idx === -1) return;
    
    const p = data.profiles[idx];
    p.level = 1;
    p.totalStars = 0;
    p.totalPoints = 0;
    p.badges = [];
    p.subjectProgress = {
      math: {}, english: {}, turkish: {}, life: {}
    };
    p.stats = { totalAnswered: 0, totalCorrect: 0, totalWrong: 0, playTime: 0, sessionsCount: 0 };
    
    this.save(data);
    return p;
  },
  addPoints(profileId, points) {
    const profile = this.getProfile(profileId);
    if (!profile) return;
    profile.totalPoints += points;
    profile.totalStars += Math.floor(points / 10);
    // Level up every 100 points
    const newLevel = Math.floor(profile.totalPoints / 100) + 1;
    const leveledUp = newLevel > profile.level;
    profile.level = newLevel;
    this.updateProfile(profileId, { totalPoints: profile.totalPoints, totalStars: profile.totalStars, level: profile.level });
    return { leveledUp, newLevel };
  },

  recordAnswer(profileId, subject, unitId, questionId, isCorrect) {
    const data = this.load();
    const profile = data.profiles.find(p => p.id === profileId);
    if (!profile) return;
    profile.stats.totalAnswered++;
    
    if (!profile.subjectProgress[subject]) profile.subjectProgress[subject] = {};
    if (!profile.subjectProgress[subject][unitId]) {
      profile.subjectProgress[subject][unitId] = { completed: [], bestScore: 0 };
    }

    if (isCorrect) {
      profile.stats.totalCorrect++;
      if (!profile.subjectProgress[subject][unitId].completed.includes(questionId)) {
        profile.subjectProgress[subject][unitId].completed.push(questionId);
      }
      // Remove from wrongAnswers if it was there
      profile.wrongAnswers = profile.wrongAnswers.filter(wa => wa.questionId !== questionId);
    } else {
      profile.stats.totalWrong++;
      // Add to wrongAnswers if not already there
      const exists = profile.wrongAnswers.some(wa => wa.questionId === questionId);
      if (!exists) {
        profile.wrongAnswers.push({ subject, unitId, questionId, timestamp: Date.now() });
        // Keep only last 50 mistakes
        if (profile.wrongAnswers.length > 50) profile.wrongAnswers.shift();
      }
    }
    this.save(data);
  },

  getStudyPlan(profileId) {
    const profile = this.getProfile(profileId);
    if (!profile || !profile.wrongAnswers || profile.wrongAnswers.length === 0) return [];
    
    // Group by unit
    const counts = {};
    profile.wrongAnswers.forEach(wa => {
      const key = `${wa.subject}|${wa.unitId}`;
      counts[key] = (counts[key] || 0) + 1;
    });

    // Sort by most mistakes
    return Object.entries(counts)
      .map(([key, count]) => {
         const [subject, unitId] = key.split('|');
         return { subject, unitId, count };
      })
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);
  },

  getUnitProgress(profileId, subject, unitId) {
    const profile = this.getProfile(profileId);
    if (!profile || !profile.subjectProgress[subject] || !profile.subjectProgress[subject][unitId]) return 0;
    const completed = profile.subjectProgress[subject][unitId].completed.length;
    // Use actual question count from subject data if available
    let totalQuestions = 10; // fallback
    if (typeof SUBJECTS_DATA !== 'undefined' && SUBJECTS_DATA[subject]) {
      const unit = SUBJECTS_DATA[subject].units.find(u => u.id === unitId);
      if (unit && unit.questions) totalQuestions = unit.questions.length;
    }
    return Math.min(Math.round((completed / totalQuestions) * 100), 100);
  },

  getSubjectProgress(profileId, subject) {
    const profile = this.getProfile(profileId);
    if (!profile || !profile.subjectProgress[subject]) return 0;
    let totalCompleted = 0;
    let totalPossible = 0;
    // Use actual question counts if available
    if (typeof SUBJECTS_DATA !== 'undefined' && SUBJECTS_DATA[subject]) {
      SUBJECTS_DATA[subject].units.forEach(unit => {
        const unitData = profile.subjectProgress[subject][unit.id];
        totalCompleted += unitData ? unitData.completed.length : 0;
        totalPossible += unit.questions ? unit.questions.length : 10;
      });
    } else {
      Object.values(profile.subjectProgress[subject]).forEach(unit => {
        totalCompleted += unit.completed.length;
        totalPossible += 10;
      });
    }
    if (totalPossible === 0) return 0;
    return Math.min(Math.round((totalCompleted / totalPossible) * 100), 100);
  },

  updateStreak(profileId) {
    const data = this.load();
    const profile = data.profiles.find(p => p.id === profileId);
    if (!profile) return;
    const today = new Date().toISOString().split('T')[0];
    if (profile.lastPlayDate === today) return profile.streak;
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (profile.lastPlayDate === yesterday) {
      profile.streak++;
    } else {
      profile.streak = 1;
    }
    profile.lastPlayDate = today;
    this.save(data);
    return profile.streak;
  },

  setBestScore(profileId, subject, unitId, score) {
    const data = this.load();
    const profile = data.profiles.find(p => p.id === profileId);
    if (!profile) return;
    
    if (!profile.subjectProgress[subject]) profile.subjectProgress[subject] = {};
    if (!profile.subjectProgress[subject][unitId]) {
      profile.subjectProgress[subject][unitId] = { completed: [], bestScore: 0 };
    }

    if (score > (profile.subjectProgress[subject][unitId].bestScore || 0)) {
      profile.subjectProgress[subject][unitId].bestScore = score;
      this.save(data);
      return true;
    }
    return false;
  }
};

// ==========================================
// 🏅 Badge Definitions
// ==========================================

const BADGES = [
  { id: 'first-step', name: 'İlk Adım', icon: '👣', description: 'İlk soruyu doğru cevapla', condition: (p) => p.stats.totalCorrect >= 1 },
  { id: 'star-5', name: '5 Yıldız', icon: '⭐', description: '5 yıldız topla', condition: (p) => p.totalStars >= 5 },
  { id: 'star-25', name: '25 Yıldız', icon: '🌟', description: '25 yıldız topla', condition: (p) => p.totalStars >= 25 },
  { id: 'star-100', name: '100 Yıldız', icon: '💫', description: '100 yıldız topla', condition: (p) => p.totalStars >= 100 },
  { id: 'streak-3', name: '3 Gün Şeridi', icon: '🔥', description: '3 gün üst üste oyna', condition: (p) => p.streak >= 3 },
  { id: 'streak-7', name: 'Hafta Şampiyonu', icon: '🏆', description: '7 gün üst üste oyna', condition: (p) => p.streak >= 7 },
  { id: 'math-master', name: 'Matematik Ustası', icon: '🔢', description: 'Matematik\'te %80 ilerleme', condition: (p) => { let t = 0; Object.values(p.subjectProgress.math).forEach(u => t += u.completed.length); return t >= 24; } },
  { id: 'eng-master', name: 'İngilizce Ustası', icon: '🏰', description: 'İngilizce\'de %80 ilerleme', condition: (p) => { let t = 0; Object.values(p.subjectProgress.english).forEach(u => t += u.completed.length); return t >= 24; } },
  { id: 'tr-master', name: 'Türkçe Ustası', icon: '📖', description: 'Türkçe\'de %80 ilerleme', condition: (p) => { let t = 0; Object.values(p.subjectProgress.turkish).forEach(u => t += u.completed.length); return t >= 24; } },
  { id: 'life-master', name: 'Hayat Bilgisi Ustası', icon: '🌍', description: 'Hayat Bilgisi\'nde %80 ilerleme', condition: (p) => { let t = 0; Object.values(p.subjectProgress.life).forEach(u => t += u.completed.length); return t >= 24; } },
  { id: 'all-rounder', name: 'Her Şeyci', icon: '🎯', description: 'Tüm dersleri ziyaret et (en az 1 soru çöz)', condition: (p) => { const s = p.subjectProgress; return Object.values(s).every(sub => Object.values(sub).some(u => u.completed.length > 0)); } },
  { id: 'perfectionist', name: 'Mükemmeliyetçi', icon: '💎', description: 'Bir oturumda 10 soruyu hatasız tamamla', condition: () => false },
  { id: 'curious', name: 'Meraklı Kaşif', icon: '🔍', description: '50 soru cevapla', condition: (p) => p.stats.totalAnswered >= 50 },
  { id: 'scholar', name: 'Bilgin', icon: '🎓', description: '100 soru cevapla', condition: (p) => p.stats.totalAnswered >= 100 },
  { id: 'level-5', name: 'Seviye 5', icon: '🌈', description: 'Seviye 5\'e ulaş', condition: (p) => p.level >= 5 },
  { id: 'level-10', name: 'Seviye 10', icon: '👑', description: 'Seviye 10\'a ulaş', condition: (p) => p.level >= 10 }
];

function checkBadges(profile) {
  const newBadges = [];
  BADGES.forEach(badge => {
    if (!profile.badges.includes(badge.id) && badge.condition(profile)) {
      newBadges.push(badge);
      profile.badges.push(badge.id);
    }
  });
  if (newBadges.length > 0) {
    ProgressManager.updateProfile(profile.id, { badges: profile.badges });
  }
  return newBadges;
}
