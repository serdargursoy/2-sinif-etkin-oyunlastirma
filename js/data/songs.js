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
    artist: 'Huntr',
    youtubeId: '9u3moboWiLo',
    coverEmoji: '🌟',
    difficulty: 3,
    tag: 'TR + EN',
    tagColor: '#E74C3C',
    lines: [],
    quiz: [],
    comingSoon: true
  }
];
