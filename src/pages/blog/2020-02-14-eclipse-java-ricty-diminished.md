---
templateKey: blog-post
title: '[Eclipse] Javaエディタのフォントに「Ricty Diminished」を設定する。'
date: 2020-02-14T18:08:38.094Z
description: 先日気分転換に Eclipse の Java エディタのフォントを **「Ricty Diminished」** に変更したのでその時のメモ。
ogType: article
tags:
  - Eclipse
  - Java
---
先日気分転換に Eclipse の Java エディタのフォントを **「Ricty Diminished」** に変更したのでその時のメモ。  

フォント **「Ricty Diminished」** についてはコチラ。  
> [プログラミング用フォント Ricty Diminished](https://rictyfonts.github.io/diminished.html)

## 実施環境
- Windows 10 Pro
- Eclipse 4.6.3 Neon

## 導入と設定方法
導入から設定までの大まかな流れはコチラ。  
1. フォント「Ricty Diminished」をダウンロードする
2. Windows にダウンロードしたフォントを追加する
3. Eclipse からフォントを設定する

以下、詳細。  
### 1. フォント「Ricty Diminished」をダウンロードする
フォント「Ricty Diminished」は標準で Windows に存在しない為、  
GitHub からダウンロードします。  

1-1. https://github.com/edihbrandon/RictyDiminished にアクセスする  

1-2. 「Clone or download ▼」⇒「Download ZIP」の順に左クリックし Zip ファイルをダウンロード  

### 2. Windows にダウンロードしたフォントを追加する
2-1. 1でダウンロードした Zip ファイルを任意の場所に解凍する  

解凍したフォルダ内には以下のファイルが格納されているはずです。  

```bash
$ ls -1 RictyDiminished-master
README.md
RictyDiminished-Bold.ttf
RictyDiminished-BoldOblique.ttf
RictyDiminishedDiscord-Bold.ttf
RictyDiminishedDiscord-BoldOblique.ttf
RictyDiminishedDiscord-Oblique.ttf
RictyDiminishedDiscord-Regular.ttf
RictyDiminished-Oblique.ttf
RictyDiminished-Regular.ttf
```

2-2. インストールしたい ttf ファイル（今回は **RictyDiminished-Regular.ttf** のみ）を右クリックする  

2-3. メニューから「インストール(I)」を選択し、インストールする  

補足：ttf ファイルをダブルクリック（ひとによる）、または右クリック後のメニューから「プレビュー(R)」を選択するとビューアーが起動し、フォントのプレビューを見ることが出来る。  
ビューアーからもインストール可能。  

### 3. Eclipse からフォントを設定する
3-1. Eclipse 上部メニューの「ウィンドウ(W)」から「設定(P)」を選択する  

3-2. 設定ウィンドウ左のメニューから「一般 > 外観 > 色とフォント」を選択する  

3-3. 設定画面「色とフォント」から「Java > Java エディター・テキスト・フォント（デフォルトの値の使用：テキスト・フォント）」を選択し「編集(E)...」を左クリックする  

3-4. フォントウィンドウの「フォント名(F):」から「Ricty Diminished」を選択し「OK」を左クリックする  

3-5. 設定ウィンドウに戻ったら「適用(A)」と「OK」を左クリックすれば設定完了！  
