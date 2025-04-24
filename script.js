// أسئلة صح وخطأ
const tfQuestions = [
  { q: "طابعات الليزر تستخدم مسحوق الحبر (التونر) للطباعة.", a: true },
  { q: "طابعات الليزر تعمل عن طريق رش الحبر السائل على الورق.", a: false },
  { q: "عمر طابعة الليزر عادة أطول من طابعة inkjet.", a: true },
  { q: "طابعات الليزر عادة ما تكون أبطأ من طابعات inkjet.", a: false },
  { q: "يمكن لطابعات الليزر طباعة نصوص بجودة عالية.", a: true },
  { q: "طابعات الليزر لا يمكنها الطباعة بالألوان.", a: false },
  { q: "طابعات الليزر لا تستخدم الحرارة أثناء عملية الطباعة.", a: false },
  { q: "حبر الطابعة الليزر يكون عادة على شكل مسحوق.", a: true },
  { q: "طابعات الليزر أقل تكلفة من طابعات inkjet في الاستخدام طويل المدى.", a: true },
  { q: "طابعات الليزر تناسب الطباعة بكميات كبيرة.", a: true },
];

// أسئلة اختيار من متعدد
const mcqQuestions = [
  {
    q: "ما هو المكون الأساسي الذي يستخدمه طابعة الليزر لإنتاج الصورة على الورق؟",
    options: ["حبر سائل", "تونر (مسحوق الحبر)", "حبر جاف", "حبر ملون"],
    a: 1
  },
  {
    q: "ما اسم العملية التي تستخدمها طابعات الليزر لتثبيت الحبر على الورق؟",
    options: ["التجفيف", "الترسيب الكهربائي", "الترسيخ بالحرارة", "التبريد"],
    a: 2
  },
  {
    q: "ما هو أفضل استخدام لطابعات الليزر؟",
    options: ["الطباعة بالألوان التصويرية", "الطباعة النصية عالية الجودة", "طباعة الصور الفوتوغرافية", "طباعة ثلاثية الأبعاد"],
    a: 1
  },
  {
    q: "أي من هذه الصيانة يجب القيام بها لطابعة الليزر بانتظام؟",
    options: ["تغيير رؤوس الطباعة", "تنظيف وحدة التصوير (Drum Unit)", "ملء خراطيش الحبر السائل", "تغيير الحبر الجاف"],
    a: 1
  },
  {
    q: "ما هي ميزة طابعة الليزر مقارنة بطابعة inkjet؟",
    options: ["تكلفة شراء أقل", "سرعة طباعة أعلى", "طباعة صور فوتوغرافية أفضل", "إنها أصغر حجمًا"],
    a: 1
  },
  {
    q: "ماذا يعني اختصار 'LED' في طابعة LED التي تشبه طابعة الليزر؟",
    options: ["صمام ثنائي باعث للضوء", "شريحة إلكترونية", "مصدر حرارة", "نوع من الحبر"],
    a: 0
  },
  {
    q: "ما محتوى التونر في طابعة الليزر؟",
    options: ["سائل ملون", "مسحوق يصنع من جزيئات مسحوق دقيقة", "حبر جاف فقط", "غبار الكربون فقط"],
    a: 1
  },
  {
    q: "ما وظيفة وحدة التحبير في طابعة الليزر؟",
    options: ["تثبيت الحبر على الورق بالحرارة", "نقل التونر إلى الورق", "إنشاء صورة كهربائية", "تنظيف الأسطوانة"],
    a: 1
  },
  {
    q: "أي من التالي يسبب تلفًا في طابعة الليزر؟",
    options: ["استخدام ورق عالي الجودة", "تنظيف الطابعة بانتظام", "استخدام التونر غير الأصلي بجودة ضعيفة", "تعطيل الطابعة بعد استخدامها"],
    a: 2
  },
  {
    q: "ما هو أفضل نوع ورق لطابعات الليزر؟",
    options: ["ورق عادي", "ورق لامع خاص بطابعات الليزر", "ورق الصور العادي", "ورق رقيق جدًا"],
    a: 1
  },
];

// أسئلة التوصيل (Matching)
const matchingQuestions = [
  {
    q: "وصل كل مكون بطابعات الليزر بوظيفته الصحيحة:",
    pairs: [
      { left: "التونر", rightOptions: ["مسحوق الحبر المستخدم في الطباعة", "تثبيت الحبر على الورق", "إنشاء صورة كهربائية"] },
      { left: "وحدة التصوير (Drum Unit)", rightOptions: ["مسحوق الحبر المستخدم في الطباعة", "تثبيت الحبر على الورق", "إنشاء صورة كهربائية"] },
      { left: "وحدة التثبيت (Fuser)", rightOptions: ["مسحوق الحبر المستخدم في الطباعة", "تثبيت الحبر على الورق", "إنشاء صورة كهربائية"] },
    ],
    answers: [0, 2, 1], // الإجابة الصحيحة لكل
  }
];

// أسئلة اختيار متعدد مع أكثر من إجابة صحيحة (Multiple Select)
const multipleSelectQuestions = [
  {
    q: "أي من المكونات التالية توجد عادة في طابعة الليزر؟ اختر كل ما ينطبق.",
    options: [
      { text: "التونر", correct: true },
      { text: "رؤوس الطباعة (Print Heads)", correct: false },
      { text: "وحدة تثبيت الحرارة (Fuser Unit)", correct: true },
      { text: "خرطوشة حبر سائل", correct: false },
      { text: "وحدة التصوير (Drum Unit)", correct: true },
    ]
  }
];

// دمج كل الأسئلة
const allQuestions = [];
tfQuestions.forEach(item => allQuestions.push({ ...item, type: "tf" }));
mcqQuestions.forEach(item => allQuestions.push({ ...item, type: "mcq" }));
matchingQuestions.forEach(item => allQuestions.push({ ...item, type: "matching" }));
multipleSelectQuestions.forEach(item => allQuestions.push({ ...item, type: "multipleSelect" }));

const totalQuestions = allQuestions.length;

// العناصر DOM
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionContainer = document.getElementById("question-container");
const studentNameInput = document.getElementById("studentName");
const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resultDiv = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");

let currentQuestionIndex = 0;
let userAnswers = new Array(totalQuestions).fill(null); 
let studentName = "";

// التعامل مع تفعيل زر البداية عند إدخال اسم
studentNameInput.addEventListener("input", () => {
  startBtn.disabled = studentNameInput.value.trim() === "";
});

// بدء الاختبار
startBtn.addEventListener("click", () => {
  studentName = studentNameInput.value.trim();
  if (!studentName) return;
  welcomeScreen.classList.remove("active");
  quizScreen.classList.add("active");
  renderQuestion(currentQuestionIndex);
  updateNavButtons();
});

// إعادة المحاولة
restartBtn.addEventListener("click", () => {
  userAnswers = new Array(totalQuestions).fill(null);
  currentQuestionIndex = 0;
  resultScreen.classList.remove("active");
  welcomeScreen.classList.add("active");
  studentNameInput.value = "";
  startBtn.disabled = true;
  questionContainer.innerHTML = "";
});

// عرض السؤال الحالي
function renderQuestion(index) {
  const q = allQuestions[index];
  let html = `<div class="question-text">السؤال ${index + 1} من ${totalQuestions}:</div>`;
  html += `<div class="question-prompt">${q.q}</div><div class="options">`;

  if (q.type === "tf") {
    html += `
      <label><input type="radio" name="answer" value="true" ${userAnswers[index] === true ? "checked" : ""} /> صح</label>
      <label><input type="radio" name="answer" value="false" ${userAnswers[index] === false ? "checked" : ""} /> خطأ</label>
    `;
  } else if (q.type === "mcq") {
    q.options.forEach((opt, i) => {
      html += `
        <label><input type="radio" name="answer" value="${i}" ${userAnswers[index] === i ? "checked" : ""} /> ${opt}</label>
      `;
    });
  } else if (q.type === "matching") {
    q.pairs.forEach((pair, i) => {
      html += `
      <div style="margin-bottom:15px;">
        <span style="font-weight:bold;">${pair.left}</span><br/>
        <select name="match-${i}" required>
          <option value="" disabled selected>اختر الوظيفة</option>
          ${pair.rightOptions.map((opt, idx) => `<option value="${idx}">${opt}</option>`).join("")}
        </select>
      </div>`;
    });
  } else if (q.type === "multipleSelect") {
    q.options.forEach((option, i) => {
      const checked = userAnswers[index] && userAnswers[index].includes(i) ? "checked" : "";
      html += `
        <label><input type="checkbox" name="answer" value="${i}" ${checked} /> ${option.text}</label>
      `;
    });
  }

  html += `</div>`;
  questionContainer.innerHTML = html;

  if (q.type === "tf" || q.type === "mcq") {
    const inputs = questionContainer.querySelectorAll("input[name='answer']");
    inputs.forEach(input => {
      input.addEventListener("change", e => {
        let val = e.target.value;
        if (q.type === "tf") userAnswers[index] = val === "true";
        else userAnswers[index] = parseInt(val);
        updateNavButtons();
      });
    });
  } else if (q.type === "matching") {
    const selects = questionContainer.querySelectorAll("select");
    selects.forEach(select => {
      select.addEventListener("change", () => {
        const answers = [];
        let allSelected = true;
        selects.forEach(s => {
          if (s.value === "") allSelected = false;
          answers.push(s.value === "" ? null : parseInt(s.value));
        });
        userAnswers[index] = allSelected ? answers : null;
        updateNavButtons();
      });
    });
  } else if (q.type === "multipleSelect") {
    const checkboxes = questionContainer.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", () => {
        const selected = [];
        checkboxes.forEach(ch => {
          if (ch.checked) selected.push(parseInt(ch.value));
        });
        userAnswers[index] = selected.length > 0 ? selected : null;
        updateNavButtons();
      });
    });
  }

  updateNavButtons();
}

// تحديث أزرار التنقل
function updateNavButtons() {
  prevBtn.disabled = currentQuestionIndex === 0;
  if (currentQuestionIndex === totalQuestions - 1) {
    nextBtn.textContent = "انهاء";
  } else {
    nextBtn.textContent = "التالي";
  }
  const ans = userAnswers[currentQuestionIndex];
  if (ans === null || ans === undefined) {
    nextBtn.disabled = true;
    return;
  }
  const q = allQuestions[currentQuestionIndex];
  if (q.type === "matching") {
    if (!Array.isArray(ans) || ans.some(a => a === null)) {
      nextBtn.disabled = true;
      return;
    }
  }
  nextBtn.disabled = false;
}

// أزرار التنقل
prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
    updateNavButtons();
  }
});

nextBtn.addEventListener("click", () => {
  if (userAnswers[currentQuestionIndex] === null) {
    alert("يرجى اختيار إجابة قبل المتابعة.");
    return;
  }
  if (currentQuestionIndex < totalQuestions - 1) {
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
    updateNavButtons();
  } else {
    showResult();
  }
});

// حساب وعرض النتيجة (بدون عرض الحلول)
function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  let score = 0;
  allQuestions.forEach((q, i) => {
    const userAns = userAnswers[i];
    let correct = false;
    if (q.type === "tf") {
      correct = userAns === q.a;
    } else if (q.type === "mcq") {
      correct = userAns === q.a;
    } else if (q.type === "matching") {
      if (Array.isArray(userAns)) {
        correct = userAns.length === q.answers.length && userAns.every((val, idx) => val === q.answers[idx]);
      }
    } else if (q.type === "multipleSelect") {
      if (Array.isArray(userAns)) {
        const correctSet = new Set(q.options.map((o, idx) => o.correct ? idx : -1).filter(i => i !== -1));
        const userSet = new Set(userAns);
        correct = userSet.size === correctSet.size && [...userSet].every(x => correctSet.has(x));
      }
    }
    if (correct) score++;
  });

  resultDiv.innerHTML = `
    <p>مرحباً ${studentName}، لقد أجبت بشكل صحيح على <strong>${score}</strong> من أصل <strong>${totalQuestions}</strong> سؤال.</p>
    <p>نسبتك هي: <strong>${((score / totalQuestions) * 100).toFixed(2)}%</strong></p>
  `;
}
