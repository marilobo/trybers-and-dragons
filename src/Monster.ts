import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }

  receiveDamage(attackPoints: number): number {
    // let lifePoints = this._lifePoints;
    if (this._lifePoints <= 0) {
      this._lifePoints = (-1);
    } else {
      this._lifePoints -= attackPoints;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}