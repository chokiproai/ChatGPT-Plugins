<h1 align="center">ChatGPT Plugins</h1>

- Một cú nhấp chuột để có được giao diện người dùng web ChatGPT đa nền tảng được thiết kế tốt, với sự hỗ trợ của GPT3, GPT4 & Gemini Pro.

> [!WARNING]
> Tính năng plugin của dự án này dựa trên [API Gọi Hàm OpenAI](https://platform.openai.com/docs/guides/function-calling) để thực hiện, việc chuyển tiếp giao diện GitHub Copilot hoặc các giao diện mô phỏng tương tự sẽ không thể gọi chính xác tính năng plugin!
>
> [Thử Nghiệm] Hỗ trợ gọi hàm cho mô hình Claude mới được thêm vào.
>
> Vì Anthropic không cung cấp mô hình nhúng, vui lòng thêm cấu hình mô hình nhúng ollama cho tính năng RAG. Nếu không cấu hình, **WebBrowser** và **PDFBrowser** plugin sẽ không thể sử dụng được.

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

- [x] Hỗ trợ sử dụng DuckDuckGo làm công cụ tìm kiếm mặc định

  Nếu không cấu hình, mặc định sẽ sử dụng `DuckDuckGo` làm plugin tìm kiếm.

- [x] Phát triển trang danh sách plugin

- [x] Hỗ trợ bật/tắt các plugin chỉ định

- [x] Hỗ trợ cấu hình tham số Agent ( maxIterations, returnIntermediateSteps, v.v.)

- [x] Hỗ trợ bật/tắt plugin ở cấp độ ChatSession

  Chỉ khi sử dụng các mô hình không phải `0301` và `0314` thì mới có công tắc plugin, các mô hình khác mặc định ở trạng thái tắt và công tắc sẽ không hiển thị.

  Phiên bản mới nhất đã loại bỏ hai mô hình trên.

- [x] Hỗ trợ nhập liệu bằng giọng nói

- [x] Hỗ trợ tải lên các loại tệp khác

- [ ] Hỗ trợ Azure Storage

- [ ] Hỗ trợ plugin Fooocus-API

- [ ] Hỗ trợ cấu hình Key cần thiết cho plugin trong UI

## 🌟 Chức năng chính

- Chức năng RAG
  - Vui lòng tham khảo tài liệu [Hướng dẫn cấu hình chức năng RAG](./docs/rag.md)

- Ngoài các công cụ plugin, giữ nguyên tính năng của dự án gốc [Chức năng chính của ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web#features)

- Hỗ trợ TTS (Chuyển văn bản thành giọng nói)
  - (Miễn phí) Edge TTS
    - Biến môi trường (Tùy chọn): `EDGE_TTS_VOICE_NAME`
    - [EDGE_TTS_VOICE_NAME](https://github.com/chokiproai/ChatGPT-Plugins/blob/main/README_VN.md#-biến-môi-trường)
  - (Có phí) OpenAI TTS

- Hỗ trợ nhập liệu bằng giọng nói, cần sử dụng HTTPS để truy cập

- Hỗ trợ mô hình GPT-4V (thị giác)
  - Đã đồng bộ cách gọi mô hình thị giác từ kho upstream (nén hình ảnh), vẫn có nguy cơ tràn LocalStorage "Dung lượng tối đa của localStorage là 5m Có vẻ như cần sử dụng các giải pháp khác để lưu trữ hình ảnh.", nếu có vấn đề tương tự sẽ điều chỉnh để sử dụng dịch vụ lưu trữ đối tượng cho hình ảnh.

- Chức năng plugin dựa trên [LangChain](https://github.com/hwchase17/langchainjs), hiện tại hỗ trợ các plugin sau, trong tương lai sẽ thêm nhiều hơn
  - Tìm kiếm (ưu tiên: `GoogleCustomSearch > SerpAPI > BingSerpAPI > ChooseSearchEngine > DuckDuckGo`)
  
    - [GoogleCustomSearch](https://api.js.langchain.com/classes/langchain_tools.GoogleCustomSearch.html)
  
      - Biến môi trường:
        - `GOOGLE_PLUGIN_API_PROXY_PREFIX` và `DDG_API_PROXY_PREFIX` biến sử dụng phương pháp giống nhau
        - `GOOGLE_SEARCH_API_KEY`
        - `GOOGLE_CSE_ID`
      - Tham khảo đăng ký: [Hướng dẫn](https://stackoverflow.com/questions/37083058/programmatically-searching-google-in-python-using-custom-search)
  
    - [SerpAPI](https://api.js.langchain.com/classes/langchain_tools.SerpAPI.html)
  
      - Biến môi trường: `SERPAPI_API_KEY`
      - Địa chỉ đăng ký: [SerpApi: Google Search API](https://serpapi.com/)
  
    - [BingSerpAPI](https://api.js.langchain.com/classes/langchain_tools.BingSerpAPI.html)
  
      - Biến môi trường: `BING_SEARCH_API_KEY`
      - Địa chỉ đăng ký: [Web Search API | Microsoft Bing](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api)
  
    - ChooseSearchEngine (tác giả: [hang666](https://github.com/hang666))
  
      - Biến môi trường:
        - `CHOOSE_SEARCH_ENGINE`
        - `GOOGLE_PLUGIN_API_PROXY_PREFIX` và `DDG_API_PROXY_PREFIX` biến sử dụng phương pháp giống nhau, chỉ sẽ proxy cho google
  
        Các tùy chọn như sau:
  
        - google
        - baidu
  
      - Giải thích: tùy chọn này kết nối trực tiếp với công cụ tìm kiếm, giúp tránh lo lắng về giới hạn thử nghiệm API, nhưng có thể không sử dụng được do vấn đề mạng.
  
      - ⚠ Lưu ý: Đã biết có tình trạng gọi không ổn định trong môi trường vercel
  
    - DuckDuckGo
        - Biến môi trường: `DDG_API_PROXY_PREFIX`

        - Sau khi cấu hình, nội dung cấu hình sẽ được nối vào trước các giao diện liên quan đến plugin DuckDuckGo. Ví dụ: `DDG_API_PROXY_PREFIX=https://example.com/` thì yêu cầu cuối cùng sẽ là: `https://example.com/https://duckduckgo.com`

       - Có thể kết hợp với các dự án proxy tương tự như 1234567Yang/cf-proxy-ex để thực hiện proxy cho các giao diện liên quan đến plugin DuckDuckGo.
  
  - Tính toán
    - [Calculator](https://api.js.langchain.com/classes/langchain_tools_calculator.Calculator.html)
    - [WolframAlpha](https://api.js.langchain.com/classes/langchain_tools.WolframAlphaTool.html)
      - Biến môi trường: `WOLFRAM_ALPHA_APP_ID`
      - Địa chỉ đăng ký: [Wolfram LLM API](https://developer.wolframalpha.com/)
    
  - Yêu cầu mạng
    - [WebBrowser](https://api.js.langchain.com/classes/langchain_tools_webbrowser.WebBrowser.html)
      - Cần sử dụng mô hình nhúng `text-embedding-ada-002`
    - PDFBrowser
      - Cần sử dụng mô hình nhúng `text-embedding-ada-002`
      - ⚠ Chỉ khả dụng khi triển khai không phải trên vercel ⚠

  - Khác
    - [Wiki](https://api.js.langchain.com/classes/langchain_tools.WikipediaQueryRun.html)
    - DALL-E 3
      - Plugin DALL-E 3 yêu cầu cấu hình dịch vụ lưu trữ đối tượng, vui lòng tham khảo [Hướng dẫn cấu hình dịch vụ lưu trữ đối tượng](./docs/s3-oss.md)
      - Nếu không cần chuyển đổi hình ảnh, bạn có thể cấu hình `DALLE_NO_IMAGE_STORAGE=1`, lúc này sẽ sử dụng trực tiếp URL tạm thời mà dịch vụ DALL-E trả về để hiển thị hình ảnh. Lưu ý: liên kết này có tính thời gian.
      - Mặc định sử dụng mô hình `dall-e-3`, nếu muốn sử dụng `dall-e-2`, bạn có thể cấu hình biến môi trường `DALLE_MODEL=dall-e-2`.
    - StableDiffusion
      - Plugin này hiện đang ở phiên bản thử nghiệm, có thể sẽ có những thay đổi lớn trong tương lai, vui lòng sử dụng cẩn thận.
      - Việc sử dụng plugin này yêu cầu kiến thức chuyên môn nhất định, các vấn đề liên quan đến Stable Diffusion không nằm trong phạm vi giải đáp của dự án này. Nếu bạn chắc chắn muốn sử dụng plugin này, vui lòng tham khảo [Hướng dẫn cấu hình plugin Stable Diffusion](./docs/stable-diffusion-plugin.md) để cấu hình.
      - Plugin StableDiffusion yêu cầu cấu hình dịch vụ lưu trữ đối tượng, vui lòng tham khảo [Hướng dẫn cấu hình dịch vụ lưu trữ đối tượng](./docs/s3-oss.md).
    - Arxiv
    - Plugin liên quan đến Bilibili (Tác giả: [fred913](https://github.com/fred913))
      - Lấy thông tin video Bilibili (Khuyến nghị kích hoạt plugin này cùng với các plugin dưới đây)
      - Tìm kiếm video Bilibili
        - Cần cấu hình biến môi trường `BILIBILI_COOKIES`.
      - Nhận diện bài hát Bilibili
        - Cần triển khai trước [bilivid-metaprocess-server](https://github.com/fred913/bilivid-metaprocess-server) và cấu hình biến môi trường `BILIVID_METAPROCESS_SERVER_ADDRESS`.
      - Tóm tắt video Bilibili
        - Cần cấu hình biến môi trường `BILIBILI_COOKIES`.

- Hỗ trợ mô hình gemini-pro, gemini-pro-vision
  - Các tính năng hiện tại chưa được hỗ trợ
    - **Tính năng plugin**
  - Cách kích hoạt
    - Cấu hình khóa `GOOGLE_API_KEY`, bạn có thể lấy khóa tại đây: https://ai.google.dev/tutorials/setup
    - Cấu hình địa chỉ API tùy chỉnh (tùy chọn) `GEMINI_BASE_URL`, bạn có thể sử dụng dự án của tôi để thiết lập một dịch vụ proxy dựa trên vercel: [vercel-ai-proxy](https://github.com/Hk-Gosuto/vercel-ai-proxy)
  - Tham khảo câu hỏi thường gặp: [Gemini Prompting FAQs](https://js.langchain.com/docs/integrations/chat/google_generativeai#gemini-prompting-faqs)
  - ⚠ Lưu ý về gemini-pro-vision [tại đây](https://github.com/Hk-Gosuto/ChatGPT-Next-Web-LangChain/issues/203):
    - Mỗi cuộc trò chuyện phải bao gồm dữ liệu hình ảnh, nếu không sẽ gặp lỗi `Add an image to use models/gemini-pro-vision, or switch your model to a text model.`
    - Chỉ hỗ trợ cuộc trò chuyện đơn, cuộc trò chuyện đa vòng sẽ gặp lỗi `Multiturn chat is not enabled for models/gemini-pro-vision`.

- Hỗ trợ lưu trữ cục bộ khi không chạy trên Vercel

  - Nếu chương trình của bạn không chạy trong môi trường Vercel, và không cấu hình các tham số `S3_ENDPOINT` và `R2_ACCOUNT_ID`, tệp tải lên sẽ mặc định được lưu trong thư mục `/app/uploads`.

## **📌 Biến môi trường**

[Hướng dẫn cấu hình chức năng](./.env.template)

### `Reverse Proxy`

Có sẵn khi sử dụng `ChatGPTUnofficialProxyAPI` miễn phí. [Chi tiết](./docs/api-free.md)

### `CODE` (Tùy chọn)

Mật khẩu truy cập, tùy chọn, có thể sử dụng dấu phẩy để phân tách nhiều mật khẩu.

**Cảnh báo**: Nếu không điền mục này, bất kỳ ai cũng có thể trực tiếp sử dụng trang web của bạn sau khi triển khai, điều này có thể khiến token của bạn bị tiêu hao nhanh chóng, vì vậy khuyến nghị bạn điền mục này.

### `OPENAI_API_KEY` (bắt buộc)

Khóa OpanAI, khóa API mà bạn đã đăng ký trên trang tài khoản openai.

### `BASE_URL` (Tùy chọn)

> Mặc định: `https://api.openai.com`

> Ví dụ: `http://your-openai-proxy.com`

URL proxy giao diện Openai, nếu bạn định cấu hình thủ công tác nhân giao diện OpenAI, vui lòng điền vào tùy chọn này.

> Nếu bạn gặp phải sự cố chứng chỉ SSL, hãy đặt giao thức của `BASE_URL` thành http.

### `OPENAI_ORG_ID` (Tùy chọn)

Chỉ định ID tổ chức OpenAI.

### `AZURE_URL` (Tùy chọn)

> Ví dụ: https://{azure-resource-url}/openai/deployments
>
> ⚠️ Lưu ý: Đây khác với cấu hình của dự án gốc, không cần chỉ định {deploy-name}, chỉ cần thay đổi tên mô hình thành {deploy-name} là có thể chuyển đổi giữa các mô hình khác nhau.
>
> ⚠️ Các plugin như DALL-E yêu cầu khóa OpenAI hiện tại chưa hỗ trợ Azure.

URL triển khai Azure.

### `AZURE_API_KEY` (Tùy chọn)

Khóa API Azure.

### `AZURE_API_VERSION` (Tùy chọn)

Phiên bản API Azure, tìm tại [Tài liệu Azure](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#chat-completions).

### `GOOGLE_API_KEY` (Tùy chọn)

Khóa API Google Gemini Pro.

### `GOOGLE_URL` (Tùy chọn)

URL API Google Gemini Pro.

### `ANTHROPIC_API_KEY` (Tùy chọn)

Khóa API anthropic claude.

### `ANTHROPIC_API_VERSION` (Tùy chọn)

Phiên bản API của anthropic claude.

### `ANTHROPIC_URL` (Tùy chọn)

URL API của anthropic claude.

### `BAIDU_API_KEY` (Tùy chọn)

Khóa API của Baidu.

### `BAIDU_SECRET_KEY` (Tùy chọn)

Khóa bí mật của Baidu.

### `BAIDU_URL` (Tùy chọn)

URL API của Baidu.

### `BYTEDANCE_API_KEY` (Tùy chọn)

Khóa API của ByteDance.

### `BYTEDANCE_URL` (Tùy chọn)

URL API của ByteDance.

### `ALIBABA_API_KEY` (Tùy chọn)

Khóa API của Alibaba Cloud.

### `ALIBABA_URL` (Tùy chọn)

Alibaba Cloud Api Url.

### `IFLYTEK_URL` (Tùy chọn)

iflytek Api Url.

### `IFLYTEK_API_KEY` (Tùy chọn)

iflytek Api Key.

### `IFLYTEK_API_SECRET` (Tùy chọn)

iflytek Api Secret.

### `STABILITY_API_KEY` (Tùy chọn)

Khóa API ổn định.

### `STABILITY_URL` (Tùy chọn)

Tùy chỉnh url API ổn định.

### `HIDE_USER_API_KEY` (Tùy chọn)

> Mặc định: Trống

Nếu bạn không muốn người dùng nhập khóa API của riêng họ, hãy đặt giá trị này thành 1.

### `DISABLE_GPT4` (Tùy chọn)

> Mặc định: Trống

Nếu bạn không muốn người dùng sử dụng GPT-4, hãy đặt giá trị này thành 1.

### `ENABLE_BALANCE_QUERY` (Tùy chọn)

> Mặc định: Trống

Nếu bạn muốn người dùng truy vấn số dư, hãy đặt giá trị này thành 1.

### `DISABLE_FAST_LINK` (Tùy chọn)

Nếu bạn muốn tắt phân tích cài đặt prefab từ các liên kết, hãy đặt biến môi trường này thành 1.

Dành cho Azure: sử dụng `modelName@azure=deploymentName` để tùy chỉnh tên mô hình và tên triển khai.
> Ví dụ: `+gpt-3.5-turbo@azure=gpt35` sẽ hiển thị tùy chọn `gpt35(Azure)` trong danh sách mô hình.
> Nếu bạn chỉ có thể sử dụng mô hình Azure, `-all,+gpt-3.5-turbo@azure=gpt35` sẽ làm `gpt35(Azure)` trở thành tùy chọn duy nhất trong danh sách mô hình.

Dành cho ByteDance: sử dụng `modelName@bytedance=deploymentName` để tùy chỉnh tên mô hình và tên triển khai.
> Ví dụ: `+Doubao-lite-4k@bytedance=ep-xxxxx-xxx` sẽ hiển thị tùy chọn `Doubao-lite-4k(ByteDance)` trong danh sách mô hình.

### `CUSTOM_MODELS` (Tùy chọn)

> Ví dụ: `+qwen-7b-chat,+glm-6b,-gpt-3.5-turbo,gpt-4-1106-preview=gpt-4-turbo` có nghĩa là thêm `qwen-7b-chat` và `glm-6b` vào danh sách mô hình, đồng thời xóa `gpt-3.5-turbo` khỏi danh sách, và hiển thị tên mô hình `gpt-4-1106-preview` dưới tên `gpt-4-turbo`.
> Nếu bạn muốn vô hiệu hóa tất cả các mô hình trước, sau đó bật mô hình chỉ định, bạn có thể sử dụng `-all,+gpt-3.5-turbo`, điều này có nghĩa là chỉ bật `gpt-3.5-turbo`.

Dùng để điều khiển danh sách mô hình, sử dụng `+` để thêm một mô hình, sử dụng `-` để ẩn một mô hình, và sử dụng `tên mô hình=hiển thị tên` để tùy chỉnh tên hiển thị của mô hình, các tên mô hình được phân tách bằng dấu phẩy.

Trong chế độ Azure, hỗ trợ sử dụng cú pháp `modelName@azure=deploymentName` để cấu hình tên mô hình và tên triển khai (deploy-name).
> Ví dụ: `+gpt-3.5-turbo@azure=gpt35` cấu hình này sẽ hiển thị một tùy chọn `gpt35(Azure)` trong danh sách mô hình.
> Nếu bạn chỉ có thể sử dụng chế độ Azure, bạn có thể cài đặt `-all,+gpt-3.5-turbo@azure=gpt35` để mặc định sử dụng `gpt35(Azure)` trong cuộc trò chuyện.

Trong chế độ ByteDance, hỗ trợ sử dụng cú pháp `modelName@bytedance=deploymentName` để cấu hình tên mô hình và tên triển khai (deploy-name).
> Ví dụ: `+Doubao-lite-4k@bytedance=ep-xxxxx-xxx` cấu hình này sẽ hiển thị một tùy chọn `Doubao-lite-4k(ByteDance)` trong danh sách mô hình.

### `DEFAULT_MODEL` (Tùy chọn)  
Thay đổi mô hình mặc định.

### `USE_REMOTE_MODELS` (Tùy chọn)  
Nếu bạn muốn sử dụng danh sách mô hình từ xa, có thể thiết lập giá trị là 1.  
Có thể sử dụng cùng với tham số `CUSTOM_MODELS`.  
Khuyến nghị sử dụng kết hợp với các dự án trung gian như `one-api`.

### `WHITE_WEBDAV_ENDPOINTS` (Tùy chọn)

Bạn có thể sử dụng tùy chọn này nếu muốn tăng số lượng địa chỉ dịch vụ webdav được phép truy cập, theo yêu cầu của định dạng:
- Mỗi địa chỉ phải là điểm cuối hoàn chỉnh
> `https://xxxx/yyy`
- Nhiều địa chỉ được kết nối bằng ', '

### `DEFAULT_INPUT_TEMPLATE` (Tùy chọn)

Tùy chỉnh mẫu mặc định được sử dụng để khởi tạo mục cấu hình Tiền xử lý đầu vào của người dùng trong Cài đặt.

### `EDGE_TTS_VOICE_NAME`（Tùy chọn）

[🌟 Hướng dẫn](https://github.com/chokiproai/ChatGPT-Plugins/blob/main/README_VN.md#chức-năng-chính)

### `USE_OPENAI_ENDPOINT_FOR_ALL_MODELS`（Tùy chọn）

Cấu hình tất cả các mô hình để sử dụng định tuyến OpenAI, điều này hữu ích khi sử dụng các dự án trung chuyển như `one-api`
Chỉ cần đặt biến môi trường này thành 1

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