# はまったいまー

はまったいまーは、ハマった時に時間を浪費してしまう問題を解決したいプログラミング学習者のための、タイマー付きメモアプリです。

![image](https://user-images.githubusercontent.com/33394676/196019650-9b408a69-7a70-49f6-bb56-c6c03fc3a1d0.png)

## 主な機能

### タイマー

はじめにタイマーをセットしておき、その時間になるとお知らせします。

時間を区切って取り組むことで、詰まってしまった時は人に質問してみるなど次の手を打ちやすくなります。

![image](https://user-images.githubusercontent.com/33394676/196016394-0d85cdb4-4dd5-4c3f-9e0b-29b57cc19e76.png)

### メモ

入力フォームを埋める形で、問題解決のために何を考えて何をやったのか、記録を作ることができます。

エラー対応中は慌ててしまったり視野が狭くなったりしがちですが、書くことで自分を客観視しやすくなります。また、後日同じような事象が起こった時に、前回はどうしたのか調べる際にも役立ちます。

入力中のメモは画面右側にリアルタイムでプレビューが表示されます。

![image](https://user-images.githubusercontent.com/33394676/196019945-6d92df1d-f01d-432c-96bf-6b86e13a203a.png)

### メモのエクスポート

入力したメモを保存する方法を2種類用意しています。
- MarkdownファイルとしてGistに保存
- Markdown形式でクリップボードにコピー

## 使用技術

### フレームワーク

- [Next.js](https://nextjs.org/) + [Vercel](https://vercel.com/)

### テスト

- ユニットテスト
  - [Jest](https://jestjs.io/ja/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- E2Eテスト
  - [Playwright](https://playwright.dev/)

### 外部サービス連携

- [GitHub OAuth Apps](https://docs.github.com/ja/developers/apps/getting-started-with-apps/about-apps#oauth-apps-%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6) / [GitHub REST API](https://docs.github.com/ja/rest)
- [Cloudinary API](https://cloudinary.com/documentation/cloudinary_references)

## 開発環境の構築手順

1. リポジトリのClone
   ```
   $ git clone https://github.com/yocajii/hamattimer.git
   ```
2. 環境変数の設定
   `.env.local.template`を参考に`.env.local`を作成してください
   - 事前に以下を行い、Client secret等の必要な情報を取得する必要があります
     - GitHub OAuth Appの作成
     - CloudinaryのUpload API利用設定
3. 依存パッケージインストール
   ```
   $ yarn install
   ```
4. 開発サーバー起動
   ```
   $ yarn dev
   ```

### Lint & Test

- Lint
  ```
  $ yarn lint
  ```
- Run tests
  ```
  $ yarn test
  ```
