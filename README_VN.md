<h1 align="center">Plugin ChatGPT</h1>

  ## [Đã triển khai trên Ôm mặt](https://huggingface.co/login?next=%2Fspaces%2Fngoctuanai%2Fchatgptfree%3Fduplicate%3Dtrue)

- Một cú nhấp chuột để có được giao diện người dùng web ChatGPT đa nền tảng được thiết kế tốt.

## Đặc trưng
- **Triển khai miễn phí chỉ bằng một cú nhấp chuột** trong vòng chưa đầy 1 phút
- Máy khách nhỏ gọn (~5MB) trên Linux/Windows/MacOS, [tải xuống ngay bây giờ](https://github.com/Yidadaa/ChatGPT-Next-Web/releases)
- Hoàn toàn tương thích với các llms tự triển khai, được khuyến nghị sử dụng với [RWKV-Runner](https://github.com/josStorer/RWKV-Runner) hoặc [LocalAI](https://github.com/go-skynet/LocalAI)
- Quyền riêng tư là trên hết, tất cả dữ liệu được lưu trữ cục bộ trong trình duyệt
- Hỗ trợ Markdown: LaTex, nàng tiên cá, đánh dấu mã, v.v.
- Thiết kế đáp ứng, chế độ tối và PWA
- Tốc độ tải màn hình đầu tiên nhanh (~100kb), hỗ trợ phản hồi phát trực tuyến
- Tính năng mới trong v2: tạo, chia sẻ và gỡ lỗi các công cụ trò chuyện của bạn bằng các mẫu lời nhắc (mặt nạ)
- Lời nhắc tuyệt vời được cung cấp bởi [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) và [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompt)
- Tự động nén lịch sử trò chuyện để hỗ trợ các cuộc trò chuyện dài đồng thời lưu mã thông báo của bạn
- I18n: Tiếng Anh, 简体中文, 繁体中文, 日本語, Français, Español, Italiano, Türkçe, Deutsch, Tiếng Việt, Русский, Čeština, 한국어, Indonesia
## Lộ trình
- [x] Lời nhắc hệ thống: ghim lời nhắc do người dùng xác định làm lời nhắc hệ thống [#138](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/138)
- [x] Lời nhắc của người dùng: người dùng có thể chỉnh sửa và lưu lời nhắc tùy chỉnh vào danh sách lời nhắc
- [x] Mẫu lời nhắc: tạo cuộc trò chuyện mới với lời nhắc trong ngữ cảnh được xác định trước [#993](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/993)
- [x] Chia sẻ dưới dạng hình ảnh, chia sẻ lên ShareGPT [#1741](https://github.com/Yidadaa/ChatGPT-Next-Web/pull/1741)
- [x] Ứng dụng dành cho máy tính để bàn có tauri
- [x] Mô hình tự lưu trữ: Hoàn toàn tương thích với [RWKV-Runner](https://github.com/josStorer/RWKV-Runner), cũng như triển khai máy chủ của [LocalAI](https://github.com/go-skynet/LocalAI): llama/gpt4all/rwkv/vicuna/koala/gpt4all-j/cerebras/falcon/dolly, v.v.
- [x] Plugin: hỗ trợ tìm kiếm mạng, máy tính, bất kỳ apis nào khác, v.v. [#165](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/165)
## Có gì mới
- 🚀 v2.0 đã được phát hành, giờ đây bạn có thể tạo các mẫu nhắc nhở, biến ý tưởng của mình thành hiện thực! Đọc phần này: [Mẹo kỹ thuật nhắc nhở ChatGPT: Nhắc nhở không, một và ít lần bắn](https://www.allabtai.com/prompt-engineering-tips-zero-one-and-few-shot-prompting/).
- 🚀 v2.7 hãy chia sẻ cuộc trò chuyện dưới dạng hình ảnh hoặc chia sẻ lên ShareGPT!
- 🚀 v2.8 hiện chúng tôi có ứng dụng khách chạy trên tất cả các nền tảng!
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
### `OPENAI_API_KEY` (bắt buộc)

Khóa api openai của bạn.

### `Proxy ngược`

Có sẵn khi sử dụng `ChatGPTUnofficialProxyAPI` miễn phí.[Chi tiết](https://api.chatanywhere.org/v1/oauth/free/github/render)

### `CODE` (tùy chọn)

Truy cập mật khẩu, cách nhau bằng dấu phẩy.

### `BASE_URL` (tùy chọn)

> Mặc định: `https://api.openai.com`

> Ví dụ: `http://your-openai-proxy.com`

Ghi đè url cơ sở yêu cầu api openai.

### `OPENAI_ORG_ID` (tùy chọn)

Chỉ định ID tổ chức OpenAI.

### `HIDE_USER_API_KEY` (tùy chọn)

> Mặc định: Trống

Nếu bạn không muốn người dùng nhập khóa API của riêng họ, hãy đặt giá trị này thành 1.

### `DISABLE_GPT4` (tùy chọn)

> Mặc định: Trống

Nếu bạn không muốn người dùng sử dụng GPT-4, hãy đặt giá trị này thành 1.

### `HIDE_BALANCE_QUERY` (tùy chọn)

> Mặc định: Trống

Nếu bạn không muốn người dùng truy vấn số dư, hãy đặt giá trị này thành 1.

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
