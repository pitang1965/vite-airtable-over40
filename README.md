# vite-airtable-over40
## 概要
* Over 40 Web Clubのメンバー専用アプリです。

## 使用しているサービス及びライブラリ等
### [Airtable](https://airtable.com/)
* スプレッドシートの親しみやすさでリレーショナルデータベースを作成及び共有できるサービス。
* 本アプリではメンバー情報を格納し、apiを介して取得や更新をおこなっています。
### [antd](https://www.npmjs.com/package/antd) ([Ant Design](https://ant.design/))
* ReactのUIライブラリ
* 本アプリでは、[Modal](https://www.npmjs.com/package/antd)を使用しています。
### [Auth0](https://auth0.com/)
* 本アプリは、Twitterログインして使います。
* 次のRoleをAuth0のダッシュボードで設定する運用としています。
  * admin：なんでもできる。
  * ordinary-member：メンバーの削除や追加は制限されます。
### [Axios](https://axios-http.com/)
* プロミスベースのHTTPクライアントでブラウザとNode.jsで使用できます。
* 本アプリではNetlify Functions (Node.js)で使用しています。
###  [@auth0/auth0-react](https://www.npmjs.com/package/@auth0/auth0-react)
* React APA用のAuth0 SDK
### [jotai](https://jotai.pmnd.rs/)
* Reactの状態管理ライブラリ
* 本アプリでは、ログインしたユーザーのロール(Auth0で設定）に関する情報をアプリ内でグローバルにアクセスするために使用しています。
### [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* 本アプリでは、JSON Web Tokensをデコードしたり、署名が有効か検証したりするために使用しています。
### [jwks-rsa](https://www.npmjs.com/package/jwks-rsa)
* JSON Web Key Set エンドポイントから署名キーを取得するライブラリ。
### [jwt-decode](https://www.npmjs.com/package/jwt-decode)
* サーバーサイドでバリデートされたJWTをブラウザでデコードするライブラリ。
* 本アプリでは、JWTトークンの Auth0 の permissions からユーザーのロールを決定するのに使っています。
### [netlify-cli](https://cli.netlify.com/)
* Netlifyのコマンドラインツール。
* 本アプリでは、Netlify Functionsを開発環境で実行するのに使用しています。
### [prop-types](https://www.npmjs.com/package/prop-types)
* React propsの型チェック
### [React](https://ja.reactjs.org/)
* ユーザインタフェース構築のためのJavaScriptのライブラリ
* 本アプリではプロジェクトの雛形はViteで生成しています。
### [react-dom](https://www.npmjs.com/package/react-dom)
* ReactのDOMのエントリポイントを提供するパッケージ。
* 本アプリでは、main.jsx で使っています。
### [react-hot-toast](https://react-hot-toast.com/)
* Reactの通知のライブラリ。
* 本アプリでは、Safariブラウザからアクセスしたときに表示する通知に使っています。
### [react-icons](https://react-icons.github.io/react-icons/)
* React用のアイコンライブラリ。
* 本アプリではSNSアイコンに使っています。
### [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* React用のルーティングライブラリ。
* 本アプリではページの切り替えやページの保護（認証されていないと使えない）に使用しています。
### [styled-components](https://styled-components.com/)
* CSS in JSライブラリ(JavaScriptでスタイルを記述）の一種。
* タグ付きテンプレートリテラルの中に書くcssは従来のcssそのもの。
* ローカルスコープが可能なので長い命名が不要です。
* Reactコンポーネントのようにスタイルが指定できます(className='button'といったマッピングが不要）。
### [swr](https://swr.vercel.app/ja)
* データ取得のための React Hooks ライブラリ.
* SWR は、まずキャッシュからデータを返し（stale）、次にフェッチリクエストを送り（revalidate）、最後に最新のデータを持ってくるという戦略(stale-while-revalidate)から来ています。
* 本アプリでは、Airtableからメンバ情報を継続的かつ自動的に受け取るために使用しています。
### Twitter
* 本アプリでは、Auth0と連携し、Twitterログインを用いています。
* [Auth0での設定](https://marketplace.auth0.com/integrations/twitter-social-connection)
* [Twitter Devloper Portal](https://developer.twitter.com/en/portal/dashboard)。
### [Vite](https://ja.vitejs.dev/)
* 次世代フロントエンドツール。
* 「びーと」と読みます。
* 本アプリでは、ViteによりReactとJavaScriptを用いたプロジェクトを生成しています。
* esbuildを使用して高速で快適な開発をおこない、プロダクションではRollupでバンドルします。
## 環境変数
* .env.sampleをもとに.envを設定してください。
* 値は問い合わせください。
## デプロイ先
* Netlifyにデプロイしていて、Netelify Functionsを使用しています。
* [netlify-cli](https://cli.netlify.com/) をインストールしてください。

## 利用可能なスクリプト
### `npm run build`
本番環境のアプリを dist フォルダーにビルドします。

### `npm run netlify`
アプリを開発環境でNetlify Functionとともに実行します。
