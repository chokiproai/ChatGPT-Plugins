<h1 align="center">ChatGPT Plugins</h1>

## [部署在 Hugging Face 上](https://huggingface.co/login?next=%2Fspaces%2Fngoctuanai%2Fchatgptfree%3Fduplicate%3Dtrue)

- 一键获得精心设计的跨平台 ChatGPT Web UI。

## 特征
- **一键免费部署** 在 1 分钟内完成
- Linux/Windows/MacOS 上的紧凑型客户端 (~5MB)，[立即下载](https://github.com/Yidadaa/ChatGPT-Next-Web/releases)
- 与自行部署的llms完全兼容，推荐与[RWKV-Runner](https://github.com/josStorer/RWKV-Runner)或[LocalAI](https://github.com/go-skynet/)一起使用 本地人工智能）
- 隐私第一，所有数据都存储在浏览器本地
- Markdown 支持：LaTex、mermaid、代码高亮等。
- 响应式设计、深色模式和 PWA
- 首屏加载速度快（~100kb），支持流式响应
- v2 中的新增功能：使用提示模板（掩码）创建、共享和调试您的聊天工具
- 由 [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) 和 [awesome-chatgpt-prompts](https://github.com/f/真棒-chatgpt-提示)
- 自动压缩聊天历史记录以支持长时间对话，同时保存您的代币
- 国际化：英语、简体中文、繁体中文、日本语、法语、西班牙语、意大利语、土耳其语、德语、Tiếng Việt、Русский、Čeština、한국어、印度尼西亚
## 路线图
- [x] 系统提示：将用户定义的提示固定为系统提示 [#138](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/138)
- [x] 用户提示：用户可以编辑自定义提示并将其保存到提示列表中
- [x] 提示模板：使用预定义的上下文提示创建新聊天 [#993](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/993)
- [x] 分享为图片，分享到 ShareGPT [#1741](https://github.com/Yidadaa/ChatGPT-Next-Web/pull/1741)
- [x] 带有 tauri 的桌面应用程序
- [x] 自托管模型：完全兼容[RWKV-Runner](https://github.com/josStorer/RWKV-Runner)，以及[LocalAI](https://github.com)的服务器部署 /go-skynet/LocalAI): llama/gpt4all/rwkv/vicuna/koala/gpt4all-j/cerebras/falcon/dolly 等
- [x] 插件：支持网络搜索、计算器、任何其他 api 等。 [#165](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/165)
＃＃ 什么是新的
- 🚀 v2.0 发布，现在您可以创建提示模板，将您的想法变成现实！ 阅读本文：[ChatGPT 提示工程技巧：零、一和少量镜头提示](https://www.allabtai.com/prompt-engineering-tips-zero-one-and-few-shot-prompting/)。
- 🚀 v2.7 让我们以图像形式分享对话，或分享到 ShareGPT！
- 🚀 v2.8 现在我们有了一个可以跨所有平台运行的客户端！
## 开始使用
1. 获取 [OpenAI API Key](https://platform.openai.com/account/api-keys)
2. 点击记住“CODE”是您的页面密码；
3.享受吧:)
## 保持更新
如果您按照上述步骤一键部署了自己的项目，可能会遇到不断出现“Updates available”的问题。 这是因为会默认为你创建一个新项目而不是fork这个项目，导致无法正确检测更新。

我们建议您按照以下步骤重新部署：

- 删除原来的存储库；
- 使用页面右上角的fork按钮来fork该项目；
- 再次选择并部署
## 访问密码
该项目提供有限的访问控制。 请在 vercel 环境变量页面添加名为“CODE”的环境变量。 该值应该是用逗号分隔的密码，如下所示：

````
代码1,代码2,代码3
````

添加或修改此环境变量后，请重新部署项目以使更改生效。
### `OPENAI_API_KEY`（必需）

您的 openai api 密钥。

### `反向代理`

可使用免费的“ChatGPTUnofficialProxyAPI”。[详细信息](https://api.chatanywhere.org/v1/oauth/free/github/render)

### `代码`（可选）

访问密码，以逗号分隔。

### `BASE_URL`（可选）

> 默认：`https://api.openai.com`

> 示例：`http://your-openai-proxy.com`

覆盖 openai api 请求基本 url。

### `OPENAI_ORG_ID`（可选）

指定 OpenAI 组织 ID。

### `HIDE_USER_API_KEY`（可选）

> 默认：空

如果您不希望用户输入自己的 API 密钥，请将此值设置为 1。

### `DISABLE_GPT4`（可选）

> 默认：空

如果您不希望用户使用 GPT-4，请将此值设置为 1。

### `HIDE_BALANCE_QUERY`（可选）

> 默认：空

如果您不希望用户查询余额，请将此值设置为1。

## 要求

NodeJS >= 18，Docker >= 20

## 发展

在开始开发之前，您必须在项目根目录创建一个新的 `.env.local` 文件，并将您的 api 密钥放入其中：

````
OPENAI_API_KEY=<此处为您的 api 密钥>

````

### 本地发展

````外壳
# 1.先安装nodejs和yarn
# 2. 在 `.env.local` 中配置本地环境变量
# 3.运行
纱线安装
纱线开发
````

### 壳

````外壳
bash <(curl -s https://raw.githubusercontent.com/chokiproai/ChatGPT-Plugins/main/scripts/setup.sh)
````

## 执照

[麻省理工学院](https://opensource.org/license/mit/)
