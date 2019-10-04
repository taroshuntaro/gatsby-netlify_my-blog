---
templateKey: blog-post
title: '[Gatsby + Netlify] netlify.tomlでredirectを実現する'
date: 2019-10-03T12:58:45.836Z
description: |-
  Netlifyを使用しているアプリでリダイレクトを実現する方法はいくつかありますが、  
  今回私はnetlify.tomlにリダイレクトルールを記述する方法で実現したのでそのときのメモ。
ogType: article
tags:
  - Netlify
---
Netlifyを使用しているアプリでリダイレクトを実現する方法はいくつかありますが、  
今回私はnetlify.tomlにリダイレクトルールを記述する方法で実現したのでそのときのメモ。

## 実現方法
プロジェクトフォルダのルート（Gitリポジトリのルート）にある**netlify.toml**にリダイレクトルールを記述し、NetlifyにDeploy（Build）することでリダイレクトを実現します。

良く使う（？）基本的で最低限な構文は以下です。
```yaml
[[redirects]]
  from = "リダイレクト元URL"
  to = "リダイレクト先URL"
  # HTTPステータスコード（デフォルト値:301）※省略可
  status = 200
```

他オプションについては下記を参照。
- [参考：Structured configuration | Redirects | Netlify](https://www.netlify.com/docs/redirects/#structured-configuration)
