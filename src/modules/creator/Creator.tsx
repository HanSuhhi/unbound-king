import { defineComponent } from "vue";

export default defineComponent({
  name: "Creator",
  setup: (props) => {
    return () => {
      return <div>123</div>;
    };
  },
});
