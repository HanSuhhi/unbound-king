import { defineMenuOptions } from "../composables/menuOption";

export default defineMenuOptions([
  {
    key: "character-design",
    tip: "thinking",
    children: [
      {
        key: "name-design",
        tip: "thinking"
      },
      {
        key: "attribute-value",
        tip: "thinking"
      },
      {
        key: "personality-design",
        tip: "thinking"
      },
      {
        key: "trait-design",
        tip: "thinking"
      },
      {
        key: "ambition-design",
        tip: "thinking"
      }
    ]
  },
  {
    key: "ethnicity-design",
    tip: "monster",
    children: [
      {
        key: "destiny-design",
        tip: "monster"
      },
      {
        key: "lineageo-design",
        tip: "monster"
      }
    ]
  },
  {
    key: "skill-design",
    tip: "character-param"
  }
]);
