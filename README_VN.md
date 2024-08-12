<h1 align="center">Plugin ChatGPT</h1>

- Một cú nhấp chuột để có được giao diện người dùng web ChatGPT đa nền tảng được thiết kế tốt.

## Bắt đầu
1. Nhận [Khóa API OpenAI](https://platform.openai.com/account/api-keys);
2. Nhấp vào hãy nhớ rằng `CODE` là mật khẩu trang của bạn;
3. Tận hưởng :)
## Tiếp tục cập nhật
Nếu bạn đã triển khai dự án của riêng mình chỉ bằng một cú nhấp chuột theo các bước trên, bạn có thể gặp phải sự cố "Có bản cập nhật" liên tục hiển thị. Điều này là do theo mặc định, dự án này sẽ tạo một dự án mới cho bạn thay vì phân nhánh dự án này, dẫn đến việc không thể phát hiện các bản cập nhật một cách chính xác.

Chúng tôi khuyên bạn nên làm theo các bước bên dưới để triển khai lại:

- Xóa kho lưu trữ gốc;
- Sử dụng nút phân nhánh ở góc trên bên phải của trang để phân nhánh dự án này;
- Chọn và triển khai lại
## Hãy nhập mật khẩu
Dự án này cung cấp kiểm soát truy cập hạn chế. Vui lòng thêm biến môi trường có tên `CODE` trên trang biến môi trường vercel. Giá trị phải là mật khẩu được phân tách bằng dấu phẩy như thế này:

```
code1, code2, code3
```

Sau khi thêm hoặc sửa đổi biến môi trường này, vui lòng triển khai lại dự án để các thay đổi có hiệu lực.

## Environment Variables

[Chi tiết](./env.md)

## Yêu cầu

NodeJS >= 18, Docker >= 20

## Phát triển

Trước khi bắt đầu phát triển, bạn phải tạo tệp `.env.local` mới tại thư mục gốc của dự án và đặt khóa api của bạn vào đó:

```
OPENAI_API_KEY=<khóa api của bạn ở đây>

```

### Phát triển địa phương

``` vỏ
# 1. cài đặt nodejs và sợi trước
# 2. config các vars env cục bộ trong `.env.local`
#3. chạy
cài đặt sợi
nhà phát triển sợi
```

### Vỏ bọc

``` vỏ
bash <(curl -s https://raw.githubusercontent.com/chokiproai/ChatGPT-Plugins/main/scripts/setup.sh)
```

## GIẤY PHÉP

[MIT](https://opensource.org/license/mit/)
