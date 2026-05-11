/* ================================================================
   REGION TULLNERFELD CUP — Application Logic
   ================================================================ */

// ---- Austrian National Team Squad (WM 2026) ----

const SQUAD = [
  "Alexander Schlager",
  "Tobias Lawal",
  "Patrick Pentz",
  "Florian Wiegele",
  "Kevin Danso",
  "Marco Friedl",
  "Philipp Lienhart",
  "David Affengruber",
  "Stefan Posch",
  "David Alaba",
  "Maximilian Wöber",
  "Michael Svoboda",
  "Phillipp Mwene",
  "Konrad Laimer",
  "Nicolas Seiwald",
  "Florian Grillitsch",
  "Carney Chukwuemeka",
  "Xaver Schlager",
  "Marcel Sabitzer",
  "Alessandro Schöpf",
  "Alexander Prass",
  "Christoph Baumgartner",
  "Paul Wanner",
  "Romano Schmid",
  "Patrick Wimmer",
  "Marko Arnautovic",
  "Sasa Kalajdzic",
  "Michael Gregoritsch",
];

// ---- Team Data for Group Draw (from vereine folder) ----

const TEAMS = [
  { name: "FC Tulln",                    logo: "assets/vereine/FC Tulln.png" },
  { name: "SC Sitzenberg-Reidling",      logo: "assets/vereine/SC Sitzenberg Reidling.png" },
  { name: "SK Lugus Tulbing",            logo: "assets/vereine/SK Lugus Tulbing.png" },
  { name: 'SV "Donau" Langenlebarn',     logo: "assets/vereine/SV Langenlebarn.png" },
  { name: "SV hb24 Viktoria Rust",       logo: "assets/vereine/SV Rust.png" },
  { name: "SV Langenrohr",               logo: "assets/vereine/SV Langenrohr.png" },
  { name: "SV Sieghartskirchen",          logo: "assets/vereine/SV Sieghartskirchen.png" },
  { name: "SV Würmla",                   logo: "assets/vereine/SV Würmla Circle.png" },
  { name: "SV Zwentendorf",              logo: "assets/vereine/SV Zwentendorf.png" },
  { name: "USC Muckendorf / Zeiselmauer",logo: "assets/vereine/USC Muckendorf.png" },
  { name: "USV Atzenbrugg-Heiligeneich", logo: "assets/vereine/USV-Atzenbrugg-Heiligeneich_whitebg.png" },
  { name: "USV St. Andrä Wördern",       logo: "assets/vereine/SV_St_Andrae_Woerdern_Logo.png" },
];

// Helper: find team by name (for Group Draw only)
function findTeam(name) {
  return TEAMS.find(t => t.name === name);
}

// ---- State ----

const state = {
  currentView: 'challenge',   // 'challenge' | 'draw'
  p1Score: 0,
  p2Score: 0,
  p1Names: [],
  p2Names: [],
  usedNames: new Set(),
  selectedName: null,
  // Group draw
  assignedTeams: new Set(),
  groups: {
    A: [null, null, null],
    B: [null, null, null],
    C: [null, null, null],
    D: [null, null, null],
  }
};

// ---- DOM Refs ----

const $ = (id) => document.getElementById(id);

const els = {
  challengeView: $('challenge-view'),
  drawView: $('group-draw-view'),
  viewIndicator: $('view-indicator-text'),
  nameInput: $('name-input'),
  ghost: $('autocomplete-ghost'),
  hint: $('autocomplete-hint'),
  btnP1: $('btn-p1'),
  btnP2: $('btn-p2'),
  p1ScoreNum: $('p1-score-num'),
  p2ScoreNum: $('p2-score-num'),
  p1Score: $('p1-score'),
  p2Score: $('p2-score'),
  p1Guessed: $('p1-guessed'),
  p2Guessed: $('p2-guessed'),
  jerseyAnim: $('jersey-animation'),
  jerseyName: $('jersey-name'),
  groupsGrid: $('groups-grid'),
};

// ---- View Toggle ----

function toggleView() {
  if (state.currentView === 'challenge') {
    state.currentView = 'draw';
    els.challengeView.classList.remove('active');
    els.drawView.classList.add('active');
    els.viewIndicator.textContent = 'AUSLOSUNG';
  } else {
    state.currentView = 'challenge';
    els.drawView.classList.remove('active');
    els.challengeView.classList.add('active');
    els.viewIndicator.textContent = 'CHALLENGE';
  }
}

document.addEventListener('keydown', (e) => {
  // Toggle view with Shift+S
  if (e.key === 'S' && e.shiftKey) {
    e.preventDefault();
    toggleView();
  }
});

// ---- Autocomplete Logic ----

function getAvailableNames() {
  return SQUAD.filter(n => !state.usedNames.has(n));
}

// Format a name as "Firstname Lastname"
function formatName(name) {
  return name; // SQUAD already stores as "Firstname Lastname"
}

// Get last name from a full name
function getLastName(name) {
  const parts = name.split(' ');
  return parts[parts.length - 1];
}

// Get first name from a full name
function getFirstName(name) {
  const parts = name.split(' ');
  return parts[0];
}

// Build the suggestion string based on what the user typed.
// If they typed the start of the last name (e.g. "wim"), suggest "wimmer patrick".
// If they typed the start of the first name (e.g. "patr"), suggest "patrick wimmer".
function buildSuggestionText(match, query) {
  const firstName = getFirstName(match).toLowerCase();
  const lastName = getLastName(match).toLowerCase();

  if (firstName.startsWith(query)) {
    // User typed beginning of first name → show "firstname lastname"
    return match; // "Patrick Wimmer"
  } else if (lastName.startsWith(query)) {
    // User typed beginning of last name → show "lastname firstname"
    return getLastName(match) + ' ' + getFirstName(match);
  } else {
    // Partial match on other word
    return match;
  }
}

function updateAutocomplete() {
  const raw = els.nameInput.value;
  const query = raw.trim().toLowerCase();

  els.ghost.textContent = '';
  els.hint.textContent = '';
  els.hint.classList.remove('visible');
  state.selectedName = null;
  updateButtons();

  if (!query) return;

  const available = getAvailableNames();

  // Match by: full name starts with query, OR last name starts with query,
  // OR any part of the name starts with query
  const matches = available.filter(n => {
    const lower = n.toLowerCase();
    if (lower.startsWith(query)) return true;
    const words = lower.split(' ');
    return words.some(w => w.startsWith(query));
  });

  if (matches.length === 1) {
    const match = matches[0];
    const suggestion = buildSuggestionText(match, query);

    // Show ghost text that continues from what the user typed
    if (suggestion.toLowerCase().startsWith(query)) {
      els.ghost.textContent = raw + suggestion.substring(raw.length);
    } else {
      els.ghost.textContent = suggestion;
    }

    state.selectedName = match;
    els.hint.textContent = 'Tab oder Enter zum Bestätigen';
    els.hint.classList.add('visible');
    updateButtons();
  } else if (matches.length > 1 && matches.length <= 5) {
    els.hint.textContent = `${matches.length} mögliche Treffer…`;
    els.hint.classList.add('visible');
  } else if (matches.length > 5) {
    els.hint.textContent = `${matches.length} Treffer — weiter tippen…`;
    els.hint.classList.add('visible');
  } else if (matches.length === 0) {
    els.hint.textContent = 'Kein Treffer';
    els.hint.classList.add('visible');
  }
}

function acceptAutocomplete() {
  if (state.selectedName) {
    // Fill the input with the suggestion text (matching the ghost)
    const query = els.nameInput.value.trim().toLowerCase();
    const suggestion = buildSuggestionText(state.selectedName, query);
    els.nameInput.value = suggestion;
    els.ghost.textContent = '';
    els.hint.classList.remove('visible');
    updateButtons();
  }
}

els.nameInput.addEventListener('input', updateAutocomplete);

els.nameInput.addEventListener('keydown', (e) => {
  if ((e.key === 'Tab' || e.key === 'Enter') && state.selectedName) {
    e.preventDefault();
    e.stopPropagation();
    acceptAutocomplete();
  }
});

// ---- Button State ----

function updateButtons() {
  // Also check direct exact match (support both "Patrick Wimmer" and "Wimmer Patrick" formats)
  if (!state.selectedName) {
    const inputVal = els.nameInput.value.trim().toLowerCase();
    const exact = getAvailableNames().find(n => {
      const lower = n.toLowerCase();
      if (lower === inputVal) return true;
      // Also match reversed order: "Wimmer Patrick" → "Patrick Wimmer"
      const parts = n.split(' ');
      if (parts.length === 2) {
        const reversed = (parts[1] + ' ' + parts[0]).toLowerCase();
        if (reversed === inputVal) return true;
      }
      return false;
    });
    if (exact) state.selectedName = exact;
  }

  els.btnP1.disabled = !state.selectedName;
  els.btnP2.disabled = !state.selectedName;
}

// ---- Point Assignment ----

function assignPoint(player) {
  const name = state.selectedName;
  if (!name) return;

  state.usedNames.add(name);
  state.selectedName = null;
  els.nameInput.value = '';
  els.ghost.textContent = '';
  els.hint.classList.remove('visible');
  updateButtons();

  // Update score and list IMMEDIATELY
  if (player === 'p1') {
    state.p1Score++;
    state.p1Names.push(name);
    els.p1ScoreNum.textContent = state.p1Score;
    addToList(els.p1Guessed, name);
    pulseScore(els.p1Score);
  } else {
    state.p2Score++;
    state.p2Names.push(name);
    els.p2ScoreNum.textContent = state.p2Score;
    addToList(els.p2Guessed, name);
    pulseScore(els.p2Score);
  }

  // Show jersey animation (visual only)
  showJerseyAnimation(name, player);
}

els.btnP1.addEventListener('click', () => assignPoint('p1'));
els.btnP2.addEventListener('click', () => assignPoint('p2'));

// ---- Jersey Animation ----

function showJerseyAnimation(name, player) {
  // Show only the player's last name on the jersey
  const parts = name.split(' ');
  const lastName = parts[parts.length - 1];
  els.jerseyName.textContent = lastName;

  // Reset classes
  els.jerseyAnim.className = 'jersey-animation';

  // Force reflow
  void els.jerseyAnim.offsetWidth;

  // Entrance
  els.jerseyAnim.classList.add('active');

  // After entrance, fly to the player's side
  setTimeout(() => {
    els.jerseyAnim.classList.remove('active');
    els.jerseyAnim.classList.add(player === 'p1' ? 'exit-left' : 'exit-right');

    setTimeout(() => {
      els.jerseyAnim.className = 'jersey-animation';
    }, 600);
  }, 1200);
}

function addToList(listEl, name) {
  const li = document.createElement('li');
  // Display as "Firstname Lastname" (which is already the SQUAD format)
  li.textContent = name;
  listEl.appendChild(li);
}

function pulseScore(scoreEl) {
  scoreEl.classList.add('pulse');
  setTimeout(() => scoreEl.classList.remove('pulse'), 700);
}

// ---- Group Draw ----

function buildGroupDraw() {
  els.groupsGrid.innerHTML = '';

  const groupKeys = ['A', 'B', 'C', 'D'];

  groupKeys.forEach(letter => {
    const card = document.createElement('div');
    card.className = 'group-card';
    card.id = `group-${letter}`;

    card.innerHTML = `
      <div class="group-header">
        <div class="group-letter">Gruppe</div>
        <div class="group-name">${letter}</div>
      </div>
      <div class="group-slots" id="slots-${letter}"></div>
    `;

    els.groupsGrid.appendChild(card);

    const slotsContainer = card.querySelector(`#slots-${letter}`);

    for (let i = 0; i < 3; i++) {
      const slot = document.createElement('div');
      slot.className = 'slot';
      slot.id = `slot-${letter}-${i}`;

      slot.innerHTML = `
        <span class="slot-number">${i + 1}</span>
        <select data-group="${letter}" data-index="${i}">
          <option value="">Verein wählen…</option>
        </select>
      `;

      slotsContainer.appendChild(slot);
    }
  });

  refreshAllDropdowns();
  attachDropdownListeners();
}

function getAvailableTeamsForDraw() {
  return TEAMS.filter(t => !state.assignedTeams.has(t.name));
}

function refreshAllDropdowns() {
  const available = getAvailableTeamsForDraw();
  const selects = els.groupsGrid.querySelectorAll('select');

  selects.forEach(sel => {
    const currentVal = sel.value;
    sel.innerHTML = '<option value="">Verein wählen…</option>';

    available.forEach(team => {
      const opt = document.createElement('option');
      opt.value = team.name;
      opt.textContent = team.name;
      sel.appendChild(opt);
    });

    if (currentVal) sel.value = currentVal;
  });
}

function attachDropdownListeners() {
  els.groupsGrid.addEventListener('change', (e) => {
    if (e.target.tagName !== 'SELECT') return;

    const teamName = e.target.value;
    const group = e.target.dataset.group;
    const index = parseInt(e.target.dataset.index, 10);

    // If clearing selection (choosing placeholder)
    if (!teamName) {
      const prevTeam = state.groups[group][index];
      if (prevTeam) {
        state.assignedTeams.delete(prevTeam);
        state.groups[group][index] = null;
      }
      refreshAllDropdowns();
      return;
    }

    const team = findTeam(teamName);

    // Remove previous team from this slot if any
    const prevTeam = state.groups[group][index];
    if (prevTeam) {
      state.assignedTeams.delete(prevTeam);
    }

    // Update state
    state.groups[group][index] = teamName;
    state.assignedTeams.add(teamName);

    // Show filled slot with team logo and name, but keep it clickable
    const slot = e.target.closest('.slot');
    const logoSrc = team ? team.logo : '';

    slot.innerHTML = `
      <span class="slot-number">${index + 1}</span>
      <div class="slot-filled" data-group="${group}" data-index="${index}">
        ${logoSrc ? `<img class="slot-team-badge" src="${logoSrc}" alt="${teamName}" />` : ''}
        <span class="slot-team-name">${teamName}</span>
        <span class="slot-change-icon" title="Ändern">✎</span>
      </div>
    `;

    // Refresh remaining dropdowns
    refreshAllDropdowns();
  });

  // Click on filled slot to re-edit
  els.groupsGrid.addEventListener('click', (e) => {
    const filled = e.target.closest('.slot-filled');
    if (!filled) return;

    const group = filled.dataset.group;
    const index = parseInt(filled.dataset.index, 10);
    const slot = filled.closest('.slot');

    // Remove this team from assigned
    const prevTeam = state.groups[group][index];
    if (prevTeam) {
      state.assignedTeams.delete(prevTeam);
      state.groups[group][index] = null;
    }

    // Replace with dropdown again
    slot.innerHTML = `
      <span class="slot-number">${index + 1}</span>
      <select data-group="${group}" data-index="${index}">
        <option value="">Verein wählen…</option>
      </select>
    `;

    refreshAllDropdowns();

    // Auto-open the dropdown
    const sel = slot.querySelector('select');
    if (sel) sel.focus();
  });
}

// ---- Initialize ----

function init() {
  buildGroupDraw();
  updateButtons();
  els.nameInput.focus();
}

init();
