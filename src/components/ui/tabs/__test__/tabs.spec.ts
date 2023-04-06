import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CTabs from "../CTabs";

describe("CTabs.tsx", () => {
  it("render", () => {
    const wrapper = shallowMount(CTabs, {
      slots: {
        list: `<div v-for="item in 3" :key="item" />`,
        'panel-0': `<div>111</div>`,
        'panel-1': `<div>111</div>`,
        'panel-2': `<div>111</div>`,
      },
    });
    expect(wrapper.classes()).toContain("csss-tabs");
    expect(wrapper.find(".csss-tabs__list").exists()).toBeTruthy();
    expect(wrapper.find(".csss-tabs__list__item").exists()).toBeTruthy();
    expect(wrapper.find(".csss-tabs__panels").exists()).toBeTruthy();
    const wrapperNone = shallowMount(CTabs);
    expect(wrapper.classes()).toContain("csss-tabs");
    expect(wrapperNone.find(".csss-tabs__list").exists()).toBeTruthy();
    expect(wrapperNone.find(".csss-tabs__list__item").exists()).toBeFalsy();
    expect(wrapper.find(".csss-tabs__panels").exists()).toBeTruthy();
    expect(wrapper.find(".csss-tabs__panel").exists()).toBeFalsy();
  });

});
