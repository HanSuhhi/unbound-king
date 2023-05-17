export function disableDefaultKeys() {
  document.onkeydown = (e) => {
    const shouldCancelEvent = (e.key >= "F1" && e.key <= "F12")
    || e.key === "Tab"
    || (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey);

    if (shouldCancelEvent) e?.preventDefault();
  };
}
