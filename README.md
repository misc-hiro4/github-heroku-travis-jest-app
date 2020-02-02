# github-heroku-travis-jest-app [![Build Status](https://travis-ci.org/misc-hiro4/github-heroku-travis-jest-app.svg?branch=master)](https://travis-ci.org/misc-hiro4/github-heroku-travis-jest-app)
## ■概要<br>
TravisCIでGitHubリポジトリからHerokuへのデプロイサンプル。<br>
アプリはNode.js+Expressで作成し、JESTでテストするように実装されています。<br>
このリポジトリにPUSHされた実装は、Travis CIでテストされたのちにHerokuにデプロイされ、下記のURLで公開される。<br>
https://github-heroku-travis-jest-app.herokuapp.com/ <br>
<br>
## ■アプリの使い方<br>
Herokuのアドレスを開くと以下の画面が表示されます。<br>
データ入力と入力したデータの一覧表示はこの画面１枚で行われます。<br>
これ以外の画面はありません。<br>
![入力画面](doc/form.png "入力画面")<br>
1. 各項目に値を入力<br>
   入力文字のフォーマットチェックはやっていません
2. 「確定」ボタンを押すと下側のリストに追加されます
3. 「全件削除」ボタンを押すと入力済みのデータがすべて削除されます。

## ■Travis CI連携
Travis CIの実行ログはこちら<br>
https://travis-ci.org/misc-hiro4/github-heroku-travis-jest-app <br>
テスト終了後のログ出力はけしからん！というログが出てますが、本番環境に影響ないのでしばし放置。<br>

## ■アプリのファイル構成
| ファイル名 | 説明 |
|:--:|:--:|
| app.js | WEBからの処理（ルーティング）を行っているメイン部分 |
| server.js | WEBからのリクエストをListenする処理 |
| views/index.js | WEBに表示される画面<br>データ入力(form)と表示を1画面に実装 <br>EJSのテンプレートで実装 |
| app.test.js | Travis CIで実行されるテストを実装 <br> JESTフレームワークで実装している |

## ■利用しているパッケージ
npmでインストールしているパッケージはこちら<br>
#### ー 実行環境
--saveオプションでインストール、　package.jsonの"dependencies"キーに設定<br>

|Express|EJS|NeDB|
|:---:|:---:|:---:|

#### ー 開発環境
--saveオプションでインストール、　package.jsonの"devDependencies"キーに設定<br>
ローカルリポジトリでの確認、Travis CIでのテスト実行時に使う。<br>
Herokuの本番環境では使わない。

|jest|supertest|
|:--:|:--:|
