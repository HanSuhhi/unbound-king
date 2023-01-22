import { defineComponent } from "vue";

export default defineComponent({
  name: "IconPerset",
  setup: (props) => {
    return () => {
      return (
        <>
          <div class="i-material-symbols-view-module" v-show={false}></div>
          <div class="i-carbon-two-factor-authentication" v-show={false}></div>
          <div class="i-mdi-horse-human" v-show={false}></div>
          <div class="i-ant-design-align-left-outlined" v-show={false}></div>
          <div class="i-icon-park-solid-more-four" v-show={false}></div>
          <div class="i-fontisto-bell" v-show={false}></div>
        </>
      );
    };
  },
});
