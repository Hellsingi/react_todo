import './styles/main.css';

console.log('Start Project with webpack!');

class Game {
  name = 'Violin Charades';
}

const myGame = new Game();

console.log('myGame:', myGame);

const heading = document.createElement('h1');
heading.textContent = 'How are you TOday?';

const root = document.querySelector('#root');
root.append(heading);
