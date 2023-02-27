import { defineComponent } from "vue";
import "./app-header.css";
import RouterHistory from "./components/SystemInfo";
import UserMessage from "./components/UserMessage";

export default defineComponent({
  name: "AppHeader",
  setup: (props) => {
    return () => {
      return (
        <div class="app-header_box">
          <RouterHistory />
          <UserMessage />
        </div>
      );
    };
  },
});
