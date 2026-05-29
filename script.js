const lessons = [
  {
    id: "length",
    name: "Length",
    hint: "mm, cm, dm, m, km",
    icon: "M4 17h16M6 13v8M10 15v4M14 13v8M18 15v4",
    title: "Length Units",
    question: "How do we describe how long something is?",
    intro:
      "Length helps us compare height, distance, and size. Tiny things can be measured in millimeters, books in centimeters, short classroom objects in decimeters, rooms in meters, and long trips in kilometers.",
    mission:
      "Build a mini treasure map: use centimeters for the desk path, meters for the classroom, and kilometers for the trip to the park.",
    color: "#3977e3",
    units: [
      { label: "millimeter mm", value: 1 },
      { label: "centimeter cm", value: 10 },
      { label: "decimeter dm", value: 100 },
      { label: "meter m", value: 1000 },
      { label: "kilometer km", value: 1000000 },
    ],
    examples: [
      ["1 mm", "About the thickness of a small coin."],
      ["1 cm", "About the width of a fingernail."],
      ["1 dm", "10 centimeters, about the length of a small hand."],
      ["1 m", "10 decimeters, about the length of a big ruler."],
    ],
    quizzes: [
      {
        prompt: "Which unit is best for measuring the width of a book?",
        options: ["centimeters", "kilometers", "tons"],
        answer: "centimeters",
      },
      {
        prompt: "How many centimeters are in 1 meter?",
        options: ["10 centimeters", "100 centimeters", "1000 centimeters"],
        answer: "100 centimeters",
      },
      {
        prompt: "How many centimeters are in 1 decimeter?",
        options: ["10 centimeters", "100 centimeters", "1000 centimeters"],
        answer: "10 centimeters",
      },
    ],
  },
  {
    id: "weight",
    name: "Weight",
    hint: "g, kg, t",
    icon: "M7 20h10l-1-8H8l-1 8zM9 12a3 3 0 0 1 6 0M6 7h12",
    title: "Weight Units",
    question: "How do we describe how heavy something is?",
    intro:
      "Weight tells us whether something is light or heavy. Snacks and pencils use grams, backpacks and fruit use kilograms, and huge trucks use metric tons.",
    mission:
      "Pack a picnic basket: grams help compare cookies, kilograms help check fruit, and metric tons belong to delivery trucks.",
    color: "#1f9c73",
    units: [
      { label: "gram g", value: 1 },
      { label: "kilogram kg", value: 1000 },
      { label: "metric ton t", value: 1000000 },
    ],
    examples: [
      ["1 g", "About the weight of a paper clip."],
      ["500 g", "About the weight of a water bottle."],
      ["1 kg", "The same as 1000 grams."],
      ["1 t", "One metric ton is the same as 1000 kilograms."],
    ],
    quizzes: [
      {
        prompt: "Which unit is best for measuring the weight of an apple?",
        options: ["grams", "kilometers", "square meters"],
        answer: "grams",
      },
      {
        prompt: "How many grams are in 1 kilogram?",
        options: ["10 grams", "100 grams", "1000 grams"],
        answer: "1000 grams",
      },
    ],
  },
  {
    id: "capacity",
    name: "Capacity",
    hint: "mL, cm³, L, dm³",
    icon: "M8 3h8v6l3 6a4 4 0 0 1-4 6H9a4 4 0 0 1-4-6l3-6V3zM8 13h8",
    title: "Capacity Units",
    question: "How do we describe how much liquid something can hold?",
    intro:
      "Capacity measures liquids like water, milk, and juice. Milliliters match cubic centimeters, liters match cubic decimeters, and dessert recipes often use fluid ounces, cups, pints, quarts, and gallons.",
    mission:
      "Run a dessert kitchen: measure cream in cups, chocolate sauce in fluid ounces, and big party batches in quarts or gallons.",
    color: "#2b8fbf",
    units: [
      { label: "milliliter mL", value: 1 },
      { label: "cubic centimeter cm³", value: 1 },
      { label: "fluid ounce fl oz", value: 29.5735295625 },
      { label: "cup cup", value: 236.5882365 },
      { label: "pint pt", value: 473.176473 },
      { label: "quart qt", value: 946.352946 },
      { label: "gallon gal", value: 3785.411784 },
      { label: "liter L", value: 1000 },
      { label: "cubic decimeter dm³", value: 1000 },
    ],
    examples: [
      ["1 mL = 1 cm³", "A milliliter takes the same space as one cubic centimeter."],
      ["1 L = 1 dm³", "A liter takes the same space as one cubic decimeter."],
      ["1 L = 1000 cm³", "One liter equals 1000 cubic centimeters."],
      ["1 cup = 8 fl oz", "A dessert recipe might use one cup of milk."],
      ["1 gal = 4 qt", "A big party drink batch can be measured in gallons."],
    ],
    quizzes: [
      {
        prompt: "Which unit is best for measuring a cup of milk?",
        options: ["milliliters", "kilograms", "kilometers"],
        answer: "milliliters",
      },
      {
        prompt: "How many fluid ounces are in 1 cup?",
        options: ["2 fl oz", "8 fl oz", "16 fl oz"],
        answer: "8 fl oz",
      },
      {
        prompt: "How many cups are in 1 pint?",
        options: ["2 cups", "4 cups", "8 cups"],
        answer: "2 cups",
      },
      {
        prompt: "How many pints are in 1 quart?",
        options: ["2 pints", "4 pints", "8 pints"],
        answer: "2 pints",
      },
      {
        prompt: "How many quarts are in 1 gallon?",
        options: ["2 quarts", "4 quarts", "8 quarts"],
        answer: "4 quarts",
      },
      {
        prompt: "How many milliliters are in 1 liter?",
        options: ["10 milliliters", "100 milliliters", "1000 milliliters"],
        answer: "1000 milliliters",
      },
      {
        prompt: "How many cubic decimeters are in 1 liter?",
        options: ["1 dm³", "10 dm³", "1000 dm³"],
        answer: "1 dm³",
      },
      {
        prompt: "How many cubic centimeters are in 1 liter?",
        options: ["100 cm³", "1000 cm³", "10,000 cm³"],
        answer: "1000 cm³",
      },
    ],
  },
  {
    id: "time",
    name: "Time",
    hint: "µs, ms, s, min, h",
    icon: "M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
    title: "Time Units",
    question: "How do we describe how long something takes?",
    intro:
      "Time units help us measure moments. A microsecond is extremely tiny, a millisecond is still very quick, a second can count a clap, and minutes or hours help us plan the day.",
    mission:
      "Be a race judge: microseconds and milliseconds decide fast computer timing, seconds time a sprint, and minutes time a game.",
    color: "#d18b1f",
    units: [
      { label: "microsecond µs", value: 1 },
      { label: "millisecond ms", value: 1000 },
      { label: "second s", value: 1000000 },
      { label: "minute min", value: 60000000 },
      { label: "hour h", value: 3600000000 },
    ],
    examples: [
      ["1 µs", "One microsecond is one millionth of a second."],
      ["1 ms", "One millisecond is one thousandth of a second."],
      ["1 s", "About the time for one clap."],
      ["1 min", "60 seconds, enough time to count to 60."],
    ],
    quizzes: [
      {
        prompt: "How many milliseconds are in 1 second?",
        options: ["10 milliseconds", "1000 milliseconds", "1,000,000 milliseconds"],
        answer: "1000 milliseconds",
      },
      {
        prompt: "What is the standard name for µs?",
        options: ["microsecond", "millisecond", "minute"],
        answer: "microsecond",
      },
    ],
  },
  {
    id: "temperature",
    name: "Temperature",
    hint: "°C",
    icon: "M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0zM12 17v-5",
    title: "Temperature Units",
    question: "How do we describe hot and cold?",
    intro:
      "Temperature tells us whether something is cold, warm, or hot. Celsius is common in everyday life. Water freezes near 0 °C, and body temperature is about 37 °C.",
    mission:
      "Be a weather reporter: choose clothes for a cold 5 °C morning, a warm 25 °C afternoon, or a hot 35 °C day.",
    color: "#e85c4a",
    units: [
      { label: "degree Celsius °C", value: 1 },
    ],
    examples: [
      ["0 °C", "Water is close to freezing."],
      ["25 °C", "A comfortable room temperature."],
      ["37 °C", "About normal body temperature."],
      ["100 °C", "Water is close to boiling."],
    ],
    quizzes: [
      {
        prompt: "About what temperature is a healthy human body?",
        options: ["0 °C", "37 °C", "100 °C"],
        answer: "37 °C",
      },
      {
        prompt: "If the weather is 30 °C, what does that mean?",
        options: ["It is warm or hot", "It is very heavy", "It is far away"],
        answer: "It is warm or hot",
      },
    ],
  },
  {
    id: "area",
    name: "Area",
    hint: "cm², dm², m², ha",
    icon: "M5 5h14v14H5zM5 12h14M12 5v14",
    title: "Area Units",
    question: "How do we describe how much space a flat surface covers?",
    intro:
      "Area measures flat surfaces like desks, floors, playgrounds, and fields. Small cards use square centimeters, notebooks can use square decimeters, rooms often use square meters, and large land areas can use hectares.",
    mission:
      "Design a playground: use square meters for the slide area and hectares when you imagine a giant park.",
    color: "#7c62d1",
    units: [
      { label: "square centimeter cm²", value: 1 },
      { label: "square decimeter dm²", value: 100 },
      { label: "square meter m²", value: 10000 },
      { label: "hectare ha", value: 100000000 },
    ],
    examples: [
      ["1 cm²", "A tiny square that is 1 cm on each side."],
      ["1 dm²", "A square that is 1 dm on each side, the same as 100 cm²."],
      ["1 m²", "A big square that is 1 m on each side."],
      ["1 ha", "10,000 square meters, useful for parks and farms."],
    ],
    quizzes: [
      {
        prompt: "Which unit is best for measuring a classroom floor?",
        options: ["square meters", "milliliters", "seconds"],
        answer: "square meters",
      },
      {
        prompt: "How many square centimeters are in 1 square decimeter?",
        options: ["10 cm²", "100 cm²", "1000 cm²"],
        answer: "100 cm²",
      },
      {
        prompt: "What is the area of a square that is 1 meter on each side?",
        options: ["1 square meter", "1 centimeter", "1 kilogram"],
        answer: "1 square meter",
      },
      {
        prompt: "How many square meters are in 1 hectare?",
        options: ["100 square meters", "1000 square meters", "10,000 square meters"],
        answer: "10,000 square meters",
      },
    ],
  },
  {
    id: "storage",
    name: "Digital Storage",
    hint: "B, MB, GB, TB",
    icon: "M6 4h12v16H6zM9 8h6M9 12h6M9 16h3",
    title: "Digital Storage Units",
    question: "How do we describe how much data a device can hold?",
    intro:
      "Digital storage tells us how much information fits in a device. A byte is tiny, megabytes fit photos and songs, gigabytes fit apps and videos, and terabytes fit huge collections.",
    mission:
      "Plan a tablet for a trip: count bytes for tiny text, megabytes for photos, gigabytes for games, and terabytes for a big family video library.",
    color: "#4f86f7",
    units: [
      { label: "byte B", value: 1 },
      { label: "megabyte MB", value: 1000000 },
      { label: "gigabyte GB", value: 1000000000 },
      { label: "terabyte TB", value: 1000000000000 },
    ],
    examples: [
      ["1 B", "Enough for one tiny piece of computer information."],
      ["1 MB", "About one small photo or a short audio clip."],
      ["1 GB", "About 1000 megabytes, useful for apps and videos."],
      ["1 TB", "About 1000 gigabytes, useful for lots of videos."],
    ],
    quizzes: [
      {
        prompt: "Which unit is best for measuring storage on a laptop?",
        options: ["gigabytes", "liters", "degrees Celsius"],
        answer: "gigabytes",
      },
      {
        prompt: "How many megabytes are in 1 gigabyte in this lesson?",
        options: ["10 MB", "100 MB", "1000 MB"],
        answer: "1000 MB",
      },
      {
        prompt: "Which unit is bigger?",
        options: ["byte", "megabyte", "terabyte"],
        answer: "terabyte",
      },
    ],
  },
  {
    id: "speed",
    name: "Speed",
    hint: "km/h, m/s",
    icon: "M4 16h7M4 12h11M4 8h15M17 16l3-4-3-4",
    title: "Speed Units",
    question: "How do we describe how fast something moves?",
    intro:
      "Speed tells us how much distance is traveled in a certain time. Cars often use kilometers per hour, while running, cycling, and science examples often use meters per second.",
    mission:
      "Be a race coach: compare a car's speed in km/h with a runner's speed in m/s.",
    color: "#0f9fb4",
    units: [
      { label: "meter per second m/s", value: 1 },
      { label: "kilometer per hour km/h", value: 0.2777777777777778 },
    ],
    examples: [
      ["1 km/h", "The same as about 0.2778 m/s."],
      ["1 m/s", "The same as 3.6 km/h."],
      ["30 km/h", "A slow road speed for a vehicle."],
      ["5 m/s", "A fast playground running speed."],
    ],
    quizzes: [
      {
        prompt: "How many km/h are in 1 m/s?",
        options: ["0.36 km/h", "3.6 km/h", "36 km/h"],
        answer: "3.6 km/h",
      },
      {
        prompt: "Which unit is often used for car speed?",
        options: ["km/h", "mL", "cm²"],
        answer: "km/h",
      },
      {
        prompt: "Which unit can describe how many meters a runner moves each second?",
        options: ["m/s", "TB", "°C"],
        answer: "m/s",
      },
    ],
  },
];

const zhLessons = {
  length: {
    name: "长度",
    hint: "毫米、厘米、分米、米、千米",
    title: "长度单位",
    question: "怎样描述东西有多长？",
    intro:
      "长度帮助我们比较高矮、远近和大小。很小的东西用毫米，书本用厘米，短一些的教室物品用分米，房间用米，长途距离用千米。",
    mission:
      "画一张寻宝地图：桌面路线用厘米，教室距离用米，去公园的路程用千米。",
    units: [
      { label: "毫米 mm", value: 1 },
      { label: "厘米 cm", value: 10 },
      { label: "分米 dm", value: 100 },
      { label: "米 m", value: 1000 },
      { label: "千米 km", value: 1000000 },
    ],
    examples: [
      ["1 mm", "大约是一枚小硬币的厚度。"],
      ["1 cm", "大约是一根手指甲的宽度。"],
      ["1 dm", "等于 10 厘米，大约是一只小手的长度。"],
      ["1 m", "等于 10 分米，大约是一把大尺子的长度。"],
    ],
    quizzes: [
      {
        prompt: "量一本书的宽度，最适合用哪个单位？",
        options: ["厘米", "千米", "吨"],
        answer: "厘米",
      },
      {
        prompt: "1 米等于多少厘米？",
        options: ["10 厘米", "100 厘米", "1000 厘米"],
        answer: "100 厘米",
      },
      {
        prompt: "1 分米等于多少厘米？",
        options: ["10 厘米", "100 厘米", "1000 厘米"],
        answer: "10 厘米",
      },
    ],
  },
  weight: {
    name: "重量",
    hint: "克、千克、吨",
    title: "重量单位",
    question: "怎样描述东西有多重？",
    intro:
      "重量告诉我们物体轻还是重。零食和铅笔用克，书包和水果用千克，大卡车常用吨。",
    mission:
      "准备一次野餐：饼干用克来比较，水果用千克来称，大货车才会用吨。",
    units: [
      { label: "克 g", value: 1 },
      { label: "千克 kg", value: 1000 },
      { label: "吨 t", value: 1000000 },
    ],
    examples: [
      ["1 g", "大约是一枚回形针的重量。"],
      ["500 g", "大约是一瓶水的重量。"],
      ["1 kg", "等于 1000 克。"],
      ["1 t", "等于 1000 千克。"],
    ],
    quizzes: [
      {
        prompt: "量一个苹果的重量，最适合用哪个单位？",
        options: ["克", "千米", "平方米"],
        answer: "克",
      },
      {
        prompt: "1 千克等于多少克？",
        options: ["10 克", "100 克", "1000 克"],
        answer: "1000 克",
      },
    ],
  },
  capacity: {
    name: "容量",
    hint: "毫升、立方厘米、升、立方分米",
    title: "容量单位",
    question: "怎样描述能装多少液体？",
    intro:
      "容量用来测量水、牛奶、果汁等液体。毫升和立方厘米一样大，升和立方分米一样大，甜品食谱里还常见液量盎司、杯、品脱、夸脱和加仑。",
    mission:
      "开一家甜品厨房：奶油可以用 cup，巧克力酱可以用 fl oz，大份派对饮料可以用 quart 或 gallon。",
    units: [
      { label: "毫升 mL", value: 1 },
      { label: "立方厘米 cm³", value: 1 },
      { label: "液量盎司 fl oz", value: 29.5735295625 },
      { label: "杯 cup", value: 236.5882365 },
      { label: "品脱 pt", value: 473.176473 },
      { label: "夸脱 qt", value: 946.352946 },
      { label: "加仑 gal", value: 3785.411784 },
      { label: "升 L", value: 1000 },
      { label: "立方分米 dm³", value: 1000 },
    ],
    examples: [
      ["1 mL = 1 cm³", "1 毫升和 1 立方厘米占的空间一样大。"],
      ["1 L = 1 dm³", "1 升和 1 立方分米占的空间一样大。"],
      ["1 L = 1000 cm³", "1 升等于 1000 立方厘米。"],
      ["1 cup = 8 fl oz", "甜品食谱里可能会用 1 cup 牛奶。"],
      ["1 gal = 4 qt", "大份派对饮料可以用 gallon。"],
    ],
    quizzes: [
      {
        prompt: "量一杯牛奶，最适合用哪个单位？",
        options: ["毫升", "千克", "千米"],
        answer: "毫升",
      },
      {
        prompt: "1 cup 等于多少 fl oz？",
        options: ["2 fl oz", "8 fl oz", "16 fl oz"],
        answer: "8 fl oz",
      },
      {
        prompt: "1 pint 等于多少 cups？",
        options: ["2 cups", "4 cups", "8 cups"],
        answer: "2 cups",
      },
      {
        prompt: "1 quart 等于多少 pints？",
        options: ["2 pints", "4 pints", "8 pints"],
        answer: "2 pints",
      },
      {
        prompt: "1 gallon 等于多少 quarts？",
        options: ["2 quarts", "4 quarts", "8 quarts"],
        answer: "4 quarts",
      },
      {
        prompt: "1 升等于多少毫升？",
        options: ["10 毫升", "100 毫升", "1000 毫升"],
        answer: "1000 毫升",
      },
      {
        prompt: "1 升等于多少立方分米？",
        options: ["1 dm³", "10 dm³", "1000 dm³"],
        answer: "1 dm³",
      },
      {
        prompt: "1 升等于多少立方厘米？",
        options: ["100 cm³", "1000 cm³", "10,000 cm³"],
        answer: "1000 cm³",
      },
    ],
  },
  time: {
    name: "时间",
    hint: "微秒、毫秒、秒、分、小时",
    title: "时间单位",
    question: "怎样描述事情用了多久？",
    intro:
      "时间单位帮助我们测量一瞬间或一整天。微秒非常短，毫秒也很快，秒可以数一次拍手，分钟和小时帮助我们安排一天。",
    mission:
      "当一次比赛裁判：微秒和毫秒用于很快的计时，秒用来记录短跑，分钟用来记录一场游戏。",
    units: [
      { label: "微秒 µs", value: 1 },
      { label: "毫秒 ms", value: 1000 },
      { label: "秒 s", value: 1000000 },
      { label: "分钟 min", value: 60000000 },
      { label: "小时 h", value: 3600000000 },
    ],
    examples: [
      ["1 µs", "1 微秒等于一百万分之一秒。"],
      ["1 ms", "1 毫秒等于一千分之一秒。"],
      ["1 s", "大约是拍一下手的时间。"],
      ["1 min", "60 秒，可以数到 60。"],
    ],
    quizzes: [
      {
        prompt: "1 秒等于多少毫秒？",
        options: ["10 毫秒", "1000 毫秒", "1,000,000 毫秒"],
        answer: "1000 毫秒",
      },
      {
        prompt: "µs 的标准英文名称是什么？",
        options: ["microsecond", "millisecond", "minute"],
        answer: "microsecond",
      },
    ],
  },
  temperature: {
    name: "温度",
    hint: "摄氏度",
    title: "温度单位",
    question: "怎样描述冷和热？",
    intro:
      "温度告诉我们冷、暖、热。生活中常用摄氏度。水在 0 °C 附近结冰，人体体温大约是 37 °C。",
    mission:
      "当一名天气播报员：5 °C 早晨要穿暖，25 °C 很舒服，35 °C 就很热。",
    units: [{ label: "摄氏度 °C", value: 1 }],
    examples: [
      ["0 °C", "水接近结冰。"],
      ["25 °C", "舒服的室温。"],
      ["37 °C", "大约是正常体温。"],
      ["100 °C", "水接近沸腾。"],
    ],
    quizzes: [
      {
        prompt: "健康人体体温大约是多少？",
        options: ["0 °C", "37 °C", "100 °C"],
        answer: "37 °C",
      },
      {
        prompt: "天气是 30 °C，是什么意思？",
        options: ["天气较热", "东西很重", "距离很远"],
        answer: "天气较热",
      },
    ],
  },
  area: {
    name: "面积",
    hint: "平方厘米、平方分米、平方米、公顷",
    title: "面积单位",
    question: "怎样描述一个平面有多大？",
    intro:
      "面积用来测量桌面、地板、操场和农田这样的平面。小卡片用平方厘米，本子页面可以用平方分米，房间用平方米，大块土地可以用公顷。",
    mission:
      "设计一个游乐场：滑梯区域用平方米，想象一个大公园时可以用公顷。",
    units: [
      { label: "平方厘米 cm²", value: 1 },
      { label: "平方分米 dm²", value: 100 },
      { label: "平方米 m²", value: 10000 },
      { label: "公顷 ha", value: 100000000 },
    ],
    examples: [
      ["1 cm²", "边长 1 厘米的小正方形。"],
      ["1 dm²", "边长 1 分米的正方形，等于 100 平方厘米。"],
      ["1 m²", "边长 1 米的大正方形。"],
      ["1 ha", "等于 10,000 平方米，常用于公园和农场。"],
    ],
    quizzes: [
      {
        prompt: "量教室地面面积，最适合用哪个单位？",
        options: ["平方米", "毫升", "秒"],
        answer: "平方米",
      },
      {
        prompt: "1 平方分米等于多少平方厘米？",
        options: ["10 cm²", "100 cm²", "1000 cm²"],
        answer: "100 cm²",
      },
      {
        prompt: "边长 1 米的正方形面积是多少？",
        options: ["1 平方米", "1 厘米", "1 千克"],
        answer: "1 平方米",
      },
      {
        prompt: "1 公顷等于多少平方米？",
        options: ["100 平方米", "1000 平方米", "10,000 平方米"],
        answer: "10,000 平方米",
      },
    ],
  },
  storage: {
    name: "数字存储",
    hint: "B、MB、GB、TB",
    title: "数字存储单位",
    question: "怎样描述设备能存多少数据？",
    intro:
      "数字存储告诉我们手机、平板、电脑能放多少信息。Byte 很小，MB 常用来表示照片和音频，GB 常用来表示应用和视频，TB 可以放很多很多文件。",
    mission:
      "为一次旅行准备平板电脑：小文字用 Byte，照片用 MB，游戏用 GB，全家视频库用 TB。",
    units: [
      { label: "字节 B", value: 1 },
      { label: "兆字节 MB", value: 1000000 },
      { label: "吉字节 GB", value: 1000000000 },
      { label: "太字节 TB", value: 1000000000000 },
    ],
    examples: [
      ["1 B", "可以表示很小的一点电脑信息。"],
      ["1 MB", "大约可以是一张小照片或一小段音频。"],
      ["1 GB", "约等于 1000 MB，常用于应用和视频。"],
      ["1 TB", "约等于 1000 GB，可以存很多视频。"],
    ],
    quizzes: [
      {
        prompt: "量一台笔记本电脑的存储空间，最适合用哪个单位？",
        options: ["GB", "升", "摄氏度"],
        answer: "GB",
      },
      {
        prompt: "本课中 1 GB 等于多少 MB？",
        options: ["10 MB", "100 MB", "1000 MB"],
        answer: "1000 MB",
      },
      {
        prompt: "哪个单位最大？",
        options: ["Byte", "MB", "TB"],
        answer: "TB",
      },
    ],
  },
  speed: {
    name: "速度",
    hint: "km/h、m/s",
    title: "速度单位",
    question: "怎样描述物体运动得有多快？",
    intro:
      "速度告诉我们一段时间内走了多远。汽车常用千米每小时，跑步、骑车和科学例子常用米每秒。",
    mission:
      "当一名比赛教练：用 km/h 比较汽车速度，用 m/s 比较跑步速度。",
    units: [
      { label: "米每秒 m/s", value: 1 },
      { label: "千米每小时 km/h", value: 0.2777777777777778 },
    ],
    examples: [
      ["1 km/h", "大约等于 0.2778 m/s。"],
      ["1 m/s", "等于 3.6 km/h。"],
      ["30 km/h", "车辆比较慢的道路速度。"],
      ["5 m/s", "操场上比较快的跑步速度。"],
    ],
    quizzes: [
      {
        prompt: "1 m/s 等于多少 km/h？",
        options: ["0.36 km/h", "3.6 km/h", "36 km/h"],
        answer: "3.6 km/h",
      },
      {
        prompt: "汽车速度常用哪个单位？",
        options: ["km/h", "mL", "cm²"],
        answer: "km/h",
      },
      {
        prompt: "哪个单位可以表示每秒跑了多少米？",
        options: ["m/s", "TB", "°C"],
        answer: "m/s",
      },
    ],
  },
};

const uiText = {
  en: {
    pageTitle: "Unit Lab for Kids",
    brand: "Unit Lab",
    tagline: "Look, convert, practice",
    today: "Today's Lesson",
    score: "Score",
    converterTitle: "Conversion Blocks",
    converterHelp: "Type a number and see how it changes into another unit.",
    missionTitle: "Life Mission",
    number: "Number",
    from: "From",
    to: "To",
    practiceTitle: "Quick Practice",
    practiceHelp: "Pick the best answer.",
    next: "Next Question",
    correct: "Correct. That unit fits the situation.",
    wrong: "Good try. The correct answer is:",
    locale: "en-US",
  },
  zh: {
    pageTitle: "儿童单位小课堂",
    brand: "单位小课堂",
    tagline: "看一看，换一换，练一练",
    today: "今天学习",
    score: "得分",
    converterTitle: "换算积木",
    converterHelp: "输入一个数字，看看它能换成多少其他单位。",
    missionTitle: "生活任务",
    number: "数字",
    from: "从",
    to: "到",
    practiceTitle: "小练习",
    practiceHelp: "选出最合适的答案。",
    next: "下一题",
    correct: "答对了。这个单位用得很合适。",
    wrong: "再想想。正确答案是：",
    locale: "zh-CN",
  },
};

let activeLesson = lessons[0];
let activeQuizIndex = 0;
let score = 0;
let currentLang = localStorage.getItem("unitLabLang") || "en";

const unitTabs = document.querySelector("#unitTabs");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonQuestion = document.querySelector("#lessonQuestion");
const lessonIntro = document.querySelector("#lessonIntro");
const missionTitle = document.querySelector("#missionTitle");
const lessonMission = document.querySelector("#lessonMission");
const pictureCards = document.querySelector("#pictureCards");
const examples = document.querySelector("#examples");
const sceneArt = document.querySelector("#sceneArt");
const convertAmount = document.querySelector("#convertAmount");
const fromUnit = document.querySelector("#fromUnit");
const toUnit = document.querySelector("#toUnit");
const convertResult = document.querySelector("#convertResult");
const quizPrompt = document.querySelector("#quizPrompt");
const quizOptions = document.querySelector("#quizOptions");
const quizFeedback = document.querySelector("#quizFeedback");
const scoreValue = document.querySelector("#scoreValue");
const nextQuiz = document.querySelector("#nextQuiz");
const languageButtons = document.querySelectorAll(".language-button");

function formatNumber(value) {
  const locale = uiText[currentLang].locale;
  if (Number.isInteger(value)) return value.toLocaleString(locale);
  return Number(value.toFixed(4)).toLocaleString(locale);
}

function localizedLesson(lesson = activeLesson) {
  return currentLang === "zh" ? { ...lesson, ...zhLessons[lesson.id] } : lesson;
}

function applyUiText() {
  const text = uiText[currentLang];
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.title = text.pageTitle;
  document.querySelector(".brand h1").textContent = text.brand;
  document.querySelector(".brand p").textContent = text.tagline;
  document.querySelector(".eyebrow").textContent = text.today;
  document.querySelector(".score-card span").textContent = text.score;
  document.querySelector("#converterTitle").textContent = text.converterTitle;
  document.querySelector(".converter .section-heading p").textContent = text.converterHelp;
  missionTitle.textContent = text.missionTitle;
  document.querySelector(".converter-row label:nth-child(1) span").textContent = text.number;
  document.querySelector(".converter-row label:nth-child(2) span").textContent = text.from;
  document.querySelector(".converter-row label:nth-child(3) span").textContent = text.to;
  document.querySelector("#practiceTitle").textContent = text.practiceTitle;
  document.querySelector(".practice .section-heading p").textContent = text.practiceHelp;
  nextQuiz.lastChild.textContent = ` ${text.next}`;
  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });
}

function iconPath(path) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${path}"/></svg>`;
}

function renderTabs() {
  const selectedId = activeLesson.id;
  unitTabs.innerHTML = lessons
    .map(
      (lesson) => {
        const item = localizedLesson(lesson);
        return `
        <button class="tab-button ${lesson.id === selectedId ? "active" : ""}" type="button" data-id="${lesson.id}">
          ${iconPath(lesson.icon)}
          <span><strong>${item.name}</strong><span>${item.hint}</span></span>
        </button>
      `;
      },
    )
    .join("");
}

function renderScene(lesson) {
  const color = lesson.color;
  const scenes = {
    length: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Ruler and pencil">
        <rect width="520" height="320" fill="#f6fbff"/>
        <rect x="62" y="198" width="396" height="56" rx="8" fill="#ffd56a" stroke="#c28b1a"/>
        ${Array.from({ length: 12 }, (_, i) => `<line x1="${88 + i * 30}" y1="198" x2="${88 + i * 30}" y2="${i % 2 ? 224 : 238}" stroke="#7a5710" stroke-width="4"/>`).join("")}
        <rect x="116" y="112" width="270" height="38" rx="18" fill="${color}"/>
        <polygon points="386,112 448,131 386,150" fill="#f4c58e"/>
        <polygon points="428,125 448,131 428,137" fill="#27313b"/>
        <circle cx="128" cy="131" r="15" fill="#ffefe8"/>
      </svg>`,
    weight: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Balance scale and fruit">
        <rect width="520" height="320" fill="#f7fffb"/>
        <line x1="260" y1="80" x2="260" y2="245" stroke="#456" stroke-width="10"/>
        <line x1="138" y1="118" x2="382" y2="118" stroke="#456" stroke-width="10"/>
        <path d="M128 128l-54 82h108zM392 128l-54 82h108z" fill="#dff4ec" stroke="#68b392" stroke-width="5"/>
        <circle cx="112" cy="188" r="26" fill="#f15d4a"/>
        <path d="M112 160c16-20 36-10 37 6" fill="none" stroke="#2d8b60" stroke-width="6"/>
        <rect x="348" y="164" width="54" height="54" rx="8" fill="${color}"/>
        <rect x="222" y="244" width="76" height="18" rx="4" fill="#456"/>
      </svg>`,
    capacity: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Water cup and measuring cup">
        <rect width="520" height="320" fill="#f4fbff"/>
        <path d="M132 72h130l-20 184h-90z" fill="#ffffff" stroke="#6aaed6" stroke-width="6"/>
        <path d="M150 154h94l-11 102h-72z" fill="#73c7ef"/>
        <line x1="266" y1="104" x2="308" y2="104" stroke="#6aaed6" stroke-width="5"/>
        <line x1="258" y1="148" x2="298" y2="148" stroke="#6aaed6" stroke-width="5"/>
        <line x1="252" y1="192" x2="288" y2="192" stroke="#6aaed6" stroke-width="5"/>
        <rect x="340" y="102" width="68" height="154" rx="16" fill="${color}"/>
        <rect x="350" y="122" width="48" height="112" rx="10" fill="#e7f8ff" opacity=".85"/>
      </svg>`,
    time: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Clock">
        <rect width="520" height="320" fill="#fffaf0"/>
        <circle cx="260" cy="160" r="102" fill="#fff" stroke="${color}" stroke-width="10"/>
        <circle cx="260" cy="160" r="8" fill="#26313d"/>
        <line x1="260" y1="160" x2="260" y2="96" stroke="#26313d" stroke-width="8" stroke-linecap="round"/>
        <line x1="260" y1="160" x2="314" y2="192" stroke="#26313d" stroke-width="8" stroke-linecap="round"/>
        <text x="253" y="80" font-size="28" font-weight="700" fill="#26313d">12</text>
        <text x="350" y="169" font-size="28" font-weight="700" fill="#26313d">3</text>
        <text x="255" y="252" font-size="28" font-weight="700" fill="#26313d">6</text>
        <text x="158" y="169" font-size="28" font-weight="700" fill="#26313d">9</text>
      </svg>`,
    temperature: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Thermometer">
        <rect width="520" height="320" fill="#fff7f5"/>
        <rect x="232" y="54" width="56" height="170" rx="28" fill="#fff" stroke="#c4ced8" stroke-width="7"/>
        <circle cx="260" cy="232" r="54" fill="#fff" stroke="#c4ced8" stroke-width="7"/>
        <rect x="249" y="100" width="22" height="134" rx="11" fill="${color}"/>
        <circle cx="260" cy="232" r="34" fill="${color}"/>
        <path d="M330 94h74M330 146h54M330 198h74" stroke="#9aa7b5" stroke-width="7" stroke-linecap="round"/>
        <path d="M144 226c30-22 58-22 88 0" stroke="#6cbfe0" stroke-width="9" fill="none" stroke-linecap="round"/>
      </svg>`,
    area: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Grid for area">
        <rect width="520" height="320" fill="#faf8ff"/>
        <rect x="112" y="58" width="296" height="206" rx="8" fill="#fff" stroke="${color}" stroke-width="8"/>
        ${Array.from({ length: 5 }, (_, i) => `<line x1="${112 + (i + 1) * 49.3}" y1="58" x2="${112 + (i + 1) * 49.3}" y2="264" stroke="#d9d0f5" stroke-width="4"/>`).join("")}
        ${Array.from({ length: 3 }, (_, i) => `<line x1="112" y1="${58 + (i + 1) * 51.5}" x2="408" y2="${58 + (i + 1) * 51.5}" stroke="#d9d0f5" stroke-width="4"/>`).join("")}
        <rect x="162" y="110" width="98" height="103" fill="${color}" opacity=".2"/>
        <path d="M162 110h98v103h-98z" fill="none" stroke="${color}" stroke-width="6"/>
      </svg>`,
    storage: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Tablet and storage blocks">
        <rect width="520" height="320" fill="#f4f8ff"/>
        <rect x="128" y="54" width="184" height="230" rx="22" fill="#26313d"/>
        <rect x="146" y="78" width="148" height="178" rx="8" fill="#eef5ff"/>
        <circle cx="220" cy="270" r="7" fill="#8ea5c6"/>
        <rect x="170" y="104" width="100" height="18" rx="5" fill="${color}"/>
        <rect x="170" y="138" width="76" height="18" rx="5" fill="#70c6a3"/>
        <rect x="170" y="172" width="116" height="18" rx="5" fill="#f5b63d"/>
        <rect x="342" y="82" width="78" height="52" rx="8" fill="#ffffff" stroke="${color}" stroke-width="5"/>
        <text x="363" y="116" font-size="24" font-weight="700" fill="#26313d">MB</text>
        <rect x="350" y="152" width="92" height="60" rx="8" fill="#ffffff" stroke="#70c6a3" stroke-width="5"/>
        <text x="374" y="189" font-size="25" font-weight="700" fill="#26313d">GB</text>
        <rect x="332" y="228" width="112" height="62" rx="8" fill="#ffffff" stroke="#f5b63d" stroke-width="5"/>
        <text x="364" y="267" font-size="25" font-weight="700" fill="#26313d">TB</text>
      </svg>`,
    speed: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Road speed and runner speed">
        <rect width="520" height="320" fill="#f2fbfd"/>
        <path d="M44 236h432" stroke="#5d6875" stroke-width="58" stroke-linecap="round"/>
        <path d="M64 236h392" stroke="#ffffff" stroke-width="6" stroke-dasharray="30 22" stroke-linecap="round"/>
        <rect x="92" y="142" width="150" height="58" rx="16" fill="${color}"/>
        <rect x="124" y="112" width="86" height="46" rx="12" fill="#8fd1df"/>
        <circle cx="128" cy="204" r="18" fill="#26313d"/>
        <circle cx="210" cy="204" r="18" fill="#26313d"/>
        <text x="294" y="132" font-size="36" font-weight="700" fill="#26313d">km/h</text>
        <path d="M330 184c34-32 72-32 106 0" fill="none" stroke="#f5b63d" stroke-width="9" stroke-linecap="round"/>
        <circle cx="370" cy="166" r="16" fill="#e85c4a"/>
        <path d="M366 184l-22 38M374 184l32 36" stroke="#26313d" stroke-width="8" stroke-linecap="round"/>
        <text x="344" y="270" font-size="34" font-weight="700" fill="#26313d">m/s</text>
      </svg>`,
  };
  sceneArt.innerHTML = scenes[lesson.id];
}

function renderPictureCards(id) {
  const labels = {
    en: {
      length: ["Desk map", "Classroom path", "Park trip"],
      weight: ["Snack bag", "Fruit basket", "Delivery truck"],
      capacity: ["Measuring cup", "Cream cup", "Party gallon"],
      time: ["Fast timer", "Sprint race", "Game clock"],
      temperature: ["Cold morning", "Warm room", "Hot day"],
      area: ["Sticker square", "Notebook page", "Big park"],
      storage: ["Tiny text", "Photo album", "Video library"],
      speed: ["Car speed", "Runner speed", "Bike ride"],
    },
    zh: {
      length: ["桌面地图", "教室路线", "公园路程"],
      weight: ["零食袋", "水果篮", "送货卡车"],
      capacity: ["量杯", "奶油杯", "派对加仑"],
      time: ["快速计时", "短跑比赛", "游戏时钟"],
      temperature: ["寒冷早晨", "温暖房间", "炎热天气"],
      area: ["贴纸方格", "本子页面", "大公园"],
      storage: ["小文字", "照片相册", "视频资料库"],
      speed: ["汽车速度", "跑步速度", "骑车速度"],
    },
  };
  const cards = {
    length: [
      `<path d="M24 62h92v16H24z" fill="#ffd56a" stroke="#b78012" stroke-width="3"/><path d="M40 28h80l28 16-28 16H40z" fill="#3977e3"/><path d="M120 28l28 16-28 16z" fill="#f4c58e"/>`,
      `<path d="M20 76c38-42 78-42 120 0" fill="none" stroke="#3977e3" stroke-width="8" stroke-linecap="round"/><circle cx="28" cy="76" r="9" fill="#f5b63d"/><circle cx="140" cy="76" r="9" fill="#1f9c73"/>`,
      `<path d="M24 74h116" stroke="#8eb76e" stroke-width="10"/><path d="M36 74c18-34 38-34 56 0s38 34 56 0" fill="none" stroke="#3977e3" stroke-width="5"/><circle cx="124" cy="42" r="13" fill="#f5b63d"/>`,
    ],
    weight: [
      `<rect x="44" y="30" width="72" height="50" rx="8" fill="#f5b63d"/><circle cx="62" cy="50" r="7" fill="#fff"/><circle cx="92" cy="62" r="7" fill="#fff"/>`,
      `<path d="M48 72h76l-10 18H58z" fill="#8b5e3c"/><circle cx="70" cy="54" r="18" fill="#e85c4a"/><circle cx="98" cy="52" r="16" fill="#1f9c73"/>`,
      `<rect x="24" y="48" width="88" height="34" rx="6" fill="#4f86f7"/><rect x="112" y="60" width="34" height="22" fill="#3977e3"/><circle cx="52" cy="86" r="8" fill="#26313d"/><circle cx="120" cy="86" r="8" fill="#26313d"/>`,
    ],
    capacity: [
      `<path d="M52 28h54l-8 62H60z" fill="#fff" stroke="#2b8fbf" stroke-width="4"/><path d="M60 58h38l-4 32H64z" fill="#73c7ef"/>`,
      `<rect x="64" y="20" width="42" height="72" rx="12" fill="#2b8fbf"/><rect x="72" y="34" width="26" height="44" rx="6" fill="#e7f8ff"/>`,
      `<path d="M46 28h68l14 62H32z" fill="#fff" stroke="#2b8fbf" stroke-width="4"/><path d="M42 60h76l7 30H35z" fill="#73c7ef"/>`,
    ],
    time: [
      `<circle cx="82" cy="56" r="34" fill="#fff" stroke="#d18b1f" stroke-width="6"/><path d="M82 56V34M82 56l18 12" stroke="#26313d" stroke-width="5" stroke-linecap="round"/>`,
      `<path d="M36 82c34-44 70-44 104 0" fill="none" stroke="#d18b1f" stroke-width="7"/><circle cx="52" cy="72" r="10" fill="#3977e3"/><circle cx="116" cy="72" r="10" fill="#e85c4a"/>`,
      `<rect x="38" y="30" width="88" height="52" rx="8" fill="#26313d"/><text x="56" y="64" font-size="22" font-weight="700" fill="#fff">12:00</text>`,
    ],
    temperature: [
      `<path d="M44 70c28-20 54-20 82 0" fill="none" stroke="#6cbfe0" stroke-width="7"/><circle cx="64" cy="44" r="12" fill="#dfefff"/>`,
      `<rect x="74" y="22" width="20" height="48" rx="10" fill="#fff" stroke="#9aa7b5" stroke-width="4"/><circle cx="84" cy="76" r="18" fill="#e85c4a"/><rect x="80" y="44" width="8" height="34" fill="#e85c4a"/>`,
      `<circle cx="84" cy="54" r="24" fill="#f5b63d"/><path d="M84 16v16M84 76v16M46 54H30M138 54h-16" stroke="#f5b63d" stroke-width="6" stroke-linecap="round"/>`,
    ],
    area: [
      `<rect x="48" y="30" width="58" height="58" fill="#fff" stroke="#7c62d1" stroke-width="5"/><path d="M48 59h58M77 30v58" stroke="#d9d0f5" stroke-width="4"/>`,
      `<rect x="38" y="24" width="88" height="66" rx="6" fill="#fff" stroke="#7c62d1" stroke-width="5"/><path d="M54 42h56M54 58h56M54 74h40" stroke="#d9d0f5" stroke-width="5"/>`,
      `<path d="M24 88h120V40H24z" fill="#cdeecb"/><path d="M36 76h96" stroke="#7c62d1" stroke-width="5"/><circle cx="50" cy="54" r="12" fill="#1f9c73"/><circle cx="112" cy="54" r="12" fill="#1f9c73"/>`,
    ],
    storage: [
      `<rect x="48" y="28" width="68" height="56" rx="7" fill="#fff" stroke="#4f86f7" stroke-width="5"/><text x="68" y="64" font-size="24" font-weight="700" fill="#26313d">B</text>`,
      `<rect x="36" y="24" width="92" height="66" rx="8" fill="#eef5ff" stroke="#4f86f7" stroke-width="5"/><circle cx="62" cy="48" r="12" fill="#f5b63d"/><path d="M44 80l30-24 18 15 16-12 20 21z" fill="#70c6a3"/>`,
      `<rect x="34" y="30" width="96" height="58" rx="8" fill="#26313d"/><path d="M54 46l46 14-46 14z" fill="#fff"/><text x="102" y="82" font-size="14" font-weight="700" fill="#fff">TB</text>`,
    ],
    speed: [
      `<rect x="28" y="54" width="76" height="30" rx="8" fill="#0f9fb4"/><rect x="44" y="36" width="42" height="22" rx="6" fill="#8fd1df"/><circle cx="46" cy="86" r="8" fill="#26313d"/><circle cx="88" cy="86" r="8" fill="#26313d"/><text x="108" y="72" font-size="18" font-weight="700" fill="#26313d">km/h</text>`,
      `<circle cx="76" cy="38" r="12" fill="#e85c4a"/><path d="M72 52l-20 34M82 54l32 30M74 58c24-22 46-22 66 0" stroke="#26313d" stroke-width="7" stroke-linecap="round" fill="none"/><text x="30" y="30" font-size="18" font-weight="700" fill="#26313d">m/s</text>`,
      `<circle cx="58" cy="78" r="16" fill="none" stroke="#26313d" stroke-width="6"/><circle cx="112" cy="78" r="16" fill="none" stroke="#26313d" stroke-width="6"/><path d="M58 78l24-30 30 30M82 48h24" stroke="#0f9fb4" stroke-width="6" stroke-linecap="round" fill="none"/>`,
    ],
  };

  pictureCards.innerHTML = cards[id]
    .map(
      (svg, index) => `
        <div class="picture-card">
          <svg viewBox="0 0 164 108" role="img" aria-label="${labels[currentLang][id][index]}">
            <rect width="164" height="108" fill="#f7fafc"/>
            ${svg}
          </svg>
          <span>${labels[currentLang][id][index]}</span>
        </div>
      `,
    )
    .join("");
}

function renderLesson() {
  const lesson = localizedLesson();
  applyUiText();
  lessonTitle.textContent = lesson.title;
  lessonQuestion.textContent = lesson.question;
  lessonIntro.textContent = lesson.intro;
  lessonMission.textContent = lesson.mission;
  renderPictureCards(activeLesson.id);
  examples.innerHTML = lesson.examples
    .map(([amount, text]) => `<div class="example"><strong>${amount}</strong><span>${text}</span></div>`)
    .join("");
  renderScene(activeLesson);
  renderConverter();
  renderQuiz();
  renderTabs();
}

function renderConverter() {
  const lesson = localizedLesson();
  fromUnit.innerHTML = lesson.units
    .map((unit, index) => `<option value="${index}">${unit.label}</option>`)
    .join("");
  toUnit.innerHTML = lesson.units
    .map((unit, index) => `<option value="${index}">${unit.label}</option>`)
    .join("");
  toUnit.selectedIndex = lesson.units.length > 1 ? 1 : 0;
  updateConverter();
}

function updateConverter() {
  const lesson = localizedLesson();
  const amount = Number(convertAmount.value || 0);
  const from = lesson.units[Number(fromUnit.value)];
  const to = lesson.units[Number(toUnit.value)];
  const result = (amount * from.value) / to.value;
  convertResult.textContent = `${formatNumber(amount)} ${from.label} = ${formatNumber(result)} ${to.label}`;
}

function renderQuiz() {
  const lesson = localizedLesson();
  const quiz = lesson.quizzes[activeQuizIndex % lesson.quizzes.length];
  quizPrompt.textContent = quiz.prompt;
  quizFeedback.textContent = "";
  quizOptions.innerHTML = quiz.options
    .map((option) => `<button class="option-button" type="button">${option}</button>`)
    .join("");
}

function chooseAnswer(button) {
  const lesson = localizedLesson();
  const quiz = lesson.quizzes[activeQuizIndex % lesson.quizzes.length];
  const buttons = [...quizOptions.querySelectorAll("button")];
  buttons.forEach((item) => {
    item.disabled = true;
    if (item.textContent === quiz.answer) item.classList.add("correct");
  });

  if (button.textContent === quiz.answer) {
    score += 10;
    scoreValue.textContent = score;
    quizFeedback.textContent = uiText[currentLang].correct;
  } else {
    button.classList.add("wrong");
    quizFeedback.textContent = `${uiText[currentLang].wrong} ${quiz.answer}`;
  }
}

unitTabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-id]");
  if (!button) return;
  activeLesson = lessons.find((lesson) => lesson.id === button.dataset.id);
  activeQuizIndex = 0;
  renderLesson();
});

convertAmount.addEventListener("input", updateConverter);
fromUnit.addEventListener("change", updateConverter);
toUnit.addEventListener("change", updateConverter);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    localStorage.setItem("unitLabLang", currentLang);
    activeQuizIndex = 0;
    renderLesson();
  });
});

quizOptions.addEventListener("click", (event) => {
  const button = event.target.closest(".option-button");
  if (!button || button.disabled) return;
  chooseAnswer(button);
});

nextQuiz.addEventListener("click", () => {
  activeQuizIndex += 1;
  renderQuiz();
});

renderLesson();
