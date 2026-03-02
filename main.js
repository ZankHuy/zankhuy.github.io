/* ═══════════════════════════════════════════════════════════
   Nguyễn Danh Huy — Multimedia Producer Portfolio
   ═══════════════════════════════════════════════════════════ */

/* ═══════ i18n Translations ═══════ */
const T = {
  vi: {
    'nav.skills':    'Kĩ năng',
    'nav.gallery':   'Bộ sưu tập',
    'nav.workflow':  'Quy trình',
    'nav.about':     'Giới thiệu',
    'nav.contact':   'Liên hệ',

    'hero.tag':      'Nhà sản xuất Đa phương tiện',
    'hero.sub':      'Sản xuất Video &bull; AI Art &bull; Hậu kỳ',
    'hero.cta':      'Xem Gallery',
    'hero.cta2':     'Về tôi',
    'hero.scroll':   'Lướt xuống',

    'skills.label':  'Kĩ năng chính',
    'skills.heading':'Tôi Làm Gì',

    'skill.photo.t': 'Nhiếp ảnh',
    'skill.photo.d': 'Chụp ảnh sản phẩm, nhà cửa từ điện thoại đến máy ảnh chuyên nghiệp. Nắm vững ánh sáng, bố cục và kỹ thuật studio.',
    'skill.video.t': 'Sản xuất Video',
    'skill.video.d': 'Quay video chuyên nghiệp, sử dụng Gimbal, thiết bị chuyên dụng. Edit video qua DaVinci Resolve với đầy đủ pipeline.',
    'skill.drone.t': 'Drone & Flycam',
    'skill.drone.d': 'Sử dụng Drone, Fly cam để quay phim aerial. Kinh nghiệm bay và quay cảnh từ trên cao cho bất động sản, sự kiện.',
    'skill.ai.t':    'Tạo ảnh AI',
    'skill.ai.d':    'Sử dụng AI tools tạo hình ảnh chất lượng cao — product photography, portrait, kiến trúc và food styling.',
    'skill.color.t': 'Chỉnh màu',
    'skill.color.d': 'Chỉnh màu chuyên nghiệp cho video RAW/LOG. Color Correction và Color Grading trên DaVinci Resolve.',
    'skill.audio.t': 'Sản xuất Âm thanh',
    'skill.audio.d': 'Lồng ghép SFX, tune âm thanh Background music và Voice. Fairlight Audio trên DaVinci Resolve.',

    'gallery.label':   'Bộ sưu tập',
    'gallery.heading': 'Tác phẩm<br>AI Art',
    'gallery.all':     'Tất cả',
    'gallery.unit':    'tác phẩm',

    'wf.label':   'Quy trình',
    'wf.heading': 'Quy trình<br>Edit Video',
    'wf.sub':     'DaVinci Resolve Pipeline',
    'wf1.t': 'Quản lí Media',
    'wf1.d': 'Quản lí Media, import footage, tổ chức project và bins. Sắp xếp tài nguyên khoa học cho workflow hiệu quả.',
    'wf2.t': 'Cắt ghép cơ bản',
    'wf2.d': 'Cắt ghép cơ bản, sắp xếp timeline, sync audio. Xây dựng rough cut và structure cho toàn bộ project.',
    'wf3.t': 'Transitions & VFX',
    'wf3.d': 'Edit chi tiết, thêm Transitions, Text for voice, các VFX cơ bản đã tạo sẵn để nâng cao chất lượng visual.',
    'wf4.t': 'Fusion Compositing',
    'wf4.d': 'Custom compositing bằng Fusion tùy project — masking, tracking, green screen keying và node-based VFX.',
    'wf5.t': 'Color Correction & Grading',
    'wf5.d': 'Color Correction chuẩn hóa màu sắc, sau đó Color Grading tạo mood và look cinematic cho video.',
    'wf6.t': 'Fairlight Audio',
    'wf6.d': 'Tune âm thanh, lồng ghép SFX, mix background music và voice. Đảm bảo audio chất lượng broadcast.',
    'wf7.t': 'Đóng gói & Xuất bản',
    'wf7.d': 'Render và export với codec phù hợp. Deliver sản phẩm cuối cùng theo đúng spec của platform và client.',

    'extra.label':     'Kĩ năng phụ',
    'extra.heading':   'Kĩ năng bổ sung',
    'extra.web.t':     'Phát triển Web',
    'extra.web.d':     'Thiết kế và xây dựng website, portfolio, landing page với HTML/CSS/JS.',
    'extra.houdini.t': 'VFX — Houdini',
    'extra.houdini.d': 'Tạo hiệu ứng particle, fluid simulation và procedural VFX bằng Houdini.',
    'extra.unreal.t':  'Unreal Engine',
    'extra.unreal.d':  'Virtual Production, Performance Capture và real-time rendering với Unreal Engine.',
    'extra.ai.t':      'AI Infographic & Concept',
    'extra.ai.d':      'Tạo Infographic, ảnh Concept product bằng AI tools cho marketing và presentation.',

    'about.label':   'Giới thiệu',
    'about.heading': 'Nhà sản xuất<br>Đa phương tiện &amp;<br>AI Artist',
    'about.bio1':    'Sinh viên ngành Truyền thông số và Kỹ thuật đa phương tiện tại Đại học Bách Khoa Hà Nội (khóa đầu tiên). Đam mê sản xuất nội dung đa phương tiện, AI-generated art, và phát triển các sản phẩm truyền thông sáng tạo.',
    'about.bio2':    'Kinh nghiệm sử dụng AI tools để tạo ra hình ảnh chất lượng cao phục vụ mục đích thương mại và nghệ thuật — từ product photography, portrait, đến kiến trúc và food styling. Thành thạo DaVinci Resolve full pipeline từ edit đến delivery.',
    'stat.artworks': 'Tác phẩm AI',
    'stat.grad':     'Tốt nghiệp (dự kiến)',
    'stat.school':   'Bách Khoa Hà Nội',

    'footer.heading': 'Kết nối',
    'footer.sub':     'Sẵn sàng hợp tác cho các dự án sáng tạo',
    'footer.phone':   'Điện thoại',
    'footer.loc':     'Địa điểm',
    'footer.locVal':  'Hà Nội, Việt Nam',
    'footer.role':    'Nhà sản xuất Đa phương tiện',
  },
  en: {
    'nav.skills':    'Skills',
    'nav.gallery':   'Gallery',
    'nav.workflow':  'Workflow',
    'nav.about':     'About',
    'nav.contact':   'Contact',

    'hero.tag':      'Multimedia Producer',
    'hero.sub':      'Video Production &bull; AI Art &bull; Post-Production',
    'hero.cta':      'View Gallery',
    'hero.cta2':     'About Me',
    'hero.scroll':   'Scroll',

    'skills.label':  'Core Skills',
    'skills.heading':'What I Do',

    'skill.photo.t': 'Photography',
    'skill.photo.d': 'Product and real estate photography from phones to professional cameras. Proficient in lighting, composition and studio techniques.',
    'skill.video.t': 'Video Production',
    'skill.video.d': 'Professional video shooting with gimbal and specialized equipment. Full pipeline video editing in DaVinci Resolve.',
    'skill.drone.t': 'Drone & Aerial',
    'skill.drone.d': 'Drone and fly cam aerial cinematography. Experienced in high-altitude shooting for real estate and events.',
    'skill.ai.t':    'AI Art Generation',
    'skill.ai.d':    'Using AI tools to create high-quality images — product photography, portraits, architecture and food styling.',
    'skill.color.t': 'Color Grading',
    'skill.color.d': 'Professional color grading for RAW/LOG video. Color Correction and Color Grading in DaVinci Resolve.',
    'skill.audio.t': 'Audio Production',
    'skill.audio.d': 'SFX compositing, background music and voice tuning. Fairlight Audio in DaVinci Resolve.',

    'gallery.label':   'Gallery',
    'gallery.heading': 'AI Generated<br>Artworks',
    'gallery.all':     'All',
    'gallery.unit':    'artworks',

    'wf.label':   'Workflow',
    'wf.heading': 'Video Editing<br>Workflow',
    'wf.sub':     'DaVinci Resolve Pipeline',
    'wf1.t': 'Media Management',
    'wf1.d': 'Import footage, organize project and bins. Systematic resource management for an efficient workflow.',
    'wf2.t': 'Basic Edit',
    'wf2.d': 'Basic cutting, timeline arrangement, audio sync. Building a rough cut and structure for the entire project.',
    'wf3.t': 'Transitions & VFX',
    'wf3.d': 'Detailed editing, adding transitions, text-for-voice, and pre-made basic VFX to enhance visual quality.',
    'wf4.t': 'Fusion Compositing',
    'wf4.d': 'Custom compositing with Fusion per project — masking, tracking, green screen keying and node-based VFX.',
    'wf5.t': 'Color Correction & Grading',
    'wf5.d': 'Color Correction to normalize colors, then Color Grading to create cinematic mood and look.',
    'wf6.t': 'Fairlight Audio',
    'wf6.d': 'Audio tuning, SFX compositing, background music and voice mixing. Ensuring broadcast-quality audio.',
    'wf7.t': 'Package & Delivery',
    'wf7.d': 'Render and export with appropriate codecs. Delivering the final product per platform and client specs.',

    'extra.label':     'Additional Skills',
    'extra.heading':   'Also Skilled In',
    'extra.web.t':     'Web Development',
    'extra.web.d':     'Design and build websites, portfolios, landing pages with HTML/CSS/JS.',
    'extra.houdini.t': 'VFX — Houdini',
    'extra.houdini.d': 'Creating particle effects, fluid simulation and procedural VFX with Houdini.',
    'extra.unreal.t':  'Unreal Engine',
    'extra.unreal.d':  'Virtual Production, Performance Capture and real-time rendering with Unreal Engine.',
    'extra.ai.t':      'AI Infographic & Concept',
    'extra.ai.d':      'Creating infographics and concept product images with AI tools for marketing and presentations.',

    'about.label':   'About',
    'about.heading': 'Multimedia<br>Producer &amp;<br>AI Artist',
    'about.bio1':    'Student of Digital Communication and Multimedia Engineering at Hanoi University of Science and Technology (first cohort). Passionate about multimedia content production, AI-generated art, and creative media product development.',
    'about.bio2':    'Experienced in using AI tools to create high-quality images for commercial and artistic purposes — from product photography, portraits, to architecture and food styling. Proficient in DaVinci Resolve full pipeline from edit to delivery.',
    'stat.artworks': 'AI Artworks',
    'stat.grad':     'Expected Graduation',
    'stat.school':   'HUST, Hanoi',

    'footer.heading': "Let's Connect",
    'footer.sub':     'Ready to collaborate on creative projects',
    'footer.phone':   'Phone',
    'footer.loc':     'Location',
    'footer.locVal':  'Hanoi, Vietnam',
    'footer.role':    'Multimedia Producer',
  }
};

let currentLang = localStorage.getItem('lang') || 'vi';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const dict = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  const toggle = document.getElementById('langToggle');
  toggle.dataset.active = lang;
  toggle.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  document.title = lang === 'vi'
    ? 'Nguyễn Danh Huy | Nhà sản xuất Đa phương tiện'
    : 'Nguyễn Danh Huy | Multimedia Producer';

  const countEl = document.getElementById('galleryCount');
  if (countEl) {
    const num = countEl.textContent.match(/\d+/);
    if (num) countEl.textContent = num[0] + ' ' + dict['gallery.unit'];
  }
}

document.getElementById('langToggle').addEventListener('click', () => {
  setLang(currentLang === 'vi' ? 'en' : 'vi');
});

const ASSET_BASE = 'assets/AI%20Images/';

const PRODUCT_NUMS = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

const CATEGORIES = {
  product: {
    label: 'Product / TVC',
    files: PRODUCT_NUMS.map(n => ({
      full: `${ASSET_BASE}Product/AI%20TVC%20image/1%20(${n}).jpg`,
      thumb: `${ASSET_BASE}thumbs/1%20(${n}).jpg`
    })).concat([
      { full: `${ASSET_BASE}Product/AI%20TVC%20image/PuddingPreFinal.png`, thumb: `${ASSET_BASE}thumbs/PuddingPreFinal.jpg` },
      { full: `${ASSET_BASE}Product/AI%20TVC%20image/2312141.png`, thumb: `${ASSET_BASE}thumbs/2312141.jpg` },
      { full: `${ASSET_BASE}Product/AI%20TVC%20image/1421421.png`, thumb: `${ASSET_BASE}thumbs/1421421.jpg` },
      { full: `${ASSET_BASE}Product/AI%20TVC%20image/image_63c0025388e12bea.png`, thumb: `${ASSET_BASE}thumbs/image_63c0025388e12bea.jpg` },
      { full: `${ASSET_BASE}Product/AI%20TVC%20image/media-c2b2608c6e29154d.png`, thumb: `${ASSET_BASE}thumbs/media-c2b2608c6e29154d.jpg` },
      { full: `${ASSET_BASE}Product/AI%20TVC%20image/ChatGPT%20Image%20Feb%2026%2C%202026%2C%2009_38_32%20PM.png`, thumb: `${ASSET_BASE}thumbs/ChatGPT%20Image%20Feb%2026%2C%202026%2C%2009_38_32%20PM.jpg` },
    ])
  },
  realestate: {
    label: 'Real Estate',
    files: [
      { full: `${ASSET_BASE}Real%20Estate/AI%20Image/Gemini_Generated_Image_sra44sra44sra44s.png`, thumb: `${ASSET_BASE}thumbs/Gemini_Generated_Image_sra44sra44sra44s.jpg` },
      { full: `${ASSET_BASE}Real%20Estate/AI%20Image/Gemini_Generated_Image_bri6n4bri6n4bri6.png`, thumb: `${ASSET_BASE}thumbs/Gemini_Generated_Image_bri6n4bri6n4bri6.jpg` },
      { full: `${ASSET_BASE}Real%20Estate/AI%20Image/media-203656f859f34f1e.png`, thumb: `${ASSET_BASE}thumbs/media-203656f859f34f1e.jpg` },
      { full: `${ASSET_BASE}Real%20Estate/AI%20Image/ChatGPT%20Image%20Feb%2026%2C%202026%2C%2004_19_28%20PM.png`, thumb: `${ASSET_BASE}thumbs/ChatGPT%20Image%20Feb%2026%2C%202026%2C%2004_19_28%20PM.jpg` },
    ]
  },
  infographic: {
    label: 'Infographic',
    files: [
      { full: `${ASSET_BASE}Product/Infographic/1%20(3).jpg`, thumb: `${ASSET_BASE}thumbs/1%20(3).jpg` },
    ]
  },
  other: {
    label: 'Other',
    files: [
      { full: `${ASSET_BASE}Other%20Random/1%20(18).jpg`, thumb: `${ASSET_BASE}thumbs/1%20(18).jpg` },
      { full: `${ASSET_BASE}Other%20Random/1%20(23).jpg`, thumb: `${ASSET_BASE}thumbs/1%20(23).jpg` },
      { full: `${ASSET_BASE}Other%20Random/1%20(51).jpg`, thumb: `${ASSET_BASE}thumbs/1%20(51).jpg` },
      { full: `${ASSET_BASE}Other%20Random/1%20(52).jpg`, thumb: `${ASSET_BASE}thumbs/1%20(52).jpg` },
      { full: `${ASSET_BASE}Other%20Random/1%20(53).jpg`, thumb: `${ASSET_BASE}thumbs/1%20(53).jpg` },
      { full: `${ASSET_BASE}Other%20Random/1%20(54).jpg`, thumb: `${ASSET_BASE}thumbs/1%20(54).jpg` },
    ]
  }
};

const ALL_IMAGES = [];
Object.entries(CATEGORIES).forEach(([cat, data]) => {
  data.files.forEach(f => ALL_IMAGES.push({ ...f, category: cat, catLabel: data.label }));
});

function createImg(src, lazy) {
  const el = document.createElement('img');
  el.src = src;
  el.alt = 'AI Art';
  el.decoding = 'async';
  if (lazy) el.loading = 'lazy';
  return el;
}

/* ═══════ Hero Columns ═══════ */
(function buildHero() {
  const bg = document.getElementById('heroBg');
  if (!bg) return;
  const cols = [
    { imgs: [0,10,20,30,40,50], dur: 25, dir: 'up' },
    { imgs: [1,11,21,31,41,51], dur: 32, dir: 'down' },
    { imgs: [2,12,22,32,42,52], dur: 22, dir: 'up' },
    { imgs: [3,13,23,33,43,53], dur: 28, dir: 'down' },
    { imgs: [4,14,24,34,44,54], dur: 26, dir: 'up' },
    { imgs: [5,15,25,35,45,55], dur: 30, dir: 'down' },
  ];
  cols.forEach(c => {
    const col = document.createElement('div');
    col.className = `hero-col hero-col--${c.dir}`;
    col.style.setProperty('--dur', c.dur + 's');
    const srcs = c.imgs.map(i => ALL_IMAGES[i % ALL_IMAGES.length].thumb);
    [...srcs, ...srcs].forEach(s => col.appendChild(createImg(s, false)));
    bg.appendChild(col);
  });
})();

/* ═══════ Marquee ═══════ */
(function buildMarquee() {
  const rows = [
    { id: 'marquee1', start: 26, count: 12 },
    { id: 'marquee2', start: 38, count: 12 },
  ];
  rows.forEach(r => {
    const el = document.getElementById(r.id);
    if (!el) return;
    const inner = document.createElement('div');
    inner.className = 'marquee-inner';
    const srcs = [];
    for (let i = 0; i < r.count; i++) srcs.push(ALL_IMAGES[(r.start + i) % ALL_IMAGES.length].thumb);
    [...srcs, ...srcs].forEach(s => {
      const wrap = document.createElement('div');
      wrap.className = 'marquee-img';
      wrap.appendChild(createImg(s, true));
      inner.appendChild(wrap);
    });
    el.appendChild(inner);
  });
})();

/* ═══════ Gallery ═══════ */
let currentLb = 0;
let visibleImages = [...ALL_IMAGES];

(function buildGallery() {
  const grid = document.getElementById('galleryGrid');
  const count = document.getElementById('galleryCount');
  if (!grid) return;
  count.textContent = ALL_IMAGES.length + ' ' + T[currentLang]['gallery.unit'];

  ALL_IMAGES.forEach((img, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item reveal';
    item.dataset.category = img.category;
    item.dataset.index = i;

    const image = createImg(img.thumb, true);
    item.appendChild(image);

    const catTag = document.createElement('span');
    catTag.className = 'gallery-cat';
    catTag.textContent = img.catLabel;
    item.appendChild(catTag);

    item.addEventListener('click', () => {
      const visIdx = visibleImages.indexOf(img);
      openLightbox(visIdx >= 0 ? visIdx : 0);
    });
    grid.appendChild(item);
  });
})();

/* ═══════ Gallery Filters ═══════ */
(function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  const count = document.getElementById('galleryCount');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (filter === 'all') {
        visibleImages = [...ALL_IMAGES];
      } else {
        visibleImages = ALL_IMAGES.filter(img => img.category === filter);
      }

      items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });

      count.textContent = visibleImages.length + ' ' + T[currentLang]['gallery.unit'];
    });
  });
})();

/* ═══════ Lightbox ═══════ */
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCounter = document.getElementById('lbCounter');

function openLightbox(i) {
  currentLb = i;
  lb.classList.add('active', 'lb-loading');
  lbImg.onload = () => lb.classList.remove('lb-loading');
  lbImg.src = visibleImages[i].full;
  lbCounter.textContent = `${i + 1} / ${visibleImages.length}`;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lb.classList.remove('active');
  document.body.style.overflow = '';
}

function lbNavigate(dir) {
  currentLb = (currentLb + dir + visibleImages.length) % visibleImages.length;
  lb.classList.add('lb-loading');
  lbImg.onload = () => lb.classList.remove('lb-loading');
  lbImg.src = visibleImages[currentLb].full;
  lbCounter.textContent = `${currentLb + 1} / ${visibleImages.length}`;
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => lbNavigate(-1));
document.getElementById('lbNext').addEventListener('click', () => lbNavigate(1));
lb.addEventListener('click', e => {
  if (e.target === lb || e.target.classList.contains('lb-img-wrap')) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lbNavigate(-1);
  if (e.key === 'ArrowRight') lbNavigate(1);
});

/* Touch swipe for lightbox */
let touchStartX = 0;
lb.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
lb.addEventListener('touchend', e => {
  const diff = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(diff) > 50) {
    lbNavigate(diff > 0 ? -1 : 1);
  }
}, { passive: true });

/* ═══════ Nav ═══════ */
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
let lastY = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.classList.toggle('nav--solid', y > 80);
  nav.classList.toggle('nav--hidden', y > lastY && y > 400);
  lastY = y;
}, { passive: true });

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ═══════ Smooth Scroll ═══════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ═══════ Scroll Reveal ═══════ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('revealed');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
  revealObserver.observe(el);
});

/* ═══════ Counter Animation ═══════ */
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      if (isNaN(target)) return;
      let current = 0;
      const increment = target / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = target + '+';
          clearInterval(timer);
        } else {
          el.textContent = Math.ceil(current) + '+';
        }
      }, 16);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

/* ═══════ Hero Parallax ═══════ */
const heroBg = document.getElementById('heroBg');
const heroSection = document.getElementById('hero');
if (heroSection && heroBg) {
  heroSection.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    heroBg.style.transform = `translate(${x}px, ${y}px)`;
  });
}

/* ═══════ Loader ═══════ */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('loaded'), 400);
});

/* ═══════ Year ═══════ */
document.getElementById('y').textContent = new Date().getFullYear();

/* ═══════ Apply saved language ═══════ */
setLang(currentLang);
