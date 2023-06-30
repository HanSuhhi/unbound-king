type AppHeaderModule = {
  translator: Translator;
  icon: BaseIconName;
  color: Color;
  event?: KeyEvent;
  show?: import("vue").Ref<boolean>;
}