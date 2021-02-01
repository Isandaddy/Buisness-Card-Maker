## Buisness Card Maker

-ref  
[fireBase](https://firebase.google.com/?authuser=0) サーバー対応  
[cloudnary](https://cloudinary.com/) イメージ編集 API  
[react-router](https://reactrouter.com/web/guides/quick-start)

20210126 login 画面土台作成  
20210127 .env ファイル追加で環境キーをを変数化し gitignore に追加 firebase のセットアップ使い分けし service フォルダ格納  
20210128 componet 別で分ける事  
例) login の中に header footer が component 状態で含めるようにすること

- .env は最上位フォルダ配下に位置すること
- インスタンス化した firebase の用いて認証まで

20210129 login 画面 css 追加  
20210130 react-router テスト適用  
20210131 react-router and firebase login logout functionality

```
  //使用ユーザーがすでに認証をしているかをチェック
   onAuthChange(onUserChanged) {
       firebase.auth().onAuthStateChanged((user)=>{
           onUserChanged(user);
       })
   };
```

20210201 editor and preview layout flex-grow の理解
