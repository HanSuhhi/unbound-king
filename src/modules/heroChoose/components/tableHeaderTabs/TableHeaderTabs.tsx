import { defineComponent } from "vue";
import { useTableHeaderTabs } from "./composables/tableHeaderTabs";

import "./styles/table-header-tabs.css";

export default defineComponent({
  name: "TableHeaderTabs",
  setup: (props) => {
    const { Tabs } = useTableHeaderTabs();
    return () => {
      return (
        <base-tabs ref={Tabs}>
          {{
            list: () => (
              <>
                <span>种族</span>
                <span>123</span>
              </>
            ),
            "panel-0": () => <p>123123</p>,
          }}
        </base-tabs>
      );
    };
  },
});
