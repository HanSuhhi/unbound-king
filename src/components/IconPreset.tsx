import { defineComponent } from "vue";

export default defineComponent({
  name: "IconPerset",
  setup: (props) => {
    return () => {
      return (
        <>
          <div class="i-material-symbols-view-module" v-show={false} />
          <div class="i-carbon-two-factor-authentication" v-show={false} />
          <div class="i-mdi-horse-human" v-show={false} />
          <div class="i-icon-park-solid-more-four" v-show={false} />
          <div class="i-fontisto-bell" v-show={false} />
          <div class="i-tabler-device-analytics" v-show={false} />
          <div class="i-emojione-monotone-alien-monster" v-show={false} />
          <div class="i-ps-tribe" v-show={false} />
          <div class="i-simple-icons-lineageos" v-show={false} />
          <div class="i-game-icons-abstract-065" v-show={false} />
          <div class="i-game-icons-bandana" v-show={false} />
          <div class="i-game-icons-brain-tentacle" v-show={false} />
          <div class="i-game-icons-bear-face" v-show={false} />
          <div class="i-game-icons-beech" v-show={false} />
          <div class="i-game-icons-chemical-bolt" v-show={false} />
          <div class="i-game-icons-skills" v-show={false}></div>
          <div class="i-circum-no-waiting-sign" v-show={false}></div>
          <div class="i-ic-sharp-settings" v-show={false}></div>
        </>
      );
    };
  },
});
