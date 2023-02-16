import { defineComponent } from "vue";
import "./app-header.css";
import RouterHistory from "./components/RouterHistory";
import UserMessage from "./components/UserMessage";

export default defineComponent({
  name: "AppHeader",
  setup: (props) => {
    return () => {
      return (
        <>
          <RouterHistory />
          <UserMessage />
        </>
      );
    };
  },
});
