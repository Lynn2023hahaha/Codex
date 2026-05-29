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
    hint: "mL, L",
    icon: "M8 3h8v6l3 6a4 4 0 0 1-4 6H9a4 4 0 0 1-4-6l3-6V3zM8 13h8",
    title: "Capacity Units",
    question: "How do we describe how much liquid something can hold?",
    intro:
      "Capacity measures liquids like water, milk, and juice. Small amounts use milliliters, and bottles or jugs often use liters.",
    color: "#2b8fbf",
    units: [
      { label: "milliliter mL", value: 1 },
      { label: "liter L", value: 1000 },
    ],
    examples: [
      ["5 mL", "About one small teaspoon."],
      ["250 mL", "A small carton of milk."],
      ["1 L", "The same as 1000 milliliters."],
      ["2 L", "A large bottle of juice or soda."],
    ],
    quizzes: [
      {
        prompt: "Which unit is best for measuring a cup of milk?",
        options: ["milliliters", "kilograms", "kilometers"],
        answer: "milliliters",
      },
      {
        prompt: "How many milliliters are in 1 liter?",
        options: ["10 milliliters", "100 milliliters", "1000 milliliters"],
        answer: "1000 milliliters",
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
    hint: "cm², m², ha",
    icon: "M5 5h14v14H5zM5 12h14M12 5v14",
    title: "Area Units",
    question: "How do we describe how much space a flat surface covers?",
    intro:
      "Area measures flat surfaces like desks, floors, playgrounds, and fields. Small cards use square centimeters, rooms often use square meters, and large land areas can use hectares.",
    color: "#7c62d1",
    units: [
      { label: "square centimeter cm²", value: 1 },
      { label: "square meter m²", value: 10000 },
      { label: "hectare ha", value: 100000000 },
    ],
    examples: [
      ["1 cm²", "A tiny square that is 1 cm on each side."],
      ["100 cm²", "A square that is 10 cm on each side."],
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
];

const zhLessons = {
  length: {
    name: "长度",
    hint: "毫米、厘米、分米、米、千米",
    title: "长度单位",
    question: "怎样描述东西有多长？",
    intro:
      "长度帮助我们比较高矮、远近和大小。很小的东西用毫米，书本用厘米，短一些的教室物品用分米，房间用米，长途距离用千米。",
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
    hint: "毫升、升",
    title: "容量单位",
    question: "怎样描述能装多少液体？",
    intro:
      "容量用来测量水、牛奶、果汁等液体。少量液体用毫升，瓶子和水壶常用升。",
    units: [
      { label: "毫升 mL", value: 1 },
      { label: "升 L", value: 1000 },
    ],
    examples: [
      ["5 mL", "大约是一小勺水。"],
      ["250 mL", "一盒小牛奶常见的容量。"],
      ["1 L", "等于 1000 毫升。"],
      ["2 L", "一大瓶果汁或汽水常见的容量。"],
    ],
    quizzes: [
      {
        prompt: "量一杯牛奶，最适合用哪个单位？",
        options: ["毫升", "千克", "千米"],
        answer: "毫升",
      },
      {
        prompt: "1 升等于多少毫升？",
        options: ["10 毫升", "100 毫升", "1000 毫升"],
        answer: "1000 毫升",
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
    hint: "平方厘米、平方米、公顷",
    title: "面积单位",
    question: "怎样描述一个平面有多大？",
    intro:
      "面积用来测量桌面、地板、操场和农田这样的平面。小卡片用平方厘米，房间用平方米，大块土地可以用公顷。",
    units: [
      { label: "平方厘米 cm²", value: 1 },
      { label: "平方米 m²", value: 10000 },
      { label: "公顷 ha", value: 100000000 },
    ],
    examples: [
      ["1 cm²", "边长 1 厘米的小正方形。"],
      ["100 cm²", "边长 10 厘米的正方形。"],
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
  document.querySelector('label[for="convertAmount"] span');
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
  };
  sceneArt.innerHTML = scenes[lesson.id];
}

function renderLesson() {
  const lesson = localizedLesson();
  applyUiText();
  lessonTitle.textContent = lesson.title;
  lessonQuestion.textContent = lesson.question;
  lessonIntro.textContent = lesson.intro;
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
