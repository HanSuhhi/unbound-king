import Icon from "@/components/icon/Icon";
import { useGlobalStore } from "@/stores/global.store";
import { isEqual } from "lodash-es";
import { storeToRefs } from "pinia";
import type { PropType } from "vue";
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useMenuCollapse } from "../../composables/menuCollapse";

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
    const children = computed(() => props.page.children);
    const routeToPage = () => {
      router.push({ name: children.value ? children.value[0].path : props.page.path });
    };

    const { isCollapse, toggleCollapse } = useMenuCollapse();

    const collapse = computed(() => (isCollapse.value ? "" : null));
    const active = computed(() => {
      if (activePage.value?.key.length === 2 && props.page.children) {
        const parentIndex = activePage.value.key[0];
        if (parentIndex === props.page.key[0]) return true;
      }
      return isEqual(props.page, activePage.value) ? "" : null;
    });
    return () => {
      return (
        <>
          <section class="aside-menu-block" data-collapse={collapse.value} data-active={active.value} onClick={children.value ? toggleCollapse : routeToPage}>
            {props.page.icon && <Icon icon={props.page.icon} />}
            <span class="aside-menu-block_title">{props.page.title}</span>
            {children.value && <div class="i-material-symbols-keyboard-arrow-down-rounded" />}
          </section>
          {props.page.children && (
            <section class="aside-menu-block_sub" data-collapse={collapse.value} style={`--length: ${children.value?.length}`}>
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
