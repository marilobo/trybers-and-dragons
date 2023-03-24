import Race from './Race';

export default class Halfling extends Race {
  private static instancesNumber = 0;
  private _maxLifePoints: number;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instancesNumber += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instancesNumber;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}