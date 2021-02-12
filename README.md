## Buisness Card Maker

-ref  
[fireBase](https://firebase.google.com/?authuser=0) サーバー対応  
[cloudnary](https://cloudinary.com/) イメージ編集 API  
[react-router](https://reactrouter.com/web/guides/quick-start)

- service ロジックを分離すること
- 理解出来なかったところ集中して理解するまで見ること
- 꾸준히 하기

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
20210202 add card and edit css  
20210203 edit card-form css  
20210204 add card-add-form state の流れ確認する事覚えよう  
20210205 state の量が多くなると map()で回しながら処理を行うことにして、性能面でよくない為、Object{'key' : value}形式で管理　　　
その key に対する要素に素早く接近する。 　　　
(computed property の参照)[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer]

20210207 数多い props がある場合末端にある component までいちいち props を追記するのはだるいことと  
props 拡張性の為、外部から component を injection する。

```
const FileInput = props => (<ImageFileInput {...props} imageUploader={imageUploader}/>)

const CardAddForm = ({ FileInput, onAdd }) => {

<div className={styles.fileInput}>
                <FileInput />
</div>
```

20210208 edit ImageFileInput cloudinary uploadAPI を用いてイメージファイルをアップロードしそれに関するデーターを return 画面に反映する。
-ref  
(input file について)[https://developer.mozilla.org/ko/docs/Web/HTML/Element/input/file#attr-accept]  
20210209 add loading spinner for imagefile  
(css animation)[https://developer.mozilla.org/ko/docs/Web/CSS/animation]

20210210 realtime database 適用  
-ref  
(firebase database)[https://firebase.google.com/docs/database/web/read-and-write?authuser=0]

20210211 syncCards main component がマウントされた時、利用者の ID が変形された時 sync する。　　　
useEffect は状況に応じて複数作成可能

20210212 firebase を必要に応じて分ける.

```
  export const firebaseAuth = firebaseApp.auth();
  export const firebaseDatabase = firebaseApp.database();
  export const googleProvider = new firebase.auth.GithubAuthProvider();
  export const githubProvider = new firebase.auth.GithubAuthProvider();
```
