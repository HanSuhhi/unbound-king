import Icon from "@/components/icon/Icon";
import type { PropType } from "vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/stores/global.store";
import { isEqual } from "lodash-es";

const MenuItem = defineComponent({
  name: "MenuItem",
  props: {
    page: {
      type: Object as PropType<ModulePage>,
      required: true,
    },
  },
  setup: (props) => {
    const { activePage } = storeToRefs(useGlobalStore());
    const router = useRouter();
    const routeToPage = () => {
      const children = props.page.children;
      router.push({ name: children ? children[0].path : props.page.path });
    };
    return () => {
      return (
        <>
          <section class="aside-menu-block" onClick={routeToPage} data-active={isEqual(props.page, activePage.value) ? "" : null}>
            {props.page.icon && <Icon icon={props.page.icon} />}
            <span class="aside-menu-block_title">{props.page.title}</span>
          </section>
          {props.page.children && (
            <section class="aside-menu-block_sub">
              {props.page.children.map((moduleChild) => (
                <MenuItem page={moduleChild} />
              ))}
            </section>
          )}
        </>
      );
    };
  },
});

export default MenuItem;
