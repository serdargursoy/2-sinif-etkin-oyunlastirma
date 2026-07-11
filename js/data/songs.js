// ==========================================
// 🎵 Şarkılarla Öğren — Sözlük & Quiz Verisi
// ==========================================

const SONGS_DATA = [
  {
    id: 'twinkle',
    title: 'Twinkle Twinkle Little Star',
    artist: 'Traditional',
    youtubeId: 'yCjJyiqpAuU',
    coverEmoji: '⭐',
    difficulty: 1,
    tag: 'İngilizce',
    tagColor: '#5DADE2',
    lines: [
      { en: 'Twinkle, twinkle, little star', tr: 'Parla, parla, küçük yıldız' },
      { en: 'How I wonder what you are', tr: 'Ne olduğunu merak ediyorum' },
      { en: 'Up above the world so high', tr: 'Dünyanın çok üzerinde, göklerde' },
      { en: 'Like a diamond in the sky', tr: 'Gökyüzündeki bir elmas gibi' },
      { en: 'Twinkle, twinkle, little star', tr: 'Parla, parla, küçük yıldız' },
      { en: 'How I wonder what you are', tr: 'Ne olduğunu merak ediyorum' }
    ],
    quiz: [
      { display: 'Twinkle, twinkle, little ___', tr: 'Parla, parla, küçük yıldız', correct: 'star', options: ['star', 'moon', 'sky', 'sun'] },
      { display: 'How I ___ what you are', tr: 'Ne olduğunu merak ediyorum', correct: 'wonder', options: ['wonder', 'know', 'see', 'think'] },
      { display: 'Up above the world so ___', tr: 'Dünyanın çok üzerinde, göklerde', correct: 'high', options: ['high', 'low', 'far', 'wide'] },
      { display: 'Like a ___ in the sky', tr: 'Gökyüzündeki bir elmas gibi', correct: 'diamond', options: ['diamond', 'cloud', 'bird', 'star'] },
      { display: 'Twinkle, ___, little star', tr: 'Parla, parla, küçük yıldız', correct: 'twinkle', options: ['twinkle', 'sparkle', 'glow', 'shine'] },
      { display: 'How I wonder what you ___', tr: 'Ne olduğunu merak ediyorum', correct: 'are', options: ['are', 'do', 'see', 'know'] }
    ]
  },
  {
    id: 'row-row',
    title: 'Row, Row, Row Your Boat',
    artist: 'Traditional',
    youtubeId: 'W5HHqBsB2Y8',
    coverEmoji: '🚣',
    difficulty: 1,
    tag: 'İngilizce',
    tagColor: '#5DADE2',
    lines: [
      { en: 'Row, row, row your boat', tr: 'Kürek çek, kürek çek, teknenle' },
      { en: 'Gently down the stream', tr: 'Dere boyunca yavaşça' },
      { en: 'Merrily, merrily, merrily, merrily', tr: 'Neşeyle, neşeyle, neşeyle, neşeyle' },
      { en: 'Life is but a dream', tr: 'Hayat bir rüyadır sadece' }
    ],
    quiz: [
      { display: 'Row, row, row your ___', tr: 'Kürek çek, kürek çek, teknenle', correct: 'boat', options: ['boat', 'car', 'bike', 'kite'] },
      { display: 'Gently ___ the stream', tr: 'Dere boyunca yavaşça', correct: 'down', options: ['down', 'up', 'over', 'past'] },
      { display: '___, merrily, merrily, merrily', tr: 'Neşeyle, neşeyle, neşeyle, neşeyle', correct: 'Merrily', options: ['Merrily', 'Slowly', 'Quickly', 'Gently'] },
      { display: 'Life is but a ___', tr: 'Hayat bir rüyadır sadece', correct: 'dream', options: ['dream', 'game', 'song', 'story'] }
    ]
  },
  {
    id: 'old-macdonald',
    title: 'Old MacDonald Had a Farm',
    artist: 'Traditional',
    youtubeId: '5MWGh5gnkIs',
    coverEmoji: '🐄',
    difficulty: 2,
    tag: 'İngilizce',
    tagColor: '#5DADE2',
    lines: [
      { en: 'Old MacDonald had a farm', tr: 'İhtiyar MacDonald\'ın bir çiftliği vardı' },
      { en: 'E-I-E-I-O', tr: 'E-İ-E-İ-O' },
      { en: 'And on his farm he had a cow', tr: 'Ve çiftliğinde bir ineği vardı' },
      { en: 'With a moo moo here', tr: 'Bir möö möö buradan' },
      { en: 'And a moo moo there', tr: 'Bir möö möö şuradan' },
      { en: 'Everywhere a moo moo', tr: 'Her yerde möö möö' },
      { en: 'Old MacDonald had a farm', tr: 'İhtiyar MacDonald\'ın bir çiftliği vardı' }
    ],
    quiz: [
      { display: 'Old MacDonald had a ___', tr: 'İhtiyar MacDonald\'ın bir çiftliği vardı', correct: 'farm', options: ['farm', 'house', 'shop', 'school'] },
      { display: 'And on his farm he had a ___', tr: 'Ve çiftliğinde bir ineği vardı', correct: 'cow', options: ['cow', 'dog', 'horse', 'fish'] },
      { display: 'With a moo moo ___', tr: 'Bir möö möö buradan', correct: 'here', options: ['here', 'near', 'now', 'loud'] },
      { display: 'And a moo moo ___', tr: 'Bir möö möö şuradan', correct: 'there', options: ['there', 'away', 'back', 'gone'] },
      { display: '___ a moo moo', tr: 'Her yerde möö möö', correct: 'Everywhere', options: ['Everywhere', 'Somewhere', 'Nowhere', 'Anywhere'] }
    ]
  },
  {
    id: 'huntr-golden',
    title: 'Golden',
    artist: 'HUNTR/X',
    youtubeId: '9u3moboWiLo',
    coverEmoji: '🌟',
    difficulty: 3,
    tag: 'TR + EN',
    tagColor: '#E74C3C',
    lines: [
      { en: 'I was a ghost, I was alone', tr: 'Bir hayalettim, yalnızdım', section: 'Bölüm' },
      { en: 'In the darkness, on a road of pressure', tr: 'Karanlık içerisinde, baskının olduğu bir yolda' },
      { en: "When the throne was given, I didn't know how to believe", tr: 'Taht verildiğinde, nasıl inanacağımı bilemedim' },
      { en: 'That I was the queen I was meant to be', tr: 'Olmam gereken kraliçe olduğuma' },
      { en: 'I lived two lives, tried to play both sides', tr: 'İki hayat yaşadım, iki tarafa da oynamaya çalıştım' },
      { en: "But I couldn't find my own place", tr: 'Ama kendi yerimi bulamadım' },
      { en: "Called the troubled kid 'cause I went too wild", tr: 'Sorunlu çocuk olarak adlandırıldım çünkü çok yaramazlaştım' },
      { en: "But now that's how I make my money, non-stop on stage", tr: 'Ama artık böyle paramı kazanıyorum, sahnede durmaksızın' },
      { en: "Done with hiding, now I'm shining", tr: 'Saklanmakla işim bitti, artık parlıyorum', section: 'Ön Nakarat' },
      { en: 'Like I was born to be', tr: 'Olmak için doğduğum gibi' },
      { en: "We dream so much, we've come so far", tr: 'Çok fazla hayal kuruyoruz, çok yol katettik' },
      { en: 'Now I believe', tr: 'Artık inanıyorum' },
      { en: "We're going up, up, up", tr: 'Çıkıyoruz yukarı, yukarı, yukarı', section: 'Nakarat' },
      { en: 'This is our moment', tr: 'Bu bizim anımız' },
      { en: 'You know we shine together', tr: 'Birlikte parıldadığımızı biliyorsun' },
      { en: 'We will be, we will be golden', tr: 'Olacağız, olacağız altından' },
      { en: 'Oh, up, up, up', tr: 'Oh, yukarı, yukarı, yukarı' },
      { en: 'With our voices', tr: 'Seslerimizle beraber' },
      { en: 'Unbreakable forever', tr: 'Sonsuza kadar kırılamaz' },
      { en: 'We will be, we will be golden', tr: 'Olacağız, olacağız altından' },
      { en: "Oh, done with hiding, now I'm shining", tr: 'Oh, saklanmakla işim bitti, artık parlıyorum', section: 'Arka Nakarat' },
      { en: 'Like I was born to be', tr: 'Olmak için doğduğum gibi' },
      { en: "Oh, it's our time, no fear, no lies", tr: 'Oh, bizim zamanımız, korku yok, yalan yok' },
      { en: 'This is who we were born to be', tr: 'Olmak için doğduğumuz kişiler bu' },
      { en: "I've waited so long to break down these walls", tr: 'Bu duvarları yıkmak için çok uzun süre bekledim', section: 'Köprü' },
      { en: 'To wake up and feel like myself', tr: 'Uyanıp kendim gibi hissetmek için' },
      { en: "I've left these patterns in the past now", tr: 'Bu desenleri geçmişe koydum artık' },
      { en: 'Finally living like the girl everyone sees', tr: 'Ve sonunda herkesin gördüğü kız gibi yaşıyorum' },
      { en: "Done with hiding, I'm gonna shine", tr: 'Saklanmakla işim bitti, parlayacağım' },
      { en: 'Like I was born to be', tr: 'Olmak için doğduğum gibi' },
      { en: "'Cause we are hunters, our voices are strong", tr: 'Çünkü bizler avcılarız, seslerimiz güçlü' },
      { en: 'And I know that I believe', tr: 'Ve inandığımı biliyorum' },
      { en: "We're going up, up, up", tr: 'Çıkıyoruz yukarı, yukarı, yukarı', section: 'Nakarat (Tekrar)' },
      { en: 'This is our moment', tr: 'Bu bizim anımız' },
      { en: 'You know we shine together', tr: 'Birlikte parıldadığımızı biliyorsun' },
      { en: 'We will be, we will be golden', tr: 'Olacağız, olacağız altından' },
      { en: 'Oh, up, up, up', tr: 'Oh, yukarı, yukarı, yukarı' },
      { en: 'With our voices', tr: 'Seslerimizle beraber' },
      { en: 'Unbreakable forever', tr: 'Sonsuza kadar kırılamaz' },
      { en: 'We will be, we will be golden', tr: 'Olacağız, olacağız altından' },
      { en: 'You know we will be, we will be golden', tr: 'Biliyorsun olacağız, olacağız altından', section: 'Çıkış' },
      { en: 'We will be, we will be', tr: 'Olacağız, olacağız' },
      { en: 'Born, born to shine', tr: 'Doğduk, doğduk parıldamak için' },
      { en: 'Shining so bright', tr: 'Parıl parıl parlıyoruz' },
      { en: "You know it's our time, no fear, no lies", tr: 'Biliyorsun bu bizim zamanımız, korku yok, yalan yok' },
      { en: 'This is who we were born to be', tr: 'Olmak için doğduğumuz kişiler bu' }
    ],
    quiz: [
      { display: 'Bir ___ idim, yalnızdım', tr: 'Bir hayalettim, yalnızdım', correct: 'hayalet', options: ['hayalet', 'kahraman', 'prenses', 'şarkıcı'] },
      { display: 'Saklanmakla işim bitti, artık ___', tr: 'Saklanmakla işim bitti, artık parlıyorum', correct: 'parlıyorum', options: ['parlıyorum', 'duruyorum', 'gidiyorum', 'gülüyorum'] },
      { display: 'Çıkıyoruz yukarı, yukarı, ___', tr: 'Çıkıyoruz yukarı, yukarı, yukarı', correct: 'yukarı', options: ['yukarı', 'aşağı', 'ileri', 'geri'] },
      { display: 'Sonsuza kadar ___', tr: 'Sonsuza kadar kırılamaz', correct: 'kırılamaz', options: ['kırılamaz', 'değişmez', 'durmaz', 'bitmez'] },
      { display: 'Olacağız, olacağız ___', tr: 'Olacağız, olacağız altından', correct: 'altından', options: ['altından', 'birlikte', 'parıldadık', 'güçlüyüz'] },
      { display: 'Doğduk, doğduk ___ için', tr: 'Doğduk, doğduk parıldamak için', correct: 'parıldamak', options: ['parıldamak', 'koşmak', 'savaşmak', 'gülmek'] }
    ]
  }
];
