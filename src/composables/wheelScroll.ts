export const scroll = (Element: HTMLElement, wheelEvent: WheelEvent) => {
  Element!.scrollLeft += wheelEvent.deltaY;
};
