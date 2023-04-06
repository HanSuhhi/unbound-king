import { isNumber, isString, isUndefined } from "lodash-es";

export const VAR = (key: string) => {
  if (key.substring(0, 2) !== "--") return `--${key}`;
  return key;
};

/**
 * @description Style setter
 */
export class StyleSetter {
  /**
   * @constructor
   * @description get parent element
   */
  constructor(private ele: HTMLElement, private componentName: string) { }

  /**
   * @description 数字检验
   */
  public setRemNumber(value: number, key: string): void | null {
    if (isNumber(value)) {
      this.ele.style.setProperty(VAR(key), `${value}rem`);
    } else return console.warn(`${key}: 不是一个数值 `);
  }
  /**
   * @description 字符串检验
   */
  public setString(value: string, key: string): void | null {
    if (isString(value)) {
      this.ele?.style.setProperty(VAR(key), value);
    } else return console.warn(`${key}: 不是可信字符串 `);
  }

  /**
   * @description 设置 css 尺寸变量
   */
  public setStyleSize<T = BaseSize>(key: string, size?: T): void | null {
    if (isUndefined(size)) return console.warn(`${key}: 请检查参数，获取为非法值`);
    this.ele.classList.add(`${this.componentName}-${key}-${size}`);
  }
  /**
   * @description 增加 class
   */
  public addClass(className: string) {
    return this.ele.classList.add(className);
  }
}
