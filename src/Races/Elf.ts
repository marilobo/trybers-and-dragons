import Race from './Race';

export default class Elf extends Race {
  private static instancesNumber = 0;
  private _maxLifePoints: number;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instancesNumber += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instancesNumber;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}