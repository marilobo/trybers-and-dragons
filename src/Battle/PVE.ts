import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private _enemies: (SimpleFighter | Fighter)[],
  ) {
    super(_player);
  }

  fight(): number {
    let maxRoundsLoop = 0;
    while (this._player.lifePoints > -1
      && !this._enemies.every((e) => e.lifePoints === -1)) {
      this._enemies.forEach((e) => {
        this._player.attack(e);
        e.attack(this._player);
      });
      maxRoundsLoop += 1;
      if (maxRoundsLoop > 100) break;
    }
    return super.fight();
  }
}