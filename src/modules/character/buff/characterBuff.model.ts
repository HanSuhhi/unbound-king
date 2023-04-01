import { useBuff } from '../../buff/buff.model';

interface ICharacterBuffIncreaser {
  addBuff(buff: Buff): void;
  addBuffByStruct(...args: Parameters<typeof useBuff>): void
}

export class CharacterBuff implements ICharacterBuffIncreaser {
  private buffs: string[] = [];


  public addBuff(buff: Buff): void {
    this.buffs.push(buff.main());
  }

  public addBuffByStruct(...args: Parameters<typeof useBuff>): void {
    const buff = useBuff(...args);
    this.addBuff(buff);
  }
}