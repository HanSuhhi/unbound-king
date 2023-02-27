import Icon from "@/components/icon/Icon";
import { useGlobalStore } from "@/stores/global.store";
import { isEqual } from "lodash-es";
import { storeToRefs } from "pinia";
import type { PropType } from "vue";
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useHtmlPropLint } from "../../../../composables/htmlPropLint";
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

    const { toggleCollapse } = useMenuCollapse(props);

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
          <section class="aside-menu-block" data-collapse={useHtmlPropLint(Boolean(props.page.collapse))} data-active={active.value} onClick={children.value ? toggleCollapse : routeToPage}>
            {props.page.icon && (
              <div class="aside-menu-icon">
                <Icon icon={props.page.icon} />
              </div>
            )}
            <div class="aside-menu-main">
              <span class="aside-menu-block_title">{props.page.title}</span>
              <span class="aside-menu-block_description">{props.page.description}</span>
            </div>
            {children.value && <div class="aside-menu-block_mask i-material-symbols-keyboard-arrow-down-rounded" />}
          </section>
          {props.page.children && (
            <section class="aside-menu-block_sub" data-collapse={useHtmlPropLint(Boolean(props.page.collapse))} style={`--length: ${children.value?.length}`}>
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
