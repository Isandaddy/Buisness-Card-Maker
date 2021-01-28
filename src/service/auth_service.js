import firebase from 'firebase';
import firebaseApp from './firebase';

//認証に関連するクラス
class AuthService {
    login(providerName){
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
}

export default AuthService;