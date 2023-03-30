import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/styles.css';
import './assets/css/media.css';
import Header from './components/Header';
import Home from './components/Home';
import Ingredients from './components/Ingredients';
import TheStory from './components/TheStory';
import Burgers from './components/Burgers';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {

  const burgersCard = [
    { name: '1/4 Pound Cheese',
      src: 'burgerscard',
      ingredients: ['Lorem ipsum11', 'Lorem ipsum12', 'Lorem impsum13']
    },
    { name: 'Big Burger',
      src: 'burgerscard',
      ingredients: ['Lorem ipsum21', 'Lorem ipsum22', 'Lorem impsum23']
    },
    { name: 'Pure Bacon',
      src: 'burgerscard',
      ingredients: ['Lorem ipsum31', 'Lorem ipsum32', 'Lorem impsum33']
    }
  ];

  const ingredients = [
    'buns',
    'salad',
    'tomato',
    'cheese',
    'meat'
  ];

  const menuItems = [
    'Ingredient',
    'Story',
    'Burgers',
    'Location'
  ];

  const info = [
    'Burger Factory',
    'Pl. de la Riponne 10',
    '1005 Lausanne',
    '021 800 00 00'
  ]

  return (
    <div className="App">
      <Header menuItems={menuItems} />
      <Home />
      <Ingredients ingredients={ingredients} />
      <TheStory />
      <Burgers burgersCard={burgersCard} />
      <Location info={info} />
      <Footer info={info} />
    </div>
  );
}

export default App;
