// ==========================================
// 🔊 Sound Engine — Web Audio API
// ==========================================

const SoundEngine = {
  ctx: null,
  enabled: true,
  volume: 0.5,
  _voices: [],

  init() {
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API not supported');
      this.enabled = false;
    }
    
    // Ses listesini önceden yükle (Tarayıcı gecikmelerini önlemek için)
    if ('speechSynthesis' in window) {
      this._voices = window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        this._voices = window.speechSynthesis.getVoices();
      };
    }
  },

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  },

  _playTone(freq, duration, type = 'sine', vol = this.volume) {
    if (!this.enabled || !this.ctx) return;
    this.resume();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    gain.gain.setValueAtTime(vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  },

  _playNotes(notes, interval = 0.12) {
    notes.forEach((n, i) => {
      setTimeout(() => this._playTone(n.freq, n.dur || 0.3, n.type || 'sine', n.vol || this.volume), i * interval * 1000);
    });
  },

  click() {
    this._playTone(800, 0.08, 'sine', 0.15);
  },

  correct() {
    this._playNotes([
      { freq: 523, dur: 0.15 },
      { freq: 659, dur: 0.15 },
      { freq: 784, dur: 0.3 }
    ], 0.1);
  },

  wrong() {
    this._playNotes([
      { freq: 330, dur: 0.2, type: 'triangle' },
      { freq: 280, dur: 0.3, type: 'triangle' }
    ], 0.15);
  },

  levelUp() {
    this._playNotes([
      { freq: 523, dur: 0.12 },
      { freq: 587, dur: 0.12 },
      { freq: 659, dur: 0.12 },
      { freq: 784, dur: 0.12 },
      { freq: 880, dur: 0.12 },
      { freq: 1047, dur: 0.4 }
    ], 0.1);
  },

  badge() {
    this._playNotes([
      { freq: 784, dur: 0.1 },
      { freq: 988, dur: 0.1 },
      { freq: 1175, dur: 0.1 },
      { freq: 1568, dur: 0.35 }
    ], 0.08);
  },

  combo() {
    this._playTone(1200, 0.1, 'sine', 0.2);
    setTimeout(() => this._playTone(1500, 0.15, 'sine', 0.25), 80);
  },

  navigate() {
    this._playTone(600, 0.1, 'sine', 0.1);
  },

  countdown() {
    this._playTone(440, 0.15, 'square', 0.1);
  },

  gameOver() {
    this._playNotes([
      { freq: 392, dur: 0.2 },
      { freq: 349, dur: 0.2 },
      { freq: 330, dur: 0.2 },
      { freq: 262, dur: 0.5 }
    ], 0.2);
  },

  star() {
    this._playTone(1047, 0.15, 'sine', 0.2);
    setTimeout(() => this._playTone(1319, 0.2, 'sine', 0.25), 100);
  },

  // ==========================================
  // METİN OKUMA (TEXT-TO-SPEECH)
  // ==========================================
  speak(text) {
    if (!this.enabled || !window.speechSynthesis) return;
    
    this.stopSpeak();
    
    // Cümle sonlarında hafif esler
    const cleanText = text.replace(/([.?!])\s*(?=[A-ZÖÇŞİĞÜ])/g, "$1  "); 

    // İngilizce kelimeleri otomatik tanıyıp Native okumak için kelime listemiz
    const enWords = [
      "Hello", "Hi", "Goodbye", "Good Night", "Good Morning", "Good evening", "How are you", "Thank you",
      "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
      "Red", "Yellow", "Blue", "Green", "Pink", "Black", "White", "Purple",
      "Cat", "Dog", "Bird", "Fish", "Cow", "Horse", "Elephant", "Pets"
    ];
    // Büyük/küçük harf duyarsız tüm kelimeleri yakalayan regex (kelime sınırları ile \b)
    const enRegex = new RegExp(`\\b(${enWords.join('|')})\\b`, 'gi');
    
    const parts = cleanText.split(enRegex);

    parts.forEach((part, index) => {
      if (!part || part.trim() === '') return;
      
      const isEnglish = index % 2 !== 0;
      const utterance = new SpeechSynthesisUtterance(part);
      
      // İnsansı bir ses için pitch ayarını KESİNLİKLE 1.0 (varsayılan) bırakmalıyız. 
      // Pitch değiştirildiğinde tarayıcı doğal okuma (Neural) özelliğini bozup robotik sese dönüyor.
      utterance.rate = 0.95; // Acele etmeden tane tane
      utterance.pitch = 1.0; 
      
      if (isEnglish) {
        utterance.lang = 'en-US';
        const enVoices = this._voices.filter(v => v.lang.includes('en'));
        // Sıralama: En yüksek kalite olan Google/Siri/Premium öncelikli
        let bestEn = enVoices.find(v => v.name.includes('Google'));
        if (!bestEn) bestEn = enVoices.find(v => v.name.includes('Premium'));
        if (!bestEn) bestEn = enVoices.find(v => v.name.includes('Siri'));
        if (!bestEn) bestEn = enVoices.find(v => v.name.includes('Samantha'));
        if (!bestEn && enVoices.length > 0) bestEn = enVoices[0];
        if (bestEn) utterance.voice = bestEn;
      } else {
        utterance.lang = 'tr-TR'; 
        const trVoices = this._voices.filter(v => v.lang.includes('tr'));
        
        // Siri, Premium ve Google sesleri (Neural/Wavenet) her zaman en insansı olanlardır.
        let bestTr = trVoices.find(v => v.name.includes('Google'));
        if (!bestTr) bestTr = trVoices.find(v => v.name.includes('Siri'));
        if (!bestTr) bestTr = trVoices.find(v => v.name.includes('Premium'));
        if (!bestTr) bestTr = trVoices.find(v => v.name.includes('Yelda'));
        if (!bestTr && trVoices.length > 0) bestTr = trVoices[0];
        
        if (bestTr) utterance.voice = bestTr;
      }

      window.speechSynthesis.speak(utterance);
    });
  },
  
  speakEnglish(text) {
    if (!this.enabled || !window.speechSynthesis) return;
    this.stopSpeak();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.lang = 'en-US';
    
    const enVoices = this._voices.filter(v => v.lang.includes('en'));
    let bestEn = enVoices.find(v => v.name.includes('Google'));
    if (!bestEn) bestEn = enVoices.find(v => v.name.includes('Premium'));
    if (!bestEn) bestEn = enVoices.find(v => v.name.includes('Siri'));
    if (!bestEn) bestEn = enVoices.find(v => v.name.includes('Samantha'));
    if (!bestEn && enVoices.length > 0) bestEn = enVoices[0];
    
    if (bestEn) utterance.voice = bestEn;
    window.speechSynthesis.speak(utterance);
  },

  stopSpeak() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }
};
