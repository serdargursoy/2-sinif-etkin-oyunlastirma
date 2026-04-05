// ==========================================
// 🌍 Hayat Bilgisi Soru Havuzu (MEB %100 Uyumlu)
// ==========================================

const LIFE_QUESTIONS = {
  subject: 'life',
  subjectName: 'Hayat Bilgisi Köyü',
  icon: '🌍',
  units: [
    {
      id: 'okulda-hayat',
      name: 'Okulumuzda Hayat',
      icon: '🏫',
      questCode: 'HAY-01',
      semester: 1,
      description: 'Okul kuralları, arkadaşlarımız',
      introText: 'Okul ikinci evimiz gibidir. Peki okuldaki kuralları ne kadar iyi biliyorsun?',
      lessons: [
        { title: 'Dinlemek Önemlidir 👂', text: 'Öğretmenimiz ders anlatırken onu sessizce dinlemeliyiz. Konuşmak istediğimizde parmak kaldırmalıyız!' },
        { title: 'Yardımlaşma 🤝', text: 'Okulda arkadaşlarımızla eşyalarımızı paylaşmalı, düştüklerinde onlara yardım etmeliyiz.' }
      ],
      questions: [
        { id: 'life-oh-001', type: 'multiple-choice', difficulty: 1, question: 'Aşağıdakilerden hangisi okul kurallarından biridir?', options: ['Koridorda koşmak', 'Çöpleri yere atmak', 'Derste söz alarak konuşmak', 'Arkadaşının eşyasını izinsiz almak'], correct: 'Derste söz alarak konuşmak', hint: 'Öğretmenine saygı göstermen gerekir.', points: 10 },
        { id: 'life-oh-002', type: 'true-false', difficulty: 1, question: 'Ders zili çaldığında hemen sıramıza oturmalıyız.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: '', points: 10 },
        { id: 'life-oh-003', type: 'fill-blank', difficulty: 2, question: 'Ders anlatılırken konuşmak istediğimizde _____ kaldırmalıyız.', correct: ['parmak'], hint: 'Elini kaldırırsın.', points: 15 },
        { id: 'life-oh-004', type: 'multiple-choice', difficulty: 1, question: 'Sınıf başkanını nasıl seçeriz?', options: ['Öğretmen seçer', 'Kura çekeriz', 'Oylama yaparak (Seçim)', 'En uzun boyluyu seçeriz'], correct: 'Oylama yaparak (Seçim)', hint: 'Demokrasi.', points: 10 },
        { id: 'life-oh-005', type: 'match', difficulty: 2, question: 'Kelimeleri eşleştir!', pairs: [{left: 'Okul müdürü', right: 'Okulu yönetir'}, {left: 'Öğretmen', right: 'Ders anlatır'}, {left: 'Nöbetçi', right: 'Tenefüste düzen sağlar'}], points: 20 },
        { id: 'life-oh-006', type: 'multiple-choice', difficulty: 1, question: 'Okul çantamızı hazırlarken neye dikkat etmeliyiz?', options: ['Tüm kitapları koymalıyız', 'Sadece oyuncak koymalıyız', 'Ders programına bakmalıyız', 'En sevdiğimiz kitapları koymalıyız'], correct: 'Ders programına bakmalıyız', hint: 'Programdaki dersler.', points: 10 },
        { id: 'life-oh-007', type: 'multiple-choice', difficulty: 2, question: 'Aşağıdakilerden hangisi bir okul kaynağını tasarruflu kullanmaya örnektir?', options: ['Tuvalette suyu açık bırakmak', 'Sınıf lambalarını boş yere yakmak', 'Tebeşiri/Kalemi sadece gerektiğinde kullanmak', 'Okul eşyalarına zarar vermek'], correct: 'Tebeşiri/Kalemi sadece gerektiğinde kullanmak', hint: 'Eşyaları korumalıyız.', points: 15 }
      ]
    },
    {
      id: 'evde-hayat',
      name: 'Evimizde Hayat',
      icon: '🏡',
      questCode: 'HAY-02',
      semester: 1,
      description: 'Aile içi görevler, adresimiz',
      introText: 'Evimiz yuvamızdır. Ailemizi ve akrabalarımızı ne kadar tanıyoruz?',
      lessons: [
        { title: 'Aile Ağacımız 🌳', text: 'Annemizin kız kardeşine **Teyze**, erkek kardeşine **Dayı** deriz. Babamızın erkek kardeşine **Amca**, kız kardeşine **Hala** deriz.' },
        { title: 'Tasarruf Yapalım 🚰', text: 'Evde boşuna yanan lambaları söndürerek ELEKTRİK, diş fırçalarken suyu kapatarak SU tasarrufu yaparız!' }
      ],
      questions: [
        { id: 'life-eh-001', type: 'multiple-choice', difficulty: 1, question: 'Annenizin erkek kardeşine ne derseniz?', options: ['Dayı', 'Amca', 'Enişte', 'Kuzen'], correct: 'Dayı', hint: 'Annemin abisi...', points: 10 },
        { id: 'life-eh-002', type: 'fill-blank', difficulty: 1, question: 'Babamızın kız kardeşine _____ deriz.', correct: ['hala'], hint: 'H harfi ile başlar.', points: 15 },
        { id: 'life-eh-003', type: 'match', difficulty: 2, question: 'Tasarruf yollarını eşleştir!', pairs: [{left: 'Lamba söndürmek', right: 'Elektrik tasarrufu'}, {left: 'Musluk kapatmak', right: 'Su tasarrufu'}, {left: 'Kumbaraya para atmak', right: 'Para tasarrufu'}], points: 20 },
        { id: 'life-eh-004', type: 'true-false', difficulty: 1, question: 'Kendi ev adresimizi ve ailemizin telefonunu ezbere bilmeliyiz.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Kaybolduğunda bu bilgiler hayat kurtarır.', points: 10 },
        { id: 'life-eh-005', type: 'multiple-choice', difficulty: 2, question: 'Aşağıdakilerden hangisi evdeki kaynakları tasarruflu kullanmaya örnektir?', options: ['Suyu açık bırakmak', 'Gerekli olmayan ışıkları kapatmak', 'Televizyonu bütün gün açık bırakmak', 'Gereksiz kağıt harcamak'], correct: 'Gerekli olmayan ışıkları kapatmak', hint: 'Elektrik tasarrufu.', points: 10 },
        { id: 'life-eh-006', type: 'multiple-choice', difficulty: 1, question: 'Ekmek israfını önlemek için ne yapmalıyız?', options: ['Çok ekmek alıp çöpe atmalıyız', 'İhtiyacımız kadar ekmek almalıyız', 'Ekmeği sadece biz yemeliyiz', 'Ekmeği balkondan atmalıyız'], correct: 'İhtiyacımız kadar ekmek almalıyız', hint: 'İsraftan kaçınmalıyız.', points: 10 }
      ]
    },
    {
      id: 'saglikli-hayat',
      name: 'Sağlıklı Hayat',
      icon: '🍎',
      questCode: 'HAY-03',
      semester: 1,
      description: 'Kişisel bakım, sağlıklı beslenme',
      introText: 'Büyümek ve güçlü olmak için sağlıklı beslenmeye ve temizliğe ihtiyacımız var!',
      lessons: [
        { title: 'Kişisel Bakım 🚿', text: 'Kişisel bakımımız için: Düzenli banyo yapmalıyız, dişlerimizi fırçalamalıyız.' }
      ],
      questions: [
        { id: 'life-sh-001', type: 'multiple-choice', difficulty: 1, question: 'Aşağıdakilerden hangisi kişisel bakımımızla ilgilidir?', options: ['Ödev yapmak', 'Dişlerimizi fırçalamak', 'Oyun oynamak', 'Televizyon izlemek'], correct: 'Dişlerimizi fırçalamak', hint: 'Ağız sağlığı önemlidir.', points: 10 },
        { id: 'life-sh-002', type: 'fill-blank', difficulty: 1, question: 'Günde en az _____ kere dişlerimizi fırçalamalıyız. (Sayıyla yazınız)', correct: ['2'], hint: 'Sabah ve akşam.', points: 15 },
        { id: 'life-sh-003', type: 'true-false', difficulty: 1, question: 'Abur cubur yemek boyumuzu çok uzatır ve bizi güçlendirir.', options: ['Doğru', 'Yanlış'], correct: 'Yanlış', hint: 'Sağlıklı besinler yemeliyiz.', points: 10 },
        { id: 'life-sh-004', type: 'multiple-choice', difficulty: 1, question: 'Hangi öğünde genellikle yumurta ve peynir yeriz?', options: ['Öğle Yemeği', 'Akşam Yemeği', 'Kahvaltı', 'Yatmadan Önce'], correct: 'Kahvaltı', hint: 'Günün ilk öğünü.', points: 10 }
      ]
    },
    {
      id: 'guvenli-hayat',
      name: 'Güvenli Hayat',
      icon: '🚦',
      questCode: 'HAY-04',
      semester: 2,
      description: 'Trafik ve acil durumlar',
      introText: 'Güvende kalmak çok önemli! Trafik ışıklarını biliyor musun?',
      lessons: [
        { title: 'Trafik Işıkları 🚥', text: 'Kırmızı: DUR, Sarı: HAZIRLAN, Yeşil: GEÇ!' }
      ],
      questions: [
        { id: 'life-gh-001', type: 'multiple-choice', difficulty: 1, question: 'Trafikte yaya için kırmızı ışık yandığında ne yapılmalıdır?', options: ['Koşulmalıdır', 'Beklenmelidir', 'Yürünmelidir', 'Bağırılmalıdır'], correct: 'Beklenmelidir', hint: 'Kırmızı dur demektir.', points: 15 },
        { id: 'life-gh-002', type: 'fill-blank', difficulty: 1, question: 'Acil durumlarda (ambulans, polis) hangi numara aranır?', correct: ['112'], hint: 'Bir - bir - iki.', points: 20 },
        { id: 'life-gh-003', type: 'true-false', difficulty: 1, question: 'Tanımadığımız kişilerin arabasına binmek güvenlidir.', options: ['Doğru', 'Yanlış'], correct: 'Yanlış', hint: 'Güvenliğimiz için hayır demeliyiz.', points: 15 }
      ]
    },
    {
      id: 'ulkemizde-hayat',
      name: 'Ülkemizde Hayat',
      icon: '🇹🇷',
      questCode: 'HAY-05',
      semester: 2,
      description: 'Kültürümüz ve Atatürk',
      introText: 'Canım Türkiyem! Ülkemizi ve değerlerimizi öğrenelim.',
      lessons: [
        { title: 'Başkentimiz 🏛️', text: 'Türkiye Cumhuriyetinin başkenti <strong>Ankara</strong> dır.' }
      ],
      questions: [
        { id: 'life-uh-001', type: 'multiple-choice', difficulty: 1, question: 'Ülkemizin başkenti neresidir?', options: ['İstanbul', 'Ankara', 'İzmir', 'Bursa'], correct: 'Ankara', hint: 'A ile başlar.', points: 15 },
        { id: 'life-uh-002', type: 'fill-blank', difficulty: 1, question: 'Türkiye Cumhuriyeti\'nin kurucusu Gazi Mustafa Kemal _____ dur.', correct: ['Atatürk'], hint: 'A harfiyle biter.', points: 20 },
        { id: 'life-uh-003', type: 'multiple-choice', difficulty: 1, question: 'İstiklal Marşımızın yazarı kimdir?', options: ['Atatürk', 'Mehmet Akif Ersoy', 'Ziya Gökalp', 'Fatih Sultan Mehmet'], correct: 'Mehmet Akif Ersoy', hint: 'M.A.E.', points: 15 }
      ]
    },
    {
      id: 'dogada-hayat',
      name: 'Doğada Hayat',
      icon: '🌲',
      questCode: 'HAY-06',
      semester: 2,
      description: 'Hayvanlar, bitkiler ve çevre',
      introText: 'Doğayı koruyalım, çevremizi temiz tutalım!',
      lessons: [
        { title: 'Çevreyi Koruma ♻️', text: 'Çöplerimizi yere değil Çöp Kutusuna veya Geri Dönüşüm kutularına atmalıyız.' }
      ],
      questions: [
        { id: 'life-dh-001', type: 'true-false', difficulty: 1, question: 'Pilleri çöpe değil, pil toplama kutularına atmalıyız.', options: ['Doğru', 'Yanlış'], correct: 'Doğru', hint: 'Piller toprağı zehirler.', points: 15 },
        { id: 'life-dh-002', type: 'multiple-choice', difficulty: 1, question: 'Aşağıdakilerden hangisi doğaya zarar verir?', options: ['Ağaç dikmek', 'Denize çöp atmak', 'Geri dönüşüm yapmak', 'Çiçekleri sulamak'], correct: 'Denize çöp atmak', hint: 'Kötü bir davranıştır.', points: 10 },
        { id: 'life-dh-003', type: 'fill-blank', difficulty: 1, question: 'Bitkilerin büyümesi için toprak, güneş ve _____ gereklidir.', correct: ['su'], points: 15 }
      ]
    }
  ]
};
