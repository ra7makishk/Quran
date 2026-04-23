const AHZAB = [
  'الحزب 1  — الفاتحة : بسم الله الرحمن الرحيم',
  'الحزب 2  — البقرة : أفتطمعون أن يؤمنوا لكم',
  'الحزب 3  — البقرة : سيقول السفهاء من الناس ما ولاهم',
  'الحزب 4  — البقرة : واذكروا الله في أيام معدودات',
  'الحزب 5  — البقرة : تلك الرسل فضلنا بعضهم على بعض',
  'الحزب 6  — آل عمران : قل أؤنبئكم بخير من ذلكم للذين اتقوا',
  'الحزب 7  — آل عمران : كل الطعام كان حلا لبني إسرائيل',
  'الحزب 8  — آل عمران : يستبشرون بنعمة من الله وفضل',
  'الحزب 9  — النساء : والمحصنات من النساء إلا ما ملكت أيمانكم',
  'الحزب 10 — النساء : فما لكم في المنافقين فئتين والله أركسهم',
  'الحزب 11 — النساء : لا يحب الله الجهر بالسوء من القول',
  'الحزب 12 — المائدة : واتل عليهم نبأ ابني آدم بالحق',
  'الحزب 13 — المائدة : لتجدن أشد الناس عداوة للذين آمنوا اليهود',
  'الحزب 14 — الأنعام : إنما يستجيب الذين يسمعون والموتى يبعثهم الله',
  'الحزب 15 — الأنعام : ولو أننا نزلنا إليهم الملائكة وكلمهم الموتى',
  'الحزب 16 — الأعراف : المص، كتاب أنزل إليك',
  'الحزب 17 — الأعراف : قال الملأ الذين استكبروا من قومه لنخرجنك',
  'الحزب 18 — الأعراف : وإذ نتقنا الجبل فوقهم كأنه ظلة',
  'الحزب 19 — الأنفال : واعلموا أنما غنمتم من شيء فأن لله خمسه',
  'الحزب 20 — التوبة : يا أيها الذين آمنوا إن كثيرا من الأحبار',
  'الحزب 21 — التوبة : إنما السبيل على الذين يستأذنونك وهم أغنياء',
  'الحزب 22 — يونس : للذين أحسنوا الحسنى وزيادة',
  'الحزب 23 — هود : وما من دابة في الأرض إلا على الله رزقها',
  'الحزب 24 — هود : وإلى مدين أخاهم شعيبا',
  'الحزب 25 — يوسف : وما أبرئ نفسي إن النفس لأمارة بالسوء',
  'الحزب 26 — الرعد : أفمن يعلم أنما أنزل إليك من ربك الحق',
  'الحزب 27 — الحجر : الر تلك آيات الكتاب وقرآن مبين',
  'الحزب 28 — النحل : وقال الله لا تتخذوا إلهين اثنين',
  'الحزب 29 — الإسراء : سبحان الذي أسرى بعبده ليلا',
  'الحزب 30 — الإسراء : أولم يروا أن الله الذي خلق السماوات',
  'الحزب 31 — الكهف : قال ألم أقل لك إنك لن تستطيع',
  'الحزب 32 — طه : طه، ما أنزلنا عليك القرآن لتشقى',
  'الحزب 33 — الأنبياء : اقترب للناس حسابهم وهم في غفلة معرضون',
  'الحزب 34 — الحج : يا أيها الناس اتقوا ربكم إن زلزلة',
  'الحزب 35 — المؤمنون : قد أفلح المؤمنون، الذين هم في',
  'الحزب 36 — النور : يا أيها الذين آمنوا لا تتبعوا خطوات',
  'الحزب 37 — الفرقان : وقال الذين لا يرجون لقاءنا',
  'الحزب 38 — الشعراء : قالوا أنؤمن لك واتبعك الأرذلون',
  'الحزب 39 — النمل : فما كان جواب قومه إلا أن قالوا',
  'الحزب 40 — القصص : ولقد وصلنا لهم القول لعلهم يتذكرون',
  'الحزب 41 — العنكبوت : ولا تجادلوا أهل الكتاب إلا بالتي هي أحسن',
  'الحزب 42 — لقمان : ومن يسلم وجهه إلى الله وهو محسن',
  'الحزب 43 — الأحزاب : ومن يقنت منكن لله ورسوله وتعمل صالحا',
  'الحزب 44 — سبأ : قل من يرزقكم من السماوات والأرض',
  'الحزب 45 — يس : وما أنزلنا على قومه من بعده من جند',
  'الحزب 46 — الصافات : فنبذناه بالعراء وهو سقيم',
  'الحزب 47 — الزمر : فمن أظلم ممن كذب على الله وكذب',
  'الحزب 48 — غافر : ويا قوم ما لي أدعوكم إلى النجاة',
  'الحزب 49 — فصلت : إليه يرد علم الساعة',
  'الحزب 50 — الزخرف : قال أولو جئتكم بأهدى مما وجدتم',
  'الحزب 51 — الأحقاف : حم، تنزيل الكتاب من الله العزيز الحكيم',
  'الحزب 52 — الفتح : لقد رضي الله عن المؤمنين إذ يبايعونك',
  'الحزب 53 — الذاريات : قال فما خطبكم أيها المرسلون',
  'الحزب 54 — الرحمن : الرحمن، علم القرآن',
  'الحزب 55 — المجادلة : قد سمع الله قول التي تجادلك',
  'الحزب 56 — الجمعة : يسبح لله ما في السماوات وما في الأرض',
  'الحزب 57 — الملك : تبارك الذي بيده الملك',
  'الحزب 58 — الجن : قل أوحي إلي أنه استمع نفر من الجن',
  'الحزب 59 — النبأ : عم يتساءلون، عن النبإ العظيم',
  'الحزب 60 — الأعلى : سبح اسم ربك الأعلى، الذي خلق فسوى',
];

// الشهور الهجرية من ذو القعدة إلى آخر السنة (ذو الحجة)
// ثم السنة التالية: محرم، صفر، ربيع الأول، ربيع الثاني، جمادى الأولى،
// جمادى الثانية، رجب، شعبان، رمضان، شوال
const MONTHS = [
  { name: 'ذو القعدة',    emoji: '🌙', days: 30 },
  { name: 'ذو الحجة',     emoji: '🕌', days: 30 },
  { name: 'محرم',          emoji: '🌟', days: 30 },
  { name: 'صفر',           emoji: '🌸', days: 29 },
  { name: 'ربيع الأول',   emoji: '🌺', days: 30 },
  { name: 'ربيع الثاني',  emoji: '🌷', days: 29 },
  { name: 'جمادى الأولى', emoji: '💕', days: 30 },
  { name: 'جمادى الثانية',emoji: '🎀', days: 29 },
  { name: 'رجب',           emoji: '✨', days: 30 },
  { name: 'شعبان',         emoji: '💫', days: 29 },
  { name: 'رمضان',         emoji: '🌙', days: 30 },
  { name: 'شوال',          emoji: '🎉', days: 29 },
];

// الصفحات الثلاث داخل كل شهر
function getPagesForMonth(totalDays) {
  const pages = [];
  // صفحة 1: أيام 1-10
  pages.push({ label: '🌸 الأيام ١–١٠', start: 1, end: 10 });
  // صفحة 2: أيام 11-20
  pages.push({ label: '💕 الأيام ١١–٢٠', start: 11, end: 20 });
  // صفحة 3: أيام 21-نهاية الشهر
  const endLabel = totalDays === 30 ? '٣٠' : '٢٩';
  pages.push({ label: `🎀 الأيام ٢١–${endLabel}`, start: 21, end: totalDays });
  return pages;
}

const STORAGE_KEY = 'quran_tracker_v3';

let currentMonth = 0;
let currentPage  = 0;
let data         = {};

// ── Storage ──────────────────────────────────────────────────────────────────
function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) data = JSON.parse(raw);
  } catch (e) {}
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
}

// مفتاح البيانات يشمل الشهر واليوم
function getVal(month, day, col) {
  return data[`m${month}_d${day}_${col}`] || '';
}

function setVal(month, day, col, val) {
  data[`m${month}_d${day}_${col}`] = val;
  saveData();
  updateStats();
}

// ── Month Tabs ────────────────────────────────────────────────────────────────
function renderMonthTabs() {
  const container = document.getElementById('monthTabs');
  container.innerHTML = '';

  MONTHS.forEach((m, idx) => {
    const btn = document.createElement('button');
    btn.className = 'month-tab-btn' + (idx === currentMonth ? ' active' : '');
    btn.innerHTML = `${m.emoji} ${m.name}`;
    btn.addEventListener('click', () => {
      currentMonth = idx;
      currentPage  = 0;
      renderMonthTabs();
      renderPageTabs();
      renderTable();
    });
    container.appendChild(btn);
  });
}

// ── Page Tabs (الأيام 1-10 / 11-20 / 21-نهاية) ────────────────────────────
function renderPageTabs() {
  const container = document.getElementById('tabs');
  container.innerHTML = '';

  const pages = getPagesForMonth(MONTHS[currentMonth].days);

  pages.forEach((page, idx) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (idx === currentPage ? ' active' : '');
    btn.textContent = page.label;
    btn.addEventListener('click', () => {
      currentPage = idx;
      renderPageTabs();
      renderTable();
    });
    container.appendChild(btn);
  });
}

// ── Table ─────────────────────────────────────────────────────────────────────
function renderTable() {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  const pages = getPagesForMonth(MONTHS[currentMonth].days);
  const { start, end } = pages[currentPage];

  for (let day = start; day <= end; day++) {
    const tr = document.createElement('tr');

    // Day number
    const tdDay = document.createElement('td');
    const circle = document.createElement('div');
    circle.className = 'day-circle';
    circle.textContent = day;
    tdDay.appendChild(circle);
    tr.appendChild(tdDay);

    // الحفظ
    const tdHafiz = document.createElement('td');
    tdHafiz.classList.add('td-wide');
    tdHafiz.appendChild(makeFieldWithDone(currentMonth, day, 'hafiz', 'hafiz_done', 'textarea', 'اكتبي ما حفظتِه... 🌸'));
    tr.appendChild(tdHafiz);

    // المراجعة القريبة
    const tdRevClose = document.createElement('td');
    tdRevClose.appendChild(makeCheckbox(currentMonth, day, 'rev_close'));
    tr.appendChild(tdRevClose);

    // المراجعة البعيدة
    const tdRevFar = document.createElement('td');
    tdRevFar.classList.add('td-wide');
    tdRevFar.appendChild(makeFieldWithDone(currentMonth, day, 'hizb', 'hizb_done', 'hizb', ''));
    tr.appendChild(tdRevFar);

    // المراجعة العامة
    const tdRevGen = document.createElement('td');
    tdRevGen.classList.add('td-wide');
    tdRevGen.appendChild(makeFieldWithDone(currentMonth, day, 'rev_gen', 'rev_gen_done', 'textarea', 'اكتبي ملاحظات المراجعة... 💕'));
    tr.appendChild(tdRevGen);

    // ملاحظات التجويد
    const tdNotes = document.createElement('td');
    tdNotes.classList.add('td-notes');
    tdNotes.appendChild(makeFieldWithDone(currentMonth, day, 'notes', 'notes_done', 'notes', 'اكتبي ملاحظات التجويد... ✏️'));
    tr.appendChild(tdNotes);

    // Stars
    const tdStars = document.createElement('td');
    tdStars.appendChild(makeStars(currentMonth, day, 'stars'));
    tr.appendChild(tdStars);

    // Sheikh
    const tdSheikh = document.createElement('td');
    tdSheikh.appendChild(makeCheckbox(currentMonth, day, 'sheikh'));
    tr.appendChild(tdSheikh);

    tbody.appendChild(tr);
  }
}

// ── Checkbox ──────────────────────────────────────────────────────────────────
function makeCheckbox(month, day, col) {
  const wrap = document.createElement('div');
  wrap.className = 'check-wrap';

  const box = document.createElement('div');
  box.className = 'checkbox-custom' + (getVal(month, day, col) === '1' ? ' checked' : '');
  box.textContent = getVal(month, day, col) === '1' ? '💗' : '';

  box.addEventListener('click', () => {
    const checked = box.classList.toggle('checked');
    box.textContent = checked ? '💗' : '';
    setVal(month, day, col, checked ? '1' : '');
  });

  wrap.appendChild(box);
  return wrap;
}

// ── Stars ─────────────────────────────────────────────────────────────────────
function makeStars(month, day, col) {
  const wrap = document.createElement('div');
  wrap.className = 'star-rating';

  const current = parseInt(getVal(month, day, col)) || 0;

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.className = 'star' + (i <= current ? ' filled' : '');
    star.textContent = '★';
    star.addEventListener('click', () => {
      setVal(month, day, col, String(i));
      const allStars = wrap.querySelectorAll('.star');
      allStars.forEach((s, idx) => s.classList.toggle('filled', idx < i));
    });
    wrap.appendChild(star);
  }

  return wrap;
}

// ── Hizb Multi-Select ────────────────────────────────────────────────────────
function makeHizbSelect(month, day, col) {
  const saved = getVal(month, day, col) ? JSON.parse(getVal(month, day, col)) : [];
  const wrap  = document.createElement('div');
  wrap.className = 'hizb-wrap';

  const btn = document.createElement('button');
  btn.className = 'hizb-btn';
  btn.type = 'button';

  function updateBtnLabel() {
    const current = getVal(month, day, col) ? JSON.parse(getVal(month, day, col)) : [];
    if (current.length === 0) {
      btn.innerHTML = '<span class="hizb-placeholder">اختاري الحزب 🌸</span><span class="hizb-arrow">▼</span>';
    } else {
      const nums = current.map(i => AHZAB[i].match(/الحزب\s+[\d٠-٩]+/)[0]).join(' + ');
      btn.innerHTML = `<span class="hizb-selected">${nums}</span><span class="hizb-arrow">▼</span>`;
    }
  }
  updateBtnLabel();

  const panel = document.createElement('div');
  panel.className = 'hizb-panel hidden';

  const search = document.createElement('input');
  search.type = 'text';
  search.className = 'hizb-search';
  search.placeholder = '🔍 ابحثي...';
  panel.appendChild(search);

  const list = document.createElement('ul');
  list.className = 'hizb-list';

  function buildList(filter = '') {
    list.innerHTML = '';
    AHZAB.forEach((hizb, idx) => {
      if (filter && !hizb.includes(filter)) return;
      const current = getVal(month, day, col) ? JSON.parse(getVal(month, day, col)) : [];
      const li = document.createElement('li');
      li.className = 'hizb-item' + (current.includes(idx) ? ' selected' : '');

      const chk = document.createElement('span');
      chk.className = 'hizb-chk';
      chk.textContent = current.includes(idx) ? '💗' : '○';

      const lbl = document.createElement('span');
      lbl.textContent = hizb;

      li.appendChild(chk);
      li.appendChild(lbl);

      li.addEventListener('click', () => {
        let vals = getVal(month, day, col) ? JSON.parse(getVal(month, day, col)) : [];
        if (vals.includes(idx)) {
          vals = vals.filter(v => v !== idx);
        } else {
          vals.push(idx);
          vals.sort((a, b) => a - b);
        }
        setVal(month, day, col, JSON.stringify(vals));
        buildList(search.value);
        updateBtnLabel();
      });

      list.appendChild(li);
    });
  }

  buildList();
  search.addEventListener('input', () => buildList(search.value));
  panel.appendChild(list);

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !panel.classList.contains('hidden');
    document.querySelectorAll('.hizb-panel').forEach(p => p.classList.add('hidden'));
    if (!isOpen) panel.classList.remove('hidden');
  });

  document.addEventListener('click', () => panel.classList.add('hidden'));
  panel.addEventListener('click', e => e.stopPropagation());

  wrap.appendChild(btn);
  wrap.appendChild(panel);
  return wrap;
}

// ── Auto-resize textarea ──────────────────────────────────────────────────────
function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = el.scrollHeight + 'px';
}

// ── Field + Done checkbox wrapper ────────────────────────────────────────────
function makeFieldWithDone(month, day, fieldCol, doneCol, type, placeholder) {
  const wrap = document.createElement('div');
  wrap.className = 'field-done-wrap';

  let field;
  if (type === 'textarea') {
    field = document.createElement('textarea');
    field.className   = 'wide-textarea';
    field.placeholder = placeholder;
    field.value       = getVal(month, day, fieldCol);
    field.rows        = 1;
    field.addEventListener('input', () => { setVal(month, day, fieldCol, field.value); autoResize(field); });
    requestAnimationFrame(() => autoResize(field));
  } else if (type === 'notes') {
    field = document.createElement('textarea');
    field.className   = 'notes-textarea';
    field.placeholder = placeholder;
    field.value       = getVal(month, day, fieldCol);
    field.rows        = 1;
    field.addEventListener('input', () => { setVal(month, day, fieldCol, field.value); autoResize(field); });
    requestAnimationFrame(() => autoResize(field));
  } else if (type === 'hizb') {
    field = makeHizbSelect(month, day, fieldCol);
  }

  const doneRow = document.createElement('div');
  doneRow.className = 'done-row';

  const isHafiz = doneCol === 'hafiz_done';
  const doneBox = document.createElement('div');
  const isDone  = getVal(month, day, doneCol) === '1';
  doneBox.className = 'done-check' + (isHafiz ? ' coffee-check' : '') + (isDone ? ' done' : '');
  doneBox.textContent = isDone ? (isHafiz ? '☕' : '✓') : (isHafiz ? '🤍' : '');
  doneBox.title = isHafiz ? 'كوباية قهوة لما تخلصي الحفظ ☕' : 'اضغطي للتأكيد على الإتمام';

  const doneLbl = document.createElement('span');
  doneLbl.className = 'done-lbl';
  doneLbl.textContent = 'تم ✅';

  doneBox.addEventListener('click', () => {
    const nowDone = doneBox.classList.toggle('done');
    doneBox.textContent = nowDone ? (isHafiz ? '☕' : '✓') : (isHafiz ? '🤍' : '');
    setVal(month, day, doneCol, nowDone ? '1' : '');
  });
  doneLbl.addEventListener('click', () => doneBox.click());

  doneRow.appendChild(doneBox);
  doneRow.appendChild(doneLbl);

  wrap.appendChild(field);
  wrap.appendChild(doneRow);
  return wrap;
}

// ── Stats ─────────────────────────────────────────────────────────────────────
function updateStats() {
  let done = 0, total = 0, starsSum = 0, starsCount = 0;

  MONTHS.forEach((m, mIdx) => {
    for (let day = 1; day <= m.days; day++) {
      ['rev_close', 'sheikh'].forEach(col => {
        total++;
        if (getVal(mIdx, day, col) === '1') done++;
      });
      const s = parseInt(getVal(mIdx, day, 'stars'));
      if (s > 0) { starsSum += s; starsCount++; }
    }
  });

  const pct    = total > 0 ? Math.round((done / total) * 100) : 0;
  const avgStr = starsCount > 0 ? (starsSum / starsCount).toFixed(1) : '—';

  document.getElementById('progressFill').style.width  = pct + '%';
  document.getElementById('progressLabel').textContent = pct + '%';

  // إحصائيات الشهر الحالي
  let mDone = 0, mTotal = 0;
  const m = MONTHS[currentMonth];
  for (let day = 1; day <= m.days; day++) {
    ['rev_close', 'sheikh'].forEach(col => {
      mTotal++;
      if (getVal(currentMonth, day, col) === '1') mDone++;
    });
  }
  const mPct = mTotal > 0 ? Math.round((mDone / mTotal) * 100) : 0;

  document.getElementById('statsRow').innerHTML = `
    <div class="stat-card">
      <div class="stat-num">🌟 ${done}</div>
      <div class="stat-lbl">إجمالي الإنجاز</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">💖 ${pct}%</div>
      <div class="stat-lbl">نسبة السنة</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">📅 ${mPct}%</div>
      <div class="stat-lbl">نسبة الشهر</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">⭐ ${avgStr}</div>
      <div class="stat-lbl">متوسط التجويد</div>
    </div>
  `;
}

// ── Init ──────────────────────────────────────────────────────────────────────
loadData();
renderMonthTabs();
renderPageTabs();
renderTable();
updateStats();
