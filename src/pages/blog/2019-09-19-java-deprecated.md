---
templateKey: blog-post
title: '[Java] 先日初めて@Deprecatedを付けたときのメモ。'
date: 2019-09-19T23:15:00.000Z
description: >-
  [Java]
  先日初めて@Deprecatedを付けたときのメモ。これまで非推奨なメソッドに遭遇したことはありましたが、先日初めて自分でメソッドを非推奨にすることがあったのでその時のメモ。
ogType: article
tags:
  - java
  - アノテーション
  - javadoc
---
これまで非推奨なメソッドに遭遇したことはありましたが、先日初めて自分でメソッドを非推奨にすることがあったのでその時のメモ。

## Deprecated アノテーションとは
Deprecated アノテーションは非推奨であるメソッドなどに付与するアノテーションです。  
使用する場面としては...  
- 汎用的で代替可能なメソッドがあり、そちらへの移行を促し元々の処理は非推奨にする
- 何らかの既知の問題があり非推奨にする

などが大半でしょうか。

## 作用
eclipseで開発している場合に Deprecated アノテーションが付与されたメソッドなどを使用していると、  
そのメソッド名に打消し線が引かれ**警告（Warning）**が出ます。

以下のようにjavadocコメントにも**@deprecated**タグをつけ、
もし代替メソッドがある場合は**{@link}**タグに代替メソッド名を示してあげると親切です。

```java
/**
 * ~
 * @deprecated 非推奨である理由を一言程度 {@link クラス名#メソッド名}
 * ~
 */
@Deprecated
public static String ...
```
