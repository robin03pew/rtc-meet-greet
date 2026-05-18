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

// ---- Sponsor Data (from assets/sponsors/) ----
// Each entry: { logo, name, category }
// We skip .psd, .pdf, and non-image files; use .png/.jpg/.svg only

const SPONSORS = [
  // Kat 1 — Main sponsors
  { logo: "assets/sponsors/kat1/11team_puma.png",              name: "11teamsports / Puma" },
  { logo: "assets/sponsors/kat1/baumgartner_mitsubishi.png",   name: "Baumgartner Mitsubishi" },
  { logo: "assets/sponsors/kat1/logo_region_tullnerfeld_4c.png", name: "Region Tullnerfeld" },
  { logo: "assets/sponsors/kat1/rauch_logo_schrift.png",       name: "Rauch" },
  { logo: "assets/sponsors/kat1/trb_hialsorb.png",             name: "TRB Hialsorb" },
  // Kat 2
  { logo: "assets/sponsors/kat2/Glosara_Logo.png",             name: "Glosara" },
  { logo: "assets/sponsors/kat2/Hummer_LOGO.jpg",              name: "Hummer" },
  { logo: "assets/sponsors/kat2/NV_Logo_ab 2023_hoch_Offset_CMYK.jpg", name: "Niederösterreichische Versicherung" },
  { logo: "assets/sponsors/kat2/VB_Logo_blau_digital (1).jpg", name: "Volksbank" },
  { logo: "assets/sponsors/kat2/WB Logo 4C.jpg",               name: "Wirtschaftsbund" },
  { logo: "assets/sponsors/kat2/im86-Logo_RGBsquare_color_3x.png", name: "im86" },
  // Kat 3
  { logo: "assets/sponsors/kat3/AD_MF-LOGO-red-grey_Kombination_2022.png", name: "AD MF" },
  { logo: "assets/sponsors/kat3/greiner.png",                  name: "Greiner" },
  { logo: "assets/sponsors/kat3/kutech_logo_4c.png",           name: "Kutech" },
  { logo: "assets/sponsors/kat3/logo sonnenschutzwelt.png",    name: "Sonnenschutzwelt" },
  { logo: "assets/sponsors/kat3/ltt 01_Landtechnik_Tullnerfeld_LogoName.jpg", name: "Landtechnik Tullnerfeld" },
  { logo: "assets/sponsors/kat3/tulln 01_D52.006.1_Bild-Wortmarke_V1_4c.png", name: "Stadt Tulln" },
  { logo: "assets/sponsors/kat3/tulln 03_Logo TullnEnergie.png", name: "Tulln Energie" },
  { logo: "assets/sponsors/kat3/z01_NÖN Logo 2021.jpg",        name: "NÖN" },
  { logo: "assets/sponsors/kat3/z02_ligaportal-logo.png",      name: "Ligaportal" },
  { logo: "assets/sponsors/kat3/z03_Logo_MeinBezirk_pos_CMYK.jpg", name: "MeinBezirk" },
  // Kat 4
  { logo: "assets/sponsors/kat4/JB Hydraulik.png",             name: "JB Hydraulik" },
  { logo: "assets/sponsors/kat4/etschuster.png",               name: "Etschuster" },
  { logo: "assets/sponsors/kat4/logo-stiga.svg",               name: "Stiga" },
  { logo: "assets/sponsors/kat4/thomes.png",                   name: "Thomes" },
  // Kat 5
  { logo: "assets/sponsors/kat5/akyoung.png",                  name: "AK Young" },
  { logo: "assets/sponsors/kat5/bergerschinken-logo-2.png",    name: "Berger Schinken" },
  { logo: "assets/sponsors/kat5/schiedsrichter.png",           name: "Schiedsrichter" },
  { logo: "assets/sponsors/kat5/skyline.png",                  name: "Skyline" },
  { logo: "assets/sponsors/kat5/stoerchle.png",                name: "Störchle" },
];

const SPONSOR_INTERVAL = 8000; // 8 seconds per sponsor

// Helper: find team by name (for Group Draw only)
function findTeam(name) {
  return TEAMS.find(t => t.name === name);
}

// ---- State ----

const state = {
  currentView: 'screensaver',   // 'challenge' | 'draw' | 'screensaver'
  views: ['screensaver', 'challenge', 'draw'],
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
  },
  // Sponsor carousel
  currentSponsorIndex: 0,
  sponsorTimer: null,
  shuffledSponsors: [],
};

// ---- DOM Refs ----

const $ = (id) => document.getElementById(id);

const els = {
  challengeView: $('challenge-view'),
  drawView: $('group-draw-view'),
  screensaverView: $('screensaver-view'),
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
  sponsorLogoWrapper: $('sponsor-logo-wrapper'),
  sponsorLabel: $('sponsor-label'),
};

// ---- View Toggle (3-way cycling) ----

function getViewEl(viewName) {
  if (viewName === 'challenge') return els.challengeView;
  if (viewName === 'draw') return els.drawView;
  if (viewName === 'screensaver') return els.screensaverView;
}

function getViewLabel(viewName) {
  if (viewName === 'challenge') return 'CHALLENGE';
  if (viewName === 'draw') return 'AUSLOSUNG';
  if (viewName === 'screensaver') return 'SCREENSAVER';
}

function setView(viewName) {
  // Deactivate all
  state.views.forEach(v => {
    const el = getViewEl(v);
    if (el) el.classList.remove('active');
  });

  // Activate target
  const targetEl = getViewEl(viewName);
  if (targetEl) targetEl.classList.add('active');

  state.currentView = viewName;
  els.viewIndicator.textContent = getViewLabel(viewName);

  // Start/stop sponsor carousel
  if (viewName === 'screensaver') {
    startSponsorCarousel();
  } else {
    stopSponsorCarousel();
  }

  // Focus input when switching to challenge
  if (viewName === 'challenge') {
    setTimeout(() => els.nameInput.focus(), 100);
  }
}

function cycleView() {
  const idx = state.views.indexOf(state.currentView);
  const next = state.views[(idx + 1) % state.views.length];
  setView(next);
}

document.addEventListener('keydown', (e) => {
  // Toggle view with Shift+S
  if (e.key === 'S' && e.shiftKey) {
    e.preventDefault();
    cycleView();
    return;
  }

  // Sponsor navigation (only on screensaver)
  if (state.currentView === 'screensaver') {
    // ü or , = previous sponsor
    if (e.key === 'ü' || e.key === ',') {
      e.preventDefault();
      navigateSponsor(-1);
    }
    // ä or . = next sponsor
    if (e.key === 'ä' || e.key === '.') {
      e.preventDefault();
      navigateSponsor(1);
    }
  }
});

// ---- Sponsor Carousel ----

// Fisher-Yates shuffle
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showSponsor(index) {
  const sponsor = state.shuffledSponsors[index];
  if (!sponsor) return;

  state.currentSponsorIndex = index;

  // Fade out current content
  const oldWrapper = els.sponsorLogoWrapper;
  const currentImg = oldWrapper.querySelector('img');
  if (currentImg) {
    currentImg.style.animation = 'sponsor-fade-out 0.4s ease forwards';
  }

  setTimeout(() => {
    // Clone the wrapper to fully reset the ::after progress bar animation
    const newWrapper = oldWrapper.cloneNode(false);
    newWrapper.style.setProperty('--sponsor-duration', SPONSOR_INTERVAL + 'ms');

    const img = document.createElement('img');
    img.src = sponsor.logo;
    img.alt = sponsor.name;
    img.draggable = false;
    newWrapper.appendChild(img);

    oldWrapper.parentNode.replaceChild(newWrapper, oldWrapper);
    els.sponsorLogoWrapper = newWrapper;
  }, 400);
}

function navigateSponsor(direction) {
  if (!state.shuffledSponsors.length) return;
  let next = state.currentSponsorIndex + direction;
  if (next < 0) next = state.shuffledSponsors.length - 1;
  if (next >= state.shuffledSponsors.length) next = 0;
  showSponsor(next);

  // Reset auto-timer so it counts from now
  if (state.sponsorTimer) {
    clearInterval(state.sponsorTimer);
    state.sponsorTimer = setInterval(() => {
      let n = state.currentSponsorIndex + 1;
      if (n >= state.shuffledSponsors.length) {
        state.shuffledSponsors = shuffleArray(SPONSORS);
        n = 0;
      }
      showSponsor(n);
    }, SPONSOR_INTERVAL);
  }
}

function startSponsorCarousel() {
  stopSponsorCarousel();
  // Shuffle sponsors each time carousel starts
  state.shuffledSponsors = shuffleArray(SPONSORS);
  state.currentSponsorIndex = 0;
  showSponsor(0);
  state.sponsorTimer = setInterval(() => {
    let next = state.currentSponsorIndex + 1;
    // Re-shuffle when we loop
    if (next >= state.shuffledSponsors.length) {
      state.shuffledSponsors = shuffleArray(SPONSORS);
      next = 0;
    }
    showSponsor(next);
  }, SPONSOR_INTERVAL);
}

function stopSponsorCarousel() {
  if (state.sponsorTimer) {
    clearInterval(state.sponsorTimer);
    state.sponsorTimer = null;
  }
}

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

function createParticles(container) {
  const colors = ['#c8102e', '#ffffff', '#c8102e', '#e0223f', '#ffffff'];
  const count = 12;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'jersey-particle';
    const angle = (Math.PI * 2 * i) / count;
    const distance = 60 + Math.random() * 80;
    const px = Math.cos(angle) * distance;
    const py = Math.sin(angle) * distance - 20;
    particle.style.cssText = `
      --px: ${px}px;
      --py: ${py}px;
      left: 50%;
      top: 50%;
      background: ${colors[i % colors.length]};
      animation-delay: ${Math.random() * 0.2}s;
      width: ${4 + Math.random() * 4}px;
      height: ${4 + Math.random() * 4}px;
    `;
    container.appendChild(particle);
    setTimeout(() => particle.remove(), 1200);
  }
}

function showJerseyAnimation(name, player) {
  // Show only the player's last name on the jersey
  const parts = name.split(' ');
  const lastName = parts[parts.length - 1];
  els.jerseyName.textContent = lastName;

  // Reset classes
  els.jerseyAnim.className = 'jersey-animation';

  // Remove old particles
  els.jerseyAnim.querySelectorAll('.jersey-particle').forEach(p => p.remove());

  // Force reflow
  void els.jerseyAnim.offsetWidth;

  // Entrance
  els.jerseyAnim.classList.add('active');

  // Spawn particles after entrance
  setTimeout(() => createParticles(els.jerseyAnim), 400);

  // After entrance, fly to the player's side
  setTimeout(() => {
    els.jerseyAnim.classList.remove('active');
    els.jerseyAnim.classList.add(player === 'p1' ? 'exit-left' : 'exit-right');

    setTimeout(() => {
      els.jerseyAnim.className = 'jersey-animation';
    }, 700);
  }, 1400);
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

  // Start on screensaver view
  setView('screensaver');
}

init();
