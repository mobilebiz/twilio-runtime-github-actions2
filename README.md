# twilio serverless deploy via github actions

Twilio サーバーレス環境を、GitHub Actions を使って自動化します。  
外部の API でワークフローを起動し、環境変数を動的に与えることが可能なので、異なるアカウントに同じプログラムをデプロイするときなどに役立つと思います。

## install

```sh
git clone https://github.com/mobilebiz/twilio-runtime-github-actions2.git
cd twilio-runtime-github-actions2
npm install && npm audit fix
```
