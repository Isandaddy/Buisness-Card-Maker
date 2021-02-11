import firebaseApp from './firebase';

//cardの情報を持っている場所
class CardRepository {

    //該当する系路にupdataが発生すると、snapshotにvalueがあるとonUpdateを呼ぶ
    syncCards(userId, onUpdate) {
        const ref = firebaseApp.database().ref(`${userId}/cards`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => ref.off();
    }

    saveCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
    };
    removeCard(userId, card) {
        firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
    };

    readCard() {

    };
}

export default CardRepository;