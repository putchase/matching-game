import './src/styles/generic/reset.css'

import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'

import CardGame from './src/components/CardGame'
import PlayerScore from './src/components/PlayerScore'
import BoardGame from './src/objects/BoardGame'

const $root = document.querySelector("#root");
const $playerScore = PlayerScore('Player1');
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML('beforeend', $playerScore);
$root.insertAdjacentHTML('beforeend', $htmlBoardGame);
