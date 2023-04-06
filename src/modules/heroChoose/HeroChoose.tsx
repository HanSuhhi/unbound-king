import { defineComponent } from "vue";
import HeroesDetail from "./components/detail/HeroesDetail";
import HeroesTable from "./components/table/HeroesTable";
import { useHeroes } from "./composables/heroes";
import "./hero-choose.css";

export default defineComponent({
  name: "HeroesPage",
  setup: (props) => {
    const { Layout } = useHeroes();

    return () => {
      return (
        <base-layout ref={Layout}>
          {{
            aside: () => <HeroesDetail />,
            default: () => <HeroesTable />,
          }}
        </base-layout>
      );
    };
  },
});
