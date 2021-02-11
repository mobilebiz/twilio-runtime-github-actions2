# twilio serverless deploy via github actions

Twilio サーバーレス環境を、GitHub Actions を使って自動化します。  
外部の API でワークフローを起動し、環境変数を動的に与えることが可能なので、異なるアカウントに同じプログラムをデプロイするときなどに役立つと思います。

## install

```sh
git clone https://github.com/mobilebiz/twilio-runtime-github-actions2.git
cd twilio-runtime-github-actions2
npm install && npm audit fix
cp .env.example .env
```

.env ファイルをエディタで開き、以下の内容を更新します。

| 項目                         | 内容                                |
| :--------------------------- | :---------------------------------- |
| GITHUB_ID                    | GitHub のアカウント名               |
| GITHUB_PERSONAL_ACCESS_TOKEN | GitHub のパーソナルアクセストークン |
| TWILIO_ACCOUNT_SID           | Twilio の Account Sid               |
| TWILIO_API_KEY               | Twilio の API Key                   |
| TWILIO_API_SECRET            | Twilio の API Secret                |

GitHub のアカウント名は、`https://github.com/[ここの部分です]/`  
GitHub のパーソナルアクセストークンの取得は[こちらの記事](https://docs.github.com/ja/github/authenticating-to-github/creating-a-personal-access-token)を参照のこと。

## GitHub Actions で実行されるワークフロー

`.github/workflows/auto.yml`

## GitHub へのリクエスト

```sh
node request.js
```
