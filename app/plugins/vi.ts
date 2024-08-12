import { BuiltinPlugin } from "./typing";

export const VI_PLUGINS: BuiltinPlugin[] = [
  {
    name: "Tìm kiếm Web",
    toolName: "web-search",
    lang: "vi",
    description: "Công cụ chức năng tìm kiếm web cho các công cụ tìm kiếm.",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
    onlyNodeRuntime: false,
  },
  {
    name: "Máy tính",
    toolName: "calculator",
    lang: "vi",
    description:
      "Lớp Máy tính là một công cụ được sử dụng để đánh giá các biểu thức toán học. Nó mở rộng từ lớp Công cụ cơ bản.",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
    onlyNodeRuntime: false,
  },
  {
    name: "Trình duyệt Web",
    toolName: "web-browser",
    lang: "vi",
    description:
      "Một lớp được thiết kế để tương tác với các trang web, hoặc để trích xuất thông tin từ chúng hoặc để tóm tắt nội dung của chúng.",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
    onlyNodeRuntime: false,
  },
  {
    name: "Wikipedia",
    toolName: "WikipediaQueryRun",
    lang: "vi",
    description:
      "Một công cụ để tương tác và lấy dữ liệu từ API Wikipedia.",
    builtin: true,
    createdAt: 1694235989000,
    enable: false,
    onlyNodeRuntime: false,
  },
  {
    name: "DALL·E",
    toolName: "dalle_image_generator",
    lang: "vi",
    description:
      "DALL·E 2 là một hệ thống AI có thể tạo ra hình ảnh và nghệ thuật thực tế từ một mô tả bằng ngôn ngữ tự nhiên. Việc sử dụng plugin này yêu cầu cấu hình dịch vụ lưu trữ đối tượng Cloudflare R2.",
    builtin: true,
    createdAt: 1694703673000,
    enable: false,
    onlyNodeRuntime: false,
  },
  {
    name: "Khuếch tán Ổn định",
    toolName: "stable_diffusion_image_generator",
    lang: "vi",
    description:
      "Mô hình khuếch tán văn bản thành hình ảnh. Việc sử dụng plugin này yêu cầu cấu hình dịch vụ lưu trữ đối tượng Cloudflare R2 và API stable-diffusion-webui.",
    builtin: true,
    createdAt: 1688899480510,
    enable: false,
    onlyNodeRuntime: false,
  },
  {
    name: "Arxiv",
    toolName: "arxiv",
    lang: "vi",
    description: "Tìm kiếm Arxiv và lấy thông tin bài viết.",
    builtin: true,
    createdAt: 1699265115000,
    enable: false,
    onlyNodeRuntime: false,
  },
  {
    name: "Trình duyệt PDF",
    toolName: "pdf-browser",
    lang: "vi",
    description:
      "Một lớp được thiết kế để tương tác với tệp pdf, trích xuất thông tin từ URL của tệp PDF hoặc tóm tắt nội dung của nó.",
    builtin: true,
    createdAt: 1700907315000,
    enable: false,
    onlyNodeRuntime: true,
  },
  {
    name: "Công cụ WolframAlpha",
    toolName: "wolfram_alpha_llm",
    lang: "vi",
    description:
      "Hữu ích khi bạn cần trả lời các câu hỏi về Toán, Khoa học, Công nghệ, Văn hóa, Xã hội và Cuộc sống hàng ngày.",
    builtin: true,
    createdAt: 1703846656000,
    enable: false,
    onlyNodeRuntime: false,
  },
];
