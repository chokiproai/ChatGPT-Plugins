<h1 align="center">ChatGPT Plugins</h1>

- Một cú nhấp chuột để có được giao diện người dùng web ChatGPT đa nền tảng được thiết kế tốt, với sự hỗ trợ của GPT3, GPT4 & Gemini Pro.

## 🌟 Đặc trưng

- **Triển khai miễn phí chỉ bằng một cú nhấp chuột** trên Vercel trong vòng chưa đầy 1 phút
- Hoàn toàn tương thích với các LLM tự triển khai, được khuyến nghị sử dụng với [RWKV-Runner](https://github.com/josStorer/RWKV-Runner) hoặc [LocalAI](https://github.com/go-skynet/LocalAI)
- Quyền riêng tư là trên hết, tất cả dữ liệu được lưu trữ cục bộ trên trình duyệt
- Hỗ trợ Markdown: LaTex, nàng tiên cá, đánh dấu mã, v.v.
- Thiết kế đáp ứng, chế độ tối và PWA
- Tốc độ tải màn hình đầu tiên nhanh (~100kb), hỗ trợ phản hồi phát trực tuyến
- Tính năng mới trong v2: tạo, chia sẻ và gỡ lỗi các công cụ trò chuyện của bạn bằng các mẫu lời nhắc (mặt nạ)
- Lời nhắc tuyệt vời [Prompt](https://github.com/chokiproai/prompt)
- Tự động nén lịch sử trò chuyện để hỗ trợ các cuộc trò chuyện dài đồng thời lưu mã thông báo của bạn
- I18n: Tiếng Anh, 简体中文, 繁体中文, 日本語, Français, Español, Italiano, Türkçe, Deutsch, Tiếng Việt, Русский, Čeština, 한국어, Indonesia.

## **📌 Biến môi trường**

### `Reverse Proxy`

Có sẵn khi sử dụng `ChatGPTUnofficialProxyAPI` miễn phí. [Chi tiết](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/api%20free.md)

### `CODE` (tùy chọn)

Mật khẩu truy cập, phân tách bằng dấu phẩy.

### `OPENAI_API_KEY` (bắt buộc)

Khóa api openai của bạn, nối nhiều khóa api bằng dấu phẩy.

### `BASE_URL` (tùy chọn)

> Mặc định: `https://api.openai.com`

> Ví dụ: `http://your-openai-proxy.com`

Ghi đè url cơ sở yêu cầu api openai.

### `OPENAI_ORG_ID` (tùy chọn)

Chỉ định ID tổ chức OpenAI.

### `AZURE_URL` (tùy chọn)

> Ví dụ: https://{azure-resource-url}/openai

URL triển khai Azure.

### `AZURE_API_KEY` (tùy chọn)

Khóa API Azure.

### `AZURE_API_VERSION` (tùy chọn)

Phiên bản API Azure, tìm tại [Tài liệu Azure](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#chat-completions).

### `GOOGLE_API_KEY` (tùy chọn)

Khóa API Google Gemini Pro.

### `GOOGLE_URL` (tùy chọn)

URL API Google Gemini Pro.

### `ANTHROPIC_API_KEY` (tùy chọn)

Khóa API anthropic claude.

### `ANTHROPIC_API_VERSION` (tùy chọn)

Phiên bản API của anthropic claude.

### `ANTHROPIC_URL` (tùy chọn)

URL API của anthropic claude.

### `BAIDU_API_KEY` (tùy chọn)

Khóa API của Baidu.

### `BAIDU_SECRET_KEY` (tùy chọn)

Khóa bí mật của Baidu.

### `BAIDU_URL` (tùy chọn)

URL API của Baidu.

### `BYTEDANCE_API_KEY` (tùy chọn)

Khóa API của ByteDance.

### `BYTEDANCE_URL` (tùy chọn)

URL API của ByteDance.

### `ALIBABA_API_KEY` (tùy chọn)

Khóa API của Alibaba Cloud.

### `ALIBABA_URL` (tùy chọn)

Alibaba Cloud Api Url.

### `IFLYTEK_URL` (Tùy chọn)

iflytek Api Url.

### `IFLYTEK_API_KEY` (Tùy chọn)

iflytek Api Key.

### `IFLYTEK_API_SECRET` (Tùy chọn)

iflytek Api Secret.

### `HIDE_USER_API_KEY` (tùy chọn)

> Mặc định: Trống

Nếu bạn không muốn người dùng nhập khóa API của riêng họ, hãy đặt giá trị này thành 1.

### `DISABLE_GPT4` (tùy chọn)

> Mặc định: Trống

Nếu bạn không muốn người dùng sử dụng GPT-4, hãy đặt giá trị này thành 1.

### `ENABLE_BALANCE_QUERY` (tùy chọn)

> Mặc định: Trống

Nếu bạn muốn người dùng truy vấn số dư, hãy đặt giá trị này thành 1.

### `DISABLE_FAST_LINK` (tùy chọn)

> Mặc định: Trống

Nếu bạn muốn tắt cài đặt phân tích cú pháp từ url, hãy đặt giá trị này thành 1.

### `CUSTOM_MODELS` (tùy chọn)

> Mặc định: Trống
> Ví dụ: `+llama,+claude-2,-gpt-3.5-turbo,gpt-4-1106-preview=gpt-4-turbo` có nghĩa là thêm `llama, claude-2` vào danh sách mô hình và xóa `gpt-3.5-turbo` khỏi danh sách và hiển thị `gpt-4-1106-preview` dưới dạng `gpt-4-turbo`.

Để kiểm soát các mô hình tùy chỉnh, hãy sử dụng `+` để thêm một mô hình tùy chỉnh, sử dụng `-` để ẩn một mô hình, sử dụng `name=displayName` để tùy chỉnh tên mô hình, phân tách bằng dấu phẩy.

Người dùng `-all` để vô hiệu hóa tất cả các mô hình mặc định, `+all` để bật tất cả các mô hình mặc định.

Đối với Azure: sử dụng `modelName@azure=deploymentName` để tùy chỉnh tên mô hình và tên triển khai.

> Ví dụ: `+gpt-3.5-turbo@azure=gpt35` sẽ hiển thị tùy chọn `gpt35(Azure)` trong danh sách mô hình.
> Nếu bạn chỉ có thể sử dụng mô hình Azure, `-all,+gpt-3.5-turbo@azure=gpt35` sẽ `gpt35(Azure)` là tùy chọn duy nhất trong danh sách mô hình.

Đối với ByteDance: sử dụng `modelName@bytedance=deploymentName` để tùy chỉnh tên mô hình và tên triển khai.
> Ví dụ: `+Doubao-lite-4k@bytedance=ep-xxxxx-xxx` sẽ hiển thị tùy chọn `Doubao-lite-4k(ByteDance)` trong danh sách mô hình.

### `DEFAULT_MODEL` (tùy chọn)

Thay đổi mô hình mặc định

### `WHITE_WEBDEV_ENDPOINTS` (tùy chọn)

Bạn có thể sử dụng tùy chọn này nếu muốn tăng số lượng địa chỉ dịch vụ webdav được phép truy cập, theo yêu cầu của định dạng:
- Mỗi địa chỉ phải là điểm cuối hoàn chỉnh
> `https://xxxx/yyy`
- Nhiều địa chỉ được kết nối bằng ', '

### `DEFAULT_INPUT_TEMPLATE` (tùy chọn)

Tùy chỉnh mẫu mặc định được sử dụng để khởi tạo mục cấu hình Tiền xử lý đầu vào của người dùng trong Cài đặt.

### `STABILITY_API_KEY` (tùy chọn)

Khóa API ổn định.

### `STABILITY_URL` (tùy chọn)

Tùy chỉnh url API ổn định.

## 🌟 Bắt đầu

1. Nhận [Khóa API OpenAI](https://platform.openai.com/account/api-keys);
2. Nhấp vào hãy nhớ rằng `CODE` là mật khẩu trang của bạn;
3. Tận hưởng :)

## 🌟 Mật khẩu truy cập

Dự án này cung cấp kiểm soát truy cập hạn chế. Vui lòng thêm biến môi trường có tên `CODE` trên trang biến môi trường vercel. Giá trị phải là mật khẩu được phân tách bằng dấu phẩy như thế này:

```
code1,code2,code3
```

Sau khi thêm hoặc sửa đổi biến môi trường này, vui lòng triển khai lại dự án để các thay đổi có hiệu lực.

## 🌟 Yêu cầu

NodeJS >= 18, Docker >= 20


### 🌟 Local Development

```shell
#1. cài đặt nodejs và sợi trước
#2. config các vars env cục bộ trong `.env`
#3. chạy
yarn install
yarn dev
```

### 🌟 Dockerfile (Khuyến khích)

```shell
# Use the Node.js 18 base image
FROM node:18

# Clone the ChatGPT repository from GitHub
RUN git clone https://github.com/chokiproai/ChatGPT-Plugins.git

# Set the working directory inside the container
WORKDIR "ChatGPT-Plugins"

# Environment Variables
ENV OPENAI_API_KEY=
ENV CODE=

# Install dependencies using npm
RUN npm install

# Build the project
RUN npm run build

# Expose port 3000 for accessing the application
EXPOSE 3000

# Specify the command to run the application
CMD ["npm", "run", "start"]
```

### 🌟 Docker Compose

```shell
cd ChatGPT-Plugins

docker compose up
```
### 🌟 Shell

```shell
bash <(curl -s https://raw.githubusercontent.com/chokiproai/ChatGPT-Plugins/main/scripts/setup.sh)
```