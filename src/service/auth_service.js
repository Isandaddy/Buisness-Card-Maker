import firebase from 'firebase';
import firebaseApp from './firebase';

//認証に関連するクラス
class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    };

    logout() {
        firebaseApp.auth().signOut();
    };

    //使用ユーザーがすでに認証をしているかをチェック
    onAuthChange(onUserChanged) {
        firebaseApp.auth().onAuthStateChanged((user)=>{
            onUserChanged(user);
        })
    };
    
}

export default AuthService;