// src/data/defaultData.js
// This data shows while the Google Sheet is loading,
// or as fallback if the sheet is not yet configured.
// Once you fill in your Sheet, this becomes the backup.

export const defaultData = {
  config: {
    anniversary_date: '2025-12-12',
    password: '12122025',
    name_a: 'Minh Quân',
    name_b: 'Thanh Trà',
    tagline: 'Feel home in your heart',
    love_letter: `Trà ơi,\n\nEm là điều tuyệt vời nhất xảy ra với anh.\n\nTừ cái ngày anh tỏ tình lần đầu dù biết em chưa sẵn sàng, đến hôm nay — anh không hối hận một giây nào. Mỗi khoảnh khắc bên em, dù là lúc 2 đứa nấu ăn ngắm hoàng hôn, hay đơn giản chỉ là ngồi bên nhau im lặng — đều trở thành ký ức anh trân trọng nhất.\n\nEm thông minh, sáng tạo, dịu dàng. Em luôn cho anh biết em đang nghĩ gì, không bao giờ để anh đoán mò. Em nhớ mọi chi tiết nhỏ về anh dù em hay nói mình hay quên. Em sẵn sàng đồng hành với anh trong mọi việc.\n\nAnh muốn tụi mình còn nhiều hành trình nữa, nhiều mùa Noel nữa, nhiều lần đầu tiên nữa.\n\nMãi yêu em,\nMinh Quân 🌹`,
  },
  timeline: [
    { date: '14/11/2025', title: 'Lần đầu tỏ tình', description: 'Mình tỏ tình lần đầu nhưng bạn chưa sẵn sàng, nên mình sẽ đợi', emoji: '🫶', image: '' },
    { date: '29/11/2025', title: 'Tô tượng & Zootopia', description: 'Tụi mình cùng đi tô tượng và cosplay Zootopia', emoji: '🦊', image: '' },
    { date: '03/12/2025', title: 'Tháng Heather', description: 'Tháng Heather, mình cũng nhận được sweater từ bạn', emoji: '🧥', image: '' },
    { date: '06/12/2025', title: 'Chạy xe xuống nhà bạn', description: 'Lần đầu chạy xe xuống nhà bạn, cùng bạn nấu ăn và ngắm hoàng hôn', emoji: '🌅', image: '' },
    { date: '12/12/2025', title: 'Tỏ tình lần 2 ✅', description: 'Mình tỏ tình lần 2 và thật vui vì bạn cũng cho phép mình trở thành người yêu bạn', emoji: '💗', image: '' },
    { date: '14/02/2026', title: 'Valentine đầu tiên', description: 'Tụi mình có valentine đầu tiên cùng nhau', emoji: '💝', image: '' },
  ],
  reasons: [
    { number: '01', text: 'Trà thông minh, sáng tạo, độc lập' },
    { number: '02', text: 'Bạn luôn dịu dàng, luôn lắng nghe mình' },
    { number: '03', text: 'Luôn cho mình biết cảm xúc, không nói ẩn ý với mình' },
    { number: '04', text: 'Ghi nhớ mọi chi tiết về mình dù bạn không giỏi nhớ những chuyện thường ngày' },
    { number: '05', text: 'Luôn sẵn sàng đồng hành cùng mình cho mọi việc, cả 2 cùng nhau phát triển' },
  ],
  gallery: [
    { caption: 'My cup of tea', image: '', nickname: '' },
    { caption: 'Cục cưng', image: '', nickname: '' },
    { caption: 'Baby bot', image: '', nickname: '' },
    { caption: 'Nhóc nà', image: '', nickname: '' },
    { caption: 'Trầm ngư lạc nhạn', image: '', nickname: '' },
    { caption: 'Quốc sắc thiên hương', image: '', nickname: '' },
    { caption: 'Hoa nhường nguyệt thẹn', image: '', nickname: '' },
  ],
  firsts: [
    { title: 'Cosplay Zootopia', image: '', icon: '🦊' },
    { title: 'Noel w you', image: '', icon: '🎄' },
    { title: 'Dancing in the dark', image: '', icon: '💃' },
    { title: 'Make a ring', image: '', icon: '💍' },
    { title: 'Shooting', image: '', icon: '📸' },
    { title: 'Go to the zoo', image: '', icon: '🦁' },
    { title: 'Eye surgery', image: '', icon: '👁️' },
    { title: 'Trekking', image: '', icon: '🥾' },
    { title: 'Water bus', image: '', icon: '⛵' },
    { title: 'Gift giving', image: '', icon: '🎁' },
  ],
  songs: [
    { title: 'We\'re the Lucky Ones', artist: 'The Marías' },
    { title: 'So Easy (To Fall In Love)', artist: 'Olivia Dean' },
    { title: 'santa doesn\'t know you like i do', artist: 'Sabrina Carpenter' },
    { title: 'White Christmas', artist: 'Jeff Bernat' },
    { title: 'Dancing in the Dark', artist: 'Rihanna' },
    { title: 'Candy Cane Lane', artist: 'Sia' },
    { title: 'Kiss You This Christmas', artist: 'Why Don\'t We' },
  ],
};
