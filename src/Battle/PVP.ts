import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(private _player1: Fighter, private _player2: Fighter) {
    super(_player1);
    this._player1 = _player1;
    this._player2 = _player2;
  }

  fight(): number {
    let maxRoundsLoop = 0;
    while (this._player1.lifePoints > -1
      && this._player2.lifePoints > -1) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
      maxRoundsLoop += 1;
      if (maxRoundsLoop > 100) break;
    }
    return super.fight();
  }
}