export default <Creator>{
  translator: ["character", "角色创造器"],
  icon: "character",
  description: "用于随机生成角色基础信息，属性。",
  plugins: [
    {
      translator: ["character-baseinfo-plugin", "角色基础信息插件"],
      belong: "character",
      description: "生成角色追求与性别",
      icon: "mesasge",
      data: [
        {
          translator: ["gender", "性別"],
          description: "",
          generator: "random",
          generatorForm: [{ type: "none", title: "根据条件随机生成" }],
          generatorParams: { range: "Genders" }
        },
        {
          translator: ["chase", "追求"],
          description: "角色毕生的追求，在诸多方面对角色产生影响",
          generator: "random",
          generatorForm: [{ type: "none", title: "根据条件随机生成" }],
          generatorParams: { range: "Chases", needTransform: true }
        },
        {
          translator: ["age", "年龄"],
          description: "",
          generator: "random",
          generatorForm: [{ type: "none", title: "根据条件随机生成" }],
          generatorParams: { range: "Ages", needTransform: true }
        }
      ]
    },
    {
      translator: ["character-name-plugin", "角色姓名插件"],
      belong: "character",
      description: "根据角色性别、追求生成姓名",
      icon: "thinking",
      data: [
        {
          translator: ["familyName", "姓氏"],
          description: "",
          generator: "random",
          generatorForm: [{ type: "none", title: "根据条件随机生成" }],
          generatorParams: { range: "FamilyNames" }
        },
        {
          translator: ["firstname", "名辞"],
          description: "",
          generator: "firstname",
          generatorForm: [
            { key: "firstname", type: "none", title: "根据条件随机生成" }
          ],
          generatorParams: { needInject: ["character-baseinfo-plugin"] },
          pastData: {
            gender: ["MALE", "男"],
            chase: ["release", "大道"],
            age: ["Prime", "壮年"]
          }
        },
        {
          translator: ["firstname-second", "名辞 2"],
          description: "当第一个名辞为单字时，有几率产生第二个单字，组成复名",
          generator: "firstname",
          generatorForm: [
            { key: "firstname", type: "none", title: "根据条件随机生成" }
          ],
          generatorParams: {
            needInject: ["character-baseinfo-plugin"],
            second: true
          },
          pastData: {
            gender: ["MALE", "男"],
            chase: ["release", "大道"],
            age: ["Prime", "壮年"]
          }
        }
      ]
    },
    {
      translator: ["attribute-value-plugin", "属性值插件"],
      belong: "character",
      description: "通过配置，随机生成一份属性值表",
      icon: "character-param",
      data: [
        {
          translator: ["hp", "生命值"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["maxHp", "生命上限"],
          generator: "paste",
          generatorForm: [
            {
              key: "pasteFrom",
              type: "selecter",
              options: {
                range: [
                  ["hp", "生命值"],
                  ["maxHp", "生命上限"],
                  ["minDef", "防御力下限"],
                  ["maxDef", "防御力上限"],
                  ["minAtk", "攻击力下限"],
                  ["maxAtk", "攻击力上限"],
                  ["matk", "法术攻击力"],
                  ["apr", "法术防御力"],
                  ["wt", "负重"],
                  ["res", "抗性"],
                  ["pct", "虔诚"],
                  ["acc", "命中"],
                  ["eva", "闪避"],
                  ["luc", "幸运"],
                  ["hex", "诅咒"],
                  ["crit", "会心"],
                  ["cha", "魅力"],
                  ["moral", "道德"],
                  ["sp", "唯我"],
                  ["ld", "指挥"]
                ]
              },
              title: "数值同步于",
              required: true,
              placeholder: "请选择数据需要同步的属性",
              rules: [{ required: true, message: "数值同步于项不可为空" }]
            }
          ],
          generatorParams: { pasteFrom: "hp" }
        },
        {
          translator: ["minDef", "防御力下限"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["maxDef", "防御力上限"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["minAtk", "攻击力下限"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["maxAtk", "攻击力上限"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["matk", "法术攻击力"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["apr", "法术防御力"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["wt", "负重"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["res", "抗性"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["pct", "虔诚"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["acc", "命中"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["eva", "闪避"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["luc", "幸运"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["hex", "诅咒"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["crit", "会心"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["cha", "魅力"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["moral", "道德"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["sp", "唯我"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 2, max: 222 }
        },
        {
          translator: ["ld", "指挥"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 1, max: 222 }
        }
      ]
    },
    {
      translator: ["attribute-plugin", "属性插件"],
      belong: "character",
      description: "随机生成一份角色属性",
      icon: "thinking",
      data: [
        {
          translator: ["ldr", "统帅"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 1, max: 18 }
        },
        {
          translator: ["ep", "佐佑"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 1, max: 18 }
        },
        {
          translator: ["int", "奇术"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 1, max: 18 }
        },
        {
          translator: ["str", "勇气"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 1, max: 18 }
        },
        {
          translator: ["df", "守御"],
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容..."
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容..."
            }
          ],
          generatorParams: { min: 1, max: 18 }
        }
      ]
    },
    {
      translator: ["ethnicity-plugin", "族裔插件"],
      belong: "character",
      description: "随机生成角色的种族、血统",
      icon: "thinking",
      data: [
        {
          translator: ["destiny", "种族"],
          description: "",
          generator: "random",
          generatorForm: [
            { key: "name", type: "none", title: "根据条件随机生成" }
          ],
          generatorParams: { range: "Destinies" }
        },
        {
          translator: ["lineageo", "血统"],
          description: "仅获得对应种族的血统🙌",
          generator: "lineageo",
          generatorForm: [
            { key: "lineageo", type: "none", title: "根据条件随机生成" }
          ],
          generatorParams: { range: "Lineageos" }
        },
        {
          translator: ["height", "身高"],
          generator: "habitus",
          generatorForm: [
            {
              key: "habitus",
              type: "none",
              title: "根据血统参数随机生成体型数据"
            }
          ],
          generatorParams: { type: "height" }
        },
        {
          translator: ["weight", "体重"],
          generator: "habitus",
          generatorForm: [
            {
              key: "habitus",
              type: "none",
              title: "根据血统参数随机生成体型数据"
            }
          ],
          generatorParams: { type: "weight" }
        }
      ]
    }
  ]
};
