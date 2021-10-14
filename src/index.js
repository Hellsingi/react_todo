import './styles/main.css';

console.log('Start Project with webpack!');

class Game {
  name = 'Violin Charades'
};

const myGame = new Game();


const heading = document.createElement('h1');
heading.textContent = 'How are you?';

const root = document.querySelector('#root');
root.appent(heading);