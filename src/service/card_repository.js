import firebaseApp from './firebase';

//cardの情報を持っている場所
class CardRepository {

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