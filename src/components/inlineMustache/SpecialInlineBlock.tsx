import { defineComponent } from "vue";
import { DATA } from "../../composables/data";
import "./special-inline-block.css";

export default defineComponent({
  name: "SpecialInlineBlock",
  props: {
    text: {
      type: String,
    },
  },
  setup: (props) => {
    const urls = props.text?.split(".");
    let data: any = DATA;
    urls?.forEach((url) => {
      data = data[url.trim()];
    });
    return () => {
      return (
        <span class="special-inline-block">
          <icon name={data.icon} />
          {data.translator.title}
        </span>
      );
    };
  },
});
