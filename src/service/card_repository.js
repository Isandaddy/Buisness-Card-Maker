import { firebaseDatabase } from './firebase';

//cardの情報を持っている場所
class CardRepository {

    //該当する系路にupdataが発生すると、snapshotにvalueがあるとonUpdateを呼ぶ
    syncCards(userId, onUpdate) {
        const ref = firebaseDatabase.ref(`${userId}/cards`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => ref.off();
    }

    saveCard(userId, card) {
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
    };
    removeCard(userId, card) {
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
    };

    readCard() {

    };
}

export default CardRepository;