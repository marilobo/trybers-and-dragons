import Race from './Race';

export default class Orc extends Race {
  private static instancesNumber = 0;
  private _maxLifePoints: number;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instancesNumber += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instancesNumber;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}