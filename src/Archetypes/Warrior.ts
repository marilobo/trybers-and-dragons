import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static instancesNumber = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior.instancesNumber += 1;
  }

  static createdArchetypeInstances() {
    return Warrior.instancesNumber;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}