import logo from './logo.svg';
import './App.css';
import ApiNoProxy from './ApiNoProxy';
import CardList from './CardList';
import Form from './Form';
import { useState } from 'react';

const App = () => {
  const [cards, setCards] = useState([])
  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }
  return (
    <div className='App'>
      <ApiNoProxy></ApiNoProxy>
      <div className='divOne'>
        <Form onSubmit={addNewCard} />
        <CardList cards={cards} />
      </div>
    </div>
  );
}
export default App;
