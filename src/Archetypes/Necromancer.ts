import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static instancesNumber = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer.instancesNumber += 1;
  }

  static createdArchetypeInstances() {
    return Necromancer.instancesNumber;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}