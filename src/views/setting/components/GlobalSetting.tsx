import { defineComponent } from "vue";
import { globalSettingConfig } from "../data/globalSettingConfig";
import SettingModule from "./SettingModule";

export default defineComponent({
  name: "GlobalSettings",
  setup: (props) => {
    return () => {
      return globalSettingConfig.value.map((module) => <SettingModule module={module} />);
    };
  },
});
