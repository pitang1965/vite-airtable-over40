# vite-airtable-over40
* AirtableとAuth0のAPIを使用し、Over 40 Web Clubのメンバー専用アプリです。
* ReactのフレームワークとしてVite（びーと）を使用しています。
* CSSは styled-componentsを使用しています。

## 環境変数
* .env.sampleをもとに.envを設定してください。
* 値は問い合わせください。
## デプロイ先
* Netlifyにデプロイしていて、Netelify Functionsを使用しています。
* [netlify-cli](https://cli.netlify.com/) をインストールしてください。

## 使用しているサービス
### Auth0
* Twitterログインして使うアプリとしています。
* 次のRoleをAuth0のダッシュボードで設定する運用としています。
  * admin：なんでもできる。
  * ordinary-member：メンバーの削除や追加は制限されます。
### Airtable
* メンバー情報などを格納しています。

## 利用可能なスクリプト
### `npm run build`
本番環境のアプリを dist フォルダーにビルドします。

### `npm run netlify`
アプリを開発環境でNetlify Functionとともに実行します。
