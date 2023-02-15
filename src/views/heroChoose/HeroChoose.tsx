import { defineComponent } from "vue";
import HeroesDetail from "./components/detail/HeroesDetail";
import HeroesTable from "./components/table/HeroesTable";
import { useHeroes } from "./composables/heroes";

export default defineComponent({
  name: "HeroesPage",
  setup: (props) => {
    const { Layout } = useHeroes();

    return () => {
      return (
        <c-layout ref={Layout}>
          {{
            aside: () => <HeroesDetail />,
            default: () => <HeroesTable />,
          }}
        </c-layout>
      );
    };
  },
});
