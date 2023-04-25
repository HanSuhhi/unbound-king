type TabListItem<T = any> = {
  icon?: BaseIconName;
  index: number;
  injectData?: T;
  key: string;
  name: string;
};