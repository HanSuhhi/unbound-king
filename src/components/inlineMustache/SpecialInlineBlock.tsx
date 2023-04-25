import { isMap } from "lodash-es";
import { defineComponent } from "vue";
import { DATA } from "../../composables/data";
import "./special-inline-block.css";

export default defineComponent({
  name: "SpecialInlineBlock",
  props: {
    text: {
      type: String
    }
  },
  setup: (props) => {
    const urls = props.text?.split(".");
    let data: any = DATA;
    urls?.forEach((url) => {
      url = url.trim();
      if (isMap(data)) data = data.get(url);
      else data = data[url];
    });
    return () => {
      return (
        <span class="special-inline-block">
          <icon style={{ transform: "translateY(1px)" }} name={data.icon} />
          {data.translator[1]}
        </span>
      );
    };
  }
});
