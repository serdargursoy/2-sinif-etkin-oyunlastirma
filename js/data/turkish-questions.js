// ==========================================
// 🇹🇷 Türkçe Soru Havuzu (MEB Temaları)
// ==========================================

const TURKISH_QUESTIONS = {
  subject: 'turkish',
  subjectName: 'Türkçe Bahçesi',
  icon: '📚',
  units: [
    {
      id: 'erdemler',
      name: 'Tema 1: Erdemler',
      icon: '💎',
      questCode: 'TUR-01',
      semester: 1,
      description: 'Dürüstlük, sevgi ve saygı',
      introText: 'Erdemli bir çocuk olmak, her zaman dürüst davranmak demektir. Hazır mısın?',
      lessons: [{ title: 'Dürüstlük', text: 'Hata yaptığımızda bunu saklamadan söylemek dürüst bir davranıştır.'}],
      questions: [
        { id: 'tur-er-001', type: 'true-false', difficulty: 1, question: 'Arkadaşımızın kalemini izinsiz alabiliriz.', options: ['Doğru', 'Yanlış'], correct: 'Yanlış', hint: 'İzin almak saygılı bir davranıştır.', points: 10 },
        { id: 'tur-er-002', type: 'multiple-choice', difficulty: 1, question: 'Aşağıdakilerden hangisi güzel bir sözdür?', options: ['Bana ne', 'Sana ne', 'Teşekkür ederim', 'Git buradan'], correct: 'Teşekkür ederim', hint: 'Kibarca bir şey istediğinde veya aldığında dersin.', points: 10 },
        { id: 'tur-er-003', type: 'fill-blank', difficulty: 2, question: 'Yalan söylemeyen kişiye _____ denir.', correct: ['dürüst'], points: 15 }
      ]
    },
    {
      id: 'milli-kulturumuz',
      name: 'Tema 2: Milli Kültürümüz',
      icon: '🕌',
      questCode: 'TUR-02',
      semester: 1,
      description: 'Bayramlar, gelenekler ve Karagöz-Hacivat',
      introText: 'Kültürümüz bizim hazinemizdir. Geleneklerimizi yakından tanıyalım!',
      lessons: [{ title: 'Nasreddin Hoca', text: 'Nasreddin Hoca eşeğine ters binerek hepimizi güldüren bilge biridir.'}],
      questions: [
        { id: 'tur-mk-001', type: 'multiple-choice', difficulty: 1, question: 'Eşeğine ters binen komik kahramanımız kimdir?', options: ['Karagöz', 'Hacivat', 'Nasreddin Hoca', 'Keloğlan'], correct: 'Nasreddin Hoca', hint: 'Eşeğiyle meşhurdur.', points: 15 },
        { id: 'tur-mk-002', type: 'multiple-choice', difficulty: 1, question: 'Aşağıdakilerden hangisi milli bir bayramımızdır?', options: ['Kurban Bayramı', 'Ramazan Bayramı', '23 Nisan Ulusal Egemenlik ve Çocuk Bayramı', 'Anneler Günü'], correct: '23 Nisan Ulusal Egemenlik ve Çocuk Bayramı', points: 10 }
      ]
    },
    {
      id: 'ataturk',
      name: 'Tema 3: Milli Mücadele ve Atatürk',
      icon: '🏛️',
      questCode: 'TUR-03',
      semester: 1,
      description: 'Atatürk\'ün hayatı ve başarıları',
      introText: 'Cumhuriyetimizin kurucusu Atatürk\'ü öğreniyoruz.',
      lessons: [{ title: 'Atatürk\'ün Hayatı', text: 'Mustafa Kemal Atatürk, Selanik\'te doğmuştur. Bizim için çok çalışmıştır.'}],
      questions: [
        { id: 'tur-ata-001', type: 'multiple-choice', difficulty: 1, question: 'Atatürk nerede doğmuştur?', options: ['Ankara', 'İstanbul', 'Selanik', 'Bursa'], correct: 'Selanik', hint: 'S ile başlar.', points: 15 },
        { id: 'tur-ata-002', type: 'fill-blank', difficulty: 1, question: 'Atatürk\'ün babasının adı _____ Bey\'dir.', correct: ['Ali Rıza'], points: 20 }
      ]
    },
    {
      id: 'saglik-ve-spor',
      name: 'Tema 4: Sağlık ve Spor',
      icon: '⚽',
      questCode: 'TUR-04',
      semester: 2,
      description: 'Sağlıklı yaşam ve spor dalları',
      introText: 'Hadi biraz hareket edelim! Spor yapmak bizi güçlendirir.',
      lessons: [{ title: 'Beslenme', text: 'Günde 3 ana öğün yemek yemeliyiz.'}],
      questions: [
        { id: 'tur-ss-001', type: 'multiple-choice', difficulty: 1, question: 'Hangi spor dalı topla oynanmaz?', options: ['Basketbol', 'Futbol', 'Voleybol', 'Yüzme'], correct: 'Yüzme', hint: 'Suda yapılır.', points: 10 },
        { id: 'tur-ss-002', type: 'true-false', difficulty: 1, question: 'Yemeklerden önce ve sonra ellerimizi yıkamalıyız.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', points: 10 }
      ]
    },
    {
      id: 'doga-ve-evren',
      name: 'Tema 5: Doğa ve Evren',
      icon: '🌍',
      questCode: 'TUR-05',
      semester: 2,
      description: 'Güneş, ay, yıldızlar ve doğa olayları',
      introText: 'Gökyüzüne bak! Neler görüyorsun?',
      lessons: [{ title: 'Güneş', text: 'Güneş bizim en büyük ısı ve ışık kaynağımızdır.'}],
      questions: [
        { id: 'tur-de-001', type: 'true-false', difficulty: 1, question: 'Ay, dünyamızın uydusudur.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Geceleri onu görürüz.', points: 15 },
        { id: 'tur-de-002', type: 'multiple-choice', difficulty: 1, question: 'Geceleri gökyüzünde ışıldayan küçük cisimlere ne denir?', options: ['Güneş', 'Bulut', 'Yıldız', 'Gökkuşağı'], correct: 'Yıldız', points: 10 }
      ]
    },
    {
      id: 'bilim-teknoloji',
      name: 'Tema 6: Bilim ve Teknoloji',
      icon: '🚀',
      questCode: 'TUR-06',
      semester: 2,
      description: 'İcatlar ve teknolojik aletler',
      introText: 'Geleceği bilimle ve teknolojiyle kuracağız!',
      lessons: [{ title: 'Telefon', text: 'Telefonu Alexander Graham Bell icat etmiştir.'}],
      questions: [
        { id: 'tur-bt-001', type: 'multiple-choice', difficulty: 1, question: 'Haberi nereden izleriz?', options: ['Radyo', 'Fırın', 'Televizyon', 'Buzdolabı'], correct: 'Televizyon', hint: 'Görüntülü cihaz.', points: 10 },
        { id: 'tur-bt-002', type: 'fill-blank', difficulty: 1, question: 'Bilgisayar kullanırken internete bağlanmak için _____ gereklidir.', correct: ['modem'], points: 20 }
      ]
    }
  ]
};
