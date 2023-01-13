import { defineComponent } from "vue";
import BottomHeader from "./components/BottomHeader";
import TopHeader from "./components/TopHeader";
import "./app-header.css";

export default defineComponent({
  name: "AppHeader",
  setup: (props) => {
    return () => {
      return (
        <>
          <TopHeader />
          <BottomHeader />
        </>
      );
    };
  },
});
