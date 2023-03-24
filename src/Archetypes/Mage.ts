import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static instancesNumber = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage.instancesNumber += 1;
  }

  static createdArchetypeInstances() {
    return Mage.instancesNumber;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}