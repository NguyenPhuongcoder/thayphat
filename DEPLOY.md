# 🚀 Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Tạo Repository trên GitHub

1. Truy cập https://github.com/new
2. Đặt tên repository (ví dụ: `windows-server-quiz`)
3. Chọn Public
4. KHÔNG chọn "Initialize this repository with a README"
5. Nhấn "Create repository"

## Bước 2: Push code lên GitHub

Chạy các lệnh sau trong terminal (thay YOUR_USERNAME và YOUR_REPO):

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## Bước 3: Kích hoạt GitHub Pages

1. Vào repository trên GitHub
2. Nhấn vào tab **Settings**
3. Cuộn xuống phần **Pages** (bên trái)
4. Trong phần **Source**, chọn:
   - Branch: `main`
   - Folder: `/ (root)`
5. Nhấn **Save**

## Bước 4: Truy cập website

Sau vài phút, website sẽ được deploy tại:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## Deploy nhanh với Netlify (Thay thế)

1. Truy cập https://app.netlify.com/drop
2. Kéo thả toàn bộ thư mục vào
3. Website sẽ được deploy ngay lập tức!

## Deploy nhanh với Vercel (Thay thế)

1. Cài đặt Vercel CLI: `npm i -g vercel`
2. Chạy: `vercel`
3. Làm theo hướng dẫn
4. Website sẽ được deploy tự động!

---

**Lưu ý:** Nếu bạn muốn tên miền ngắn hơn, đặt tên repository là `YOUR_USERNAME.github.io` thì website sẽ có địa chỉ: `https://YOUR_USERNAME.github.io/`
