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

const PAGES = [
  { label: '🌸 الأيام ١–١٠',  start: 1,  end: 10 },
  { label: '💕 الأيام ١١–٢٠', start: 11, end: 20 },
  { label: '🎀 الأيام ٢١–٣٠', start: 21, end: 30 }
];

const TOTAL_DAYS    = 30;
const STORAGE_KEY   = 'quran_tracker_v2';

let currentPage = 0;
let data        = {};

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

function getVal(day, col) {
  return data[`d${day}_${col}`] || '';
}

function setVal(day, col, val) {
  data[`d${day}_${col}`] = val;
  saveData();
  updateStats();
}

// ── Tabs ─────────────────────────────────────────────────────────────────────
function renderTabs() {
  const container = document.getElementById('tabs');
  container.innerHTML = '';

  PAGES.forEach((page, idx) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (idx === currentPage ? ' active' : '');
    btn.textContent = page.label;
    btn.addEventListener('click', () => {
      currentPage = idx;
      renderTabs();
      renderTable();
    });
    container.appendChild(btn);
  });
}

// ── Table ─────────────────────────────────────────────────────────────────────
function renderTable() {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  const { start, end } = PAGES[currentPage];

  for (let day = start; day <= end; day++) {
    const tr = document.createElement('tr');

    // Day number
    const tdDay = document.createElement('td');
    const circle = document.createElement('div');
    circle.className = 'day-circle';
    circle.textContent = day;
    tdDay.appendChild(circle);
    tr.appendChild(tdDay);

    // الحفظ — textarea + done checkbox
    const tdHafiz = document.createElement('td');
    tdHafiz.classList.add('td-wide');
    tdHafiz.appendChild(makeFieldWithDone(day, 'hafiz', 'hafiz_done', 'textarea', 'اكتبي ما حفظتِه... 🌸'));
    tr.appendChild(tdHafiz);

    // المراجعة القريبة — checkbox only
    const tdRevClose = document.createElement('td');
    tdRevClose.appendChild(makeCheckbox(day, 'rev_close'));
    tr.appendChild(tdRevClose);

    // المراجعة البعيدة — hizb dropdown + done checkbox
    const tdRevFar = document.createElement('td');
    tdRevFar.classList.add('td-wide');
    tdRevFar.appendChild(makeFieldWithDone(day, 'hizb', 'hizb_done', 'hizb', ''));
    tr.appendChild(tdRevFar);

    // المراجعة العامة — textarea + done checkbox
    const tdRevGen = document.createElement('td');
    tdRevGen.classList.add('td-wide');
    tdRevGen.appendChild(makeFieldWithDone(day, 'rev_gen', 'rev_gen_done', 'textarea', 'اكتبي ملاحظات المراجعة... 💕'));
    tr.appendChild(tdRevGen);

    // Notes — textarea + done checkbox
    const tdNotes = document.createElement('td');
    tdNotes.classList.add('td-notes');
    tdNotes.appendChild(makeFieldWithDone(day, 'notes', 'notes_done', 'notes', 'اكتبي ملاحظات التجويد... ✏️'));
    tr.appendChild(tdNotes);

    // Stars
    const tdStars = document.createElement('td');
    tdStars.appendChild(makeStars(day, 'stars'));
    tr.appendChild(tdStars);

    // Sheikh checkbox
    const tdSheikh = document.createElement('td');
    tdSheikh.appendChild(makeCheckbox(day, 'sheikh'));
    tr.appendChild(tdSheikh);

    tbody.appendChild(tr);
  }
}

// ── Checkbox ──────────────────────────────────────────────────────────────────
function makeCheckbox(day, col) {
  const wrap = document.createElement('div');
  wrap.className = 'check-wrap';

  const box = document.createElement('div');
  box.className = 'checkbox-custom' + (getVal(day, col) === '1' ? ' checked' : '');
  box.textContent = getVal(day, col) === '1' ? '💗' : '';

  box.addEventListener('click', () => {
    const checked = box.classList.toggle('checked');
    box.textContent = checked ? '💗' : '';
    setVal(day, col, checked ? '1' : '');
  });

  wrap.appendChild(box);
  return wrap;
}

// ── Stars ─────────────────────────────────────────────────────────────────────
function makeStars(day, col) {
  const wrap = document.createElement('div');
  wrap.className = 'star-rating';

  const current = parseInt(getVal(day, col)) || 0;

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.className = 'star' + (i <= current ? ' filled' : '');
    star.textContent = '★';
    star.addEventListener('click', () => {
      setVal(day, col, String(i));
      // Re-render only the stars in this row
      const allStars = wrap.querySelectorAll('.star');
      allStars.forEach((s, idx) => {
        s.classList.toggle('filled', idx < i);
      });
    });
    wrap.appendChild(star);
  }

  return wrap;
}

// ── Hizb Multi-Select ────────────────────────────────────────────────────────
function makeHizbSelect(day, col) {
  const saved    = getVal(day, col) ? JSON.parse(getVal(day, col)) : [];
  const wrap     = document.createElement('div');
  wrap.className = 'hizb-wrap';

  // Display button
  const btn = document.createElement('button');
  btn.className   = 'hizb-btn';
  btn.type        = 'button';

  function updateBtnLabel() {
    const current = getVal(day, col) ? JSON.parse(getVal(day, col)) : [];
    if (current.length === 0) {
      btn.innerHTML = '<span class="hizb-placeholder">اختاري الحزب 🌸</span><span class="hizb-arrow">▼</span>';
    } else {
      const nums = current.map(i => AHZAB[i].match(/الحزب\s+[\d٠-٩]+/)[0]).join(' + ');
      btn.innerHTML = `<span class="hizb-selected">${nums}</span><span class="hizb-arrow">▼</span>`;
    }
  }
  updateBtnLabel();

  // Dropdown panel
  const panel     = document.createElement('div');
  panel.className = 'hizb-panel hidden';

  // Search box
  const search     = document.createElement('input');
  search.type      = 'text';
  search.className = 'hizb-search';
  search.placeholder = '🔍 ابحثي...';
  panel.appendChild(search);

  // List
  const list     = document.createElement('ul');
  list.className = 'hizb-list';

  function buildList(filter = '') {
    list.innerHTML = '';
    AHZAB.forEach((hizb, idx) => {
      if (filter && !hizb.includes(filter)) return;
      const current = getVal(day, col) ? JSON.parse(getVal(day, col)) : [];
      const li      = document.createElement('li');
      li.className  = 'hizb-item' + (current.includes(idx) ? ' selected' : '');

      const chk     = document.createElement('span');
      chk.className = 'hizb-chk';
      chk.textContent = current.includes(idx) ? '💗' : '○';

      const lbl     = document.createElement('span');
      lbl.textContent = hizb;

      li.appendChild(chk);
      li.appendChild(lbl);

      li.addEventListener('click', () => {
        let vals = getVal(day, col) ? JSON.parse(getVal(day, col)) : [];
        if (vals.includes(idx)) {
          vals = vals.filter(v => v !== idx);
        } else {
          vals.push(idx);
          vals.sort((a, b) => a - b);
        }
        setVal(day, col, JSON.stringify(vals));
        buildList(search.value);
        updateBtnLabel();
      });

      list.appendChild(li);
    });
  }

  buildList();
  search.addEventListener('input', () => buildList(search.value));
  panel.appendChild(list);

  // Toggle
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !panel.classList.contains('hidden');
    // Close all other panels first
    document.querySelectorAll('.hizb-panel').forEach(p => p.classList.add('hidden'));
    if (!isOpen) panel.classList.remove('hidden');
  });

  document.addEventListener('click', () => panel.classList.add('hidden'));
  panel.addEventListener('click', e => e.stopPropagation());

  wrap.appendChild(btn);
  wrap.appendChild(panel);
  return wrap;
}

// ── Field + Done checkbox wrapper ────────────────────────────────────────────
function makeFieldWithDone(day, fieldCol, doneCol, type, placeholder) {
  const wrap = document.createElement('div');
  wrap.className = 'field-done-wrap';

  // the input/select/textarea
  let field;
  if (type === 'textarea') {
    field = document.createElement('textarea');
    field.className   = 'wide-textarea';
    field.placeholder = placeholder;
    field.value       = getVal(day, fieldCol);
    field.rows        = 3;
    field.addEventListener('input', () => setVal(day, fieldCol, field.value));
  } else if (type === 'notes') {
    field = document.createElement('textarea');
    field.className   = 'notes-textarea';
    field.placeholder = placeholder;
    field.value       = getVal(day, fieldCol);
    field.rows        = 5;
    field.addEventListener('input', () => setVal(day, fieldCol, field.value));
  } else if (type === 'hizb') {
    field = makeHizbSelect(day, fieldCol);
  }

  // done checkbox row
  const doneRow = document.createElement('div');
  doneRow.className = 'done-row';

  const doneBox = document.createElement('div');
  const isDone  = getVal(day, doneCol) === '1';
  doneBox.className = 'done-check' + (isDone ? ' done' : '');
  doneBox.textContent = isDone ? '✓' : '';
  doneBox.title = 'اضغطي للتأكيد على الإتمام';

  const doneLbl = document.createElement('span');
  doneLbl.className = 'done-lbl';
  doneLbl.textContent = 'تم ✅';

  doneBox.addEventListener('click', () => {
    const nowDone = doneBox.classList.toggle('done');
    doneBox.textContent = nowDone ? '✓' : '';
    setVal(day, doneCol, nowDone ? '1' : '');
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

  for (let day = 1; day <= TOTAL_DAYS; day++) {
    ['rev_close', 'rev_far', 'rev_gen', 'sheikh'].forEach(col => {
      total++;
      if (getVal(day, col) === '1') done++;
    });

    const s = parseInt(getVal(day, 'stars'));
    if (s > 0) { starsSum += s; starsCount++; }
  }

  const pct     = Math.round((done / total) * 100);
  const avgStr  = starsCount > 0 ? (starsSum / starsCount).toFixed(1) : '—';

  document.getElementById('progressFill').style.width  = pct + '%';
  document.getElementById('progressLabel').textContent = pct + '%';

  document.getElementById('statsRow').innerHTML = `
    <div class="stat-card">
      <div class="stat-num">🌟 ${done}</div>
      <div class="stat-lbl">تم إنجازه</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">💖 ${pct}%</div>
      <div class="stat-lbl">نسبة الإنجاز</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">⭐ ${avgStr}</div>
      <div class="stat-lbl">متوسط التجويد</div>
    </div>
  `;
}

// ── Init ──────────────────────────────────────────────────────────────────────
loadData();
renderTabs();
renderTable();
updateStats();
