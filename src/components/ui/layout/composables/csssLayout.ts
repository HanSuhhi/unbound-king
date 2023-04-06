import { useComponent } from '../../composables/Comp';

/**
 * @description use csss layout composable
 */
export const useCsssLayout = (props?: UseCsssLayoutProps) => {

  return {
    ...useComponent<CLayoutApi, UseCsssLayoutProps>(props)
  };
};
