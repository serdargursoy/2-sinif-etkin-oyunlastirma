// ==========================================
// 🎮 Sihirli Öğrenme Ormanı — Ana Uygulama
// ==========================================

const AVATARS = ['🧚','🦄','🌸','🦋','🐱','🐰','🐼','🐨','🦊','🐸','🌈','⭐','🎀','👸','🧜','🐬'];
const AVATAR_BGS = [
  'linear-gradient(135deg, #FF8DC7, #BB7FD1)',
  'linear-gradient(135deg, #85C1E9, #5DADE2)',
  'linear-gradient(135deg, #82E0AA, #58D68D)',
  'linear-gradient(135deg, #F7C948, #F39C12)',
  'linear-gradient(135deg, #F1948A, #E74C3C)',
  'linear-gradient(135deg, #C39BD3, #9B59B6)',
  'linear-gradient(135deg, #AED6F1, #85C1E9)',
  'linear-gradient(135deg, #F9E79F, #F7DC6F)'
];

const SUBJECTS_DATA = {
  math: MATH_QUESTIONS,
  english: ENGLISH_QUESTIONS,
  turkish: TURKISH_QUESTIONS,
  life: LIFE_QUESTIONS
};

const SUBJECT_META = {
  math: { name: 'Matematik Adası', icon: '🔢', cssClass: 'math' },
  english: { name: 'İngilizce Kalesi', icon: '🏰', cssClass: 'english' },
  turkish: { name: 'Türkçe Bahçesi', icon: '📖', cssClass: 'turkish' },
  life: { name: 'Hayat Bilgisi Köyü', icon: '🌍', cssClass: 'life' }
};

const ENCOURAGEMENTS_CORRECT = [
  'Harika! 🎉', 'Süper! ⭐', 'Mükemmel! 💫', 'Bravo! 🌟', 'Aferin! 🎊',
  'Doğru! 👏', 'Çok iyi! 🥳', 'Muhteşem! ✨', 'Tam isabet! 🎯', 'Parlıyorsun! 💖'
];

const ENCOURAGEMENTS_WRONG = [
  'Bir daha deneyelim! 💪', 'Yaklaştın! 🌈', 'Pes etme! 🌟',
  'Olsun, öğreniyoruz! 📚', 'Tekrar dene, yaparsın! ✨'
];

const DAILY_ENGLISH_PHRASES = [
  { en: "Good morning!", tr: "Günaydın!" },
  { en: "How are you?", tr: "Nasılsın?" },
  { en: "I am fine, thank you.", tr: "İyiyim, teşekkür ederim." },
  { en: "What is your name?", tr: "Senin adın ne?" },
  { en: "I like apples.", tr: "Elmaları severim." },
  { en: "This is a cat.", tr: "Bu bir kedidir." },
  { en: "I love my school.", tr: "Okulumu seviyorum." },
  { en: "Have a good day!", tr: "İyi günler dilerim!" },
  { en: "See you tomorrow.", tr: "Yarın görüşürüz." },
  { en: "I can jump.", tr: "Ben zıplayabilirim." },
  { en: "The sky is blue.", tr: "Gökyüzü mavidir." },
  { en: "Let's play a game.", tr: "Hadi oyun oynayalım." },
  { en: "I have a red pen.", tr: "Kırmızı bir kalemim var." },
  { en: "You are my friend.", tr: "Sen benim arkadaşımsın." },
  { en: "Nice to meet you.", tr: "Tanıştığıma memnun oldum." }
];

// ==========================================
// APP STATE
// ==========================================
const App = {
  currentScreen: 'welcome',
  currentProfile: null,
  currentSubject: null,
  currentUnit: null,
  quizState: null,
  breakState: { unitsCompleted: 0 },

  init() {
    SoundEngine.init();
    this.createSparkles();
    this.checkExistingProfile();
    this.setupGlobalEvents();
  },

  setupGlobalEvents() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if (this.currentScreen === 'quiz' && this.quizState && this.quizState.answered) {
          // If it's a fill-blank, the input listener already handles it, 
          // but this covers cases where focus is lost or other question types.
          const nextBtn = document.getElementById('quiz-next-btn');
          if (nextBtn && !nextBtn.classList.contains('hidden')) {
            this.nextQuestion();
          }
        }
      }
    });
  },

  interactWithAvatar() {
    SoundEngine.play('click');
    const avatar = document.getElementById('dash-avatar');
    const bubble = document.getElementById('avatar-speech-bubble');
    
    // Animate avatar
    avatar.classList.remove('avatar-interact');
    void avatar.offsetWidth; // trigger reflow
    avatar.classList.add('avatar-interact');
    
    // Show confetti
    if (typeof confetti !== 'undefined') {
       confetti({
          particleCount: 30,
          spread: 60,
          origin: { x: avatar.getBoundingClientRect().left / window.innerWidth, y: avatar.getBoundingClientRect().top / window.innerHeight }
       });
    } else {
       this.showMiniConfetti(avatar);
    }
    
    // Messages
    const msgs = [
      `Harika görünüyorsun ${this.currentProfile.name}!`,
      "Bugün kaç yıldız toplayacağız?",
      "Sen bir harikasın! 🌟",
      "Matematikte çok iyisin! 🧠",
      "Hadi maceralara atılalım! 🚀",
      "Çok yaşa! ✨",
      "Sihirli ormana hoş geldin! 🌲",
      "Bugün yıldız gibi parlıyorsun! 💫"
    ];
    bubble.textContent = msgs[Math.floor(Math.random() * msgs.length)];
    
    bubble.classList.remove('show');
    void bubble.offsetWidth;
    bubble.classList.add('show');
  },
  
  showMiniConfetti(el) {
    const rect = el.getBoundingClientRect();
    for(let i=0; i<6; i++) {
      const p = document.createElement('div');
      p.textContent = ['⭐','💖','🎉','✨','🍬'][Math.floor(Math.random()*5)];
      p.style.position = 'fixed';
      p.style.left = (rect.left + rect.width/2) + 'px';
      p.style.top = (rect.top + rect.height/2) + 'px';
      p.style.fontSize = '24px';
      p.style.pointerEvents = 'none';
      p.style.zIndex = '9999';
      p.style.transition = 'all 1s ease-out';
      document.body.appendChild(p);
      
      setTimeout(() => {
        p.style.transform = `translate(${(Math.random()-0.5)*120}px, -${Math.random()*120+60}px) rotate(${Math.random()*360}deg)`;
        p.style.opacity = '0';
      }, 50);
      setTimeout(() => p.remove(), 1050);
    }
  },

  playDailyEnglish() {
    SoundEngine.click();
    if (this.currentDailyEnglish) {
       SoundEngine.speakEnglish(this.currentDailyEnglish);
    }
  },

  recordDailyEnglish() {
    const btn = document.getElementById('record-en-btn');
    const feedback = document.getElementById('record-en-feedback');
    
    if (!this.currentDailyEnglish) return;
    
    SoundEngine.listenEnglish(
      this.currentDailyEnglish, 
      (result) => {
        // Result callback
        if (result.isMatch) {
          btn.style.backgroundColor = 'var(--color-emerald)';
          btn.textContent = '✅';
          feedback.textContent = 'Harika telaffuz! 🌟';
          feedback.style.color = 'var(--color-emerald)';
          SoundEngine.correct();
          
          if (typeof confetti !== 'undefined') {
            confetti({ particleCount: 50, spread: 70, origin: { x: btn.getBoundingClientRect().left / window.innerWidth, y: btn.getBoundingClientRect().top / window.innerHeight } });
          } else {
            this.showMiniConfetti(btn);
          }
        } else {
          btn.style.backgroundColor = 'var(--color-coral)';
          btn.textContent = '❌';
          feedback.textContent = `Duyduğum: "${result.transcript}". Bir daha dene!`;
          feedback.style.color = 'var(--color-coral)';
          SoundEngine.wrong();
        }
        
        // Reset after 3.5 seconds
        setTimeout(() => {
          btn.style.backgroundColor = 'var(--color-primary)';
          btn.textContent = '🎤';
          feedback.textContent = 'Mikrofona tıklayıp cümleyi tekrar et ✨';
          feedback.style.color = 'var(--color-text-secondary)';
        }, 3500);
      },
      () => {
        // On Start
        btn.style.backgroundColor = 'var(--color-gold)';
        btn.textContent = '👂';
        try { btn.classList.add('pulse'); } catch(e){}
        feedback.textContent = 'Seni dinliyorum...';
        feedback.style.color = 'var(--color-gold)';
        SoundEngine.click();
      },
      () => {
        // On End
        try { btn.classList.remove('pulse'); } catch(e){}
      },
      (error) => {
        // On Error
        try { btn.classList.remove('pulse'); } catch(e){}
        if (error === 'not-supported') {
           feedback.textContent = 'Tarayıcın mikrofon desteklemiyor :(';
        } else if (error === 'not-allowed') {
           feedback.textContent = 'Lütfen mikrofona izin ver!';
        } else {
           feedback.textContent = 'Sesini alamadım, tekrar dene!';
           btn.style.backgroundColor = 'var(--color-primary)';
           btn.textContent = '🎤';
        }
        feedback.style.color = 'var(--color-coral)';
      }
    );
  },

  createSparkles() {
    const container = document.getElementById('sparkles');
    if (!container) return;
    const symbols = ['✨','⭐','💫','🌟','🌈','💖','🌸','🫧'];
    for (let i = 0; i < 25; i++) {
      const span = document.createElement('span');
      span.className = 'sparkle';
      span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      span.style.left = Math.random() * 100 + '%';
      span.style.top = Math.random() * 100 + '%';
      span.style.animationDelay = (Math.random() * 5) + 's';
      span.style.animationDuration = (3 + Math.random() * 4) + 's';
      container.appendChild(span);
    }
  },

  checkExistingProfile() {
    const profiles = ProgressManager.getProfiles();
    if (profiles.length > 0) {
      const current = ProgressManager.getCurrentProfile();
      if (current) {
        this.currentProfile = current;
        ProgressManager.updateStreak(current.id);
        this.showScreen('dashboard');
        return;
      }
    }
    this.showScreen('welcome');
  },

  showScreen(screenId) {
    if (SoundEngine) SoundEngine.navigate();
    
    // Deactivate ALL screens
    const allScreens = document.querySelectorAll('.screen');
    allScreens.forEach(s => {
      s.classList.remove('active');
      s.scrollTop = 0; 
    });
    
    // Activate the target screen
    const target = document.getElementById('screen-' + screenId);
    if (target) {
      target.classList.add('active');
      this.currentScreen = screenId;
      // Scroll to top of the screen element (not window)
      target.scrollTop = 0;
    }

    // Render screen content
    const renderers = {
      'welcome': () => this.renderWelcome(),
      'profile-select': () => this.renderProfileSelect(),
      'dashboard': () => this.renderDashboard(),
      'subject': () => this.renderSubject(),
      'intro': () => this.renderIntro(),
      'lesson': () => this.renderLesson(),
      'break': () => this.renderBreak(),
      'quiz': () => this.renderQuiz(),
      'quiz-result': () => this.renderQuizResult(),
      'badges': () => this.renderBadges(),
      'parent': () => this.renderParent()
    };
    if (renderers[screenId]) renderers[screenId]();
    
    // Ensure scroll reset after render
    requestAnimationFrame(() => {
      if (target) target.scrollTop = 0;
    });
  },


  // ==========================================
  // WELCOME SCREEN
  // ==========================================
  renderWelcome() {
    const profiles = ProgressManager.getProfiles();
    const hasProfiles = profiles.length > 0;
    document.getElementById('welcome-existing').style.display = hasProfiles ? 'block' : 'none';
  },

  startNewProfile() {
    const input = document.getElementById('player-name');
    const name = input.value.trim();
    if (!name) {
      input.style.borderColor = 'var(--color-wrong)';
      input.focus();
      return;
    }
    SoundEngine.click();
    this.currentProfile = ProgressManager.createProfile(name);
    ProgressManager.updateStreak(this.currentProfile.id);
    this.showScreen('dashboard');
    this.showToast('🎉', `Hoş geldin ${name}!`);
  },

  goToProfileSelect() {
    SoundEngine.click();
    this.showScreen('profile-select');
  },

  // ==========================================
  // PROFILE SELECT
  // ==========================================
  renderProfileSelect() {
    const container = document.getElementById('profiles-list');
    const profiles = ProgressManager.getProfiles();
    container.innerHTML = profiles.map(p => `
      <div class="card card-unit card-interactive" onclick="App.selectProfile('${p.id}')">
        <div class="avatar-display small" style="background:${AVATAR_BGS[p.avatarBg || 0]}">${p.avatar}</div>
        <div class="unit-info">
          <div class="unit-title">${p.name}</div>
          <div class="unit-desc">Seviye ${p.level} · ⭐ ${p.totalStars} yıldız</div>
        </div>
        <div class="unit-progress">🔥 ${p.streak}</div>
      </div>
    `).join('');
  },

  selectProfile(id) {
    SoundEngine.click();
    ProgressManager.switchProfile(id);
    this.currentProfile = ProgressManager.getProfile(id);
    ProgressManager.updateStreak(id);
    this.showScreen('dashboard');
  },

  // ==========================================
  // DASHBOARD
  // ==========================================
  renderDashboard() {
    const p = this.currentProfile;
    if (!p) return;
    // Refresh profile data
    this.currentProfile = ProgressManager.getProfile(p.id);
    const profile = this.currentProfile;

    // Daily English exposure
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const phrase = DAILY_ENGLISH_PHRASES[dayOfYear % DAILY_ENGLISH_PHRASES.length];
    const enTextEl = document.getElementById('daily-en-text');
    if (enTextEl) {
        enTextEl.textContent = phrase.en;
        document.getElementById('daily-tr-text').textContent = phrase.tr;
        this.currentDailyEnglish = phrase.en;
    }

    // Greeting
    const hour = new Date().getHours();
    let greeting = 'Merhaba';
    let subMessage = 'Bugün harika şeyler öğreneceğiz!';
    if (hour < 10) {
      greeting = 'Günaydın';
      subMessage = 'Kahvaltını yaptın mı? Güne enerjik başlayalım!';
    } else if (hour < 14) {
      greeting = 'Tünaydın';
      subMessage = 'Öğlen molasından sonra macera devam ediyor!';
    } else if (hour < 18) {
      greeting = 'İyi günler';
      subMessage = 'Günün nasıl geçiyor? Başarılar seninle!';
    } else {
      greeting = 'İyi akşamlar';
      subMessage = 'Uyumadan önce biraz yıldız toplamaya ne dersin?';
    }
    document.getElementById('dash-greeting').innerHTML = `${greeting}, <span class="greeting-name">${profile.name}</span>! ✨<div style="font-size:var(--text-lg);font-weight:normal;color:var(--color-text-secondary);margin-top:4px">${subMessage}</div>`;

    // Interactivity: Avatar intro bubble logic
    setTimeout(() => {
        const bubble = document.getElementById('avatar-speech-bubble');
        if (bubble && !bubble.classList.contains('show')) {
            bubble.textContent = `Hoş geldin ${profile.name}! Beni tıkla!`;
            bubble.classList.add('show');
            setTimeout(() => { bubble.classList.remove('show'); }, 3000);
        }
    }, 1000);

    // Avatar
    document.getElementById('dash-avatar').innerHTML = profile.avatar;
    document.getElementById('dash-avatar').style.background = AVATAR_BGS[profile.avatarBg || 0];
    document.getElementById('dash-level').textContent = profile.level;

    // Study Plan / Recommendations
    const studyPlan = ProgressManager.getStudyPlan(profile.id);
    const planContainer = document.getElementById('dash-study-plan-container');
    const planList = document.getElementById('dash-study-plan-list');
    
    if (studyPlan && studyPlan.length > 0) {
      planContainer.classList.remove('hidden');
      planList.innerHTML = studyPlan.map(item => {
        const sub = SUBJECT_META[item.subject];
        const unit = SUBJECTS_DATA[item.subject].units.find(u => u.id === item.unitId);
        return `
          <button class="btn btn-sm btn-ghost" style="text-align:left; border:1px solid #E0F2FE; background:#F8FAFC; padding:var(--space-2) var(--space-4); width:100%; border-radius:12px; margin-bottom:4px;" 
                  onclick="App.startReviewMode('${item.subject}', '${item.unitId}')">
            <div style="display:flex; justify-content:between; align-items:center; width:100%">
              <div style="flex:1">
                <span style="font-weight:bold; color:var(--color-text)">${sub.icon} ${unit.name}</span>
                <span style="font-size:var(--text-xs); color:var(--color-text-secondary); display:block">${item.count} takıldığın soruyu tekrar edelim!</span>
              </div>
              <span style="font-size:1.2rem">🚀</span>
            </div>
          </button>
        `;
      }).join('');
    } else {
      planContainer.classList.add('hidden');
    }

    // Stats
    document.getElementById('dash-stars').textContent = profile.totalStars;
    document.getElementById('dash-streak').textContent = profile.streak;
    document.getElementById('dash-points').textContent = profile.totalPoints;

    // Subject progress bars
    ['math','english','turkish','life'].forEach(sub => {
      const pct = ProgressManager.getSubjectProgress(profile.id, sub);
      const bar = document.querySelector(`#dash-progress-${sub} .progress-fill`);
      if (bar) bar.style.width = pct + '%';
      const label = document.getElementById(`dash-progress-${sub}-label`);
      if (label) label.textContent = pct + '%';
    });

    // Check new badges
    const newBadges = checkBadges(profile);
    if (newBadges.length > 0) {
      setTimeout(() => {
        SoundEngine.badge();
        this.showBadgeModal(newBadges[0]);
      }, 500);
    }

    // Daily quests
    this.renderDailyQuests();
  },

  renderDailyQuests() {
    const profile = this.currentProfile;
    const today = new Date().toISOString().split('T')[0];
    let quests = profile.dailyQuests;

    if (quests.date !== today) {
      // Generate new daily quests
      const subjects = ['math', 'english', 'turkish', 'life'];
      const shuffled = subjects.sort(() => Math.random() - 0.5).slice(0, 3);
      quests = {
        date: today,
        quests: shuffled.map(s => ({
          subject: s,
          text: `${SUBJECT_META[s].icon} ${SUBJECT_META[s].name}'nda 3 soru çöz`,
          target: 3,
          progress: 0
        })),
        completed: []
      };
      ProgressManager.updateProfile(profile.id, { dailyQuests: quests });
      this.currentProfile.dailyQuests = quests;
    }

    const container = document.getElementById('daily-quests');
    if (!container) return;
    container.innerHTML = quests.quests.map((q, i) => {
      const done = quests.completed.includes(i);
      const prog = q.progress || 0;
      const target = q.target || 3;
      const displayProg = Math.min(prog, target);
      return `<div class="quest-item ${done ? 'done' : ''}">
        <div class="quest-check ${done ? 'done' : ''}">${done ? '✓' : ''}</div>
        <div style="flex:1">
          <div style="margin-bottom:4px">${q.text}</div>
          <div style="font-size:var(--text-xs); color:var(--color-text-secondary)">${displayProg} / ${target} yapıldı</div>
        </div>
      </div>`;
    }).join('');
  },

  openSubject(subject) {
    SoundEngine.click();
    this.currentSubject = subject;
    this.showScreen('subject');
  },

  // ==========================================
  // SUBJECT SCREEN
  // ==========================================
  renderSubject() {
    const subject = this.currentSubject;
    const meta = SUBJECT_META[subject];
    const data = SUBJECTS_DATA[subject];
    const profile = this.currentProfile;

    document.getElementById('subject-icon').textContent = meta.icon;
    document.getElementById('subject-title').textContent = meta.name;
    document.getElementById('subject-title').className = `greeting-text text-${meta.cssClass}`;

    const term1Container = document.getElementById('units-list-term1');
    const term2Container = document.getElementById('units-list-term2');
    
    if (term1Container) term1Container.innerHTML = '';
    if (term2Container) term2Container.innerHTML = '';

    data.units.forEach((unit, idx) => {
      const progress = ProgressManager.getUnitProgress(profile.id, subject, unit.id);
      const isCompleted = progress >= 100;
      
      const htmlString = `
        <div class="card card-unit ${isCompleted ? 'completed' : ''}" onclick="App.startQuiz('${subject}','${unit.id}')" style="animation-delay:${idx * 0.1}s">
          <div class="unit-icon" style="background:${meta.cssClass === 'math' ? 'var(--color-math-light)' : meta.cssClass === 'english' ? 'var(--color-english-light)' : meta.cssClass === 'turkish' ? 'var(--color-turkish-light)' : 'var(--color-life-light)'}">
            ${unit.icon}
          </div>
          <div class="unit-info">
            <div class="unit-title">${unit.name} <span class="unit-code-badge">KOD: ${unit.questCode || '-'}</span></div>
            <div class="unit-desc">${unit.description}</div>
            <div class="progress-bar small ${meta.cssClass}" style="margin-top:8px">
              <div class="progress-fill" style="width:${progress}%"></div>
            </div>
          </div>
          <div class="unit-progress">
            <div style="font-size:var(--text-lg);font-weight:bold;color:var(--color-${meta.cssClass})">${progress}%</div>
            ${isCompleted ? '<div>✅</div>' : ''}
          </div>
        </div>`;
      
      if (unit.semester === 2) {
         if (term2Container) term2Container.innerHTML += htmlString;
      } else {
         if (term1Container) term1Container.innerHTML += htmlString;
      }
    });
  },
  
  // ==========================================
  // HOMEWORK / QUEST ENGINE
  // ==========================================
  startReviewMode(subject, unitId) {
    SoundEngine.click();
    this.currentSubject = subject;
    this.currentUnit = unitId;
    
    const unit = SUBJECTS_DATA[subject].units.find(u => u.id === unitId);
    if (!unit) return;
    
    // Filter unit questions to ONLY include the ones the user got wrong
    const profile = this.currentProfile;
    const wrongIds = profile.wrongAnswers
      .filter(wa => wa.subject === subject && wa.unitId === unitId)
      .map(wa => wa.questionId);
      
    const reviewQuestions = unit.questions.filter(q => wrongIds.includes(q.id));
    
    if (reviewQuestions.length === 0) {
      alert("Harika! Bu ünitedeki tüm hatalarını zaten temizlemişsin! ✨");
      this.renderDashboard();
      return;
    }
    
    this.quizState = {
      questions: JSON.parse(JSON.stringify(reviewQuestions)), // clone
      currentIdx: 0,
      score: 0,
      correctCount: 0,
      answered: false,
      combo: 0
    };
    
    this.showScreen('quiz');
    this.renderQuiz();
  },

  checkQuestCode() {
    const inputEl = document.getElementById('quest-code-input');
    const errorEl = document.getElementById('quest-code-error');
    if (!inputEl) return;
    
    const code = inputEl.value.trim().toUpperCase();
    if (!code) return;
    
    // Search across all subjects for a unit with this code
    let foundSubject = null;
    let foundUnit = null;
    
    for (const [subjKey, subjData] of Object.entries(SUBJECTS_DATA)) {
       const u = subjData.units.find(un => un.questCode === code);
       if (u) {
          foundSubject = subjKey;
          foundUnit = u.id;
          break;
       }
    }
    
    if (foundSubject && foundUnit) {
       SoundEngine.navigate();
       errorEl.style.display = 'none';
       inputEl.value = ''; // clear
       this.startQuiz(foundSubject, foundUnit);
    } else {
       SoundEngine.wrong();
       errorEl.style.display = 'block';
       setTimeout(() => { errorEl.style.display = 'none'; }, 3000);
    }
  },

  // ==========================================
  // QUIZ ENGINE
  // ==========================================
  startQuiz(subject, unitId) {
    SoundEngine.click();
    this.currentSubject = subject;
    this.currentUnit = unitId;

    const data = SUBJECTS_DATA[subject];
    const unit = data.units.find(u => u.id === unitId);
    if (!unit) return;

    // Pick 10 random questions (or all if less)
    let questions = [...unit.questions];
    questions = questions.sort(() => Math.random() - 0.5).slice(0, 10);

    this.quizState = {
      subject,
      unitId,
      unitName: unit.name,
      introText: unit.introText || 'Hadi öğrenmeye başlayalım!',
      lessons: unit.lessons || [{ title: 'Bilgi', text: 'Bu ünite için özet bilgi bulunmuyor. Teste geçebilirsin!' }],
      questions,
      currentLessonIndex: 0,
      currentIndex: 0,
      score: 0,
      totalPoints: 0,
      combo: 0,
      maxCombo: 0,
      correct: 0,
      wrong: 0,
      answered: false,
      startTime: Date.now()
    };

    this.showScreen('intro');
  },

  renderIntro() {
    const qs = this.quizState;
    if (!qs) return;
    
    document.getElementById('intro-unit-title').textContent = qs.unitName;
    document.getElementById('intro-text').textContent = qs.introText;
    document.getElementById('intro-mascot').textContent = this.currentProfile ? this.currentProfile.avatar : '🧚‍♀️';
    
    // Sesli oku
    setTimeout(() => SoundEngine.speak(qs.introText), 300);
  },

  startLessonFromIntro() {
    SoundEngine.click();
    SoundEngine.stopSpeak(); 
    this.showScreen('lesson');
  },

  renderLesson() {
    const qs = this.quizState;
    if (!qs) return;
    
    document.getElementById('lesson-top-mascot').textContent = this.currentProfile ? this.currentProfile.avatar : '🧚‍♀️';
    const slide = qs.lessons[qs.currentLessonIndex];
    document.getElementById('lesson-slide-title').textContent = slide.title;
    document.getElementById('lesson-slide-content').innerHTML = slide.text;
    
    const imgEl = document.getElementById('lesson-slide-image');
    if (slide.image) {
       imgEl.src = slide.image;
       imgEl.classList.remove('hidden');
    } else {
       imgEl.src = '';
       imgEl.classList.add('hidden');
    }

    const prevBtn = document.getElementById('lesson-prev-btn');
    const nextBtn = document.getElementById('lesson-next-btn');
    
    if (qs.currentLessonIndex > 0) {
      prevBtn.classList.remove('hidden');
    } else {
      prevBtn.classList.add('hidden');
    }
    
    if (qs.currentLessonIndex < qs.lessons.length - 1) {
      nextBtn.textContent = 'İleri →';
    } else {
      nextBtn.textContent = 'Teste Başla ✨';
    }
    
    setTimeout(() => SoundEngine.speak(document.getElementById('lesson-slide-content').textContent), 300);
  },

  nextLessonSlide() {
    SoundEngine.click();
    SoundEngine.stopSpeak();
    const qs = this.quizState;
    if (qs.currentLessonIndex < qs.lessons.length - 1) {
      qs.currentLessonIndex++;
      this.renderLesson();
    } else {
      this.startQuizFromLesson();
    }
  },

  prevLessonSlide() {
    SoundEngine.click();
    SoundEngine.stopSpeak();
    const qs = this.quizState;
    if (qs.currentLessonIndex > 0) {
      qs.currentLessonIndex--;
      this.renderLesson();
    }
  },

  startQuizFromLesson() {
    SoundEngine.click();
    SoundEngine.stopSpeak();
    this.quizState.startTime = Date.now(); 
    this.showScreen('quiz');
  },

  renderQuiz() {
    const qs = this.quizState;
    if (!qs) return;

    const meta = SUBJECT_META[qs.subject];
    const q = qs.questions[qs.currentIndex];

    // Header
    document.getElementById('quiz-subject-label').textContent = `${meta.icon} ${meta.name}`;
    document.getElementById('quiz-unit-label').textContent = qs.unitName;
    document.getElementById('quiz-counter').textContent = `${qs.currentIndex + 1} / ${qs.questions.length}`;
    document.getElementById('quiz-stars-count').textContent = qs.score;

    // Progress bar
    const pct = ((qs.currentIndex) / qs.questions.length) * 100;
    document.getElementById('quiz-progress-fill').style.width = pct + '%';

    // Question content and Audio support
    let qHtml = q.question;
    
    if (q.type === 'audio-question') {
      qHtml = `
        <div class="audio-play-btn" style="font-size:4rem; cursor:pointer; color:var(--color-primary); display:inline-block; margin-bottom:10px; transition:transform 0.2s;" onclick="this.style.transform='scale(0.9)'; setTimeout(()=>this.style.transform='scale(1)', 200); SoundEngine.speakEnglish('${q.englishText}')">
           ▶️
        </div>
        <div style="font-size:var(--text-lg); color:var(--color-text-secondary);">${qHtml}</div>
      `;
    } else if (q.englishText && qs.subject === 'english') {
      qHtml += ` <button class="btn btn-ghost" style="margin-left:10px; border-radius:50%; width:48px;height:48px;padding:0; font-size:1.5rem;" onclick="SoundEngine.speakEnglish('${q.englishText}')">🔊</button>`;
    }
    
    document.getElementById('quiz-question').innerHTML = qHtml;

    // Image in Question
    const qImgEl = document.getElementById('quiz-question-image');
    if (q.image) {
       qImgEl.src = q.image;
       qImgEl.classList.remove('hidden');
    } else {
       qImgEl.src = '';
       qImgEl.classList.add('hidden');
    }

    // Close hidden options
    const grid = document.getElementById('quiz-options');
    const fillBlankArea = document.getElementById('quiz-fill-blank');
    const matchGrid = document.getElementById('quiz-match-options');
    const imageGrid = document.getElementById('quiz-image-options');

    grid.classList.add('hidden');
    fillBlankArea.classList.add('hidden');
    matchGrid.classList.add('hidden');
    if (imageGrid) imageGrid.classList.add('hidden');
    
    document.getElementById('quiz-feedback').innerHTML = '';
    document.getElementById('quiz-hint').innerHTML = '';
    document.getElementById('quiz-next-btn').classList.add('hidden');

    if (q.type === 'multiple-choice' || q.type === 'true-false' || q.type === 'audio-question') {
      grid.classList.remove('hidden');
      grid.innerHTML = q.options.map((opt, i) => `
        <div class="card-option" id="option-${i}" onclick="App.selectAnswer(${i})">${typeof opt === 'object' ? opt.value : opt}</div>
      `).join('');
    } else if (q.type === 'image-choice') {
      if (imageGrid) {
        imageGrid.classList.remove('hidden');
        imageGrid.innerHTML = q.options.map((opt, i) => `
          <div class="image-option-card" onclick="App.selectAnswer(${i})">
             <img src="${opt.image}" alt="Seçenek">
          </div>
        `).join('');
      }
    } else if (q.type === 'fill-blank') {
      fillBlankArea.classList.remove('hidden');
      const input = document.getElementById('fill-blank-input');
      input.value = '';
      input.disabled = false;
      input.style.borderColor = '';
      input.style.backgroundColor = '';
      setTimeout(() => input.focus(), 100);
    } else if (q.type === 'match') {
      matchGrid.classList.remove('hidden');
      // For match type, q.pairs should be [{left:'A', right:'A-ans'}, ...]
      // We render them scrambled
      if (!qs.matchState || qs.matchState.questionId !== q.id) {
        let items = [];
        q.pairs.forEach((p, idx) => {
          items.push({ id: `l-${idx}`, text: p.left, pairId: idx });
          items.push({ id: `r-${idx}`, text: p.right, pairId: idx });
        });
        items.sort(() => Math.random() - 0.5);
        qs.matchState = { questionId: q.id, items, selected: null, matchesFound: 0 };
      }
      matchGrid.innerHTML = qs.matchState.items.map(item => {
        let isMatched = item.matched ? 'matched' : '';
        return `<div class="match-card ${isMatched}" id="match-${item.id}" onclick="App.selectMatch('${item.id}')">${item.text}</div>`;
      }).join('');
    }

    // Remove combo counter
    const existingCombo = document.querySelector('.combo-counter');
    if (existingCombo) existingCombo.remove();

    qs.answered = false;
    
    // Soruyu sesli oku
    if (q.type === 'audio-question') {
      setTimeout(() => SoundEngine.speakEnglish(q.englishText), 600);
    } else {
      setTimeout(() => SoundEngine.speak(q.question), 300);
    }
  },

  selectAnswer(idx) {
    const qs = this.quizState;
    if (!qs || qs.answered) return;
    qs.answered = true;

    SoundEngine.click();

    const q = qs.questions[qs.currentIndex];
    
    // Support object options like {image: '...', value: 'cat'} or plain strings
    const selected = q.options[idx];
    const selectedValue = typeof selected === 'object' ? selected.value : selected;
    const isCorrect = selectedValue === q.correct;

    if (q.type === 'multiple-choice' || q.type === 'true-false' || q.type === 'audio-question') {
      // Mark options
      q.options.forEach((opt, i) => {
        const el = document.getElementById('option-' + i);
        if (!el) return;
        el.classList.add('disabled');
        const optVal = typeof opt === 'object' ? opt.value : opt;
        if (optVal === q.correct) el.classList.add('correct');
        if (i === idx && !isCorrect) el.classList.add('wrong');
      });
    } else if (q.type === 'image-choice') {
      const els = document.querySelectorAll('#quiz-image-options .image-option-card');
      els.forEach(el => el.style.pointerEvents = 'none');
      if (isCorrect) {
        els[idx].style.borderColor = 'var(--color-correct)';
        els[idx].style.backgroundColor = 'var(--color-correct-bg)';
      } else {
        els[idx].style.borderColor = 'var(--color-wrong)';
        els[idx].style.backgroundColor = 'var(--color-wrong-bg)';
        const correctIdx = q.options.findIndex(o => (typeof o === 'object' ? o.value : o) === q.correct);
        if (correctIdx !== -1) {
          els[correctIdx].style.borderColor = 'var(--color-correct)';
          els[correctIdx].style.backgroundColor = 'var(--color-correct-bg)';
        }
      }
    }

    if (isCorrect) {
      this.handleCorrectAnswer(q.points);
    } else {
      this.handleWrongAnswer(q.hint);
    }

    // Update stars display
    document.getElementById('quiz-stars-count').textContent = qs.score;

    // Show next button
    document.getElementById('quiz-next-btn').classList.remove('hidden');
  },

  checkFillBlank() {
    const qs = this.quizState;
    if (!qs || qs.answered) return;
    
    const q = qs.questions[qs.currentIndex];
    const inputEl = document.getElementById('fill-blank-input');
    const answer = inputEl.value.trim().toLowerCase();
    
    if (!answer) return; // ignore empty
    
    qs.answered = true;
    SoundEngine.click();
    inputEl.disabled = true;

    // We can allow multiple valid correct answers
    let isCorrect = false;
    if (Array.isArray(q.correct)) {
      isCorrect = q.correct.some(c => c.toLowerCase() === answer);
    } else {
      isCorrect = q.correct.toLowerCase() === answer;
    }

    if (isCorrect) {
      inputEl.style.borderColor = 'var(--color-correct)';
      inputEl.style.backgroundColor = 'var(--color-correct-bg)';
      this.handleCorrectAnswer(q.points);
    } else {
      inputEl.style.borderColor = 'var(--color-wrong)';
      inputEl.style.backgroundColor = 'var(--color-wrong-bg)';
      this.handleWrongAnswer(q.hint);
    }
    
    // Garantili buton gösterme
    document.getElementById('quiz-next-btn').classList.remove('hidden');
  },

  selectMatch(id) {
    const qs = this.quizState;
    if (!qs || qs.answered) return;
    const ms = qs.matchState;
    const q = qs.questions[qs.currentIndex];

    const clickedItem = ms.items.find(i => i.id === id);
    if (!clickedItem || clickedItem.matched) return;

    SoundEngine.click();
    const el = document.getElementById('match-' + id);

    if (!ms.selected) {
      ms.selected = clickedItem;
      el.classList.add('selected');
    } else {
      // Second click check
      if (ms.selected.id === id) {
        // Deselect
        ms.selected = null;
        el.classList.remove('selected');
        return;
      }
      
      const el1 = document.getElementById('match-' + ms.selected.id);
      
      // Check if pair
      if (ms.selected.pairId === clickedItem.pairId && ms.selected.id.charAt(0) !== id.charAt(0)) {
        // Correct pair
        clickedItem.matched = true;
        ms.selected.matched = true;
        
        el.className = 'match-card matched';
        el1.className = 'match-card matched';
        
        ms.matchesFound++;
        SoundEngine.correct(); // subtle ping
        this.showPointsFloat(5); 

        ms.selected = null;
        
        if (ms.matchesFound === q.pairs.length) {
          qs.answered = true;
          this.handleCorrectAnswer(q.points);
        }
      } else {
        // Wrong pair
        el.classList.add('wrong-match');
        el1.classList.add('wrong-match');
        SoundEngine.wrong();
        
        setTimeout(() => {
          el.classList.remove('wrong-match');
          el1.classList.remove('selected', 'wrong-match');
        }, 500);
        ms.selected = null;
      }
    }
  },

  handleCorrectAnswer(basePoints) {
    const qs = this.quizState;
    qs.combo++;
    if (qs.combo > qs.maxCombo) qs.maxCombo = qs.combo;
    const comboMultiplier = Math.min(qs.combo, 5);
    const points = basePoints * comboMultiplier;
    qs.totalPoints += points;
    qs.score += points;
    qs.correct++;

    SoundEngine.correct();
    this.showConfetti();
    this.showPointsFloat(points);

    const msg = ENCOURAGEMENTS_CORRECT[Math.floor(Math.random() * ENCOURAGEMENTS_CORRECT.length)];
    document.getElementById('quiz-feedback').innerHTML = `<div class="feedback-message correct">${msg} +${points} puan</div>`;

    if (qs.combo >= 2) {
      SoundEngine.combo();
      this.showComboCounter(qs.combo);
    }

    ProgressManager.recordAnswer(this.currentProfile.id, qs.subject, qs.unitId, qs.questions[qs.currentIndex].id, true);
    document.getElementById('quiz-stars-count').textContent = qs.score;
    const nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.classList.remove('hidden');
    setTimeout(() => {
      const activeScreen = document.querySelector('.screen.active');
      if (activeScreen) activeScreen.scrollTo({ top: activeScreen.scrollHeight, behavior: 'smooth' });
    }, 120);
  },

  handleWrongAnswer(hint) {
    const qs = this.quizState;
    qs.combo = 0;
    qs.wrong++;
    SoundEngine.wrong();

    const msg = ENCOURAGEMENTS_WRONG[Math.floor(Math.random() * ENCOURAGEMENTS_WRONG.length)];
    document.getElementById('quiz-feedback').innerHTML = `<div class="feedback-message wrong">${msg}</div>`;
    
    // Always show hint or correct answer helper
    let hintHtml = hint || "Bunu bir dahakine daha iyi yapabiliriz!";
    
    document.getElementById('quiz-hint').innerHTML = `<div class="hint-box"><span class="hint-icon">💡</span><span>${hintHtml}</span></div>`;
    ProgressManager.recordAnswer(this.currentProfile.id, qs.subject, qs.unitId, qs.questions[qs.currentIndex].id, false);
    
    document.getElementById('quiz-stars-count').textContent = qs.score;
    const nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.classList.remove('hidden');
    setTimeout(() => {
      const activeScreen = document.querySelector('.screen.active');
      if (activeScreen) activeScreen.scrollTo({ top: activeScreen.scrollHeight, behavior: 'smooth' });
    }, 120);
  },

  nextQuestion() {
    const qs = this.quizState;
    if (!qs) return;
    SoundEngine.click();

    qs.currentIndex++;
    if (qs.currentIndex >= qs.questions.length) {
      this.finishQuiz();
    } else {
      this.renderQuiz();
    }
  },

  finishQuiz() {
    const qs = this.quizState;

    // Calculate stars (0-3)
    const pct = qs.correct / qs.questions.length;
    let starCount = 0;
    if (pct >= 0.9) starCount = 3;
    else if (pct >= 0.7) starCount = 2;
    else if (pct >= 0.4) starCount = 1;

    qs.starCount = starCount;
    qs.elapsedTime = Math.round((Date.now() - qs.startTime) / 1000);

    // Add points to profile
    const result = ProgressManager.addPoints(this.currentProfile.id, qs.totalPoints);
    qs.leveledUp = result ? result.leveledUp : false;
    qs.newLevel = result ? result.newLevel : this.currentProfile.level;

    // Update best score
    ProgressManager.setBestScore(this.currentProfile.id, qs.subject, qs.unitId, qs.totalPoints);

    // Check perfectionist badge
    if (qs.correct === qs.questions.length && qs.questions.length >= 10) {
      const profile = ProgressManager.getProfile(this.currentProfile.id);
      if (!profile.badges.includes('perfectionist')) {
        profile.badges.push('perfectionist');
        ProgressManager.updateProfile(profile.id, { badges: profile.badges });
      }
    }

    // Increment break status
    this.breakState.unitsCompleted++;

    // Refresh profile
    this.currentProfile = ProgressManager.getProfile(this.currentProfile.id);

    this.showScreen('quiz-result');
  },

  // ==========================================
  // Visual FX
  // ==========================================
  showConfetti() {
    // Emojilerden oluşan basit bir konfeti sistemi
    const colors = ['🎉', '✨', '⭐', '🎊', '🎈'];
    for (let i = 0; i < 15; i++) {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.textContent = colors[Math.floor(Math.random() * colors.length)];
      el.style.left = Math.random() * 100 + 'vw';
      el.style.top = '-50px';
      el.style.fontSize = (Math.random() * 20 + 20) + 'px';
      el.style.setProperty('--x', (Math.random() * 200 - 100) + 'px');
      el.style.setProperty('--rot', (Math.random() * 360) + 'deg');
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2500);
    }
  },

  showPointsFloat(points) {
    const el = document.createElement('div');
    el.className = 'points-float';
    el.textContent = `+${points} Puan! 🌟`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  },

  showComboCounter(combo) {
    let el = document.querySelector('.combo-display');
    if (!el) {
      el = document.createElement('div');
      el.className = 'combo-display';
      document.body.appendChild(el);
    }
    el.innerHTML = `<span style="font-size:var(--text-lg)">${combo}x</span> KOMBO! 🔥`;
    el.classList.remove('hidden', 'fade-out');
    clearTimeout(this._comboTimer);
    this._comboTimer = setTimeout(() => {
      el.classList.add('fade-out');
      setTimeout(() => el.classList.add('hidden'), 500);
    }, 2000);
  },

  // ==========================================
  // QUIZ RESULT SCREEN
  // ==========================================
  renderQuizResult() {
    const qs = this.quizState;
    if (!qs) return;

    SoundEngine.levelUp();
    this.showConfetti();

    const meta = SUBJECT_META[qs.subject];

    document.getElementById('result-title').textContent = qs.starCount >= 2 ? '🎉 Tebrikler!' : '💪 İyi Deneme!';
    document.getElementById('result-unit-name').textContent = `${meta.icon} ${qs.unitName}`;
    document.getElementById('result-score').textContent = qs.totalPoints;
    document.getElementById('result-correct').textContent = qs.correct;
    document.getElementById('result-wrong').textContent = qs.wrong;
    document.getElementById('result-combo').textContent = `${qs.maxCombo}x`;

    const minutes = Math.floor(qs.elapsedTime / 60);
    const seconds = qs.elapsedTime % 60;
    document.getElementById('result-time').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Stars
    const starsEl = document.getElementById('result-stars');
    starsEl.innerHTML = [1, 2, 3].map(i =>
      `<span class="star ${i <= qs.starCount ? 'earned' : ''}">⭐</span>`
    ).join('');

    // Level up banner
    const levelBanner = document.getElementById('result-level-up');
    if (qs.leveledUp) {
      levelBanner.classList.remove('hidden');
      levelBanner.innerHTML = `<div class="rainbow-text" style="font-size:var(--text-xl);font-weight:800">🎊 Seviye ${qs.newLevel} oldun! 🎊</div>`;
    } else {
      levelBanner.classList.add('hidden');
    }

    // Check new badges
    setTimeout(() => {
      const newBadges = checkBadges(this.currentProfile);
      if (newBadges.length > 0) {
        this.showBadgeModal(newBadges[0]);
      }
    }, 1000);
  },

  retryQuiz() {
    this.startQuiz(this.quizState.subject, this.quizState.unitId);
  },

  checkBreak(onContinueCall) {
    if (this.breakState.unitsCompleted >= 5) {
      this.breakState.unitsCompleted = 0;
      this.breakState.onContinue = onContinueCall;
      this.showScreen('break');
      return true;
    }
    return false;
  },

  takeBreakDone() {
    SoundEngine.click();
    if (this.breakState.onContinue) {
      const cb = this.breakState.onContinue;
      this.breakState.onContinue = null;
      cb();
    } else {
      this.showScreen('dashboard');
    }
  },

  goToDashboard() {
    SoundEngine.click();
    SoundEngine.stopSpeak();
    if (this.checkBreak(() => this.showScreen('dashboard'))) return;
    this.showScreen('dashboard');
  },

  goToSubjectFromResult() {
    SoundEngine.click();
    SoundEngine.stopSpeak();
    if (this.checkBreak(() => this.showScreen('subject'))) return;
    this.showScreen('subject');
  },

  // ==========================================
  // STORIES MODULE
  // ==========================================
  openStoriesList() {
    SoundEngine.click();
    this.showScreen('stories-list');
    this.renderStoriesList();
  },

  renderStoriesList() {
    const container = document.getElementById('stories-grid');
    if (!container || typeof storiesData === 'undefined') return;
    
    const readStories = this.currentProfile.readStories || [];
    
    container.innerHTML = storiesData.map(story => {
      const isRead = readStories.includes(story.id);
      return `
      <div class="card-story bounce-hover" onclick="App.openStory('${story.id}')" style="position:relative; opacity: ${isRead ? '0.85' : '1'}">
        ${isRead ? '<div style="position:absolute; top:8px; right:8px; background:var(--color-emerald); color:white; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:bold; box-shadow:0 2px 4px rgba(0,0,0,0.1)">Okundu ✅</div>' : ''}
        <div class="story-icon">${story.cover}</div>
        <div class="story-title">${story.title}</div>
        <div class="story-info" style="margin-top:var(--space-2)">${story.pages.length} Sayfa</div>
      </div>
    `}).join('');
  },

  openStory(storyId) {
    SoundEngine.click();
    const story = storiesData.find(s => s.id === storyId);
    if (!story) return;

    this.currentStory = {
      ...story,
      currentPage: 0
    };
    
    this.showScreen('story-reader');
    this.renderStoryPage();
  },

  renderStoryPage() {
    const cs = this.currentStory;
    if (!cs) return;

    document.getElementById('story-reader-title').textContent = cs.cover + ' ' + cs.title;
    document.getElementById('story-page-counter').textContent = `Sayfa ${cs.currentPage + 1} / ${cs.pages.length}`;
    
    const pct = ((cs.currentPage + 1) / cs.pages.length) * 100;
    document.getElementById('story-progress-fill').style.width = pct + '%';
    
    document.getElementById('story-page-text').textContent = cs.pages[cs.currentPage];
    
    const prevBtn = document.getElementById('story-prev-btn');
    const nextBtn = document.getElementById('story-next-btn');

    if (cs.currentPage > 0) {
      prevBtn.classList.remove('hidden');
    } else {
      prevBtn.classList.add('hidden');
    }

    if (cs.currentPage < cs.pages.length - 1) {
      nextBtn.textContent = 'İleri →';
      nextBtn.classList.remove('btn-gold');
      nextBtn.classList.add('btn-primary');
    } else {
      nextBtn.textContent = 'Hikayeyi Bitir ✨';
      nextBtn.classList.remove('btn-primary');
      nextBtn.classList.add('btn-gold');
    }

    // Sesli oku
    setTimeout(() => SoundEngine.speak(cs.pages[cs.currentPage]), 300);
  },

  nextStoryPage() {
    SoundEngine.click();
    SoundEngine.stopSpeak();
    const cs = this.currentStory;
    if (cs.currentPage < cs.pages.length - 1) {
      cs.currentPage++;
      this.renderStoryPage();
    } else {
      this.finishStory();
    }
  },

  prevStoryPage() {
    SoundEngine.click();
    SoundEngine.stopSpeak();
    const cs = this.currentStory;
    if (cs.currentPage > 0) {
      cs.currentPage--;
      this.renderStoryPage();
    }
  },

  finishStory() {
    SoundEngine.levelUp();
    this.showConfetti();
    
    ProgressManager.markStoryRead(this.currentProfile.id, this.currentStory.id);
    
    // Ödül: 5 yıldız
    const points = 5;
    ProgressManager.addPoints(this.currentProfile.id, points);
    this.currentProfile = ProgressManager.getProfile(this.currentProfile.id);
    
    this.showPointsFloat(points);
    this.showToast('📚', 'Harika okudun! +5 Yıldız kazandın.');
    
    setTimeout(() => {
      this.openStoriesList();
    }, 2500);
  },

  // ==========================================
  // BADGES SCREEN
  // ==========================================
  renderBadges() {
    const profile = this.currentProfile;
    const container = document.getElementById('badges-grid');
    container.innerHTML = BADGES.map(b => {
      const earned = profile.badges.includes(b.id);
      return `<div class="reward-card ${earned ? 'earned' : 'locked'}">
        <div class="reward-icon">${b.icon}</div>
        <div class="reward-name">${b.name}</div>
        <div style="font-size:var(--text-xs);color:var(--color-text-secondary);margin-top:4px">${b.description}</div>
      </div>`;
    }).join('');

    document.getElementById('badges-earned-count').textContent = profile.badges.length;
    document.getElementById('badges-total-count').textContent = BADGES.length;
  },

  // ==========================================
  // AVATAR SCREEN
  // ==========================================
  openAvatarEditor() {
    SoundEngine.click();
    const modal = document.getElementById('avatar-modal');
    modal.classList.remove('hidden');
    this.renderAvatarEditor();
  },

  renderAvatarEditor() {
    const profile = this.currentProfile;

    // Avatar options
    document.getElementById('avatar-options').innerHTML = AVATARS.map(a =>
      `<div class="btn btn-ghost btn-icon btn-lg ${a === profile.avatar ? 'btn-primary' : ''}" 
            onclick="App.setAvatar('${a}')" style="font-size:2rem">${a}</div>`
    ).join('');

    // Background options
    document.getElementById('avatar-bg-options').innerHTML = AVATAR_BGS.map((bg, i) =>
      `<div class="btn btn-icon btn-lg" style="background:${bg};border:${i === profile.avatarBg ? '3px solid var(--color-primary)' : '3px solid transparent'}" 
            onclick="App.setAvatarBg(${i})"></div>`
    ).join('');

    // Preview
    document.getElementById('avatar-preview').textContent = profile.avatar;
    document.getElementById('avatar-preview').style.background = AVATAR_BGS[profile.avatarBg || 0];
  },

  setAvatar(emoji) {
    SoundEngine.click();
    ProgressManager.updateProfile(this.currentProfile.id, { avatar: emoji });
    this.currentProfile.avatar = emoji;
    this.renderAvatarEditor();
  },

  setAvatarBg(idx) {
    SoundEngine.click();
    ProgressManager.updateProfile(this.currentProfile.id, { avatarBg: idx });
    this.currentProfile.avatarBg = idx;
    this.renderAvatarEditor();
  },

  closeAvatarModal() {
    document.getElementById('avatar-modal').classList.add('hidden');
    this.renderDashboard();
  },

  // ==========================================
  // PARENT PANEL
  // ==========================================
  openParentPanel() {
    SoundEngine.click();
    document.getElementById('parent-pin-modal').classList.remove('hidden');
    document.getElementById('pin-error').classList.add('hidden');
    document.querySelectorAll('.pin-digit').forEach((el, i) => {
      el.value = '';
      if (i === 0) el.focus();
    });
  },

  handlePinInput(el, idx) {
    if (el.value.length === 1) {
      const next = document.querySelectorAll('.pin-digit')[idx + 1];
      if (next) next.focus();
    }
    // Check if all filled
    const digits = document.querySelectorAll('.pin-digit');
    const pin = Array.from(digits).map(d => d.value).join('');
    if (pin.length === 4) {
      const profile = this.currentProfile;
      if (pin === (profile.settings.parentPin || '1234')) {
        document.getElementById('parent-pin-modal').classList.add('hidden');
        this.showScreen('parent');
      } else {
        document.getElementById('pin-error').classList.remove('hidden');
        digits.forEach(d => d.value = '');
        digits[0].focus();
      }
    }
  },

  closeParentPin() {
    document.getElementById('parent-pin-modal').classList.add('hidden');
  },

  renderParent() {
    const profile = this.currentProfile;
    if (!profile) return;

    document.getElementById('parent-name').textContent = profile.name;
    document.getElementById('parent-level').textContent = profile.level;
    document.getElementById('parent-total-points').textContent = profile.totalPoints;
    document.getElementById('parent-total-stars').textContent = profile.totalStars;
    document.getElementById('parent-total-answered').textContent = profile.stats.totalAnswered;
    document.getElementById('parent-streak').textContent = profile.streak;

    const accuracy = profile.stats.totalAnswered > 0
      ? Math.round((profile.stats.totalCorrect / profile.stats.totalAnswered) * 100)
      : 0;
    document.getElementById('parent-accuracy').textContent = accuracy + '%';

    // Estimating time: 20 seconds per question on average
    const totalMinutes = Math.floor(profile.stats.totalAnswered * 20 / 60);
    document.getElementById('parent-est-time').textContent = totalMinutes;

    // Calculate weak subject
    let weakSubLabel = '-';
    let weakestPct = 100;
    ['math','english','turkish','life'].forEach(sub => {
       const answered = Object.values(profile.subjectProgress[sub] || {}).reduce((acc, u) => acc + (u.completed ? u.completed.length : 0), 0);
       if (answered > 0) {
         // rough proxy for weakness. We can also just pick random or actual.
         // Let's just mock "En Çok Zorlanılan" by the one with the lowest completion % for now.
         const pct = ProgressManager.getSubjectProgress(profile.id, sub);
         if (pct < weakestPct && pct > 0) {
            weakestPct = pct;
            weakSubLabel = SUBJECT_META[sub].name;
         }
       }
    });
    document.getElementById('parent-weak-subject').textContent = weakestPct === 100 ? 'Harika Gidiyor!' : weakSubLabel;

    const soundBtn = document.getElementById('parent-sound-btn');
    if(profile.settings && typeof profile.settings.soundEnabled !== 'undefined') {
       soundBtn.textContent = profile.settings.soundEnabled ? 'Açık' : 'Kapalı';
    } else {
       soundBtn.textContent = 'Açık';
    }
    
    document.getElementById('parent-pin-display').textContent = profile.settings.parentPin || '1234';

    // Subject progress
    ['math','english','turkish','life'].forEach(sub => {
      const pct = ProgressManager.getSubjectProgress(profile.id, sub);
      const bar = document.querySelector(`#parent-progress-${sub} .progress-fill`);
      if (bar) bar.style.width = pct + '%';
      const label = document.getElementById(`parent-progress-${sub}-label`);
      if (label) label.textContent = pct + '%';
    });

    // Detailed units
    const detailContainer = document.getElementById('parent-units-detail');
    if (detailContainer) {
      let detailHtml = '';
      ['math','english','turkish','life'].forEach(sub => {
        const units = SUBJECTS_DATA[sub].units;
        const subMeta = SUBJECT_META[sub];
        detailHtml += `<div style="font-weight:bold; margin-top:var(--space-2); border-bottom:1px solid var(--color-border)">${subMeta.icon} ${subMeta.name}</div>`;
        units.forEach(unit => {
          const completedCount = (profile.subjectProgress[sub] && profile.subjectProgress[sub][unit.id]) 
            ? profile.subjectProgress[sub][unit.id].completed.length 
            : 0;
          const totalInUnit = unit.questions ? unit.questions.length : 10;
          const pct = Math.min(Math.round((completedCount / totalInUnit) * 100), 100);
          detailHtml += `
            <div class="flex justify-between items-center" style="font-size:var(--text-sm); padding:var(--space-1) 0">
              <span style="color:var(--color-text-secondary)">${unit.name}</span>
              <span style="font-weight:bold; color:${pct === 100 ? 'var(--color-emerald)' : 'var(--color-text)'}">${pct}%</span>
            </div>
          `;
        });
      });
      detailContainer.innerHTML = detailHtml;
    }
  },

  changeParentPin() {
    const newPin = prompt("Yeni 4 hanelı PIN kodunu giriniz:", "1234");
    if (newPin && newPin.length === 4 && !isNaN(newPin)) {
      ProgressManager.updateProfile(this.currentProfile.id, { settings: { ...this.currentProfile.settings, parentPin: newPin } });
      this.currentProfile.settings.parentPin = newPin;
      this.renderParent();
      alert("PIN kodu başarıyla değiştirildi! ✅");
    } else if (newPin) {
      alert("Lütfen geçerli bir 4 haneli sayı giriniz! ❌");
    }
  },

  resetStudentProgress() {
    if (confirm("Seçili öğrencinin tüm ilerlemesi, puanları ve başarıları SIFIRLANACAKTIR. Bu işlem geri alınamaz. Emin misiniz? ⚠️")) {
      ProgressManager.resetProfileData(this.currentProfile.id);
      this.currentProfile = ProgressManager.getProfile(this.currentProfile.id);
      this.renderParent();
      alert("Veriler sıfırlandı. 🔄");
    }
  },

  deleteCurrentProfile() {
    if (confirm(`'${this.currentProfile.name}' isimli profil ve TÜM VERİLERİ tamamen silinecektir. Emin misiniz? 🗑️`)) {
      ProgressManager.deleteProfile(this.currentProfile.id);
      alert("Profil silindi. 🏁");
      location.reload(); // Simplest way to return to profile selection
    }
  },

  toggleSound() {
    const profile = this.currentProfile;
    const currentStatus = profile.settings.soundEnabled;
    const newStatus = !currentStatus;
    profile.settings.soundEnabled = newStatus;
    ProgressManager.updateProfile(profile.id, { settings: { ...profile.settings, soundEnabled: newStatus } });
    this.renderParent();
    SoundEngine.click();
    if(newStatus) {
       alert("Ses Efektleri: AÇIK 🔊");
    } else {
       alert("Ses Efektleri: KAPALI 🔇");
    }
  },

  // ==========================================
  // EFFECTS
  // ==========================================
  showConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    const colors = ['#FF69B4','#F39C12','#2ECC71','#3498DB','#9B59B6','#FF6B6B','#F7C948'];
    for (let i = 0; i < 50; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (1.5 + Math.random() * 2) + 's';
      piece.style.animationDelay = (Math.random() * 0.5) + 's';
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      piece.style.width = (8 + Math.random() * 8) + 'px';
      piece.style.height = (8 + Math.random() * 8) + 'px';
      container.appendChild(piece);
    }
    setTimeout(() => container.remove(), 4000);
  },

  showPointsFloat(points) {
    const el = document.createElement('div');
    el.className = 'points-float';
    el.textContent = '+' + points;
    el.style.left = '50%';
    el.style.top = '40%';
    el.style.transform = 'translateX(-50%)';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  },

  showComboCounter(combo) {
    const existing = document.querySelector('.combo-counter');
    if (existing) existing.remove();
    const el = document.createElement('div');
    el.className = 'combo-counter';
    el.innerHTML = `<div class="combo-number">${combo}x</div><div class="combo-label">KOMBO!</div>`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2000);
  },

  showToast(icon, message) {
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(t => t.remove());
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('hiding');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  showBadgeModal(badge) {
    const modal = document.getElementById('badge-modal');
    modal.classList.remove('hidden');
    document.getElementById('badge-modal-icon').textContent = badge.icon;
    document.getElementById('badge-modal-name').textContent = badge.name;
    document.getElementById('badge-modal-desc').textContent = badge.description;
    SoundEngine.badge();
  },

  closeBadgeModal() {
    document.getElementById('badge-modal').classList.add('hidden');
  },

  toggleSound() {
    const enabled = SoundEngine.toggle();
    document.getElementById('sound-toggle-icon').textContent = enabled ? '🔊' : '🔇';
    this.showToast(enabled ? '🔊' : '🔇', enabled ? 'Ses açıldı' : 'Ses kapatıldı');
    
    const parentBtn = document.getElementById('parent-sound-btn');
    if (parentBtn) parentBtn.textContent = enabled ? 'Açık' : 'Kapalı';

    if (this.currentProfile) {
      ProgressManager.updateProfile(this.currentProfile.id, { settings: { ...this.currentProfile.settings, soundEnabled: enabled } });
    }
  },

  quitQuiz() {
    if (confirm('Quizden çıkmak istediğine emin misin? İlerlemenin bir kısmı kaybolabilir.')) {
      SoundEngine.stopSpeak();
      this.showScreen('subject');
    }
  }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => App.init());
