import { defineComponent, ref } from "vue";
import "./table-header.css";
import { useTableHeader } from "./composables/tableHeader";
import TableHeaderTabs from "../tableHeaderTabs/TableHeaderTabs";

export default defineComponent({
  name: "TableHeader",
  setup: (props) => {
    const { Layout, Radio } = useTableHeader();

    return () => {
      return (
        <base-layout ref={Layout}>
          {{
            aside: () => (
              <>
                <span class="table-header_nation">
                  鼠族
                  <span>阿斯顿鼠</span>
                </span>
                <span class="table-header_desc">一种体型较小，貌似鼠类的生物，来源于泰瑞亚地下深处。</span>
                <span class="table-header_desc">他们的群体智能与极高的繁殖速度使之成为阿苏拉针对的对象，后者将斯克鼠视为所有智慧种族的威胁。</span>
              </>
            ),
            default: () => <TableHeaderTabs />,
          }}
        </base-layout>
      );
    };
  },
});
