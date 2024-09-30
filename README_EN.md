<h1 align="center">ChatGPT Plugins</h1>

- A click to get a multi -platform user user interface is well designed, with the support of GPT3, GPT4 & Gemini Pro.

## 🌟 Features

 - **Free deployment with just one click** on Vermcel in less than 1 minute
 - Completely compatible with self-deployed LLM, recommended to use with [RWKV-runner](https://github.com/josstorer/rwkv-runner) or [LocalAI](https://github.com/go-skynet/LocalAI)
 - Privacy is above all, all data is locally stored in the browser
 - Support Markdown: Latex, Mermaid, Mark Code, etc.
 - Design response, dark mode and PWA
 - First first screen download speed (~ 100kb), support for online delivery
 - New features in V2: Create, share and debug your conversation tools with reminders (masks)
 - Great reminder [Prompt](https://github.com/chokiproai/prompt)
 - Automatically compress the history of chatting to support long conversations and save your notification code
 - I18N: English, 简体 中文, 繁体 中文, 日本語, Français, Español, Italiano, Türkçe, Deutsch, Vietnamese, русский, čeština, 한국어, Indonesia.

 ## Main Features

- RAG Functionality
  - Please refer to the documentation [RAG Function Configuration Guide](./docs/rag.md)

- In addition to plugin tools, maintain the features of the original project [Main Features of ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web#features)

- Support for TTS (Text-to-Speech)
  - (Free) Edge TTS
    - Environment variable (optional): `EDGE_TTS_VOICE_NAME`
    - [EDGE_TTS_VOICE_NAME](https://github.com/chokiproai/ChatGPT-Plugins/blob/main/README_EN.md#-environmental-variation)
  - (Paid) OpenAI TTS

- Support for voice input, requires HTTPS access

- Support for GPT-4V (Vision) model
  - The calling method for the vision model has been synchronized from the upstream repository (image compression), there is still a risk of LocalStorage overflow "The maximum capacity of Localstorage is that 5m seems to use other solutions to store images.", if similar issues arise, adjustments will be made to use object storage for images.

- Plugin functionality based on [LangChain](https://github.com/hwchase17/langchainjs), currently supports the following plugins, more will be added in the future
  - Search (priority: `GoogleCustomSearch > SerpAPI > BingSerpAPI > ChooseSearchEngine > DuckDuckGo`)
  
    - [GoogleCustomSearch](https://api.js.langchain.com/classes/langchain_tools.GoogleCustomSearch.html)
  
      - Environment variables:
        - `GOOGLE_SEARCH_API_KEY`
        - `GOOGLE_CSE_ID`
      - Registration reference: [Guide](https://stackoverflow.com/questions/37083058/programmatically-searching-google-in-python-using-custom-search)
  
    - [SerpAPI](https://api.js.langchain.com/classes/langchain_tools.SerpAPI.html)
  
      - Environment variable: `SERPAPI_API_KEY`
      - Registration address: [SerpApi: Google Search API](https://serpapi.com/)
  
    - [BingSerpAPI](https://api.js.langchain.com/classes/langchain_tools.BingSerpAPI.html)
  
      - Environment variable: `BING_SEARCH_API_KEY`
      - Registration address: [Web Search API | Microsoft Bing](https://www.microsoft.com/en-us/bing/apis/bing-web-search-api)
  
    - ChooseSearchEngine (author: [hang666](https://github.com/hang666))
  
      - Environment variable: `CHOOSE_SEARCH_ENGINE`
  
        Options are as follows:
  
        - google
        - baidu
  
      - Explanation: This option connects directly to the search engine, avoiding concerns about API trial limits, but may not be usable due to network issues.
  
      - ⚠ Note: It is known that there are unstable calling situations in the Vercel environment.
  
    - DuckDuckGo
  
  - Calculation
    - [Calculator](https://api.js.langchain.com/classes/langchain_tools_calculator.Calculator.html)
    - [WolframAlpha](https://api.js.langchain.com/classes/langchain_tools.WolframAlphaTool.html)
      - Environment variable: `WOLFRAM_ALPHA_APP_ID`
      - Registration address: [Wolfram LLM API](https://developer.wolframalpha.com/)
    
  - Network Requests
    - [WebBrowser](https://api.js.langchain.com/classes/langchain_tools_webbrowser.WebBrowser.html)
      - Requires using the embedding model `text-embedding-ada-002`
    - PDFBrowser
      - Requires using the embedding model `text-embedding-ada-002`
      - ⚠ Only available when deployed outside of Vercel ⚠

# **📌 Environmental variation**

[Functional configuration guide](./.env.template)

### `Reverse Proxy`

Available when using free `ChatGPTUnofficialProxyAPI`. [Details](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/api%20free.md)

### `CODE` (optional)

Access password, separated by comma.

### `OPENAI_API_KEY` (required)

Your openai api key, join multiple api keys with comma.

### `BASE_URL` (optional)

> Default: `https://api.openai.com`

> Examples: `http://your-openai-proxy.com`

Override openai api request base url.

### `OPENAI_ORG_ID` (optional)

Specify OpenAI organization ID.

### `AZURE_URL` (optional)

> Example: https://{azure-resource-url}/openai

Azure deploy url.

### `AZURE_API_KEY` (optional)

Azure Api Key.

### `AZURE_API_VERSION` (optional)

Azure Api Version, find it at [Azure Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/reference#chat-completions).

### `GOOGLE_API_KEY` (optional)

Google Gemini Pro Api Key.

### `GOOGLE_URL` (optional)

Google Gemini Pro Api Url.

### `ANTHROPIC_API_KEY` (optional)

anthropic claude Api Key.

### `ANTHROPIC_API_VERSION` (optional)

anthropic claude Api version.

### `ANTHROPIC_URL` (optional)

anthropic claude Api Url.

### `BAIDU_API_KEY` (optional)

Baidu Api Key.

### `BAIDU_SECRET_KEY` (optional)

Baidu Secret Key.

### `BAIDU_URL` (optional)

Baidu Api Url.

### `BYTEDANCE_API_KEY` (optional)

ByteDance Api Key.

### `BYTEDANCE_URL` (optional)

ByteDance Api Url.

### `ALIBABA_API_KEY` (optional)

Alibaba Cloud Api Key.

### `ALIBABA_URL` (optional)

Alibaba Cloud Api Url.

### `IFLYTEK_URL` (Optional)

iflytek Api Url.

### `IFLYTEK_API_KEY` (Optional)

iflytek Api Key.

### `IFLYTEK_API_SECRET` (Optional)

iflytek Api Secret.

### `HIDE_USER_API_KEY` (optional)

> Default: Empty

If you do not want users to input their own API key, set this value to 1.

### `DISABLE_GPT4` (optional)

> Default: Empty

If you do not want users to use GPT-4, set this value to 1.

### `ENABLE_BALANCE_QUERY` (optional)

> Default: Empty

If you do want users to query balance, set this value to 1.

### `DISABLE_FAST_LINK` (optional)

> Default: Empty

If you want to disable parse settings from url, set this to 1.

### `CUSTOM_MODELS` (optional)

> Default: Empty
> Example: `+llama,+claude-2,-gpt-3.5-turbo,gpt-4-1106-preview=gpt-4-turbo` means add `llama, claude-2` to model list, and remove `gpt-3.5-turbo` from list, and display `gpt-4-1106-preview` as `gpt-4-turbo`.

To control custom models, use `+` to add a custom model, use `-` to hide a model, use `name=displayName` to customize model name, separated by comma.

User `-all` to disable all default models, `+all` to enable all default models.

For Azure: use `modelName@azure=deploymentName` to customize model name and deployment name.
> Example: `+gpt-3.5-turbo@azure=gpt35` will show option `gpt35(Azure)` in model list.
> If you only can use Azure model, `-all,+gpt-3.5-turbo@azure=gpt35` will `gpt35(Azure)` the only option in model list.

For ByteDance: use `modelName@bytedance=deploymentName` to customize model name and deployment name.
> Example: `+Doubao-lite-4k@bytedance=ep-xxxxx-xxx` will show option `Doubao-lite-4k(ByteDance)` in model list.

### `DEFAULT_MODEL` （optional）

Change default model

### `WHITE_WEBDEV_ENDPOINTS` (optional)

You can use this option if you want to increase the number of webdav service addresses you are allowed to access, as required by the format：
- Each address must be a complete endpoint 
> `https://xxxx/yyy`
- Multiple addresses are connected by ', '

### `DEFAULT_INPUT_TEMPLATE` (optional)

Customize the default template used to initialize the User Input Preprocessing configuration item in Settings.

### `STABILITY_API_KEY` (optional)

Stability API key.

### `STABILITY_URL` (optional)

Customize Stability API url.

## 🌟 Get Started

1. Get [Openai API] (https://platform.openai.com/account/api-keys);
2. Click, remember that `Code` is your page password;
3. Enjoy :)

## 🌟 Access password

This project provides limited access control. Please add the environmental variable with the name `Code` on the Vercel environmental variable page. The value must be the password separated by commas like this:

```
code1,code2,code3
```

After adding or modifying this environmental variation, please re -deploy the project to make the changes valid.

## 🌟 Request

NodeJS >= 18, Docker >= 20


### 🌟 Local Development

```shell
#1. Install Nodejs and Fiber first
#2. Config the local vars env in `.env`
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
bash <(curl -s https://raw.githubusercontent.com/chokiproai/ChatGPT-Plugins/main/scripts/setup.sh)
```