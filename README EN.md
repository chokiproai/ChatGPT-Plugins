<h1 align="center">ChatGPT Plugins</h1>

- One-Click to get well-designed cross-platform ChatGPT web UI.

## Get Started
1. Get [OpenAI API Key](https://platform.openai.com/account/api-keys);
2. Click remember that `CODE` is your page password;
3. Enjoy :)
## Keep Updated
If you have deployed your own project with just one click following the steps above, you may encounter the issue of "Updates Available" constantly showing up. This is because will create a new project for you by default instead of forking this project, resulting in the inability to detect updates correctly.

We recommend that you follow the steps below to re-deploy:

- Delete the original repository;
- Use the fork button in the upper right corner of the page to fork this project;
- Choose and deploy in again
## Access Password
This project provides limited access control. Please add an environment variable named `CODE` on the vercel environment variables page. The value should be passwords separated by comma like this:

```
code1,code2,code3
```

After adding or modifying this environment variable, please redeploy the project for the changes to take effect.

## Environment Variables

[Details](./env.md)

## Requirements

NodeJS >= 18, Docker >= 20

## Development

Before starting development, you must create a new `.env.local` file at project root, and place your api key into it:

```
OPENAI_API_KEY=<your api key here>

```

### Local Development

```shell
# 1. install nodejs and yarn first
# 2. config local env vars in `.env.local`
# 3. run
yarn install
yarn dev
```

### Shell

```shell
bash <(curl -s https://raw.githubusercontent.com/chokiproai/ChatGPT-Plugins/main/scripts/setup.sh)
```

## LICENSE

[MIT](https://opensource.org/license/mit/)
