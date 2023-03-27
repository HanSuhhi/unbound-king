export class Buff {
  get title() { return this.buff.translator.title; }

  constructor(private buff: BuffStruct) { }


  effect(character: Character) { }

}