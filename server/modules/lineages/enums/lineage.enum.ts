import { Race } from "#/server/modules/races/enums/race.enum";

export enum HumanLineage {
  PlainSettler = "o4VvHZRebQHV",
  Caveman = "eovp79ed7hjd"
}

export enum YokaiLineage {
  Fish = "qm8v6qy0866p"
}

export enum ElvesLineage {
  Tree = "nn99qxmf8ki6"
}

Reflect.setPrototypeOf(HumanLineage, { race: Race.Humans });
Reflect.setPrototypeOf(YokaiLineage, { race: Race.Yokai });
Reflect.setPrototypeOf(ElvesLineage, { race: Race.Elves });
