var THEMES = {
    nord: {
        name: 'Nord',
        swatches: ['#3b4252', '#5e81ac', '#a3be8c', '#bf616a', '#eceff4'],
        vantaColor: 0x5e81ac, vantaBg: 0x3b4252,
        vars: {
            '--bg': '#3b4252', '--bg-deep': '#2e3440', '--bg-deeper': '#242933',
            '--border': '#5e81ac', '--text': '#eceff4', '--text-dim': '#e5e9f0',
            '--text-muted': '#d8dee9', '--accent': '#5e81ac', '--green': '#a3be8c', '--red': '#bf616a',
            '--surface': 'rgba(46,52,64,0.3)', '--border-glass': 'rgba(94,129,172,0.35)',
            '--accent-hover': '#81a1c1', '--error': '#bf616a',
            '--tab-active-bg': '#434c5e', '--text-on-active': '#eceff4'
        }
    },
//    'rose-pine': {
//        name: 'Rose Pine',
//        swatches: ['#faf4ed', '#907aa9', '#56949f', '#b4637a', '#464261'],
//        vantaColor: 0xebbcba, vantaBg: 0xfaf4ed,
//        vars: {
//            '--bg': '#faf4ed', '--bg-deep': '#f2e9e1', '--bg-deeper': '#ebe4dd',
//            '--border': '#cecacd', '--text': '#464261', '--text-dim': '#797593',
//            '--text-muted': '#9893a5', '--accent': '#ea9a97', '--green': '#56949f', '--red': '#b4637a',
//            '--surface': 'rgba(242,233,225,0.3)', '--border-glass': 'rgba(144,122,169,0.35)',
//            '--accent-hover': '#ebbcba', '--error': '#b4637a',
//            '--tab-active-bg': '#e8ddd5', '--text-on-active': '#464261'
//        }
//    },
    'catppuccin-latte': {
        name: 'C. Latte',
        swatches: ['#eff1f5', '#8839ef', '#40a02b', '#d20f39', '#4c4f69'],
        vantaColor: 0x8839ef, vantaBg: 0xeff1f5,
        vars: {
            '--bg': '#eff1f5', '--bg-deep': '#e6e9ef', '--bg-deeper': '#dce0e8',
            '--border': '#ccd0da', '--text': '#4c4f69', '--text-dim': '#5c5f77',
            '--text-muted': '#6c6f85', '--accent': '#8839ef', '--green': '#40a02b', '--red': '#d20f39',
            '--surface': 'rgba(230,233,239,0.3)', '--border-glass': 'rgba(136,57,239,0.35)',
            '--accent-hover': '#9d53f0', '--error': '#d20f39',
            '--tab-active-bg': '#ccd0da', '--text-on-active': '#4c4f69'
        }
    },
    'catppuccin-frappe': {
        name: 'C. Frappe',
        swatches: ['#303446', '#ca9ee6', '#a6d189', '#e78284', '#c6d0f5'],
        vantaColor: 0xca9ee6, vantaBg: 0x303446,
        vars: {
            '--bg': '#303446', '--bg-deep': '#292c3c', '--bg-deeper': '#232634',
            '--border': '#51576d', '--text': '#c6d0f5', '--text-dim': '#b5bfe2',
            '--text-muted': '#a5adce', '--accent': '#ca9ee6', '--green': '#a6d189', '--red': '#e78284',
            '--surface': 'rgba(41,44,60,0.3)', '--border-glass': 'rgba(202,158,230,0.35)',
            '--accent-hover': '#d6b5ee', '--error': '#e78284',
            '--tab-active-bg': '#414559', '--text-on-active': '#c6d0f5'
        }
    },
    'catppuccin-macchiato': {
        name: 'C. Macchiato',
        swatches: ['#24273a', '#c6a0f6', '#a6da95', '#ed8796', '#cad3f5'],
        vantaColor: 0xc6a0f6, vantaBg: 0x24273a,
        vars: {
            '--bg': '#24273a', '--bg-deep': '#1e2030', '--bg-deeper': '#181926',
            '--border': '#494d64', '--text': '#cad3f5', '--text-dim': '#b8c0e0',
            '--text-muted': '#a5adcb', '--accent': '#c6a0f6', '--green': '#a6da95', '--red': '#ed8796',
            '--surface': 'rgba(30,32,48,0.3)', '--border-glass': 'rgba(198,160,246,0.35)',
            '--accent-hover': '#d3b8f8', '--error': '#ed8796',
            '--tab-active-bg': '#363a4f', '--text-on-active': '#cad3f5'
        }
    },
    'catppuccin-mocha': {
        name: 'C .Mocha',
        swatches: ['#1e1e2e', '#cba6f7', '#a6e3a1', '#f38ba8', '#cdd6f4'],
        vantaColor: 0xcba6f7, vantaBg: 0x1e1e2e,
        vars: {
            '--bg': '#1e1e2e', '--bg-deep': '#181825', '--bg-deeper': '#11111b',
            '--border': '#45475a', '--text': '#cdd6f4', '--text-dim': '#bac2de',
            '--text-muted': '#a6adc8', '--accent': '#cba6f7', '--green': '#a6e3a1', '--red': '#f38ba8',
            '--surface': 'rgba(24,24,37,0.3)', '--border-glass': 'rgba(203,166,247,0.35)',
            '--accent-hover': '#d8befc', '--error': '#f38ba8',
            '--tab-active-bg': '#313244', '--text-on-active': '#cdd6f4'
        }
    },
    'everforest': {
        name: 'Everforest',
        swatches: ['#272E33', '#A7C080', '#7FBBB3', '#E67E80', '#D3C6AA'],
        vantaColor: 0xA7C080, vantaBg: 0x272E33,
        vars: {
            '--bg': '#272E33', '--bg-deep': '#1E2326', '--bg-deeper': '#1A1F22',
            '--border': '#414B50', '--text': '#D3C6AA', '--text-dim': '#9DA9A0',
            '--text-muted': '#859289', '--accent': '#A7C080', '--green': '#83C092', '--red': '#E67E80',
            '--surface': 'rgba(30,35,38,0.3)', '--border-glass': 'rgba(167,192,128,0.35)',
            '--accent-hover': '#B5CC95', '--error': '#E67E80',
            '--tab-active-bg': '#374145', '--text-on-active': '#D3C6AA'
        }
    }
};

function applyTheme(id, reload) {
    var theme = THEMES[id];
    if (!theme) return;
    var root = document.documentElement.style;
    var keys = Object.keys(theme.vars);
    for (var i = 0; i < keys.length; i++) {
        root.setProperty(keys[i], theme.vars[keys[i]]);
    }
    localStorage.setItem('theme', id);
    if (window._vantaEffect) {
        window._vantaEffect.setOptions({ color: theme.vantaColor, backgroundColor: theme.vantaBg });
    }
    var cards = document.querySelectorAll('.theme-card');
    for (var j = 0; j < cards.length; j++) {
        cards[j].classList.toggle('active', cards[j].dataset.theme === id);
    }
    if (reload) {
        if (window.self !== window.top) {
            window.parent.postMessage({ type: 'theme-change' }, '*');
        } else {
            window.location.href = window.location.href;
        }
    }
}

function getVantaColors() {
    var t = THEMES[localStorage.getItem('theme')] || THEMES['everforest'];
    return { color: t.vantaColor, backgroundColor: t.vantaBg };
}

(function() {
    var saved = localStorage.getItem('theme');
    applyTheme(saved && THEMES[saved] ? saved : 'everforest');
})();
