import "./styles/heroes-table.css";

import { defineComponent } from "vue";
import { useHeroesTable } from "./composables/heroesTable";
import TableMain from "../tableMain/TableMain";
import Icon from "@/components/Icon.vue";

export default defineComponent({
  name: "HeroesTable",
  setup: (props) => {
    const { HeroesTable } = useHeroesTable();
    return () => {
      return (
        <c-tabs ref={HeroesTable}>
          {{
            list: () => {
              return (
                <>
                  <span class="heroes-table_item__box">
                    <Icon name="authentication" size="small" />
                  </span>
                  <span class="heroes-table_item__box">
                    <Icon name="authentication" size="small" />
                  </span>
                  <span class="heroes-table_item__box">
                    <Icon name="authentication" size="small" />
                  </span>
                  <span class="heroes-table_item__box">
                    <Icon name="authentication" size="small" />
                  </span>
                  <span class="heroes-table_item__box">
                    <Icon name="authentication" size="small" />
                  </span>
                </>
              );
            },
            "panel-0": () => <TableMain />,
          }}
        </c-tabs>
      );
    };
  },
});
