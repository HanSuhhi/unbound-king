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
      description: "生成人物笃信与性别",
      icon: "mesasge",
      data: [
        {
          id: "gender",
          translator: { key: "gender", title: "性別" },
          generator: "random",
          generatorForm: [{ type: "text", title: "随机生成" }],
          generatorParams: {
            range: {
              MALE: { key: "male", title: "男" },
              FEMALE: { key: "female", title: "女" },
            },
          },
        },
        {
          id: "choose",
          translator: { key: "choose", title: "笃信" },
          generator: "random",
          generatorForm: [{ type: "text", title: "随机生成" }],
          generatorParams: {
            range: {
              RU: { key: "ru", title: "儒" },
              SHI: { key: "shi", title: "释" },
              DAO: { key: "dao", title: "道" },
            },
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
          id: "ATV6241678522351350",
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
          generatorParams: { min: 4, max: 4 },
        },
        {
          id: "ATV3721679470297067",
          translator: { key: "maxHp", title: "生命上限" },
          generator: "paste",
          generatorForm: [
            {
              key: "pasteFrom",
              type: "selecter",
              options: {
                range: [
                  { key: "ATV6241678522351350", title: "生命值" },
                  { key: "ATV3721679470297067", title: "生命上限" },
                  { key: "ATV5981678549140226", title: "防御力下限" },
                  { key: "ATV7371678551178444", title: "防御力上限" },
                  { key: "ATV9741678552626905", title: "攻击力下限" },
                  { key: "ATV8911678552735783", title: "攻击力上限" },
                  { key: "ATV8041678553102618", title: "法术攻击力" },
                  { key: "ATV2041678553356839", title: "法术防御力" },
                  { key: "ATV6471678553803991", title: "负重" },
                  { key: "ATV4851678598427597", title: "抗性" },
                  { key: "ATV0811678598789926", title: "虔诚" },
                  { key: "ATV5321678598891068", title: "命中" },
                  { key: "ATV1771678598987284", title: "闪避" },
                  { key: "ATV7271678599141629", title: "幸运" },
                  { key: "ATV1751678599231565", title: "诅咒" },
                  { key: "ATV7041678599371532", title: "会心" },
                  { key: "ATV2921678599431612", title: "魅力" },
                  { key: "ATV2171678599469748", title: "道德" },
                  { key: "ATV6141678599631858", title: "唯我" },
                ],
              },
              title: "数值同步于",
              required: true,
              placeholder: "请选择数据需要同步的属性",
              rules: [{ required: true, message: "数值同步于项不可为空" }],
            },
          ],
          generatorParams: { pasteFrom: "ATV6241678522351350" },
        },
        {
          id: "ATV5981678549140226",
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
          generatorParams: { min: 2, max: 231 },
        },
        {
          id: "ATV7371678551178444",
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
          generatorParams: { min: 2, max: 231 },
        },
        {
          id: "ATV9741678552626905",
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
          generatorParams: { min: 2, max: 231 },
        },
        {
          id: "ATV8911678552735783",
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
          generatorParams: { min: 21, max: 231 },
        },
        {
          id: "ATV8041678553102618",
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
          generatorParams: { min: 2, max: 231 },
        },
        {
          id: "ATV2041678553356839",
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
          generatorParams: { min: 2, max: 231 },
        },
        {
          id: "ATV6471678553803991",
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
          generatorParams: { min: 2, max: 231 },
        },
        {
          id: "ATV4851678598427597",
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
          generatorParams: { min: 2, max: 231 },
        },
        {
          id: "ATV0811678598789926",
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
          generatorParams: { min: 2, max: 231 },
        },
        {
          id: "ATV5321678598891068",
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
          generatorParams: { min: 2, max: 231 },
        },
        {
          id: "ATV1771678598987284",
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
          generatorParams: { min: 12, max: 231 },
        },
        {
          id: "ATV7271678599141629",
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
          generatorParams: { min: 2, max: 231 },
        },
        {
          id: "ATV1751678599231565",
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
          generatorParams: { min: 2, max: 231 },
        },
        {
          id: "ATV7041678599371532",
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
          generatorParams: { min: 2, max: 231 },
        },
        {
          id: "ATV2921678599431612",
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
          generatorParams: { min: 2, max: 231 },
        },
        {
          id: "ATV2171678599469748",
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
          generatorParams: { min: 2, max: 231 },
        },
        {
          id: "ATV6141678599631858",
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
          generatorParams: { min: 2, max: 231 },
        },
      ],
    },
  ],
};
