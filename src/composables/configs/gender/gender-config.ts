import { Gender } from "@/configs/gender/gender.enum";

export function useGenderConfig() {
  const registGenders: Gender[] = [Gender.Female, Gender.Male];

  return { registGenders };
}
