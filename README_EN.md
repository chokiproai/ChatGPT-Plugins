<h1 align="center">ChatGPT Plugins</h1>

- One-click deployment for a well-designed, cross-platform ChatGPT web UI, with support for GPT3, GPT4 & Gemini Pro.

> [!WARNING]
> This project's plugin feature is based on the [OpenAI Function Calling API](https://platform.openai.com/docs/guides/function-calling) for implementation. Forwarding GitHub Copilot interface or similar simulated interfaces will not be able to correctly call the plugin feature!
>
> [Experimental] Added function calling support for the new Claude model.
>
> Since Anthropic does not provide an embedding model, please add the ollama embedding model configuration for the RAG feature. If not configured, the **WebBrowser** and **PDFBrowser** plugins will not be usable.

## 🌟 Features

- **Free one-click deployment** on Vercel in less than 1 minute
- Fully compatible with self-deployed LLMs, recommended for use with [RWKV-Runner](https://github.com/josStorer/RWKV-Runner) or [LocalAI](https://github.com/go-skynet/LocalAI)
- Privacy first, all data stored locally in the browser
- Markdown support: LaTex, mermaid, code highlighting, etc.
- Responsive design, dark mode, and PWA
- Fast first screen loading speed (~100kb), supports streaming responses
- New in v2: create, share, and debug your chat tools with prompt templates (masks)
- Awesome prompt engineering [Prompt](https://github.com/chokiproai/prompt)
- Automatic compression of chat history to support long conversations while saving your tokens
- I18n: English, 简体中文, 繁体中文, 日本語, Français, Español, Italiano, Türkçe, Deutsch, Tiếng Việt, Русский, Čeština, 한국어, Indonesia.

- [x] Support using DuckDuckGo as the default search engine

  If not configured, it will default to using `DuckDuckGo` as the search plugin.

- [x] Plugin list page development

- [x] Support enabling/disabling specified plugins

- [x] Support Agent parameter configuration ( maxIterations, returnIntermediateSteps, etc.)

- [x] Support enabling/disabling plugins at the ChatSession level

  Only when using models other than `0301` and `0314` will there be a plugin switch, other models are off by default and the switch will not be displayed.

  The latest version has removed the above two models.

- [x] Support voice input

- [x] Support uploading other file types

- [ ] Support Azure Storage

- [ ] Support Fooocus-API plugin

- [ ] Support configuring the Key required for the plugin in the UI

## 🌟 Main Features

- **RAG Functionality**
  - Please refer to the documentation [RAG Function Configuration Guide](./docs/rag.md)

- In addition to plugin tools, retains the features of the original project [Main Features of ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web#features)

- Supports TTS (Text-to-Speech)
  - (Free) Edge TTS
    - Environment variable (Optional): `EDGE_TTS_VOICE_NAME`
    - [EDGE_TTS_VOICE_NAME](https://github.com/chokiproai/ChatGPT-Plugins/blob/main/README_VN.md#-environment-variable)
  - (Paid) OpenAI TTS

- Supports speech input, requires HTTPS access

- Supports GPT-4V model (vision)
  - Synchronized the way the vision model is called from the upstream repository (image compression), still at risk of exceeding LocalStorage limits "LocalStorage maximum size is 5MB. It seems other storage solutions are needed for images.", will adjust to use object storage services for images if similar issues occur.

- Plugin functionality based on [LangChain](https://github.com/hwchase17/langchainjs), currently supporting the following plugins, more to come in the future
  - Search (priority: `GoogleCustomSearch > SerpAPI > BingSerpAPI > ChooseSearchEngine > DuckDuckGo`)
  
    - [GoogleCustomSearch](https://api.js.langchain.com/classes/langchain_tools.GoogleCustomSearch.html)
  
      - Environment variables:
        - `GOOGLE_PLUGIN_API_PROXY_PREFIX` and `DDG_API_PROXY_PREFIX` use similar methods
        - `GOOGLE_SEARCH_API_KEY`
        - `GOOGLE_CSE_ID`
      - Registration guide: [Guide](https://stackoverflow.com/questions/37083058/programmatically-searching-google-in-python-using-custom-search)
  
    - [SerpAPI](https://api.js.langchain.com/classes/langchain_tools.SerpAPI.html)
  
      - Environment variable: `SERPAPI_API_KEY`
      - Registration link: [SerpApi: Google Search API](https://serpapi.com/)
  
    - [BingSerpAPI](https://api.js.langchain.com/classes/langchain_tools.BingSerpAPI.html)
  
      - Environment variable: `BING_SEARCH_API_KEY`
      - Registration link: [Web Search API | Microsoft Bing](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api)
  
    - ChooseSearchEngine (author: [hang666](https://github.com/hang666))
  
      - Environment variables:
        - `CHOOSE_SEARCH_ENGINE`
        - `GOOGLE_PLUGIN_API_PROXY_PREFIX` and `DDG_API_PROXY_PREFIX` use similar methods, will only proxy for Google
  
      Available options:
  
        - google
        - baidu
  
      - Explanation: this option connects directly to the search engine, avoiding concerns about API trial limits, but may be unavailable due to network issues.
  
      - ⚠ Note: Unstable calls are known in the vercel environment
  
    - DuckDuckGo
        - Environment variable: `DDG_API_PROXY_PREFIX`
  
        - After configuration, the config content will be prepended to DuckDuckGo plugin-related interfaces. For example, `DDG_API_PROXY_PREFIX=https://example.com/` will make the final request: `https://example.com/https://duckduckgo.com`
  
        - Can be combined with similar proxy projects like 1234567Yang/cf-proxy-ex to proxy DuckDuckGo plugin-related interfaces.
  
  - Calculations
    - [Calculator](https://api.js.langchain.com/classes/langchain_tools_calculator.Calculator.html)
    - [WolframAlpha](https://api.js.langchain.com/classes/langchain_tools.WolframAlphaTool.html)
      - Environment variable: `WOLFRAM_ALPHA_APP_ID`
      - Registration link: [Wolfram LLM API](https://developer.wolframalpha.com/)
    
  - Network Requests
    - [WebBrowser](https://api.js.langchain.com/classes/langchain_tools_webbrowser.WebBrowser.html)
      - Requires embedding model `text-embedding-ada-002`
    - PDFBrowser
      - Requires embedding model `text-embedding-ada-002`
      - ⚠ Only available when not deployed on Vercel ⚠

  - Others
    - [Wiki](https://api.js.langchain.com/classes/langchain_tools.WikipediaQueryRun.html)
    - DALL-E 3
      - The DALL-E 3 plugin requires object storage service configuration, please refer to [Object Storage Service Configuration Guide](./docs/s3-oss.md)
      - If image conversion is not needed, configure `DALLE_NO_IMAGE_STORAGE=1`, this will use the temporary URL returned by the DALL-E service to display images. Note: the link is time-sensitive.
      - By default, it uses the model `dall-e-3`. To use `dall-e-2`, configure the environment variable `DALLE_MODEL=dall-e-2`.
    - StableDiffusion
      - This plugin is in experimental version, major changes may happen in the future, please use with caution.
      - Using this plugin requires certain expertise; issues related to Stable Diffusion are outside the scope of this project. If you're certain about using this plugin, refer to [Stable Diffusion Plugin Configuration Guide](./docs/stable-diffusion-plugin.md).
      - StableDiffusion plugin requires object storage service configuration, please refer to [Object Storage Service Configuration Guide](./docs/s3-oss.md).
    - Arxiv
    - Bilibili-related plugin (author: [fred913](https://github.com/fred913))
      - Fetch Bilibili video information (Recommended to enable this plugin with the ones below)
      - Search Bilibili videos
        - Requires configuring the environment variable `BILIBILI_COOKIES`.
      - Recognize Bilibili songs
        - Requires prior deployment of [bilivid-metaprocess-server](https://github.com/fred913/bilivid-metaprocess-server) and configuring the environment variable `BILIVID_METAPROCESS_SERVER_ADDRESS`.
      - Summarize Bilibili videos
        - Requires configuring the environment variable `BILIBILI_COOKIES`.

- Supports gemini-pro, gemini-pro-vision models
  - Currently unsupported features
    - **Plugin functionality**
  - How to activate
    - Configure `GOOGLE_API_KEY`, which can be obtained here: https://ai.google.dev/tutorials/setup
    - Configure custom API URL (optional) `GEMINI_BASE_URL`, you can use my project to set up a proxy service based on vercel: [vercel-ai-proxy](https://github.com/Hk-Gosuto/vercel-ai-proxy)
  - FAQ reference: [Gemini Prompting FAQs](https://js.langchain.com/docs/integrations/chat/google_generativeai#gemini-prompting-faqs)
  - ⚠ Note about gemini-pro-vision [here](https://github.com/Hk-Gosuto/ChatGPT-Next-Web-LangChain/issues/203):
    - Each conversation must include image data, or you will encounter the error `Add an image to use models/gemini-pro-vision, or switch your model to a text model.`
    - Only single-turn conversations are supported, multi-turn conversations will encounter the error `Multiturn chat is not enabled for models/gemini-pro-vision`.

- Supports local storage when not running on Vercel

  - If your program is not running in the Vercel environment and you haven’t configured the `S3_ENDPOINT` and `R2_ACCOUNT_ID` parameters, uploaded files will be saved by default in the `/app/uploads` directory.

## **📌 Environment Variables**

[Function configuration guide](./.env.template)

### `Reverse Proxy`

Available when using the free `ChatGPTUnofficialProxyAPI`. [Details](./docs/api-free.md)

### `CODE` (Optional)

Access password, optional, multiple passwords can be separated by commas.

**Warning**: If you do not fill in this item, anyone can directly use your website after deployment, which may cause your token to be consumed quickly, so it is recommended that you fill in this item.

### `OPENAI_API_KEY` (Required)

OpanAI key, the API key you registered on the openai account page.

### `BASE_URL` (Optional)

> Default: `https://api.openai.com`

> Example: `http://your-openai-proxy.com`

Openai interface proxy URL, if you manually configure the OpenAI interface agent, please fill in this option.

> If you encounter SSL certificate issues, please set the protocol of `BASE_URL` to http.

### `OPENAI_ORG_ID` (Optional)

Specify the OpenAI organization ID.

### `AZURE_URL` (Optional)

> Example: https://{azure-resource-url}/openai/deployments
>
> ⚠️ Note: This is different from the configuration of the original project, no need to specify {deploy-name}, just change the model name to {deploy-name} to switch between different models.
>
> ⚠️ Plugins such as DALL-E that require OpenAI keys do not currently support Azure.

Azure deployment URL.

### `AZURE_API_KEY` (Optional)

Azure API key.

### `AZURE_API_VERSION` (Optional)

Azure API version, find it at [Azure documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#chat-completions).

### `GOOGLE_API_KEY` (Optional)

Google Gemini Pro API key.

### `GOOGLE_URL` (Optional)

Google Gemini Pro API URL.

### `ANTHROPIC_API_KEY` (Optional)

anthropic claude API key.

### `ANTHROPIC_API_VERSION` (Optional)

API version of anthropic claude.

### `ANTHROPIC_URL` (Optional)

API URL of anthropic claude.

### `BAIDU_API_KEY` (Optional)

Baidu API key.

### `BAIDU_SECRET_KEY` (Optional)

Baidu secret key.

### `BAIDU_URL` (Optional)

Baidu API URL.

### `BYTEDANCE_API_KEY` (Optional)

ByteDance API key.

### `BYTEDANCE_URL` (Optional)

ByteDance API URL.

### `ALIBABA_API_KEY` (Optional)

Alibaba Cloud API key.

### `ALIBABA_URL` (Optional)

Alibaba Cloud Api Url.

### `IFLYTEK_URL` (Optional)

iflytek Api Url.

### `IFLYTEK_API_KEY` (Optional)

iflytek Api Key.

### `IFLYTEK_API_SECRET` (Optional)

iflytek Api Secret.

### `STABILITY_API_KEY` (Optional)

Stability API key.

### `STABILITY_URL` (Optional)

Custom stability API url.

### `DEEPSEEK_API_KEY` (Optional)

DeepSeek Api Key.

### `DEEPSEEK_URL` (Optional)

DeepSeek Api Url.

### `SILICONFLOW_API_KEY` （Optional）

Silicon-based flow API Key.

### `SILICONFLOW_URL` （Optional）

Silicon-based flow API URL.

### `TAVILY_API_KEY`

Tavily API Key for universal search capabilities
Get the address: https://tavily.com

### `TAVILY_MAX_RETURNS` （Optional）

The maximum number of results returned by the general search function, default is 10

### `HIDE_USER_API_KEY` (Optional)

> Default: Empty

If you don't want users to enter their own API key, set this value to 1.

### `DISABLE_GPT4` (Optional)

> Default: Empty

If you don't want users to use GPT-4, set this value to 1.

### `ENABLE_BALANCE_QUERY` (Optional)

> Default: Empty

If you want the user to query the balance, set this value to 1.

### `DISABLE_FAST_LINK` (Optional)

If you want to disable parsing prefab settings from links, set this environment variable to 1.

For Azure: use `modelName@azure=deploymentName` to customize the model name and deployment name.
> Example: `+gpt-3.5-turbo@azure=gpt35` will display the option `gpt35(Azure)` in the model list.
> If you can only use the Azure model, `-all,+gpt-3.5-turbo@azure=gpt35` will make `gpt35(Azure)` the only option in the model list.

For ByteDance: use `modelName@bytedance=deploymentName` to customize the model name and deployment name.
> Example: `+Doubao-lite-4k@bytedance=ep-xxxxx-xxx` will display the option `Doubao-lite-4k(ByteDance)` in the model list.

### `CUSTOM_MODELS` (Optional)

> Example: `+qwen-7b-chat,+glm-6b,-gpt-3.5-turbo,gpt-4-1106-preview=gpt-4-turbo` means adding `qwen-7b-chat` and `glm-6b` to the model list, while removing `gpt-3.5-turbo` from the list, and displaying the model name `gpt-4-1106-preview` under the name `gpt-4-turbo`.
> If you want to disable all models first, then enable the specified model, you can use `-all,+gpt-3.5-turbo`, which means only enable `gpt-3.5-turbo`.

Used to control the model list, use `+` to add a model, use `-` to hide a model, and use `model name=display name` to customize the display name of the model, the model names are separated by commas.

In Azure mode, support the use of the syntax `modelName@azure=deploymentName` to configure the model name and deployment name (deploy-name).
> Example: `+gpt-3.5-turbo@azure=gpt35` this configuration will display an option `gpt35(Azure)` in the model list.
> If you can only use Azure mode, you can install `-all,+gpt-3.5-turbo```
=gpt35` to make `gpt35(Azure)` the default for conversations.

In ByteDance mode, support the use of the syntax `modelName@bytedance=deploymentName` to configure the model name and deployment name (deploy-name).
> Example: `+Doubao-lite-4k@bytedance=ep-xxxxx-xxx` this configuration will display an option `Doubao-lite-4k(ByteDance)` in the model list.

### `DEFAULT_MODEL` (Optional)  
Change the default model.

### `USE_REMOTE_MODELS` (Optional)  
If you want to use a remote model list, you can set the value to 1.  
Can be used in conjunction with the `CUSTOM_MODELS` parameter.  
It is recommended to use in conjunction with intermediate projects such as `one-api`.

### `WHITE_WEBDAV_ENDPOINTS` (Optional)

You can use this option if you want to increase the number of allowed webdav service addresses to be accessed, following the format requirements:
- Each address must be a complete endpoint
> `https://xxxx/yyy`
- Multiple addresses are connected by ', '

### `DEFAULT_INPUT_TEMPLATE` (Optional)

Customize the default template used to initialize the User Input Preprocessing configuration item in Settings.

### `EDGE_TTS_VOICE_NAME`（Optional）

[🌟 Guide](https://github.com/chokiproai/ChatGPT-Plugins/blob/main/README_VN.md#chức-năng-chính)

### `USE_OPENAI_ENDPOINT_FOR_ALL_MODELS`（Optional）

Configure all models to use OpenAI routing, which is useful when using transit projects such as `one-api`
Just set this environment variable to 1

## 🌟 Getting Started

1. Get [OpenAI API Key](https://platform.openai.com/account/api-keys);
2. Click  remember that `CODE` is your page password;
3. Enjoy :)

## 🌟 Access Password

This project provides limited access control. Please add an environment variable named `CODE` on the vercel environment variable page. The value should be a comma-separated password like this:

```
code1,code2,code3
```

After adding or modifying this environment variable, please redeploy the project for the changes to take effect.

## 🌟 Requirements

NodeJS >= 18, Docker >= 20

### 🌟 Local Development

```shell
#1. install nodejs and yarn first
#2. config the local env vars in `.env`
#3. run
yarn install
yarn dev
```

### 🌟 Dockerfile (Recommended)

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
bash <(curl -s [https://raw.githubusercontent.com/chokiproai/ChatGPT-Plugins/main/scripts/setup.sh](https://raw.githubusercontent.com/chokiproai/ChatGPT-Plugins/main/scripts/setup.sh))
```