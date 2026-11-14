/* eslint-disable */
/**
 * Questionnaire content: synchronized by internal question id (original numbering).
 * Display order is defined in QUESTION_ORDER (37 items, sequential UI 1–37).
 */
const QUESTION_ORDER = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 32, 33, 37, 38, 42, 43, 44, 45, 46, 48, 49,
];

const UI = {
  fa: {
    langLabel: "فارسی",
    title:
      "پرسش‌نامه فعالیت بدنی، بهزیستی و برنامه‌های ورزشی شهرداری در میان بزرگسالان تهران",
    instruction:
      "لطفاً به همهٔ پرسش‌های زیر پاسخ دهید. پرسش‌هایی که به پاسخ قبلی شما بستگی دارند فقط در صورت کاربرد نمایش داده می‌شوند.",
    submit: "ارسال",
    completed:
      "همهٔ پاسخ‌های لازم تکمیل شد. از مشارکت شما در این پژوهش سپاسگزاریم.",
    validationHint: "لطفاً پرسش‌های مشخص‌شده را تکمیل کنید.",
    selectPlaceholder: "انتخاب کنید",
    hours: "ساعت",
    minutes: "دقیقه",
    q49NoSuggestions: "پیشنهادی ندارم",
    who5Note: "در دو هفته گذشته، چند بار هر یک از موارد زیر را تجربه کرده‌اید؟",
  },
  ru: {
    langLabel: "RU",
    title:
      "Анкета: физическая активность, благополучие и муниципальные спортивные программы среди взрослых жителей Тегерана",
    instruction:
      "Пожалуйста, ответьте на все вопросы ниже. Вопросы с условной логикой отображаются только если они применимы к вашим ответам.",
    submit: "Отправить",
    completed:
      "Все обязательные ответы заполнены. Благодарим вас за участие в исследовании.",
    validationHint: "Пожалуйста, заполните выделенные вопросы.",
    selectPlaceholder: "Выберите",
    hours: "Часы",
    minutes: "Минуты",
    q49NoSuggestions: "Нет предложений",
    who5Note:
      "За последние две недели, как часто вы испытывали следующее?",
  },
  en: {
    langLabel: "EN",
    title:
      "Questionnaire: Physical Activity, Well-Being, and Municipal Sports Programs among Adults in Tehran",
    instruction:
      "Please answer all questions below. Conditionally applicable questions are shown only when relevant to your previous answers.",
    submit: "Submit",
    completed:
      "All required responses are complete. Thank you for participating in this study.",
    validationHint: "Please complete the highlighted questions.",
    selectPlaceholder: "Select",
    hours: "Hours",
    minutes: "Minutes",
    q49NoSuggestions: "I have no suggestions",
    who5Note:
      "Over the last two weeks, how often have you experienced the following?",
  },
};

const SECTIONS = {
  consent: { ids: [1, 2, 3], fa: "رضایت و شرایط شرکت", ru: "Согласие и критерии участия", en: "Consent and eligibility" },
  demographics: { ids: [4, 5, 6, 7, 8], fa: "اطلاعات جمعیت‌شناختی", ru: "Общие сведения", en: "Demographic information" },
  work: { ids: [9, 10, 11], fa: "فعالیت بدنی در کار", ru: "Физическая активность на работе", en: "Physical activity at work" },
  transport: { ids: [15], fa: "رفت‌وآمد", ru: "Передвижение", en: "Travel and transport" },
  leisure: { ids: [18, 19, 20, 21, 22, 23], fa: "فعالیت بدنی در اوقات فراغت", ru: "Физическая активность в свободное время", en: "Leisure-time physical activity" },
  sitting: { ids: [24], fa: "زمان نشستن یا دراز کشیدن", ru: "Время в положении сидя или лежа", en: "Time spent sitting or lying down" },
  health: { ids: [25, 26, 27, 28, 29, 30], fa: "سلامت و بهزیستی روانی", ru: "Здоровье и психологическое благополучие", en: "Health and psychological well-being" },
  municipal: { ids: [31, 32], fa: "برنامه‌های ورزشی شهرداری", ru: "Муниципальные спортивные программы", en: "Municipal sports programs" },
  gymshow: { ids: [33, 37, 38, 42, 43, 44, 45, 46], fa: "ارزیابی برنامه جیم‌شو", ru: "Оценка программы GymShow", en: "Evaluation of the GymShow program" },
  improvements: { ids: [48, 49], fa: "پیشنهادهایی برای بهبود", ru: "Предложения по улучшению", en: "Suggestions for improvement" },
};

/** @type {Record<number, { type: string, showIf?: object, options?: Record<string, string[]>, text?: Record<string, string> }>} */
const QUESTIONS = {
  1: {
    type: "radio",
    text: {
      fa: "آیا با شرکت در این پژوهش و پاسخ دادن به پرسش‌ها موافق هستید؟",
      ru: "Согласны ли вы участвовать в этом исследовании и отвечать на вопросы?",
      en: "Do you agree to participate in this study and answer the questions?",
    },
    options: { fa: ["بله", "خیر"], ru: ["Да", "Нет"], en: ["Yes", "No"] },
  },
  2: {
    type: "age",
    text: {
      fa: "چند سال تمام دارید؟",
      ru: "Сколько вам полных лет?",
      en: "How old are you in completed years?",
    },
  },
  3: {
    type: "radio",
    text: {
      fa: "آیا دست‌کم شش ماه است که در شهر تهران زندگی می‌کنید؟",
      ru: "Проживаете ли вы в Тегеране не менее шести месяцев?",
      en: "Have you lived in the city of Tehran for at least six months?",
    },
    options: { fa: ["بله", "خیر"], ru: ["Да", "Нет"], en: ["Yes", "No"] },
  },
  4: {
    type: "radio",
    text: {
      fa: "جنسیت شما چیست؟",
      ru: "Ваш пол:",
      en: "What is your gender?",
    },
    options: {
      fa: ["زن", "مرد", "گزینه دیگر", "ترجیح می‌دهم نگویم"],
      ru: ["Женский", "Мужской", "Другое", "Предпочитаю не указывать"],
      en: ["Female", "Male", "Other", "Prefer not to say"],
    },
  },
  5: {
    type: "radio",
    text: {
      fa: "بالاترین مدرک تحصیلی که دریافت کرده‌اید چیست؟",
      ru: "Какой самый высокий уровень образования вы получили?",
      en: "What is the highest level of education you have completed?",
    },
    options: {
      fa: [
        "زیر دیپلم",
        "دیپلم",
        "کاردانی",
        "کارشناسی",
        "کارشناسی ارشد یا بالاتر",
        "ترجیح می‌دهم پاسخ ندهم",
      ],
      ru: [
        "Ниже полного среднего образования",
        "Полное среднее образование",
        "Кардани (диплом младшего специалиста)",
        "Бакалавриат",
        "Магистратура и выше",
        "Предпочитаю не отвечать",
      ],
      en: [
        "Below high school diploma",
        "High school diploma",
        "Associate degree (Kardani)",
        "Bachelor's degree",
        "Master's degree or higher",
        "Prefer not to answer",
      ],
    },
  },
  6: {
    type: "radio",
    text: {
      fa: "آیا برای انجام کارهای روزمره به تلفن هوشمند دسترسی دارید؟",
      ru: "Есть ли у вас доступ к смартфону для повседневных задач?",
      en: "Do you have access to a smartphone for everyday tasks?",
    },
    options: {
      fa: [
        "بله، به‌طور مستقل استفاده می‌کنم",
        "از تلفن مشترک یا با کمک دیگران استفاده می‌کنم",
        "خیر",
      ],
      ru: [
        "Да, пользуюсь самостоятельно",
        "Пользуюсь общим смартфоном или с помощью другого человека",
        "Нет",
      ],
      en: [
        "Yes, I use one independently",
        "I use a shared smartphone or need someone else's help",
        "No",
      ],
    },
  },
  7: {
    type: "radio",
    text: {
      fa: "دسترسی شما به اینترنت چگونه است؟",
      ru: "Как бы вы оценили свой доступ к интернету?",
      en: "How would you describe your internet access?",
    },
    options: {
      fa: ["پایدار", "گاهی محدود", "بسیار محدود", "دسترسی ندارم"],
      ru: ["Стабильный", "Иногда ограничен", "Очень ограничен", "Нет доступа"],
      en: ["Stable", "Sometimes limited", "Very limited", "No access"],
    },
  },
  8: {
    type: "radio",
    text: {
      fa: "آیا محدودیت جسمانی یا وضعیت سلامتی خاصی دارید که انتخاب فعالیت بدنی مناسب را برای شما دشوار کند؟",
      ru: "Есть ли у вас физические ограничения или особенности состояния здоровья, которые затрудняют выбор подходящего вида физической активности?",
      en: "Do you have any physical limitations or health conditions that make it difficult to choose a suitable physical activity?",
    },
    options: {
      fa: ["بله", "خیر", "ترجیح می‌دهم پاسخ ندهم"],
      ru: ["Да", "Нет", "Предпочитаю не отвечать"],
      en: ["Yes", "No", "Prefer not to answer"],
    },
  },
  9: {
    type: "radio",
    text: {
      fa: "آیا کار شما شامل فعالیت بدنی شدید می‌شود که تنفس یا ضربان قلب را به میزان زیادی افزایش دهد، مانند حمل بار سنگین، بیل زدن یا کار ساختمانی، و دست‌کم ۱۰ دقیقه پیوسته ادامه داشته باشد؟",
      ru: "Включает ли ваша работа интенсивную физическую нагрузку, которая значительно учащает дыхание или сердцебиение (например, переноску тяжестей, копание или строительные работы) и продолжается не менее 10 минут подряд?",
      en: "Does your work involve vigorous physical activity that causes a large increase in breathing or heart rate, such as carrying heavy loads, digging or construction work, for at least 10 continuous minutes?",
    },
    options: { fa: ["بله", "خیر"], ru: ["Да", "Нет"], en: ["Yes", "No"] },
  },
  10: {
    type: "days",
    showIf: { questionId: 9, yesValues: { fa: 0, ru: 0, en: 0 } },
    text: {
      fa: "در یک هفته معمول، چند روز چنین فعالیت بدنی شدیدی را هنگام کار انجام می‌دهید؟",
      ru: "Сколько дней в обычную неделю вы выполняете такую интенсивную физическую нагрузку на работе?",
      en: "In a typical week, on how many days do you do this vigorous physical activity at work?",
    },
  },
  11: {
    type: "hours",
    showIf: { questionId: 9, yesValues: { fa: 0, ru: 0, en: 0 } },
    text: {
      fa: "در یکی از آن روزها، معمولاً چه مدت به فعالیت بدنی شدید در محل کار می‌پردازید؟ (ساعت)",
      ru: "Сколько времени в один из таких дней вы обычно тратите на интенсивную физическую нагрузку на работе? (часы)",
      en: "On one of those days, how much time do you usually spend on vigorous physical activity at work? (hours)",
    },
  },
  15: {
    type: "radio",
    text: {
      fa: "آیا برای رفتن از جایی به جای دیگر، دست‌کم ۱۰ دقیقه پیوسته پیاده‌روی یا دوچرخه‌سواری می‌کنید؟",
      ru: "Ходите ли вы пешком или ездите на велосипеде не менее 10 минут подряд, чтобы добраться из одного места в другое?",
      en: "Do you walk or cycle for at least 10 continuous minutes to get from place to place?",
    },
    options: { fa: ["بله", "خیر"], ru: ["Да", "Нет"], en: ["Yes", "No"] },
  },
  18: {
    type: "radio",
    text: {
      fa: "آیا در اوقات فراغت ورزش یا فعالیت تفریحی شدیدی انجام می‌دهید که تنفس یا ضربان قلب شما را بسیار افزایش دهد، مانند دویدن یا فوتبال پرتحرک، و دست‌کم ۱۰ دقیقه پیوسته ادامه داشته باشد؟",
      ru: "Занимаетесь ли вы в свободное время интенсивными видами спорта или активного отдыха, которые значительно учащают дыхание или сердцебиение (например, бегом или динамичным футболом), не менее 10 минут подряд?",
      en: "In your leisure time, do you engage in vigorous sports or recreational activities that greatly increase your breathing or heart rate, such as running or fast-paced football, for at least 10 continuous minutes?",
    },
    options: { fa: ["بله", "خیر"], ru: ["Да", "Нет"], en: ["Yes", "No"] },
  },
  19: {
    type: "days",
    showIf: { questionId: 18, yesValues: { fa: 0, ru: 0, en: 0 } },
    text: {
      fa: "در یک هفته معمول، چند روز چنین ورزش یا فعالیت شدید تفریحی انجام می‌دهید؟",
      ru: "Сколько дней в обычную неделю вы занимаетесь такими интенсивными видами спорта или активного отдыха?",
      en: "In a typical week, on how many days do you engage in these vigorous sports or recreational activities?",
    },
  },
  20: {
    type: "hours",
    showIf: { questionId: 18, yesValues: { fa: 0, ru: 0, en: 0 } },
    text: {
      fa: "در یکی از آن روزها، معمولاً چه مدت ورزش یا فعالیت تفریحی شدید انجام می‌دهید؟ (ساعت)",
      ru: "Сколько времени в один из таких дней вы обычно уделяете интенсивному спорту или активному отдыху? (часы)",
      en: "On one of those days, how much time do you usually spend on vigorous sports or recreational activities? (hours)",
    },
  },
  21: {
    type: "radio",
    text: {
      fa: "آیا در اوقات فراغت ورزش یا فعالیت تفریحی با شدت متوسط انجام می‌دهید که تنفس یا ضربان قلب شما را اندکی افزایش دهد، مانند پیاده‌روی تند، دوچرخه‌سواری آرام، شنا یا والیبال، و دست‌کم ۱۰ دقیقه پیوسته ادامه داشته باشد؟",
      ru: "Занимаетесь ли вы в свободное время спортом или активным отдыхом умеренной интенсивности, которые немного учащают дыхание или сердцебиение (например, быстрой ходьбой, неспешной ездой на велосипеде, плаванием или волейболом), не менее 10 минут подряд?",
      en: "In your leisure time, do you engage in moderate-intensity sports or recreational activities that slightly increase your breathing or heart rate, such as brisk walking, easy cycling, swimming or volleyball, for at least 10 continuous minutes?",
    },
    options: { fa: ["بله", "خیر"], ru: ["Да", "Нет"], en: ["Yes", "No"] },
  },
  22: {
    type: "days",
    showIf: { questionId: 21, yesValues: { fa: 0, ru: 0, en: 0 } },
    text: {
      fa: "در یک هفته معمول، چند روز چنین ورزش یا فعالیت تفریحی با شدت متوسط انجام می‌دهید؟",
      ru: "Сколько дней в обычную неделю вы занимаетесь такими видами спорта или активного отдыха умеренной интенсивности?",
      en: "In a typical week, on how many days do you engage in these moderate-intensity sports or recreational activities?",
    },
  },
  23: {
    type: "hours",
    showIf: { questionId: 21, yesValues: { fa: 0, ru: 0, en: 0 } },
    text: {
      fa: "در یکی از آن روزها، معمولاً چه مدت ورزش یا فعالیت تفریحی با شدت متوسط انجام می‌دهید؟ (ساعت)",
      ru: "Сколько времени в один из таких дней вы обычно уделяете спорту или активному отдыху умеренной интенсивности? (часы)",
      en: "On one of those days, how much time do you usually spend on moderate-intensity sports or recreational activities? (hours)",
    },
  },
  24: {
    type: "sitTime",
    text: {
      fa: "در یک روز معمول، در مجموع چه مدت را نشسته یا درازکشیده می‌گذرانید؟ (ساعت و دقیقه)",
      ru: "Сколько времени в общей сложности вы проводите сидя или лежа в обычный день? (часы и минуты)",
      en: "In a typical day, how much time in total do you spend sitting or lying down? (hours and minutes)",
    },
  },
  25: {
    type: "radio",
    text: {
      fa: "به‌طور کلی وضعیت سلامت خود را چگونه ارزیابی می‌کنید؟",
      ru: "Как вы в целом оцениваете состояние своего здоровья?",
      en: "Overall, how would you rate your health?",
    },
    options: {
      fa: [
        "خیلی خوب",
        "خوب",
        "متوسط",
        "بد",
        "خیلی بد",
        "ترجیح می‌دهم پاسخ ندهم",
      ],
      ru: [
        "Очень хорошее",
        "Хорошее",
        "Удовлетворительное",
        "Плохое",
        "Очень плохое",
        "Предпочитаю не отвечать",
      ],
      en: [
        "Very good",
        "Good",
        "Fair",
        "Poor",
        "Very poor",
        "Prefer not to answer",
      ],
    },
  },
  26: {
    type: "likert",
    who5: true,
    text: {
      fa: "شاد و خوش‌خلق بوده‌ام.",
      ru: "Я чувствовал(а) себя веселым(ой) и в хорошем настроении.",
      en: "I have felt cheerful and in good spirits.",
    },
    options: {
      fa: [
        "تمام اوقات",
        "بیشتر اوقات",
        "کمی بیش از نیمی از اوقات",
        "کمی کمتر از نیمی از اوقات",
        "بعضی از اوقات",
        "هیچ‌وقت",
      ],
      ru: [
        "Все время",
        "Большую часть времени",
        "Больше половины времени",
        "Меньше половины времени",
        "Иногда",
        "Никогда",
      ],
      en: [
        "All of the time",
        "Most of the time",
        "More than half of the time",
        "Less than half of the time",
        "Some of the time",
        "At no time",
      ],
    },
  },
  27: {
    type: "likert",
    who5: true,
    text: {
      fa: "احساس آرامش و راحتی داشته‌ام.",
      ru: "Я чувствовал(а) себя спокойным(ой) и расслабленным(ой).",
      en: "I have felt calm and relaxed.",
    },
    options: {
      fa: [
        "تمام اوقات",
        "بیشتر اوقات",
        "کمی بیش از نیمی از اوقات",
        "کمی کمتر از نیمی از اوقات",
        "بعضی از اوقات",
        "هیچ‌وقت",
      ],
      ru: [
        "Все время",
        "Большую часть времени",
        "Больше половины времени",
        "Меньше половины времени",
        "Иногда",
        "Никогда",
      ],
      en: [
        "All of the time",
        "Most of the time",
        "More than half of the time",
        "Less than half of the time",
        "Some of the time",
        "At no time",
      ],
    },
  },
  28: {
    type: "likert",
    who5: true,
    text: {
      fa: "احساس کرده‌ام که فعال و پرانرژی بوده‌ام.",
      ru: "Я чувствовал(а) себя активным(ой) и энергичным(ой).",
      en: "I have felt active and vigorous.",
    },
    options: {
      fa: [
        "تمام اوقات",
        "بیشتر اوقات",
        "کمی بیش از نیمی از اوقات",
        "کمی کمتر از نیمی از اوقات",
        "بعضی از اوقات",
        "هیچ‌وقت",
      ],
      ru: [
        "Все время",
        "Большую часть времени",
        "Больше половины времени",
        "Меньше половины времени",
        "Иногда",
        "Никогда",
      ],
      en: [
        "All of the time",
        "Most of the time",
        "More than half of the time",
        "Less than half of the time",
        "Some of the time",
        "At no time",
      ],
    },
  },
  29: {
    type: "likert",
    who5: true,
    text: {
      fa: "شاداب و آسوده بیدار شده‌ام.",
      ru: "Просыпаясь, я чувствовал(а) себя свежим(ей) и отдохнувшим(ей).",
      en: "I woke up feeling fresh and rested.",
    },
    options: {
      fa: [
        "تمام اوقات",
        "بیشتر اوقات",
        "کمی بیش از نیمی از اوقات",
        "کمی کمتر از نیمی از اوقات",
        "بعضی از اوقات",
        "هیچ‌وقت",
      ],
      ru: [
        "Все время",
        "Большую часть времени",
        "Больше половины времени",
        "Меньше половины времени",
        "Иногда",
        "Никогда",
      ],
      en: [
        "All of the time",
        "Most of the time",
        "More than half of the time",
        "Less than half of the time",
        "Some of the time",
        "At no time",
      ],
    },
  },
  30: {
    type: "likert",
    who5: true,
    text: {
      fa: "زندگی روزمره‌ام پر از چیزهایی بوده است که به آن‌ها علاقه دارم.",
      ru: "Моя повседневная жизнь была наполнена тем, что мне интересно.",
      en: "My daily life has been filled with things that interest me.",
    },
    options: {
      fa: [
        "تمام اوقات",
        "بیشتر اوقات",
        "کمی بیش از نیمی از اوقات",
        "کمی کمتر از نیمی از اوقات",
        "بعضی از اوقات",
        "هیچ‌وقت",
      ],
      ru: [
        "Все время",
        "Большую часть времени",
        "Больше половины времени",
        "Меньше половины времени",
        "Иногда",
        "Никогда",
      ],
      en: [
        "All of the time",
        "Most of the time",
        "More than half of the time",
        "Less than half of the time",
        "Some of the time",
        "At no time",
      ],
    },
  },
  31: {
    type: "radio",
    text: {
      fa: "در ۱۲ هفته گذشته، چند بار در برنامه‌های ورزشی یا تندرستی که شهرداری تهران رسماً برگزار کرده یا از اجرای آن‌ها حمایت کرده است، شرکت کرده‌اید؟",
      ru: "Сколько раз за последние 12 недель вы участвовали в спортивных или оздоровительных программах, официально организованных или поддержанных муниципалитетом Тегерана?",
      en: "In the past 12 weeks, how many times have you participated in sports or wellness programs officially organized or supported by Tehran Municipality?",
    },
    options: {
      fa: [
        "هیچ",
        "۱ تا ۲ بار",
        "۳ تا ۵ بار",
        "۶ تا ۱۰ بار",
        "بیش از ۱۰ بار",
        "مطمئن نیستم",
      ],
      ru: [
        "Ни разу",
        "1–2 раза",
        "3–5 раз",
        "6–10 раз",
        "Более 10 раз",
        "Не уверен(а)",
      ],
      en: [
        "None",
        "1–2 times",
        "3–5 times",
        "6–10 times",
        "More than 10 times",
        "Not sure",
      ],
    },
  },
  32: {
    type: "radio",
    text: {
      fa: "در ۱۲ هفته گذشته، مهم‌ترین مانع شما برای شرکت منظم در برنامه‌های ورزشی چه بوده است؟ (فقط یک گزینه)",
      ru: "Что за последние 12 недель было для вас главным препятствием к регулярному участию в спортивных программах? (один вариант ответа)",
      en: "In the past 12 weeks, what was your main barrier to regular participation in sports programs? (select one)",
    },
    options: {
      fa: [
        "کمبود وقت",
        "هزینه شرکت در برنامه",
        "فاصله یا دشواری رفت‌وآمد",
        "نامناسب بودن زمان برگزاری",
        "نبود برنامه یا امکانات ورزشی مناسب",
        "کمبود اطلاعات درباره برنامه‌ها",
        "محدودیت جسمانی یا وضعیت سلامت",
        "دشواری استفاده از سامانه‌های اینترنتی",
        "ترجیح می‌دهم به‌صورت انفرادی ورزش کنم",
        "سایر",
        "مانعی نداشتم",
      ],
      ru: [
        "Нехватка времени",
        "Стоимость участия",
        "Большое расстояние или трудности с транспортом",
        "Неудобное время проведения",
        "Отсутствие подходящих программ или спортивных объектов",
        "Недостаток информации о программах",
        "Физические ограничения или состояние здоровья",
        "Трудности с использованием онлайн-систем",
        "Предпочитаю заниматься самостоятельно",
        "Другое",
        "Препятствий не было",
      ],
      en: [
        "Lack of time",
        "Cost of participation",
        "Distance or transport difficulties",
        "Inconvenient schedule",
        "No suitable programs or sports facilities",
        "Lack of information about programs",
        "Physical limitations or health conditions",
        "Difficulty using online systems",
        "I prefer to exercise individually",
        "Other",
        "I had no barriers",
      ],
    },
  },
  33: {
    type: "radio",
    text: {
      fa: "آیا پیش از امروز درباره برنامه‌ها یا چالش‌های ورزشی جیم‌شو در تهران شنیده بودید؟",
      ru: "Слышали ли вы до сегодняшнего дня о спортивных программах или челленджах GymShow в Тегеране?",
      en: "Before today, had you heard of GymShow sports programs or challenges in Tehran?",
    },
    options: { fa: ["بله", "خیر"], ru: ["Да", "Нет"], en: ["Yes", "No"] },
  },
  37: {
    type: "radio",
    showIf: { questionId: 33, yesValues: { fa: 0, ru: 0, en: 0 } },
    text: {
      fa: "در ۱۲ هفته گذشته، تقریباً چند بار در این برنامه یا چالش جیم‌شو شرکت کرده‌اید؟",
      ru: "Примерно сколько раз за последние 12 недель вы участвовали в этой программе или челлендже GymShow?",
      en: "Approximately how many times have you participated in this GymShow program or challenge in the past 12 weeks?",
    },
    options: {
      fa: [
        "۱ تا ۲ بار",
        "۳ تا ۵ بار",
        "۶ تا ۱۰ بار",
        "بیش از ۱۰ بار",
        "به خاطر ندارم",
      ],
      ru: ["1–2 раза", "3–5 раз", "6–10 раз", "Более 10 раз", "Не помню"],
      en: [
        "1–2 times",
        "3–5 times",
        "6–10 times",
        "More than 10 times",
        "I don't remember",
      ],
    },
  },
  38: {
    type: "radio",
    showIf: { questionId: 33, yesValues: { fa: 0, ru: 0, en: 0 } },
    text: {
      fa: "آیا در ۱۲ هفته گذشته با انجام فعالیت بدنی در چالش یا مسابقه ورزشی این برنامه شرکت کرده‌اید؟",
      ru: "Участвовали ли вы за последние 12 недель в челлендже или спортивном соревновании этой программы, выполняя физическую активность?",
      en: "During the past 12 weeks, have you participated in a challenge or sports competition offered through this program by engaging in physical activity?",
    },
    options: {
      fa: ["بله", "خیر", "به خاطر ندارم"],
      ru: ["Да", "Нет", "Не помню"],
      en: ["Yes", "No", "I don't remember"],
    },
  },
  42: {
    type: "radio",
    showIf: { questionId: 33, yesValues: { fa: 0, ru: 0, en: 0 } },
    text: {
      fa: "آیا در این برنامه به مربی یا راهنما دسترسی داشتید و از راهنمایی او استفاده کردید؟",
      ru: "Была ли у вас возможность обратиться к тренеру или наставнику в рамках этой программы и пользовались ли вы его помощью?",
      en: "Did you have access to a coach or instructor through this program, and did you use their guidance?",
    },
    options: {
      fa: [
        "دسترسی داشتم و از راهنمایی او استفاده کردم",
        "دسترسی داشتم، اما از راهنمایی او استفاده نکردم",
        "به مربی یا راهنما دسترسی نداشتم",
        "نمی‌دانم",
      ],
      ru: [
        "Да, была возможность, и я пользовался(лась) помощью",
        "Возможность была, но я не пользовался(лась) помощью",
        "Не было возможности обратиться",
        "Не знаю",
      ],
      en: [
        "I had access and used their guidance",
        "I had access but did not use their guidance",
        "I had no access to a coach or instructor",
        "I don't know",
      ],
    },
  },
  43: {
    type: "radio",
    showIf: { questionId: 33, yesValues: { fa: 0, ru: 0, en: 0 } },
    text: {
      fa: "استفاده از سامانه برایم آسان بود.",
      ru: "Мне было легко пользоваться системой.",
      en: "Using the system was easy for me.",
    },
    options: {
      fa: [
        "کاملاً مخالفم",
        "مخالفم",
        "نه موافقم نه مخالفم",
        "موافقم",
        "کاملاً موافقم",
        "نمی‌توانم ارزیابی کنم",
      ],
      ru: [
        "Полностью не согласен(на)",
        "Не согласен(на)",
        "Ни согласен(на), ни не согласен(на)",
        "Согласен(на)",
        "Полностью согласен(на)",
        "Не могу оценить",
      ],
      en: [
        "Strongly disagree",
        "Disagree",
        "Neither agree nor disagree",
        "Agree",
        "Strongly agree",
        "Cannot evaluate",
      ],
    },
  },
  44: {
    type: "radio",
    showIf: { questionId: 33, yesValues: { fa: 0, ru: 0, en: 0 } },
    text: {
      fa: "آموزش یا راهنمایی ورزشی با توجه به نیازهای من مفید بود.",
      ru: "Спортивное обучение или рекомендации тренера были полезны с учетом моих потребностей.",
      en: "The sports training or guidance was useful for my needs.",
    },
    options: {
      fa: [
        "کاملاً مخالفم",
        "مخالفم",
        "نه موافقم نه مخالفم",
        "موافقم",
        "کاملاً موافقم",
        "نمی‌توانم ارزیابی کنم",
      ],
      ru: [
        "Полностью не согласен(на)",
        "Не согласен(на)",
        "Ни согласен(на), ни не согласен(на)",
        "Согласен(на)",
        "Полностью согласен(на)",
        "Не могу оценить",
      ],
      en: [
        "Strongly disagree",
        "Disagree",
        "Neither agree nor disagree",
        "Agree",
        "Strongly agree",
        "Cannot evaluate",
      ],
    },
  },
  45: {
    type: "radio",
    showIf: { questionId: 33, yesValues: { fa: 0, ru: 0, en: 0 } },
    text: {
      fa: "از طریق این سامانه با فرصت‌های بیشتری برای فعالیت بدنی آشنا شدم.",
      ru: "Благодаря этой системе я узнал(а) о дополнительных возможностях для физической активности.",
      en: "Through this system, I became aware of more opportunities for physical activity.",
    },
    options: {
      fa: [
        "کاملاً مخالفم",
        "مخالفم",
        "نه موافقم نه مخالفم",
        "موافقم",
        "کاملاً موافقم",
        "نمی‌توانم ارزیابی کنم",
      ],
      ru: [
        "Полностью не согласен(на)",
        "Не согласен(на)",
        "Ни согласен(на), ни не согласен(на)",
        "Согласен(на)",
        "Полностью согласен(на)",
        "Не могу оценить",
      ],
      en: [
        "Strongly disagree",
        "Disagree",
        "Neither agree nor disagree",
        "Agree",
        "Strongly agree",
        "Cannot evaluate",
      ],
    },
  },
  46: {
    type: "radio",
    showIf: { questionId: 33, yesValues: { fa: 0, ru: 0, en: 0 } },
    text: {
      fa: "کدام بخش جیم‌شو بیشترین کمک را به مشارکت شما در فعالیت بدنی کرد؟ (فقط یک گزینه)",
      ru: "Какая возможность GymShow больше всего помогла вам участвовать в занятиях физической активностью? (один вариант ответа)",
      en: "Which feature of GymShow helped you the most to participate in physical activity? (select one)",
    },
    options: {
      fa: [
        "اطلاع‌رسانی درباره فعالیت‌ها",
        "آموزش ورزشی",
        "ارتباط با مربی یا راهنما",
        "چالش یا مسابقه",
        "امکان دریافت جایزه",
        "هیچ‌کدام",
        "نمی‌توانم ارزیابی کنم",
      ],
      ru: [
        "Информация о занятиях и мероприятиях",
        "Спортивное обучение",
        "Общение с тренером или наставником",
        "Челлендж или соревнование",
        "Возможность получить приз",
        "Ничего из перечисленного",
        "Не могу оценить",
      ],
      en: [
        "Information about activities",
        "Sports training",
        "Contact with a coach or instructor",
        "Challenge or competition",
        "Opportunity to receive a prize",
        "None of the above",
        "Cannot evaluate",
      ],
    },
  },
  48: {
    type: "radio",
    text: {
      fa: "به نظر شما کدام تغییر بیشترین کمک را به استفاده بزرگسالان تهرانی از این برنامه می‌کند؟ (فقط یک گزینه)",
      ru: "Какое изменение, по вашему мнению, больше всего помогло бы взрослым жителям Тегерана пользоваться этой программой? (один вариант ответа)",
      en: "In your opinion, which change would most help adult residents of Tehran use this program? (select one)",
    },
    options: {
      fa: [
        "اطلاع‌رسانی روشن‌تر",
        "امکان ثبت‌نام یا دریافت خدمت به‌صورت حضوری",
        "دسترسی به مربی یا راهنمای انسانی",
        "زمان یا هزینه مناسب‌تر",
        "آموزش کاربردی برای استفاده از سامانه",
        "دسترسی آسان‌تر به گوشی و اینترنت",
        "سایر",
        "نمی‌دانم",
      ],
      ru: [
        "Более понятная информация",
        "Возможность зарегистрироваться или получить услугу лично",
        "Доступ к тренеру или наставнику",
        "Более удобное время или приемлемая стоимость",
        "Практическое обучение использованию системы",
        "Более простой доступ к смартфону и интернету",
        "Другое",
        "Не знаю",
      ],
      en: [
        "Clearer information",
        "Option to register or receive services in person",
        "Access to a coach or instructor",
        "More convenient timing or affordable cost",
        "Practical guidance on using the system",
        "Easier access to a smartphone and the internet",
        "Other",
        "I don't know",
      ],
    },
  },
  49: {
    type: "openOrNone",
    text: {
      fa: "اگر تجربه‌ای از این برنامه دارید یا پیشنهادی برای بهبود آن دارید، لطفاً به‌اختصار بنویسید.",
      ru: "Если у вас есть опыт участия в этой программе или предложения по ее улучшению, пожалуйста, кратко напишите о них.",
      en: "If you have any experience with this program or suggestions for improving it, please describe them briefly.",
    },
  },
};

const GYM_SHOW_FOLLOW_UP = [37, 38, 42, 43, 44, 45, 46];

const SECTION_ORDER = [
  "consent",
  "demographics",
  "work",
  "transport",
  "leisure",
  "sitting",
  "health",
  "municipal",
  "gymshow",
  "improvements",
];
