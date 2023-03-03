import "./styles/heroes-table.css";

import Icon from "@/components/icon/Icon";
import { defineComponent } from "vue";
import { useHeroesTable } from "./composables/heroesTable";
import TableMain from "../tableMain/TableMain";

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
                    <Icon icon="i-icon-park-solid-more-four" size="small" />
                  </span>
                  <span class="heroes-table_item__box">
                    <Icon icon="i-icon-park-solid-more-four" size="small" />
                  </span>
                  <span class="heroes-table_item__box">
                    <Icon icon="i-icon-park-solid-more-four" size="small" />
                  </span>
                  <span class="heroes-table_item__box">
                    <Icon icon="i-icon-park-solid-more-four" size="small" />
                  </span>
                  <span class="heroes-table_item__box">
                    <Icon icon="i-icon-park-solid-more-four" size="small" />
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
