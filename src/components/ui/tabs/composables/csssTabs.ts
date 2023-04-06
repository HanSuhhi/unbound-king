import { useComponent } from '../../composables/Comp';

/**
 * @description use csss tabs composable
 */
export const useCsssTabs = (props?: UseCsssTabsProps) => {

  return {
    ...useComponent<CTabsApi, UseCsssTabsProps>(props)
  };
};
