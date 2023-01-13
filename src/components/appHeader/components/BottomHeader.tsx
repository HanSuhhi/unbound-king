import { defineComponent } from "vue";

export default defineComponent({
  name: "BottomHeader",
  setup: (props) => {
    return () => {
      return (
        <div class="bottom-header">
          <p>英雄管理</p>
          <p>英雄管理</p>
        </div>
      );
    };
  },
});
