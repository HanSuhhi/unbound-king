import { Race } from "@/configs/races/race.enum";

export function useRaceConfig() {
  const REGIST_RACES: Race[] = [Race.Elves, Race.Human, Race.Yokai];

  return {
    REGIST_RACES
  };
}
