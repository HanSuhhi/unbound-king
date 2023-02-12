import "./app-aside-header.css";

import { defineComponent } from "vue";
import Icon from "../../../icon/Icon";

export default defineComponent({
  name: "AppAsideHeader",
  setup: (props) => {
    return () => {
      return (
        <header class="app-aside__header">
          <span>LAND</span>
          <Icon icon="i-ant-design-align-left-outlined"></Icon>
        </header>
      );
    };
  },
});
