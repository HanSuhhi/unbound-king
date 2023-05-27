import { describe, expect, it } from "vitest";
import { ref } from "vue";
import { defer } from "lodash";
import { useCssCustomProperty } from "../cssCustomProperty";
import { StyleSetter } from "../../tool/styleSetter.tool";

describe("csssCustomProperty.ts", () => {
  it("set css custom property", async () => {
    const ele = document.createElement("p");
    const styleSetter = ref<StyleSetter>();
    styleSetter.value = new StyleSetter(ele, "test");
    interface TestCssCustomProperties {
      "test-1": string
      "test-2": string
    }
    const { property } = useCssCustomProperty<Partial<TestCssCustomProperties>>(styleSetter);
    property.value = {
      "test-1": "test-prop"
    };
    defer(() => {
      expect(ele.style.getPropertyValue("--test-1")).toBe("test-prop");
    });
  });
});
