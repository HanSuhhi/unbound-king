export class CharacterBuff {
  private buffs: BuffName[] = [];

  public addBuff(buff: Buff): void {
    this.buffs.push(buff.main());
  }
}