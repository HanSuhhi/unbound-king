import type { PropType } from "vue";
import { defineComponent } from "vue";
import SettingItem from "./SettingItem";

export default defineComponent({
  name: "SettingTitleModule",
  props: {
    module: {
      required: true,
      type: Object as PropType<SettingModule>,
    },
  },
  setup: (props) => {
    return () => {
      return (
        <section class="setting-module">
          <p class="setting-module_title">{props.module.title}</p>
          <div class="setting-module_items">
            {props.module.items.map((settingItem) => {
              return <SettingItem item={settingItem} />;
            })}
          </div>
        </section>
      );
    };
  },
});
