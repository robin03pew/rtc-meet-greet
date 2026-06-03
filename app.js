/* ================================================================
   REGION TULLNERFELD CUP — Application Logic
   ================================================================ */

// ---- Austrian National Team Squad (WM 2026) ----

const SQUAD = [
  { number: 1, name: "Alexander Schlager" },
  { number: 2, name: "David Affengruber" },
  { number: 3, name: "Kevin Danso" },
  { number: 4, name: "Xaver Schlager" },
  { number: 5, name: "Stefan Posch" },
  { number: 6, name: "Nicolas Seiwald" },
  { number: 7, name: "Marko Arnautovic" },
  { number: 8, name: "David Alaba" },
  { number: 9, name: "Marcel Sabitzer" },
  { number: 10, name: "Florian Grillitsch" },
  { number: 11, name: "Michael Gregoritsch" },
  { number: 12, name: "Florian Wiegele" },
  { number: 13, name: "Patrick Pentz" },
  { number: 14, name: "Sasa Kalajdzic" },
  { number: 15, name: "Philipp Lienhart" },
  { number: 16, name: "Phillipp Mwene" },
  { number: 17, name: "Carney Chukwuemeka" },
  { number: 18, name: "Romano Schmid" },
  { number: 19, name: "Christoph Baumgartner" },
  { number: 20, name: "Konrad Laimer" },
  { number: 21, name: "Patrick Wimmer" },
  { number: 22, name: "Alexander Prass" },
  { number: 23, name: "Marco Friedl" },
  { number: 24, name: "Paul Wanner" },
  { number: 25, name: "Michael Svoboda" },
  { number: 26, name: "Alessandro Schöpf" }
];

// ---- Team Data for Group Draw (from vereine folder) ----

const TEAMS = [
  { name: "FC Tulln", logo: "assets/vereine/FC Tulln.png" },
  { name: "SC Sitzenberg-Reidling", logo: "assets/vereine/SC Sitzenberg Reidling.png" },
  { name: "SK Lugus Tulbing", logo: "assets/vereine/SK Lugus Tulbing.png" },
  { name: 'SV "Donau" Langenlebarn', logo: "assets/vereine/SV Langenlebarn.png" },
  { name: "SV hb24 Viktoria Rust", logo: "assets/vereine/SV Rust.png" },
  { name: "SV Langenrohr", logo: "assets/vereine/SV Langenrohr.png" },
  { name: "SV Sieghartskirchen", logo: "assets/vereine/SV Sieghartskirchen.png" },
  { name: "SV Würmla", logo: "assets/vereine/SV Würmla Circle.png" },
  { name: "SV Zwentendorf", logo: "assets/vereine/SV Zwentendorf.png" },
  { name: "USC Muckendorf / Zeiselmauer", logo: "assets/vereine/USC Muckendorf.png" },
  { name: "USV Atzenbrugg-Heiligeneich", logo: "assets/vereine/USV-Atzenbrugg-Heiligeneich_whitebg.png" },
  { name: "USV St. Andrä Wördern", logo: "assets/vereine/SV_St_Andrae_Woerdern_Logo.png" },
];

// ---- Sponsor Data (from assets/sponsors/) ----
// Each entry: { logo, name, category }
// We skip .psd, .pdf, and non-image files; use .png/.jpg/.svg/.avif only

const SPONSORS = [
  // Kat 1 — Main sponsors
  { logo: "assets/sponsors/kat1/11team_puma.png", name: "11teamsports / Puma" },
  { logo: "assets/sponsors/kat1/baumgartner_mitsubishi.png", name: "Baumgartner Mitsubishi" },
  { logo: "assets/sponsors/kat1/logo_region_tullnerfeld_4c.png", name: "Region Tullnerfeld" },
  { logo: "assets/sponsors/kat1/rauch_logo_schrift.png", name: "Rauch" },
  { logo: "assets/sponsors/kat1/trb_hialsorb.png", name: "TRB Hialsorb" },
  // Kat 2
  { logo: "assets/sponsors/kat2/Glosara_Logo_transparent.png", name: "Glosara" },
  { logo: "assets/sponsors/kat2/Hummer_LOGO.jpg", name: "Hummer" },
  { logo: "assets/sponsors/kat2/NV_Logo_ab 2023_hoch_Offset_CMYK_transparent.png", name: "Niederösterreichische Versicherung" },
  { logo: "assets/sponsors/kat2/Prachner_Logo_RZ.png", name: "Prachner" },
  { logo: "assets/sponsors/kat2/VB_Logo_blau_digital (1)_transparent.png", name: "Volksbank" },
  { logo: "assets/sponsors/kat2/WB Logo 4C_transparent.png", name: "Wirtschaftsbund" },
  { logo: "assets/sponsors/kat2/im86-Logo_RGBsquare_color_3x_transparent.png", name: "im86" },
  // Kat 3
  { logo: "assets/sponsors/kat3/AD_MF-LOGO-red-grey_Kombination_2022.png", name: "AD MF" },
  { logo: "assets/sponsors/kat3/greiner.png", name: "Greiner" },
  { logo: "assets/sponsors/kat3/kutech_logo_4c.png", name: "Kutech" },
  { logo: "assets/sponsors/kat3/logo sonnenschutzwelt_padded.png", name: "Sonnenschutzwelt" },
  { logo: "assets/sponsors/kat3/ltt 01_Landtechnik_Tullnerfeld_LogoName_padded.jpg", name: "Landtechnik Tullnerfeld" },
  { logo: "assets/sponsors/kat3/tulln 01_D52.006.1_Bild-Wortmarke_V1_4c.png", name: "Stadt Tulln" },
  { logo: "assets/sponsors/kat3/tulln 02_Tulln_ab4cm.png", name: "Stadt Tulln ab 4cm" },
  { logo: "assets/sponsors/kat3/tulln 03_Logo TullnEnergie.png", name: "Tulln Energie" },
  { logo: "assets/sponsors/kat3/z01_NÖN Logo 2021.jpg", name: "NÖN" },
  { logo: "assets/sponsors/kat3/z02_ligaportal-logo.png", name: "Ligaportal" },
  { logo: "assets/sponsors/kat3/z03_Logo_MeinBezirk_pos_CMYK.jpg", name: "MeinBezirk" },
  // Kat 4
  { logo: "assets/sponsors/kat4/JB Hydraulik.png", name: "JB Hydraulik" },
  { logo: "assets/sponsors/kat4/LEMA20LOGO.avif", name: "LEMA" },
  { logo: "assets/sponsors/kat4/Logo_Glanzparaden_transparent.png", name: "Glanzparaden" },
  { logo: "assets/sponsors/kat4/Type Hörmann TTZA - CMYK.png", name: "Hörmann" },
  { logo: "assets/sponsors/kat4/Weichberger_Logo_hoch.jpg", name: "Weichberger" },
  { logo: "assets/sponsors/kat4/bergerschinken-logo-2.svg", name: "Berger Schinken" },
  { logo: "assets/sponsors/kat4/etschuster_transparent.png", name: "Etschuster" },
  { logo: "assets/sponsors/kat4/logo-stiga.svg", name: "Stiga" },
  { logo: "assets/sponsors/kat4/thomes.png", name: "Thomes" },
  // Kat 5
  { logo: "assets/sponsors/kat5/02_Logo_transparent.png", name: "Sponsor 02" },
  { logo: "assets/sponsors/kat5/Artboard 2 copy 6@3000x.png", name: "Sponsor Artboard" },
  { logo: "assets/sponsors/kat5/Ds-Url-SignetRGBDkl-Blau Kopie.png", name: "Donau Versicherung" },
  { logo: "assets/sponsors/kat5/Logo Weingut_transparent.png", name: "Weingut" },
  { logo: "assets/sponsors/kat5/Logo_Schatti_JPG_transparent.png", name: "Schatti" },
  { logo: "assets/sponsors/kat5/akyoung.png", name: "AK Young" },
  { logo: "assets/sponsors/kat5/bergerschinken-logo-2.png", name: "Berger Schinken" },
  { logo: "assets/sponsors/kat5/cb-marketing-logo-1080x1080.jpg", name: "CB Marketing" },
  { logo: "assets/sponsors/kat5/ra-logo_transparent.png", name: "RA-Logo" },
  { logo: "assets/sponsors/kat5/schiedsrichter.png", name: "Schiedsrichter" },
  { logo: "assets/sponsors/kat5/skyline.png", name: "Skyline" },
  { logo: "assets/sponsors/kat5/stoerchle.png", name: "Störchle" },
];

const SPONSOR_INTERVAL = 8000; // 8 seconds per sponsor

// ---- Photos Data (from assets/photos/) ----
// We pre-classify photos: isHorizontal = true for horizontal, false for vertical.
const PHOTO_ITEMS = [
  { url: "assets/photos/IMG_6483.JPG", isHorizontal: true },
  { url: "assets/photos/IMG_6630.jpg", isHorizontal: false },
  { url: "assets/photos/IMG_6798.jpg", isHorizontal: false },
  { url: "assets/photos/IMG_6861.jpg", isHorizontal: false },
  { url: "assets/photos/IMG_6926.jpg", isHorizontal: false },
  { url: "assets/photos/IMG_7162.JPG", isHorizontal: true },
  { url: "assets/photos/b1b86d9e-9ee2-4d58-a15a-19258047fe83.JPG", isHorizontal: false },
  { url: "assets/photos/d17c6123-416c-46e4-b04b-4f23b13b34f6.JPG", isHorizontal: false },
  { url: "assets/photos/260128_tc_kickoff-1354574.jpg", isHorizontal: true },
  { url: "assets/photos/260128_tc_kickoff-1354730.jpg", isHorizontal: true },
  { url: "assets/photos/260128_tc_kickoff-1354853.jpg", isHorizontal: true },
  { url: "assets/photos/260128_tc_kickoff-1354926.jpg", isHorizontal: true },
  { url: "assets/photos/WhatsApp Image 2026-03-14 at 17.15.22.jpeg", isHorizontal: false },
  { url: "assets/photos/WhatsApp Image 2026-04-14 at 13.45.50.jpeg", isHorizontal: false }
];

const PHOTO_INTERVAL = 16000; // 16 seconds (double the sponsor duration of 8s)

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
  // Photo carousel
  currentPhotoIndex: 0,
  photoTimer: null,
  photoSlides: [],
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
  jerseyNumber: $('jersey-number'),
  groupsGrid: $('groups-grid'),
  sponsorLogoWrapper: $('sponsor-logo-wrapper'),
  sponsorLabel: $('sponsor-label'),
  photoWrapper: $('photo-wrapper'),
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

  // Start/stop sponsor and photo carousels
  if (viewName === 'screensaver') {
    startSponsorCarousel();
    startPhotoCarousel();
  } else {
    stopSponsorCarousel();
    stopPhotoCarousel();
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

  // Export groups as Instagram image with Shift+J
  if (e.key === 'J' && e.shiftKey) {
    e.preventDefault();
    exportGroupsAsImage();
    return;
  }

  // Randomly fill groups with Shift+R (for testing)
  if (e.key === 'R' && e.shiftKey) {
    e.preventDefault();
    fillGroupsRandomly();
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

// ---- Photo Carousel ----

function preparePhotoSlides() {
  const horizontals = PHOTO_ITEMS.filter(item => item.isHorizontal).map(item => item.url);
  const verticals = PHOTO_ITEMS.filter(item => !item.isHorizontal).map(item => item.url);

  const shuffledHorizontals = shuffleArray(horizontals);
  const shuffledVerticals = shuffleArray(verticals);

  const slides = [];

  // Add all horizontals as individual slides (make them big)
  shuffledHorizontals.forEach(url => {
    slides.push({
      type: 'horizontal',
      photos: [url]
    });
  });

  // Pair up verticals to display 2 side-by-side
  for (let i = 0; i < shuffledVerticals.length; i += 2) {
    if (i + 1 < shuffledVerticals.length) {
      slides.push({
        type: 'vertical-pair',
        photos: [shuffledVerticals[i], shuffledVerticals[i + 1]]
      });
    } else {
      // Odd vertical: pair with a random distinct one if possible, or repeat itself
      if (shuffledVerticals.length > 1) {
        let randomVertical = shuffledVerticals[Math.floor(Math.random() * shuffledVerticals.length)];
        while (randomVertical === shuffledVerticals[i]) {
          randomVertical = shuffledVerticals[Math.floor(Math.random() * shuffledVerticals.length)];
        }
        slides.push({
          type: 'vertical-pair',
          photos: [shuffledVerticals[i], randomVertical]
        });
      } else {
        slides.push({
          type: 'vertical-pair',
          photos: [shuffledVerticals[i], shuffledVerticals[i]]
        });
      }
    }
  }

  // Shuffle the slides so horizontals and vertical pairs are mixed
  return shuffleArray(slides);
}

function showPhoto(index) {
  const slide = state.photoSlides[index];
  if (!slide) return;

  state.currentPhotoIndex = index;

  // Fade out current content (any foreground or background images)
  const oldWrapper = els.photoWrapper;
  const currentImgs = oldWrapper.querySelectorAll('img');
  currentImgs.forEach(img => {
    img.style.animation = 'photo-fade-out 0.4s ease forwards';
  });

  setTimeout(() => {
    // Clone the wrapper to fully reset animation and progress bar
    const newWrapper = oldWrapper.cloneNode(false);
    newWrapper.style.setProperty('--photo-duration', PHOTO_INTERVAL + 'ms');

    if (slide.type === 'horizontal') {
      newWrapper.classList.remove('photo-wrapper--vertical-pair');

      const photoUrl = slide.photos[0];

      // Background blurred image
      const bgImg = document.createElement('img');
      bgImg.src = photoUrl;
      bgImg.className = 'photo-bg';
      bgImg.draggable = false;
      newWrapper.appendChild(bgImg);

      // Foreground contained image
      const fgImg = document.createElement('img');
      fgImg.src = photoUrl;
      fgImg.className = 'photo-fg';
      fgImg.draggable = false;
      newWrapper.appendChild(fgImg);
    } else {
      // vertical-pair
      newWrapper.classList.add('photo-wrapper--vertical-pair');

      slide.photos.forEach(photoUrl => {
        const half = document.createElement('div');
        half.className = 'photo-half';

        // Background blurred image
        const bgImg = document.createElement('img');
        bgImg.src = photoUrl;
        bgImg.className = 'photo-bg';
        bgImg.draggable = false;
        half.appendChild(bgImg);

        // Foreground contained image
        const fgImg = document.createElement('img');
        fgImg.src = photoUrl;
        fgImg.className = 'photo-fg';
        fgImg.draggable = false;
        half.appendChild(fgImg);

        newWrapper.appendChild(half);
      });
    }

    oldWrapper.parentNode.replaceChild(newWrapper, oldWrapper);
    els.photoWrapper = newWrapper;
  }, 400);
}

function startPhotoCarousel() {
  stopPhotoCarousel();
  state.photoSlides = preparePhotoSlides();
  state.currentPhotoIndex = 0;
  showPhoto(0);
  state.photoTimer = setInterval(() => {
    let next = state.currentPhotoIndex + 1;
    if (next >= state.photoSlides.length) {
      state.photoSlides = preparePhotoSlides();
      next = 0;
    }
    showPhoto(next);
  }, PHOTO_INTERVAL);
}

function stopPhotoCarousel() {
  if (state.photoTimer) {
    clearInterval(state.photoTimer);
    state.photoTimer = null;
  }
}

// ---- Autocomplete Logic ----

function getAvailableNames() {
  return SQUAD.map(p => p.name).filter(n => !state.usedNames.has(n));
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

  // Match by checking if every part of the user's query matches the start of SOME word in the player's name
  const queryParts = query.split(' ').filter(q => q.length > 0);
  const matches = available.filter(n => {
    const lower = n.toLowerCase();
    const words = lower.split(' ');
    return queryParts.every(part => {
      return words.some(w => w.startsWith(part));
    });
  });

  if (matches.length === 1) {
    const match = matches[0];
    const suggestion = buildSuggestionText(match, query);

    // Show ghost text that continues from what the user typed
    if (suggestion.toLowerCase().startsWith(query)) {
      els.ghost.textContent = raw + suggestion.substring(raw.length);
      els.hint.textContent = 'Tab oder Enter zum Bestätigen';
    } else {
      els.ghost.textContent = ''; // Hide ghost to prevent visual overlap
      els.hint.textContent = `${suggestion} (Tab/Enter)`;
    }

    state.selectedName = match;
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

  // Find the player's number
  const playerObj = SQUAD.find(p => p.name === name);
  const number = playerObj ? playerObj.number : '';

  els.jerseyName.textContent = lastName;
  if (els.jerseyNumber) els.jerseyNumber.textContent = number;

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
        ${logoSrc ? `<div class="slot-team-badge-container"><img class="slot-team-badge" src="${logoSrc}" alt="${teamName}" /></div>` : ''}
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

// ---- Instagram Export (Shift+J) ----

function buildExportContent() {
  const exportGroups = document.getElementById('export-groups');
  exportGroups.innerHTML = '';

  const groupKeys = ['A', 'B', 'C', 'D'];

  groupKeys.forEach(letter => {
    const card = document.createElement('div');
    card.className = 'export-group-card';

    let teamsHTML = '';
    for (let i = 0; i < 3; i++) {
      const teamName = state.groups[letter][i];
      const team = teamName ? findTeam(teamName) : null;

      if (team) {
        teamsHTML += `
          <div class="export-team-entry">
            <div class="export-logo-container">
              <img src="${team.logo}" alt="${teamName}" />
            </div>
            <span class="export-team-name">${teamName}</span>
          </div>
        `;
      } else {
        teamsHTML += `
          <div class="export-team-entry">
            <div class="export-logo-container export-logo-container--empty"></div>
            <span class="export-team-name" style="color: #c8c8c8;">—</span>
          </div>
        `;
      }
    }

    card.innerHTML = `
      <div class="export-group-header">
        <span class="export-group-label">GRUPPE ${letter}</span>
      </div>
      <div class="export-logos-row">${teamsHTML}</div>
    `;

    exportGroups.appendChild(card);
  });
}

function exportGroupsAsImage() {
  // Check if html2canvas is available
  if (typeof html2canvas === 'undefined') {
    console.error('html2canvas not loaded');
    return;
  }

  // Build the export content from current state
  buildExportContent();

  const container = document.getElementById('export-container');

  // Move container onscreen but behind everything (active views have z-index:10)
  // Do NOT set opacity:0 — html2canvas needs the element fully visible to capture it
  container.style.top = '0';
  container.style.left = '0';
  container.style.zIndex = '-1';

  // Double-rAF ensures the browser has fully painted the container
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      html2canvas(container, {
        width: 1080,
        height: 1350,
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#f5f5f5',
        logging: false,
      }).then(canvas => {
        // Move container back offscreen
        container.style.top = '-99999px';
        container.style.left = '-99999px';
        container.style.zIndex = '';

        // Export as PNG via Blob
        canvas.toBlob((blob) => {
          if (!blob) {
            console.error('Export failed: Could not create blob from canvas.');
            return;
          }
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          const now = new Date();
          const dateStr = now.toISOString().slice(0, 10);
          const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, '-');
          link.download = `RTC_Gruppenauslosung_${dateStr}_${timeStr}.png`;
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);

          // Visual feedback: white flash
          const flash = document.createElement('div');
          flash.className = 'export-flash';
          document.body.appendChild(flash);
          setTimeout(() => flash.remove(), 600);

          console.log('Export saved as PNG (high resolution)');
        }, 'image/png');
      }).catch(err => {
        // Move container back offscreen on error
        container.style.top = '-99999px';
        container.style.left = '-99999px';
        container.style.zIndex = '';
        console.error('Export failed:', err);
      });
    });
  });
}

function fillGroupsRandomly() {
  // Clear any existing groups assignment
  state.assignedTeams.clear();
  const groupKeys = ['A', 'B', 'C', 'D'];
  groupKeys.forEach(letter => {
    state.groups[letter] = [null, null, null];
  });

  // Shuffle teams using Fisher-Yates
  const shuffledTeams = shuffleArray(TEAMS);

  // Assign them
  let teamIdx = 0;
  groupKeys.forEach(letter => {
    for (let i = 0; i < 3; i++) {
      if (teamIdx < shuffledTeams.length) {
        const team = shuffledTeams[teamIdx];
        state.groups[letter][i] = team.name;
        state.assignedTeams.add(team.name);
        teamIdx++;
      }
    }
  });

  // Update DOM slots
  groupKeys.forEach(letter => {
    for (let i = 0; i < 3; i++) {
      const slot = document.getElementById(`slot-${letter}-${i}`);
      if (!slot) continue;

      const teamName = state.groups[letter][i];
      const team = teamName ? findTeam(teamName) : null;
      if (team) {
        slot.innerHTML = `
          <span class="slot-number">${i + 1}</span>
          <div class="slot-filled" data-group="${letter}" data-index="${i}">
            <div class="slot-team-badge-container">
              <img class="slot-team-badge" src="${team.logo}" alt="${teamName}" />
            </div>
            <span class="slot-team-name">${teamName}</span>
            <span class="slot-change-icon" title="Ändern">✎</span>
          </div>
        `;
      } else {
        slot.innerHTML = `
          <span class="slot-number">${i + 1}</span>
          <select data-group="${letter}" data-index="${i}">
            <option value="">Verein wählen…</option>
          </select>
        `;
      }
    }
  });

  refreshAllDropdowns();
}

// ---- Initialize ----

function init() {
  buildGroupDraw();
  updateButtons();

  // Start on screensaver view
  setView('screensaver');
}

init();
