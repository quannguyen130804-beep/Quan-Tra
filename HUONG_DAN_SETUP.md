# 🌹 Hướng dẫn setup website Minh Quân & Thanh Trà

---

## BƯỚC 1 — Tạo Google Sheet

### 1.1 Tạo Sheet mới
1. Vào https://sheets.google.com → nhấn **"Blank"** (trang trống)
2. Đặt tên sheet: **"Quan Tra Love"** (ở ô tên file góc trên)

### 1.2 Tạo đúng 6 tabs (quan trọng!)
Mỗi tab ở dưới cùng, bấm dấu **+** để thêm tab mới.
Đặt tên theo đúng thứ tự:

| Thứ tự tab | Tên tab |
|---|---|
| Tab 1 (Sheet1) | config |
| Tab 2 | timeline |
| Tab 3 | reasons |
| Tab 4 | gallery |
| Tab 5 | firsts |
| Tab 6 | songs |

---

## BƯỚC 2 — Điền nội dung vào từng tab

### 📋 Tab 1: config
Điền theo cột như sau (dòng 1 là header, dòng 2 là dữ liệu):

```
| anniversary_date | password | name_a    | name_b      | tagline                    | love_letter         |
|------------------|----------|-----------|-------------|----------------------------|---------------------|
| 2025-12-12       | 12122025 | Minh Quân | Thanh Trà   | Feel home in your heart    | (nội dung thư tình) |
```

**Lưu ý love_letter:** Viết toàn bộ thư vào 1 ô, xuống dòng trong Sheet bằng Ctrl+Enter. Mỗi đoạn văn cách nhau bằng 2 lần Enter.

---

### 📋 Tab 2: timeline
```
| date       | title              | description                                                          | emoji | image |
|------------|--------------------|----------------------------------------------------------------------|-------|-------|
| 14/11/2025 | Lần đầu tỏ tình    | Mình tỏ tình lần đầu nhưng bạn chưa sẵn sàng, nên mình sẽ đợi     | 🫶    |       |
| 29/11/2025 | Tô tượng & Zootopia| Tụi mình cùng đi tô tượng và cosplay Zootopia                       | 🦊    |       |
| 03/12/2025 | Tháng Heather      | Tháng Heather, mình cũng nhận được sweater từ bạn                  | 🧥    |       |
| 06/12/2025 | Chạy xe xuống nhà  | Lần đầu chạy xe xuống nhà bạn, cùng bạn nấu ăn và ngắm hoàng hôn  | 🌅    |       |
| 12/12/2025 | Tỏ tình lần 2 ✅   | Mình tỏ tình lần 2 và thật vui vì bạn cho phép mình là người yêu   | 💗    |       |
| 14/02/2026 | Valentine đầu tiên | Tụi mình có valentine đầu tiên cùng nhau                            | 💝    |       |
```

**Cột image:** Dán link ảnh trực tiếp vào đây (xem hướng dẫn thêm ảnh ở Bước 4).

---

### 📋 Tab 3: reasons
```
| number | text                                                                                     |
|--------|------------------------------------------------------------------------------------------|
| 01     | Trà thông minh, sáng tạo, độc lập                                                       |
| 02     | Bạn luôn dịu dàng, luôn lắng nghe mình                                                  |
| 03     | Luôn cho mình biết cảm xúc, không nói ẩn ý với mình                                     |
| 04     | Ghi nhớ mọi chi tiết về mình dù bạn không giỏi nhớ những chuyện thường ngày             |
| 05     | Luôn sẵn sàng đồng hành cùng mình cho mọi việc, cả 2 cùng nhau phát triển              |
```

---

### 📋 Tab 4: gallery
```
| caption            | image |
|--------------------|-------|
| My cup of tea      |       |
| Cục cưng           |       |
| Baby bot           |       |
| Nhóc nà            |       |
| Trầm ngư lạc nhạn  |       |
| Quốc sắc thiên hương|      |
| Hoa nhường nguyệt thẹn|    |
```

---

### 📋 Tab 5: firsts
```
| title            | icon | image |
|------------------|------|-------|
| Cosplay Zootopia | 🦊   |       |
| Noel w you       | 🎄   |       |
| Dancing in the dark| 💃  |       |
| Make a ring      | 💍   |       |
| Shooting         | 📸   |       |
| Go to the zoo    | 🦁   |       |
| Eye surgery      | 👁️   |       |
| Trekking         | 🥾   |       |
| Water bus        | ⛵   |       |
| Gift giving      | 🎁   |       |
```

---

### 📋 Tab 6: songs
```
| title                          | artist              |
|--------------------------------|---------------------|
| We're the Lucky Ones           | The Marías          |
| So Easy (To Fall In Love)      | Olivia Dean         |
| santa doesn't know you like i do| Sabrina Carpenter  |
| White Christmas                | Jeff Bernat         |
| Dancing in the Dark            | Rihanna             |
| Candy Cane Lane                | Sia                 |
| Kiss You This Christmas        | Why Don't We        |
```

---

## BƯỚC 3 — Làm Sheet thành Public

1. Nhấn **Share** (nút xanh góc trên phải)
2. Chọn **"Change to anyone with the link"**
3. Chọn **"Viewer"** (chỉ xem thôi, không cần edit)
4. Nhấn **Done**
5. **Copy URL** trên thanh địa chỉ trình duyệt (dạng: `https://docs.google.com/spreadsheets/d/ABCDEF.../edit`)

---

## BƯỚC 4 — Thêm ảnh vào website

### Cách upload ảnh lên Google Drive rồi lấy link:
1. Upload ảnh lên Google Drive
2. Chuột phải vào ảnh → **"Get link"** → **"Anyone with the link"** → Copy
3. Link sẽ có dạng: `https://drive.google.com/file/d/FILE_ID/view`
4. Chuyển thành link trực tiếp: `https://drive.google.com/uc?id=FILE_ID`
   - Lấy FILE_ID từ link trên (phần giữa `/d/` và `/view`)
5. Dán link trực tiếp vào cột `image` trong Sheet

**Ví dụ:**
- Link Drive: `https://drive.google.com/file/d/1BxiM...abc/view`
- Link dùng trong Sheet: `https://drive.google.com/uc?id=1BxiM...abc`

---

## BƯỚC 5 — Kết nối Sheet vào code

1. Mở file `src/App.jsx`
2. Tìm dòng:
   ```js
   const SHEET_URL = 'YOUR_SHEET_URL_HERE';
   ```
3. Thay bằng URL Sheet của bạn:
   ```js
   const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1abc.../edit';
   ```
4. Lưu file

---

## BƯỚC 6 — Deploy lên Vercel (5 phút, không cần biết code)

### 6.1 Tạo tài khoản GitHub (nếu chưa có)
1. Vào https://github.com → **Sign up** → điền email, username, password
2. Xác nhận email

### 6.2 Upload code lên GitHub
1. Vào https://github.com → nhấn **"+"** góc trên phải → **"New repository"**
2. Đặt tên: `quan-tra-love`
3. Chọn **Private** → nhấn **"Create repository"**
4. Kéo thả **toàn bộ folder `love-website`** vào trang đó (hoặc dùng GitHub Desktop)
5. Nhấn **"Commit changes"**

### 6.3 Deploy trên Vercel
1. Vào https://vercel.com → **Sign up with GitHub**
2. Nhấn **"New Project"**
3. Chọn repo `quan-tra-love` vừa tạo → nhấn **"Import"**
4. Để mọi thứ mặc định → nhấn **"Deploy"**
5. Đợi ~2 phút → Vercel cho bạn link dạng `quan-tra-love.vercel.app` 🎉

### 6.4 Tên miền đẹp hơn (tùy chọn)
Trong Vercel → **Settings → Domains** → nhập tên miền muốn đổi, ví dụ: `quantra.vercel.app`

---

## CẬP NHẬT NỘI DUNG SAU NÀY

Sau khi đã setup xong, mọi lần muốn thêm mốc mới, sửa lý do, thêm ảnh:

1. **Chỉ cần mở Google Sheet**
2. **Sửa/thêm nội dung**
3. **Lưu** → Website tự cập nhật ngay lập tức ✅

Không cần đụng code, không cần deploy lại!

---

## FAQ

**Q: Nếu Sheet chưa setup, website hiện gì?**
A: Website dùng dữ liệu mặc định đã điền sẵn trong code — vẫn chạy bình thường.

**Q: Mật khẩu đổi như thế nào?**
A: Vào Sheet → tab `config` → đổi ô `password`.

**Q: Thêm mốc timeline mới thế nào?**
A: Vào Sheet → tab `timeline` → thêm dòng mới ở dưới cùng.

**Q: Website có thể xem trên điện thoại không?**
A: Có, responsive đầy đủ cho cả mobile và desktop.
