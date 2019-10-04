---
templateKey: blog-post
title: '[Gatsby] gatsby-remark-vscodeでcodeブロックにスタイルを適用する。'
date: 2019-09-25T13:26:00.646Z
description: >-
  gatsby-remark-vscodeでcodeブロックにスタイルを適用する。markdownで書いた記事のcodeブロックにダークでかっこいいstyleを適用したいと思い、

  gatsby-remark-vscodeというプラグインを使って実現したときのメモ。
ogType: article
tags:
  - Gatsby
  - JavaScript
---
markdownで書いた記事のcodeブロックにダークでかっこいいstyleを適用したいと思い、  
**gatsby-remark-vscode**というプラグインを使って実現したときのメモ。

これを使うとvscodeが標準で持っている配色テーマのようなstyleをcodeブロックに適用できるみたいです。

## gatsby-remark-vscodeの導入方法
はじめにプラグインをインストール。
```bash
npm install gatsby-remark-vscode
```

**gatsby-config.js**に以下の記述を追加。  
（今回はオプションは最低限の設定）
```js
resolve: 'gatsby-transformer-remark',
options: {
  plugins: [
    // 'gatsby-transformer-remark'の'plugins'配下に記述
    {
      resolve: 'gatsby-remark-vscode',
      options: {
        colorTheme: 'Dark+ (default dark)'
    }
  },
```

styleを適用したいコンポーネント（テンプレート）にてcssを読み込めば適用完了。
```js
import 'gatsby-remark-vscode/styles.css';
```

他オプションや設定できる配色テーマについては下記を参照。
- [参考：gatsby-remark-vscode - npm](https://www.npmjs.com/package/gatsby-remark-vscode)
