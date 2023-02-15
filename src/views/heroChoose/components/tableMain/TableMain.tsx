import { defineComponent } from "vue";
import TableHeader from "../tableHeader/TableHeader";
import { useTableMain } from "./composables/tableMain";
import "./table-main.css";

export default defineComponent({
  name: "TableMain",
  setup: (props) => {
    const { Layout } = useTableMain();
    return () => {
      return (
        <c-layout ref={Layout}>
          {{
            header: () => <TableHeader />,
            default: () => <div class="table-main_table">asdasd</div>,
          }}
        </c-layout>
      );
    };
  },
});
