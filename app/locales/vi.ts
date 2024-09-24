import { SubmitKey } from "../store/config";
import { PartialLocaleType } from "../locales/index";
import { getClientConfig } from "../config/client";

const isApp = !!getClientConfig()?.isApp;

const vi: PartialLocaleType = {
WIP: "Sắp ra mắt...",
Error: {
    Unauthorized: isApp
        ? "Khóa API không hợp lệ, vui lòng kiểm tra trong trang [Cài đặt](/#/settings)."
        : "Truy cập không được phép, vui lòng nhập mã truy cập trong trang [auth](/#/auth), hoặc nhập Khóa API OpenAI của bạn.",
},
Auth: {
    Title: "Cần Mã Truy Cập",
    Tips: "Vui lòng nhập mã truy cập bên dưới",
    SubTips: "Hoặc nhập Khóa API OpenAI hoặc Google của bạn",
    Input: "mã truy cập",
    Confirm: "Xác nhận",
    Later: "Sau",
},
ChatItem: {
    ChatItemCount: (count: number) => `${count} tin nhắn`,
},
Chat: {
    SubTitle: (count: number) => `${count} tin nhắn`,
    EditMessage: {
        Title: "Chỉnh sửa Tất cả Tin nhắn",
        Topic: {
            Title: "Chủ đề",
            SubTitle: "Thay đổi chủ đề hiện tại",
        },
    },
    Actions: {
        ChatList: "Đi đến Danh sách Trò chuyện",
        CompressedHistory: "Lịch sử Nhớ Nén",
        Export: "Xuất Tất cả Tin nhắn dưới dạng Markdown",
        Copy: "Sao chép",
        Stop: "Dừng",
        Retry: "Thử lại",
        Pin: "Ghim",
        PinToastContent: "Đã ghim 1 tin nhắn vào lời nhắc ngữ cảnh",
        PinToastAction: "Xem",
        Delete: "Xóa",
        Edit: "Chỉnh sửa",
        Speech: "Phát",
        StopSpeech: "Dừng Phát",
    },
    Commands: {
        new: "Bắt đầu một cuộc trò chuyện mới",
        newm: "Bắt đầu một cuộc trò chuyện mới với mặt nạ",
        next: "Cuộc trò chuyện tiếp theo",
        prev: "Cuộc trò chuyện trước",
        clear: "Xóa Ngữ cảnh",
        del: "Xóa Cuộc trò chuyện",
    },
    InputActions: {
        Stop: "Dừng",
        ToBottom: "Đến Mới nhất",
        Theme: {
            auto: "Tự động",
            light: "Chủ đề Sáng",
            dark: "Chủ đề Tối",
        },
        Prompt: "Lời nhắc",
        Masks: "Mặt nạ",
        Clear: "Xóa Ngữ cảnh",
        Settings: "Cài đặt",
        EnablePlugins: "Bật Plugin",
        DisablePlugins: "Tắt Plugin",
        UploadImage: "Tải lên Hình ảnh",
        UploadFle: "Tải lên Tệp",
    },
    Rename: "Đổi tên Cuộc trò chuyện",
    Typing: "Đang gõ…",
    Input: (submitKey: string) => {
        var inputHints = `${submitKey} để gửi`;
        if (submitKey === String(SubmitKey.Enter)) {
            inputHints += ", Shift + Enter để xuống dòng";
        }
        return inputHints + ", / để tìm kiếm lời nhắc, : để sử dụng lệnh";
    },
    Send: "Gửi",
    StartSpeak: "Nói",
    StopSpeak: "Dừng",
    Config: {
        Reset: "Đặt lại về Mặc định",
        SaveAs: "Lưu dưới dạng Mặt nạ",
    },
    IsContext: "Lời nhắc Ngữ cảnh",
},
Export: {
    Title: "Xuất Tin nhắn",
    Copy: "Sao chép Tất cả",
    Download: "Tải xuống",
    MessageFromYou: "Tin nhắn Từ Bạn",
    MessageFromChatGPT: "Tin nhắn Từ ChatGPT",
    Share: "Chia sẻ đến ShareGPT",
    Format: {
        Title: "Định dạng Xuất",
        SubTitle: "Markdown hoặc Hình ảnh PNG",
    },
    IncludeContext: {
        Title: "Bao gồm Ngữ cảnh",
        SubTitle: "Xuất ngữ cảnh lời nhắc trong mặt nạ hay không",
    },
    Steps: {
        Select: "Chọn",
        Preview: "Xem trước",
    },
    Image: {
        Toast: "Đang chụp Hình...",
        Modal: "Nhấn và giữ hoặc nhấp chuột phải để lưu hình ảnh",
    },
},
Select: {
    Search: "Tìm kiếm",
    All: "Chọn Tất cả",
    Latest: "Chọn Mới nhất",
    Clear: "Xóa",
},
Memory: {
    Title: "Lời nhắc Nhớ",
    EmptyContent: "Chưa có gì.",
    Send: "Gửi Nhớ",
    Copy: "Sao chép Nhớ",
    Reset: "Đặt lại Phiên",
    ResetConfirm:
        "Đặt lại sẽ xóa lịch sử cuộc trò chuyện hiện tại và bộ nhớ lịch sử. Bạn có chắc chắn muốn đặt lại không?",
},
Home: {
    NewChat: "Cuộc trò chuyện Mới",
    DeleteChat: "Xác nhận để xóa cuộc trò chuyện đã chọn?",
    DeleteToast: "Cuộc trò chuyện đã bị xóa",
    Revert: "Khôi phục",
    Search: "Tìm kiếm Cuộc trò chuyện",
},
Settings: {
    Title: "Cài đặt",
    SubTitle: "Tất cả Cài đặt",
    Danger: {
        Reset: {
            Title: "Đặt lại Tất cả Cài đặt",
            SubTitle: "Đặt lại tất cả các mục cài đặt về mặc định",
            Action: "Đặt lại",
            Confirm: "Xác nhận để đặt lại tất cả cài đặt về mặc định?",
        },
        Clear: {
            Title: "Xóa Tất cả Dữ liệu",
            SubTitle: "Xóa tất cả tin nhắn và cài đặt",
            Action: "Xóa",
            Confirm: "Xác nhận để xóa tất cả tin nhắn và cài đặt?",
        },
    },
    Lang: {
        Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
        All: "Tất cả Ngôn ngữ",
    },
    Avatar: "Ảnh đại diện",
    FontSize: {
        Title: "Kích thước Chữ",
        SubTitle: "Điều chỉnh kích thước chữ của nội dung trò chuyện",
    },
    InjectSystemPrompts: {
        Title: "🅧",
        SubTitle: "‎ ",
    },
    InputTemplate: {
        Title: "Mẫu Đầu vào",
        SubTitle: "Tin nhắn mới nhất sẽ được điền vào mẫu này",
    },

    Update: {
        Version: (x: string) => `Phiên bản: ${x}`,
        IsLatest: "Phiên bản mới nhất",
        CheckUpdate: "Kiểm tra Cập nhật",
        IsChecking: "Đang kiểm tra cập nhật...",
        FoundUpdate: (x: string) => `Đã tìm thấy phiên bản mới: ${x}`,
        GoToUpdate: "Cập nhật",
    },
    SendKey: "Phím Gửi",
    Theme: "Chủ đề",
    TightBorder: "Viền Chặt",
    SendPreviewBubble: {
        Title: "Bong bóng Xem trước Gửi",
        SubTitle: "Xem trước markdown trong bong bóng",
    },
    AutoGenerateTitle: {
        Title: "Tự động Tạo Tiêu đề",
        SubTitle: "Tạo một tiêu đề phù hợp dựa trên nội dung cuộc trò chuyện",
    },
    Sync: {
        CloudState: "Cập nhật Cuối cùng",
        NotSyncYet: "Chưa đồng bộ",
        Success: "Đồng bộ Thành công",
        Fail: "Đồng bộ Thất bại",

        Config: {
            Modal: {
                Title: "Cấu hình Đồng bộ",
                Check: "Kiểm tra Kết nối",
            },
            SyncType: {
                Title: "Loại Đồng bộ",
                SubTitle: "Chọn dịch vụ đồng bộ yêu thích của bạn",
            },
            Proxy: {
                Title: "Bật Proxy CORS",
                SubTitle: "Bật một proxy để tránh các hạn chế cross-origin",
            },
            ProxyUrl: {
                Title: "Điểm cuối Proxy",
                SubTitle:
                    "Chỉ áp dụng cho proxy CORS tích hợp sẵn cho dự án này",
            },

            WebDav: {
                Endpoint: "Điểm cuối WebDAV",
                UserName: "Tên người dùng",
                Password: "Mật khẩu",
            },

            UpStash: {
                Endpoint: "URL REST Redis UpStash",
                UserName: "Tên sao lưu",
                Password: "Mã thông báo REST Redis UpStash",
            },
        },

        LocalState: "Dữ liệu Cục bộ",
        Overview: (overview: any) => {
            return `${overview.chat} cuộc trò chuyện, ${overview.message} tin nhắn, ${overview.prompt} lời nhắc, ${overview.mask} mặt nạ`;
        },
        ImportFailed: "Nhập từ tệp không thành công",
    },
    Mask: {
        Splash: {
            Title: "Màn hình Splash Mặt nạ",
            SubTitle: "Hiển thị màn hình splash mặt nạ trước khi bắt đầu cuộc trò chuyện mới",
        },
        Builtin: {
            Title: "Ẩn Mặt nạ Tích hợp sẵn",
            SubTitle: "Ẩn mặt nạ tích hợp sẵn trong danh sách mặt nạ",
        },
    },
    Prompt: {
        Disable: {
            Title: "Tắt tự động hoàn thành",
            SubTitle: "Nhập / để kích hoạt tự động hoàn thành",
        },
        List: "Danh sách Lời nhắc",
        ListCount: (builtin: number, custom: number) =>
            `${builtin} tích hợp sẵn, ${custom} do người dùng định nghĩa`,
        Edit: "Chỉnh sửa",
        Modal: {
            Title: "Danh sách Lời nhắc",
            Add: "Thêm Một",
            Search: "Tìm kiếm Lời nhắc",
        },
        EditModal: {
            Title: "Chỉnh sửa Lời nhắc",
        },
    },
    HistoryCount: {
        Title: "Số lượng Tin nhắn Đính kèm",
        SubTitle: "Số lượng tin nhắn đã gửi đính kèm mỗi yêu cầu",
    },
    CompressThreshold: {
        Title: "Ngưỡng Nén Lịch sử",
        SubTitle:
            "Sẽ nén nếu độ dài tin nhắn chưa nén vượt quá giá trị",
    },

    Usage: {
        Title: "Số dư Tài khoản",
        SubTitle(used: any, total: any) {
            return `Đã sử dụng trong tháng này ${used}, đăng ký ${total}`;
        },
        IsChecking: "Đang kiểm tra...",
        Check: "Kiểm tra",
        NoAccess: "Nhập Khóa API để kiểm tra số dư",
    },
    Access: {
        AccessCode: {
            Title: "Mã Truy cập",
            SubTitle: "Kiểm soát truy cập đã được bật",
            Placeholder: "Nhập Mã",
        },
        CustomEndpoint: {
            Title: "Điểm cuối Tùy chỉnh",
            SubTitle: "Sử dụng dịch vụ Azure hoặc OpenAI tùy chỉnh",
        },
        Provider: {
            Title: "Nhà cung cấp Mô hình",
            SubTitle: "Chọn Azure hoặc OpenAI",
        },
        OpenAI: {
            ApiKey: {
                Title: "Khóa API OpenAI",
                SubTitle: "Sử dụng Khóa API OpenAI tùy chỉnh",
                Placeholder: "sk-xxx",
            },

            Endpoint: {
                Title: "Điểm cuối OpenAI",
                SubTitle: "Phải bắt đầu bằng http(s):// hoặc sử dụng /api/openai làm mặc định",
            },
        },
        Azure: {
            ApiKey: {
                Title: "Khóa API Azure",
                SubTitle: "Kiểm tra khóa API của bạn từ bảng điều khiển Azure",
                Placeholder: "Khóa API Azure",
            },

            Endpoint: {
                Title: "Điểm cuối Azure",
                SubTitle: "Ví dụ: ",
            },

            ApiVerion: {
                Title: "Phiên bản API Azure",
                SubTitle: "Kiểm tra phiên bản API của bạn từ bảng điều khiển Azure",
            },
        },
        Anthropic: {
            ApiKey: {
                Title: "Khóa API Anthropic",
                SubTitle:
                    "Sử dụng Khóa Anthropic tùy chỉnh để vượt qua các hạn chế truy cập mật khẩu",
                Placeholder: "Khóa API Anthropic",
            },

            Endpoint: {
                Title: "Địa chỉ Điểm cuối",
                SubTitle: "Ví dụ: ",
            },

            ApiVerion: {
                Title: "Phiên bản API (phiên bản API claude)",
                SubTitle: "Chọn và nhập một phiên bản API cụ thể",
            },
        },
        Baidu: {
            ApiKey: {
                Title: "Khóa API Baidu",
                SubTitle: "Sử dụng Khóa API Baidu tùy chỉnh",
                Placeholder: "Khóa API Baidu",
            },
            SecretKey: {
                Title: "Khóa Bí mật Baidu",
                SubTitle: "Sử dụng Khóa Bí mật Baidu tùy chỉnh",
                Placeholder: "Khóa Bí mật Baidu",
            },
            Endpoint: {
                Title: "Địa chỉ Điểm cuối",
                SubTitle: "không được hỗ trợ, cấu hình trong .env",
            },
        },
        ByteDance: {
            ApiKey: {
                Title: "Khóa API ByteDance",
                SubTitle: "Sử dụng Khóa API ByteDance tùy chỉnh",
                Placeholder: "Khóa API ByteDance",
            },
            Endpoint: {
                Title: "Địa chỉ Điểm cuối",
                SubTitle: "Ví dụ: ",
            },
        },
        Alibaba: {
            ApiKey: {
                Title: "Khóa API Alibaba",
                SubTitle: "Sử dụng Khóa API Alibaba Cloud tùy chỉnh",
                Placeholder: "Khóa API Alibaba Cloud",
            },
            Endpoint: {
                Title: "Địa chỉ Điểm cuối",
                SubTitle: "Ví dụ: ",
            },
        },
        CustomModel: {
            Title: "Mô hình Tùy chỉnh",
            SubTitle: "Tùy chọn mô hình tùy chỉnh, phân tách bằng dấu phẩy",
        },
        Google: {
            ApiKey: {
                Title: "Khóa API",
                SubTitle: "Lấy Khóa API của bạn từ Google AI",
                Placeholder: "Nhập Khóa API Studio Google AI của bạn",
            },

            Endpoint: {
                Title: "Địa chỉ Điểm cuối",
                SubTitle: "Ví dụ: ",
            },

            ApiVersion: {
                Title: "Phiên bản API (cụ thể cho gemini-pro)",
                SubTitle: "Chọn một phiên bản API cụ thể",
            },
            GoogleSafetySettings: {
                Title: "Cài đặt An toàn Google",
                SubTitle: "Chọn mức độ lọc an toàn",
            },
        },
    },

    Model: "Mô hình",
    Temperature: {
        Title: "Nhiệt độ",
        SubTitle: "Giá trị lớn hơn tạo ra đầu ra ngẫu nhiên hơn",
    },
    TopP: {
        Title: "Top P",
        SubTitle: "Không thay đổi giá trị này cùng với nhiệt độ",
    },
    MaxTokens: {
        Title: "Tối đa Token",
        SubTitle: "Độ dài tối đa của token đầu vào và token được tạo",
    },
    PresencePenalty: {
        Title: "Hình phạt Hiện diện",
        SubTitle:
            "Giá trị lớn hơn làm tăng khả năng nói về các chủ đề mới",
    },
    FrequencyPenalty: {
        Title: "Hình phạt Tần suất",
        SubTitle:
            "Giá trị lớn hơn làm giảm khả năng lặp lại cùng một dòng",
    },
    Plugin: {
        Enable: {
            Title: "Bật Plugin",
            SubTitle: "Bật gọi plugin",
        },
        MaxIteration: {
            Title: "Số lần Lặp tối đa",
            SubTitle: "Số lần lặp tối đa của plugin",
        },
        ReturnIntermediateStep: {
            Title: "Trả về Các Bước Trung gian",
            SubTitle: "Trả về các bước trung gian",
        },
    },
    TTS: {
        Enable: {
            Title: "Bật TTS",
            SubTitle: "Bật dịch vụ chuyển văn bản thành giọng nói",
        },
        Autoplay: {
            Title: "Bật Tự động Phát",
            SubTitle:
                "Tự động tạo giọng nói và phát, bạn cần bật công tắc chuyển văn bản thành giọng nói trước",
        },
        Model: "Mô hình",
        Voice: {
            Title: "Giọng nói",
            SubTitle: "Giọng nói sẽ được sử dụng khi tạo âm thanh",
        },
        Speed: {
            Title: "Tốc độ",
            SubTitle: "Tốc độ của âm thanh được tạo",
        },
        Engine: "Động cơ TTS",
    },
    STT: {
        Enable: {
            Title: "Bật STT",
            SubTitle: "Bật Chuyển Giọng nói thành Văn bản",
        },
        Engine: {
            Title: "Động cơ STT",
            SubTitle: "Động cơ Chuyển văn bản thành giọng nói",
        },
    },
},
Store: {
    DefaultTopic: "Cuộc trò chuyện Mới",
    BotHello: "Xin chào! Tôi có thể giúp gì cho bạn hôm nay?",
    Error: "Đã xảy ra lỗi, vui lòng thử lại sau.",
    Prompt: {
        History: (content: string) =>
            "Đây là tóm tắt lịch sử trò chuyện như một bản tóm tắt: " + content,
        Topic:
            "Vui lòng tạo một tiêu đề từ bốn đến năm từ tóm tắt cuộc trò chuyện của chúng ta mà không có bất kỳ dấu hiệu nào, dấu câu, dấu ngoặc kép, dấu chấm, ký hiệu, văn bản in đậm hoặc văn bản bổ sung. Xóa dấu ngoặc kép bao quanh.",
        Summarize:
            "Tóm tắt cuộc thảo luận một cách ngắn gọn trong 200 từ hoặc ít hơn để sử dụng làm lời nhắc cho ngữ cảnh trong tương lai.",
    },
},
Copy: {
    Success: "Đã sao chép vào clipboard",
    Failed: "Sao chép không thành công, vui lòng cấp quyền truy cập vào clipboard",
},
Download: {
    Success: "Nội dung đã được tải xuống thư mục của bạn.",
    Failed: "Tải xuống không thành công.",
},
Context: {
    Toast: (x: any) => `Với ${x} lời nhắc ngữ cảnh`,
    Edit: "Cài đặt Cuộc trò chuyện Hiện tại",
    Add: "Thêm một Lời nhắc",
    Clear: "Ngữ cảnh đã được xóa",
    Revert: "Khôi phục",
},
Plugin: {
    Name: "Plugin",
    Page: {
        Title: "Mẫu Plugin",
        SubTitle: (count: number) => `${count} mẫu plugin`,
        Search: "Tìm kiếm Mẫu",
        Create: "Tạo",
    },
    Item: {
        View: "Xem",
        Edit: "Chỉnh sửa",
        Delete: "Xóa",
        DeleteConfirm: "Xác nhận để xóa?",
    },
    EditModal: {
        Title: (readonly: boolean) =>
            `Chỉnh sửa Mẫu Plugin ${readonly ? "(chỉ đọc)" : ""}`,
        Download: "Tải xuống",
        Clone: "Nhân bản",
    },
    RuntimeWarning: "Chỉ khả dụng khi triển khai trong môi trường không phải Vercel.",
},
FineTuned: {
    Sysmessage: "Bạn là một trợ lý mà",
},
Mask: {
    Name: "Mặt nạ",
    Page: {
        Title: "Mẫu Lời Nhắc",
        SubTitle: (count: number) => `${count} mẫu lời nhắc`,
        Search: "Tìm kiếm Mẫu",
        Create: "Tạo",
    },
    Item: {
        Info: (count: number) => `${count} lời nhắc`,
        Chat: "Trò chuyện",
        View: "Xem",
        Edit: "Chỉnh sửa",
        Delete: "Xóa",
        DeleteConfirm: "Xác nhận để xóa?",
    },
    EditModal: {
        Title: (readonly: boolean) =>
            `Chỉnh sửa Mẫu Lời Nhắc ${readonly ? "(chỉ đọc)" : ""}`,
        Download: "Tải xuống",
        Clone: "Nhân bản",
    },
    Config: {
        Avatar: "Ảnh đại diện Bot",
        Name: "Tên Bot",
        Sync: {
            Title: "Sử dụng Cấu hình Toàn cầu",
            SubTitle: "Sử dụng cấu hình toàn cầu trong cuộc trò chuyện này",
            Confirm: "Xác nhận để ghi đè cấu hình tùy chỉnh bằng cấu hình toàn cầu?",
        },
        HideContext: {
            Title: "Ẩn Lời Nhắc Ngữ Cảnh",
            SubTitle: "Không hiển thị lời nhắc ngữ cảnh trong trò chuyện",
        },
        Share: {
            Title: "Chia sẻ Mặt nạ này",
            SubTitle: "Tạo liên kết đến mặt nạ này",
            Action: "Sao chép liên kết",
        },
    },
},
NewChat: {
    Return: "Trở lại",
    Skip: "Bắt đầu ngay",
    Title: "Chọn một Mặt nạ",
    SubTitle: "Trò chuyện với Linh hồn phía sau Mặt nạ",
    More: "Tìm thêm",
    NotShow: "Không bao giờ hiển thị lại",
    ConfirmNoShow: "Xác nhận để vô hiệu hóa? Bạn có thể bật lại trong cài đặt sau.",
},

UI: {
    Confirm: "Xác nhận",
    Cancel: "Hủy",
    Close: "Đóng",
    Create: "Tạo",
    Edit: "Chỉnh sửa",
    Export: "Xuất",
    Import: "Nhập",
    Sync: "Đồng bộ",
    Config: "Cấu hình",
},
Exporter: {
    Description: {
        Title: "Chỉ các tin nhắn sau khi xóa ngữ cảnh sẽ được hiển thị",
    },
    Model: "Mô hình",
    Messages: "Tin nhắn",
    Topic: "Chủ đề",
    Time: "Thời gian",
},

URLCommand: {
    Code: "Phát hiện mã truy cập từ URL, xác nhận để áp dụng?",
    Settings: "Phát hiện cài đặt từ URL, xác nhận để áp dụng?",
},
};

export default vi;
