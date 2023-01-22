import { defineComponent } from "vue";
import "./app-header.css";
import UserMessage from "./components/UserMessage";

export default defineComponent({
  name: "AppHeader",
  setup: (props) => {
    return () => {
      return (
        <>
          <section class="top-header">
            <div class="bottom-header">
              <p>英雄管理</p>
              <p>英雄管理</p>
            </div>
            <UserMessage />
          </section>
        </>
      );
    };
  },
});
