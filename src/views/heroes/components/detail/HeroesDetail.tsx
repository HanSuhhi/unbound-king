import { defineComponent } from "vue";

import "./styles/heroes-detail.css";

export default defineComponent({
  name: "HeroesDetail",
  setup: (props) => {
    return () => {
      return <div class="heroes-detail">detial</div>;
    };
  },
});
