// ==========================================
// 🇬🇧 İngilizce Soru Havuzu (MEB %100 Uyumlu - 10 Ünite)
// ==========================================

const ENGLISH_QUESTIONS = {
  subject: 'english',
  subjectName: 'İngilizce Kalesi',
  icon: '🏰',
  units: [
    {
      id: 'words',
      name: 'Unit 1: Words',
      icon: '🔤',
      questCode: 'ENG-01',
      semester: 1,
      description: 'Alphabet, basic words (Pizza, Taxi, Gorilla)',
      introText: 'İngilizce aslında her yerde! Günlük hayatta kullandığımız kelimeleri keşfedelim.',
      lessons: [
        { title: 'Ortak Kelimeler 🍕', text: 'Bazı kelimeler hem Türkçe hem İngilizce aynıdır: <strong>Pizza, Taxi, Gorilla, Football, Robot</strong>.' }
      ],
      questions: [
        { id: 'eng-w-001', type: 'multiple-choice', difficulty: 1, question: 'Aşağıdakilerden hangisi bir hayvandır?', options: ['Taxi', 'Pizza', 'Gorilla', 'Robot'], correct: 'Gorilla', hint: 'Ormanda yaşar.', points: 10 },
        { id: 'eng-w-002', type: 'match', difficulty: 1, question: 'Kelimeleri eşleştir!', pairs: [{left: 'Pizza', right: 'Yiyecek'}, {left: 'Taxi', right: 'Araba'}, {left: 'Robot', right: 'Makine'}], points: 20 }
      ]
    },
    {
      id: 'friends',
      name: 'Unit 2: Friends',
      icon: '🤝',
      questCode: 'ENG-02',
      semester: 1,
      description: 'Greetings, saying Your Name',
      introText: 'Yeni arkadaşlar edinelim ve onlara ismimizi söylemeyi öğrenelim!',
      lessons: [
        { title: 'Ismimi Söylüyorum 👋', text: '"What is your name?" (Adın ne?) sorusuna <span class="rainbow-text">My name is...</span> diyerek cevap veririz.' }
      ],
      questions: [
        { id: 'eng-fr-001', type: 'multiple-choice', difficulty: 1, question: 'Birine ismini nasıl sorarsın?', options: ['How are you?', 'What is your name?', 'Fine, thanks', 'Goodbye'], correct: 'What is your name?', hint: 'Name isim demektir.', points: 10 },
        { id: 'eng-fr-002', type: 'fill-blank', difficulty: 1, question: '"My name ___ Serdar." (Eksik kelimeyi yazınız)', correct: ['is'], hint: 'I ile başlar.', points: 15 }
      ]
    },
    {
      id: 'in-the-classroom',
      name: 'Unit 3: In The Classroom',
      icon: '🎒',
      questCode: 'ENG-03',
      semester: 1,
      description: 'School objects and instructions',
      introText: 'Sınıfımızdaki eşyaları İngilizce tanıyalım!',
      lessons: [
        { title: 'Sınıf Eşyaları ✏️', text: 'Kitap: <strong>Book</strong>, Kalem: <strong>Pencil</strong>, Silgi: <strong>Eraser</strong>, Çanta: <strong>Bag</strong>.' }
      ],
      questions: [
        { id: 'eng-clr-001', type: 'multiple-choice', difficulty: 1, question: '"Book" ne demektir?', options: ['Kalem', 'Kitap', 'Silgi', 'Sıra'], correct: 'Kitap', hint: 'Okumak için kullanırız.', points: 10 },
        { id: 'eng-clr-002', type: 'match', difficulty: 2, question: 'Eşyaları eşleştir!', pairs: [{left: 'Pencil', right: 'Kalem'}, {left: 'Eraser', right: 'Silgi'}, {left: 'Bag', right: 'Çanta'}], points: 20 }
      ]
    },
    {
      id: 'numbers',
      name: 'Unit 4: Numbers',
      icon: '🔢',
      questCode: 'ENG-04',
      semester: 1,
      description: 'Numbers 1 to 10',
      introText: 'Sayıları İngilizce saymayı öğreniyoruz!',
      lessons: [
        { title: '1-10 Arası 🔟', text: 'One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten!' }
      ],
      questions: [
        { id: 'eng-num-001', type: 'fill-blank', difficulty: 1, question: 'Seven kaç demektir? (Sayıyla yazınız)', correct: ['7'], hint: 'Altıdan sonra gelir.', points: 15 }
      ]
    },
    {
      id: 'colors',
      name: 'Unit 5: Colors',
      icon: '🎨',
      questCode: 'ENG-05',
      semester: 1,
      description: 'Purple, Brown, Grey and more!',
      introText: 'Dünyamız çok renkli! Gökkuşağının renklerini öğrenelim.',
      lessons: [
        { title: 'Renkler 🌈', text: 'Red, Blue, Yellow, Green, Pink, Purple, Orange.' }
      ],
      questions: [
        { id: 'eng-col-001', type: 'multiple-choice', difficulty: 1, question: '"Mavi" hangisidir?', options: ['Red', 'Green', 'Blue', 'Yellow'], correct: 'Blue', hint: 'Gökyüzü rengi.', points: 10 }
      ]
    },
    {
      id: 'playground',
      name: 'Unit 6: At The Playground',
      icon: '🛝',
      questCode: 'ENG-06',
      semester: 2,
      description: 'Let\'s play games!',
      introText: 'Bahçeye çıkalım ve oyunlar oynayalım!',
      lessons: [{ title: 'Hadi Oynayalım!', text: 'Salıncak: <strong>Swing</strong>, Kaydırak: <strong>Slide</strong>.'}],
      questions: [{ id: 'eng-play-001', type: 'multiple-choice', question: 'Kaydırak nedir?', options: ['Swing', 'Slide', 'Ball', 'Jump'], correct: 'Slide', points: 15 }]
    },
    {
      id: 'body-parts',
      name: 'Unit 7: Body Parts',
      icon: '💪',
      questCode: 'ENG-07',
      semester: 2,
      description: 'Head, shoulders, knees and toes!',
      introText: 'Vücudumuzu İngilizce tanıyalım!',
      lessons: [{ title: 'Uzuvlar', text: 'Eye (Göz), Ear (Kulak), Mouth (Ağız), Nose (Burun).'}],
      questions: [{ id: 'eng-bd-001', type: 'match', question: 'Eşleştir!', pairs: [{left: 'Eye', right: 'Göz'}, {left: 'Nose', right: 'Burun'}], points: 20 }]
    },
    {
      id: 'pets',
      name: 'Unit 8: Pets',
      icon: '🐈',
      questCode: 'ENG-08',
      semester: 2,
      description: 'Cats, Dogs and Rabbits',
      introText: 'Evcil hayvanlarımızı çok seviyoruz!',
      lessons: [{ title: 'Ev Dostları', text: 'Hamster, Rabbit (Tavşan), Fish (Balık).'}],
      questions: [{ id: 'eng-pet-001', type: 'multiple-choice', question: 'Tavşan hangisidir?', options: ['Dog', 'Cat', 'Rabbit', 'Bird'], correct: 'Rabbit', points: 15 }]
    },
    {
      id: 'fruits',
      name: 'Unit 9: Fruits',
      icon: '🍎',
      questCode: 'ENG-09',
      semester: 2,
      description: 'Apples, Bananas and Oranges',
      introText: 'Meyveler hem sağlıklı hem tatlı!',
      lessons: [{ title: 'Meyve Tabağı', text: 'Apple (Elma), Banana (Muz), Orange (Portakal).'}],
      questions: [{ id: 'eng-frt-001', type: 'fill-blank', question: 'Apple ne demektir?', correct: ['elma'], points: 15 }]
    },
    {
      id: 'animals',
      name: 'Unit 10: Animals',
      icon: '🦁',
      questCode: 'ENG-10',
      semester: 2,
      description: 'Lion, Elephant and more!',
      introText: 'Vahşi doğadaki dev hayvanları tanıyalım!',
      lessons: [{ title: 'Vahşi Doğa', text: 'Lion (Aslan), Elephant (Fil), Monkey (Maymun).'}],
      questions: [{ id: 'eng-ani-001', type: 'multiple-choice', question: 'Lion nedir?', options: ['Kedi', 'Aslan', 'Fil', 'Zürafa'], correct: 'Aslan', points: 15 }]
    }
  ]
};
