(function () {
  const LANGS = ["fa", "ru", "en"];
  let currentLang = "fa";

  /** @type {Record<number, unknown>} */
  const answers = {};

  const form = document.getElementById("questionnaire-form");
  const sectionsRoot = document.getElementById("sections-root");
  const siteTitle = document.getElementById("site-title");
  const instruction = document.getElementById("instruction");
  const submitBtn = document.getElementById("submit-btn");
  const formToast = document.getElementById("form-toast");

  const displayIndex = {};
  QUESTION_ORDER.forEach((id, i) => {
    displayIndex[id] = i + 1;
  });

  function isQuestionApplicable(id) {
    const q = QUESTIONS[id];
    if (!q || !q.showIf) return true;
    const { questionId, yesValues } = q.showIf;
  const yesIdx = yesValues[currentLang] ?? yesValues.en ?? 0;
    const val = answers[questionId];
    return val === yesIdx;
  }

  function buildAgeOptions() {
    const opts = [];
    const empty = document.createElement("option");
    empty.value = "";
    empty.textContent = UI[currentLang].selectPlaceholder;
    opts.push(empty);
    for (let age = 18; age <= 99; age++) {
      const o = document.createElement("option");
      o.value = String(age);
      o.textContent = String(age);
      opts.push(o);
    }
    return opts;
  }

  function buildDayOptions() {
    const frag = [];
    const empty = { value: "", label: UI[currentLang].selectPlaceholder };
    frag.push(empty);
    for (let d = 1; d <= 7; d++) {
      frag.push({ value: String(d), label: String(d) });
    }
    return frag;
  }

  function buildHourOptions() {
    const frag = [];
    const empty = { value: "", label: UI[currentLang].selectPlaceholder };
    frag.push(empty);
    for (let h = 0; h <= 12; h++) {
      const label =
        h === 0
          ? currentLang === "fa"
            ? "۰"
            : "0"
          : String(h);
      frag.push({ value: String(h), label });
    }
    return frag;
  }

  function buildSitHourOptions() {
    const frag = [];
    const empty = { value: "", label: UI[currentLang].selectPlaceholder };
    frag.push(empty);
    for (let h = 0; h <= 24; h++) {
      frag.push({ value: String(h), label: String(h) });
    }
    return frag;
  }

  function buildMinuteOptions() {
    const frag = [];
    const empty = { value: "", label: UI[currentLang].selectPlaceholder };
    frag.push(empty);
    [0, 15, 30, 45].forEach((m) => {
      frag.push({ value: String(m), label: String(m) });
    });
    return frag;
  }

  function setAnswer(id, value) {
    answers[id] = value;
    updateVisibility();
  }

  function renderRadioGroup(id, q, container) {
    const group = document.createElement("div");
    group.className = "options";
    group.setAttribute("role", "radiogroup");
    const opts = q.options[currentLang];
    opts.forEach((label, idx) => {
      const wrap = document.createElement("label");
      wrap.className = "option";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "q_" + id;
      input.value = String(idx);
      input.dataset.qid = String(id);
      if (answers[id] === idx) input.checked = true;
      input.addEventListener("change", () => {
        setAnswer(id, idx);
        if (GYM_SHOW_FOLLOW_UP.includes(id) || id === 9 || id === 18 || id === 21 || id === 33) {
          clearInapplicableAnswers();
        }
      });
      const span = document.createElement("span");
      span.textContent = label;
      wrap.appendChild(input);
      wrap.appendChild(span);
      group.appendChild(wrap);
    });
    container.appendChild(group);
  }

  function renderSelect(id, options, container, answerKey, part) {
    const select = document.createElement("select");
    select.id = "q_" + id + (part ? "_" + part : "");
    select.dataset.qid = String(id);
    if (part) select.dataset.part = part;
    options.forEach((opt) => {
      const o = document.createElement("option");
      o.value = opt.value;
      o.textContent = opt.label;
      select.appendChild(o);
    });
    let current = answers[id];
    if (part && current && typeof current === "object") {
      select.value = current[part] ?? "";
    } else if (!part && current !== undefined && current !== null) {
      select.value = String(current);
    }
    select.addEventListener("change", () => {
      if (part) {
        const prev =
          typeof answers[id] === "object" && answers[id] !== null
            ? { ...answers[id] }
            : { hours: "", minutes: "" };
        prev[part] = select.value;
        setAnswer(id, prev);
      } else {
        setAnswer(id, select.value === "" ? undefined : select.value);
      }
    });
    container.appendChild(select);
  }

  function renderQuestionCard(id) {
    const q = QUESTIONS[id];
    const card = document.createElement("article");
    card.className = "question-card";
    card.dataset.qid = String(id);
    card.id = "question-" + id;

    const label = document.createElement("label");
    label.className = "question-card__label";
    label.setAttribute("for", "q_" + id);
    const num = document.createElement("span");
    num.className = "question-card__num";
    num.textContent = displayIndex[id] + ".";
    const text = document.createElement("span");
    text.textContent = q.text[currentLang];
    label.appendChild(num);
    label.appendChild(text);
    card.appendChild(label);

    const body = document.createElement("div");
    body.className = "question-body";

    switch (q.type) {
      case "radio":
      case "likert":
        renderRadioGroup(id, q, body);
        break;
      case "age":
        renderSelect(id, buildAgeOptions().map((o) => ({ value: o.value, label: o.textContent })), body);
        break;
      case "days":
        renderSelect(id, buildDayOptions(), body);
        break;
      case "hours":
        renderSelect(id, buildHourOptions(), body);
        break;
      case "sitTime": {
        const row = document.createElement("div");
        row.className = "field-row";
        const gH = document.createElement("div");
        gH.className = "field-group";
        const lH = document.createElement("label");
        lH.textContent = UI[currentLang].hours;
        lH.setAttribute("for", "q_" + id + "_hours");
        gH.appendChild(lH);
        renderSelect(id, buildSitHourOptions(), gH, id, "hours");
        const gM = document.createElement("div");
        gM.className = "field-group";
        const lM = document.createElement("label");
        lM.textContent = UI[currentLang].minutes;
        lM.setAttribute("for", "q_" + id + "_minutes");
        gM.appendChild(lM);
        renderSelect(id, buildMinuteOptions(), gM, id, "minutes");
        row.appendChild(gH);
        row.appendChild(gM);
        body.appendChild(row);
        break;
      }
      case "openOrNone": {
        const ta = document.createElement("textarea");
        ta.id = "q_" + id;
        ta.dataset.qid = String(id);
        ta.rows = 4;
        const noKey = "__no_suggestions__";
        const stored = answers[id];
        if (stored === noKey) {
          ta.value = "";
          ta.disabled = true;
        } else if (typeof stored === "string") {
          ta.value = stored;
        }
        ta.addEventListener("input", () => {
          const cb = card.querySelector('input[data-no-suggestions]');
          if (cb) cb.checked = false;
          ta.disabled = false;
          setAnswer(id, ta.value.trim() === "" ? undefined : ta.value);
        });
        body.appendChild(ta);

        const noneWrap = document.createElement("label");
        noneWrap.className = "option";
        noneWrap.style.marginTop = "0.65rem";
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.dataset.noSuggestions = "1";
        cb.dataset.qid = String(id);
        if (stored === noKey) cb.checked = true;
        cb.addEventListener("change", () => {
          if (cb.checked) {
            ta.value = "";
            ta.disabled = true;
            setAnswer(id, noKey);
          } else {
            ta.disabled = false;
            setAnswer(id, ta.value.trim() === "" ? undefined : ta.value);
          }
        });
        const span = document.createElement("span");
        span.textContent = UI[currentLang].q49NoSuggestions;
        noneWrap.appendChild(cb);
        noneWrap.appendChild(span);
        body.appendChild(noneWrap);
        break;
      }
      default:
        break;
    }

    card.appendChild(body);
    return card;
  }

  function clearInapplicableAnswers() {
    QUESTION_ORDER.forEach((id) => {
      if (!isQuestionApplicable(id)) {
        delete answers[id];
      }
    });
  }

  function updateVisibility() {
    document.querySelectorAll(".question-card[data-qid]").forEach((card) => {
      const id = Number(card.dataset.qid);
      if (isQuestionApplicable(id)) {
        card.classList.remove("is-hidden");
      } else {
        card.classList.add("is-hidden");
        card.classList.remove("is-invalid");
      }
    });
  }

  function renderForm() {
    sectionsRoot.innerHTML = "";
    let who5NoteShown = false;

    SECTION_ORDER.forEach((sectionKey) => {
      const section = SECTIONS[sectionKey];
      const sectionEl = document.createElement("section");
      sectionEl.className = "section";
      sectionEl.dataset.section = sectionKey;

      const h2 = document.createElement("h2");
      h2.className = "section-title";
      h2.textContent = section[currentLang];
      sectionEl.appendChild(h2);

      section.ids.forEach((id) => {
        if (id === 26 && !who5NoteShown) {
          who5NoteShown = true;
          const note = document.createElement("p");
          note.className = "section-note who5-note";
          note.textContent = UI[currentLang].who5Note;
          sectionEl.appendChild(note);
        }
        sectionEl.appendChild(renderQuestionCard(id));
      });

      sectionsRoot.appendChild(sectionEl);
    });

    updateVisibility();
  }

  function applyLang(lang) {
    currentLang = lang;
    const rtl = lang === "fa";
    document.documentElement.lang = lang === "fa" ? "fa" : lang === "ru" ? "ru" : "en";
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.body.dir = rtl ? "rtl" : "ltr";

    siteTitle.textContent = UI[lang].title;
    document.title =
      lang === "fa"
        ? "پرسش‌نامه فعالیت بدنی — تهران"
        : lang === "ru"
          ? "Анкета — физическая активность, Тегеран"
          : "Questionnaire — Physical Activity, Tehran";
    instruction.textContent = UI[lang].instruction;
    submitBtn.textContent = UI[lang].submit;

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });

    renderForm();
    formToast.classList.remove("is-visible", "toast--success", "toast--error");
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang && LANGS.includes(lang)) applyLang(lang);
    });
  });

  function isFilled(id) {
    if (!isQuestionApplicable(id)) return true;
    const q = QUESTIONS[id];
    const val = answers[id];
    if (q.type === "openOrNone") {
      if (val === "__no_suggestions__") return true;
      return typeof val === "string" && val.trim().length > 0;
    }
    if (q.type === "sitTime") {
      if (!val || typeof val !== "object") return false;
      return val.hours !== "" && val.hours !== undefined && val.minutes !== "" && val.minutes !== undefined;
    }
    if (q.type === "age" || q.type === "days" || q.type === "hours") {
      return val !== undefined && val !== null && val !== "";
    }
    if (q.type === "radio" || q.type === "likert") {
      return typeof val === "number";
    }
    return false;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formToast.classList.remove("is-visible", "toast--success", "toast--error");
    document.querySelectorAll(".question-card").forEach((c) => c.classList.remove("is-invalid"));

    const missing = QUESTION_ORDER.filter((id) => !isFilled(id));
    if (missing.length > 0) {
      missing.forEach((id) => {
        const el = document.getElementById("question-" + id);
        if (el && isQuestionApplicable(id)) el.classList.add("is-invalid");
      });
      const first = document.getElementById("question-" + missing[0]);
      if (first) {
        first.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      formToast.textContent = UI[currentLang].validationHint;
      formToast.classList.add("is-visible", "toast--error");
      return;
    }

    formToast.textContent = UI[currentLang].completed;
    formToast.classList.add("is-visible", "toast--success");
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });

  applyLang("fa");
})();
