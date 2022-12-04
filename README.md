# next-blog-microcms-sample


アウトプットとして、microCMS を使った ブログのサンプルを作成。

フロントは Next.js (TypeScript)

サーバーサイドは CMS を利用。[microCMS](https://microcms.io/)

url はこちら
https://github.com/massu-159/next-blog-microcms-sample

## 目次

1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install

または

yarn
```

### 1-2. アプリケーション実行

```
npm run dev

または

yarn dev
```

### 1-3. 環境変数設定
`.env.local`ファイルを作成し、環境変数を設定してください。
```
API_KEY=XXXXXXXXX (microCMSのAPIキー)
SERVICE_DOMAIN=XXXXXXXXX
```

## 2. アプリケーションの仕様

### 2-1. 仕様

- Blogデータ
  - Blogデータ一覧表示
  - Blogデータ詳細表示

### 2-2. 構成技術

- next : 13.0.6
- react : 18.2.0
- react-dom : 18.2.0
- microcms-js-sdk : 2.3.2