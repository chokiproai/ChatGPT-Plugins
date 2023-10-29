<h1 align="center">ChatGPT プラグイン</h1>

- [Hugging Face に展開](https://huggingface.co/login?next=%2Fspaces%2Fngoctuanai%2Fchatgptfree%3Fduplicate%3Dtrue)

ワンクリックで、適切に設計されたクロスプラットフォーム ChatGPT Web UI を取得します。

## 索引
- [機能](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md#Functions)
- [ロードマップ](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md#Roadmap)
- [新着情報](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md#新着情報)
- [はじめに](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md#Get-Started)
- [常に最新の状態に保つ](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md#Keep-Updated)
- [アクセスパスワード](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md#Access-Password)
- [要件](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md/tree/main#requirements)
- [開発](https://github.com/chokiproai/ChatGPT-Plugins/blob/master/README%20EN.md/tree/main#development)
- もっと...
## 特徴
- **ワンクリックで 1 分以内に無料で導入**
- Linux/Windows/MacOS 上のコンパクト クライアント (~5MB)、[今すぐダウンロード](https://github.com/Yidadaa/ChatGPT-Next-Web/releases)
- 自己デプロイ型 llms と完全に互換性があり、[RWKV-Runner](https://github.com/josStorer/RWKV-Runner) または [LocalAI](https://github.com/go-skynet/) での使用を推奨します。 ローカルAI)
- プライバシーを第一に、すべてのデータはブラウザにローカルに保存されます
- マークダウンのサポート: LaTex、マーメイド、コード ハイライトなど。
- レスポンシブデザイン、ダークモード、PWA
- 最初の画面の読み込み速度が速く (~100kb)、ストリーミング応答をサポート
- v2 の新機能: プロンプト テンプレート (マスク) を使用してチャット ツールを作成、共有、デバッグします。
- [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) および [awesome-chatgpt-prompts](https://github.com/) を利用した素晴らしいプロンプト f/awesome-chatgpt-prompts)
- トークンを節約しながら、チャット履歴を自動的に圧縮して長時間の会話をサポートします
- I18n: 英語、简体中文、繁体中文、日本語、Français、Español、Italiano、Türkçe、Deutsch、Tiếng Việt、Русский、Čeština、한국어、インドネシア
## ロードマップ
- [x] システム プロンプト: ユーザー定義のプロンプトをシステム プロンプトとして固定 [#138](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/138)
- [x] ユーザー プロンプト: ユーザーはカスタム プロンプトを編集してプロンプト リストに保存できます。
- [x] プロンプト テンプレート: 事前定義されたコンテキスト内プロンプトを使用して新しいチャットを作成します [#993](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/993)
- [x] 画像として共有、ShareGPT に共有 [#1741](https://github.com/Yidadaa/ChatGPT-Next-Web/pull/1741)
- [x] tauri を使用したデスクトップ アプリ
- [x] セルフホスト モデル: [RWKV-Runner](https://github.com/josStorer/RWKV-Runner) および [LocalAI](https://github.com) のサーバー デプロイメントと完全に互換性があります。 /go-skynet/LocalAI): ラマ/gpt4all/rwkv/vicuna/koala/gpt4all-j/cerebras/falcon/dolly など。
- [ ] プラグイン: ネットワーク検索、計算機、その他の API などをサポートします。 [#165](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/165)
＃＃ 新着情報
- 🚀 v2.0 がリリースされました。プロンプト テンプレートを作成して、アイデアを現実にできるようになりました。 これをお読みください: [ChatGPT プロンプト エンジニアリングのヒント: ゼロ、ワン、および少数のショット プロンプト](https://www.allabtai.com/prompt-engineering-tips-zero-one-and-few-shot-prompting/)。
- 🚀 v2.7 会話を画像として共有したり、ShareGPT に共有したりしましょう!
- 🚀 v2.8 では、すべてのプラットフォームで動作するクライアントが提供されています。
## 始めましょう
1. [OpenAI API キー](https://platform.openai.com/account/api-keys) を取得します。
2. [「CODE」がページのパスワードであることを覚えておいてください] をクリックします。
3. 楽しんでください:)
## 常に最新情報を入手
上記の手順に従ってワンクリックで独自のプロジェクトをデプロイした場合、「利用可能な更新」が常に表示されるという問題が発生する可能性があります。 これは、 がこのプロジェクトをフォークする代わりに、デフォルトで新しいプロジェクトを作成するため、更新を正しく検出できなくなるためです。

以下の手順に従って再デプロイすることをお勧めします。

- 元のリポジトリを削除します。
- このプロジェクトをフォークするには、ページの右上隅にあるフォーク ボタンを使用します。
- 再度選択してデプロイします
## アクセスパスワード
このプロジェクトは、限定的なアクセス制御を提供します。 vercel 環境変数のページに「CODE」という名前の環境変数を追加してください。 値は次のようにカンマで区切られたパスワードである必要があります。

「」
コード1、コード2、コード3
「」

この環境変数を追加または変更した後、変更を有効にするためにプロジェクトを再デプロイしてください。
### `OPENAI_API_KEY` (必須)

openai API キー。

### `コード` (オプション)

アクセスパスワードをカンマで区切って指定します。

### `BASE_URL` (オプション)

> デフォルト: `https://api.openai.com`

> 例: `http://your-openai-proxy.com`

openai API リクエストのベース URL をオーバーライドします。

### `OPENAI_ORG_ID` (オプション)

OpenAI組織IDを指定します。

### `HIDE_USER_API_KEY` (オプション)

> デフォルト: 空

ユーザーに独自の API キーを入力させたくない場合は、この値を 1 に設定します。

### `DISABLE_GPT4` (オプション)

> デフォルト: 空

ユーザーに G を使用させたくない場合
