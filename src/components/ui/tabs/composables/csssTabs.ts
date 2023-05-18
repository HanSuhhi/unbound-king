import { useComponent } from "../../composables/Comp";

/**
 * @description use csss tabs composable
 */
export function useCsssTabs(props?: UseCsssTabsProps) {
  return {
    ...useComponent<CTabsApi, UseCsssTabsProps>(props)
  };
}
