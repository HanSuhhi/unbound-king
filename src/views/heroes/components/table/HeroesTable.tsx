import { defineComponent } from "vue";
import { useHeroesTable } from "./composables/heroesTable";

export default defineComponent({
  name: "HeroesTable",
  setup: (props) => {
    const { HeroesTable } = useHeroesTable();
    return () => {
      return (
        <c-tabs ref={HeroesTable}>
          {{
            list: () => {},
          }}
        </c-tabs>
      );
    };
  },
});
