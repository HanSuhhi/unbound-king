export default <Creator>{
  translator: { key: "character", title: "角色创造器" },
  icon: "character",
  description: "用于随机生成角色基础信息，属性。",
  plugins: [
    {
      translator: {
        key: "character-baseinfo-plugin",
        title: "角色基础信息插件",
      },
      belong: "character",
      description: "生成人物追求与性别",
      icon: "mesasge",
      data: [
        {
          translator: { key: "gender", title: "性別" },
          description: "",
          generator: "random",
          generatorForm: [{ type: "text", title: "根据条件随机生成" }],
          generatorParams: { range: "DATA_Genders" },
        },
        {
          translator: { key: "chase", title: "追求" },
          description: "角色毕生的追求，在诸多方面对角色产生影响",
          generator: "random",
          generatorForm: [{ type: "text", title: "根据条件随机生成" }],
          generatorParams: { range: "DATA_Chases", needTransform: true },
        },
        {
          translator: { key: "age", title: "年龄" },
          description: "",
          generator: "random",
          generatorForm: [{ type: "text", title: "根据条件随机生成" }],
          generatorParams: { range: "DATA_Ages", needTransform: true },
        },
      ],
    },
    {
      translator: { key: "character-name-plugin", title: "角色姓名插件" },
      belong: "character",
      description: "根据人物性别、追求生成姓名",
      icon: "write",
      data: [
        {
          translator: { key: "familyName", title: "姓氏" },
          description: "",
          generator: "random",
          generatorForm: [{ type: "text", title: "根据条件随机生成" }],
          generatorParams: { range: "DATA_FamilyNames" },
        },
        {
          translator: { key: "firstname", title: "名辞" },
          description: "",
          generator: "firstname",
          generatorForm: [{ type: "text", title: "根据条件随机生成" }],
          generatorParams: { needInject: ["character-baseinfo-plugin"] },
          pastData: {
            gender: { key: "male", title: "男" },
            chase: { key: "lizhi", title: "立志" },
            age: { key: "youth", title: "青年" },
          },
        },
        {
          translator: { key: "firstname-second", title: "名辞 2" },
          description: "当第一个名辞为单字时，有几率产生第二个单字，组成复名",
          generator: "firstname",
          generatorForm: [{ type: "text", title: "根据条件随机生成" }],
          generatorParams: {
            needInject: ["character-baseinfo-plugin"],
            second: true,
          },
          pastData: {
            gender: { key: "male", title: "男" },
            chase: { key: "lizhi", title: "立志" },
            age: { key: "youth", title: "青年" },
          },
        },
      ],
    },
    {
      translator: { key: "attribute-value-plugin", title: "属性值插件" },
      belong: "character",
      description: "通过配置，随机生成一份属性值表",
      icon: "character-param",
      data: [
        {
          translator: { key: "hp", title: "生命值" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "maxHp", title: "生命上限" },
          generator: "paste",
          generatorForm: [
            {
              key: "pasteFrom",
              type: "selecter",
              options: {
                range: [
                  { key: "hp", title: "生命值" },
                  { key: "maxHp", title: "生命上限" },
                  { key: "minDef", title: "防御力下限" },
                  { key: "maxDef", title: "防御力上限" },
                  { key: "minAtk", title: "攻击力下限" },
                  { key: "maxAtk", title: "攻击力上限" },
                  { key: "matk", title: "法术攻击力" },
                  { key: "apr", title: "法术防御力" },
                  { key: "wt", title: "负重" },
                  { key: "res", title: "抗性" },
                  { key: "pct", title: "虔诚" },
                  { key: "acc", title: "命中" },
                  { key: "eva", title: "闪避" },
                  { key: "luc", title: "幸运" },
                  { key: "hex", title: "诅咒" },
                  { key: "crit", title: "会心" },
                  { key: "cha", title: "魅力" },
                  { key: "moral", title: "道德" },
                  { key: "sp", title: "唯我" },
                ],
              },
              title: "数值同步于",
              required: true,
              placeholder: "请选择数据需要同步的属性",
              rules: [{ required: true, message: "数值同步于项不可为空" }],
            },
          ],
          generatorParams: { pasteFrom: "hp" },
        },
        {
          translator: { key: "minDef", title: "防御力下限" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "maxDef", title: "防御力上限" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "minAtk", title: "攻击力下限" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "maxAtk", title: "攻击力上限" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "matk", title: "法术攻击力" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "apr", title: "法术防御力" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "wt", title: "负重" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "res", title: "抗性" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "pct", title: "虔诚" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "acc", title: "命中" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "eva", title: "闪避" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "luc", title: "幸运" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "hex", title: "诅咒" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "crit", title: "会心" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "cha", title: "魅力" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "moral", title: "道德" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "sp", title: "唯我" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 2, max: 222 },
        },
        {
          translator: { key: "ld", title: "指挥" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 1, max: 222 },
        },
      ],
    },
    {
      translator: { key: "attribute-plugin", title: "属性插件" },
      belong: "character",
      description: "随机生成一份人物属性",
      icon: "list",
      data: [
        {
          translator: { key: "ldr", title: "统帅" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 1, max: 18 },
        },
        {
          translator: { key: "ep", title: "佐佑" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 1, max: 18 },
        },
        {
          translator: { key: "int", title: "奇术" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 1, max: 18 },
        },
        {
          translator: { key: "str", title: "勇力" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 1, max: 18 },
        },
        {
          translator: { key: "df", title: "守御" },
          generator: "number",
          generatorForm: [
            {
              key: "min",
              type: "number",
              title: "最小值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最小值的内容...",
            },
            {
              key: "max",
              type: "number",
              title: "最大值",
              required: false,
              limit: { min: 0 },
              rules: [],
              placeholder: "有关于最大值的内容...",
            },
          ],
          generatorParams: { min: 1, max: 18 },
        },
      ],
    },
  ],
};
