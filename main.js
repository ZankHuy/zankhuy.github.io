/* ═══════════════════════════════════════════════════════════
   Nguyễn Danh Huy — Multimedia Producer Portfolio
   ═══════════════════════════════════════════════════════════ */

/* ═══════ i18n Translations ═══════ */
const T = {
  vi: {
    'nav.skills':    'Kĩ năng',
    'nav.gallery':   'Bộ sưu tập',
    'nav.videos':    'Video',
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

    'gallery.label':    'Bộ sưu tập',
    'gallery.heading':  'Tác phẩm<br>AI Art',
    'gallery.all':      'Tất cả',
    'gallery.unit':     'tác phẩm',
    'gallery.loadMore': 'Xem thêm',

    'videos.label':        'Tác phẩm',
    'videos.heading':      'Video của tôi',
    'videos.clips_label':  'AI Tạo ra',
    'videos.clips_heading':'AI Image-to-Video Clips',

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
    'wf6.t': 'Đóng gói & Xuất bản',
    'wf6.d': 'Render và export với codec phù hợp. Deliver sản phẩm cuối cùng theo đúng spec của platform và client.',

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
    'nav.videos':    'Videos',
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

    'gallery.label':    'Gallery',
    'gallery.heading':  'AI Generated<br>Artworks',
    'gallery.all':      'All',
    'gallery.unit':     'artworks',
    'gallery.loadMore': 'Load More',

    'videos.label':        'My Work',
    'videos.heading':      'My Videos',
    'videos.clips_label':  'AI Generated',
    'videos.clips_heading':'AI Image-to-Video Clips',

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
    'wf6.t': 'Package & Delivery',
    'wf6.d': 'Render and export with appropriate codecs. Delivering the final product per platform and client specs.',

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

  updateGalleryCount();
}

document.getElementById('langToggle').addEventListener('click', () => {
  setLang(currentLang === 'vi' ? 'en' : 'vi');
});

const ALL_IMAGES = [
  { full: 'assets/AI%20Images/Products/1%20%281%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%281%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2810%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2810%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2811%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2811%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2812%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2812%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2813%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2813%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2814%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2814%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2816%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2816%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2817%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2817%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2819%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2819%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%282%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%282%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2820%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2820%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2821%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2821%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2822%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2822%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2824%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2824%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2825%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2825%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2826%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2826%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2827%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2827%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2828%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2828%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2829%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2829%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2830%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2830%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2831%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2831%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2832%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2832%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2833%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2833%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2834%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2834%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2835%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2835%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2836%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2836%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2837%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2837%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2838%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2838%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2839%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2839%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%284%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%284%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2840%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2840%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2841%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2841%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2842%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2842%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2843%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2843%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2844%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2844%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2845%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2845%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2846%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2846%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2847%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2847%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2848%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2848%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2849%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2849%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%285%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%285%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%2850%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%2850%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%286%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%286%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%287%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%287%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%288%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%288%29.webp' },
  { full: 'assets/AI%20Images/Products/1%20%289%29.jpg', thumb: 'assets/AI%20Images/thumbs/1%20%289%29.webp' },
  { full: 'assets/AI%20Images/Products/1421421.png', thumb: 'assets/AI%20Images/thumbs/1421421.webp' },
  { full: 'assets/AI%20Images/Products/2312141.png', thumb: 'assets/AI%20Images/thumbs/2312141.webp' },
  { full: 'assets/AI%20Images/Products/ChatGPT%20Image%20Feb%2026%2C%202026%2C%2009_38_32%20PM.png', thumb: 'assets/AI%20Images/thumbs/ChatGPT%20Image%20Feb%2026%2C%202026%2C%2009_38_32%20PM.webp' },
  { full: 'assets/AI%20Images/Products/PuddingPreFinal.png', thumb: 'assets/AI%20Images/thumbs/PuddingPreFinal.webp' },
  { full: 'assets/AI%20Images/Products/image_038c8c01af62255f.png', thumb: 'assets/AI%20Images/thumbs/image_038c8c01af62255f.webp' },
  { full: 'assets/AI%20Images/Products/image_0475aab6fc8c5c41.png', thumb: 'assets/AI%20Images/thumbs/image_0475aab6fc8c5c41.webp' },
  { full: 'assets/AI%20Images/Products/image_05ceeebab4ecb4a2.png', thumb: 'assets/AI%20Images/thumbs/image_05ceeebab4ecb4a2.webp' },
  { full: 'assets/AI%20Images/Products/image_05fa7f9e1ec2773e.png', thumb: 'assets/AI%20Images/thumbs/image_05fa7f9e1ec2773e.webp' },
  { full: 'assets/AI%20Images/Products/image_06e74b88f1fe4561.png', thumb: 'assets/AI%20Images/thumbs/image_06e74b88f1fe4561.webp' },
  { full: 'assets/AI%20Images/Products/image_08a658185c05d6cf.png', thumb: 'assets/AI%20Images/thumbs/image_08a658185c05d6cf.webp' },
  { full: 'assets/AI%20Images/Products/image_10_04336870cb64f306.png', thumb: 'assets/AI%20Images/thumbs/image_10_04336870cb64f306.webp' },
  { full: 'assets/AI%20Images/Products/image_1a9d6134c166c3f4.png', thumb: 'assets/AI%20Images/thumbs/image_1a9d6134c166c3f4.webp' },
  { full: 'assets/AI%20Images/Products/image_1f84fbb57100fd63.png', thumb: 'assets/AI%20Images/thumbs/image_1f84fbb57100fd63.webp' },
  { full: 'assets/AI%20Images/Products/image_23d113a5aad79ea4.png', thumb: 'assets/AI%20Images/thumbs/image_23d113a5aad79ea4.webp' },
  { full: 'assets/AI%20Images/Products/image_24fe7202bba44df7.png', thumb: 'assets/AI%20Images/thumbs/image_24fe7202bba44df7.webp' },
  { full: 'assets/AI%20Images/Products/image_266c9b39778da496.png', thumb: 'assets/AI%20Images/thumbs/image_266c9b39778da496.webp' },
  { full: 'assets/AI%20Images/Products/image_37c8a8111e294645.png', thumb: 'assets/AI%20Images/thumbs/image_37c8a8111e294645.webp' },
  { full: 'assets/AI%20Images/Products/image_3baa96084e02e9ef.png', thumb: 'assets/AI%20Images/thumbs/image_3baa96084e02e9ef.webp' },
  { full: 'assets/AI%20Images/Products/image_4326fa952981a5a7.png', thumb: 'assets/AI%20Images/thumbs/image_4326fa952981a5a7.webp' },
  { full: 'assets/AI%20Images/Products/image_4382b9bd37e0ecbc.png', thumb: 'assets/AI%20Images/thumbs/image_4382b9bd37e0ecbc.webp' },
  { full: 'assets/AI%20Images/Products/image_44061b3fc9cee6f8.png', thumb: 'assets/AI%20Images/thumbs/image_44061b3fc9cee6f8.webp' },
  { full: 'assets/AI%20Images/Products/image_45c37fdb86acf9aa.png', thumb: 'assets/AI%20Images/thumbs/image_45c37fdb86acf9aa.webp' },
  { full: 'assets/AI%20Images/Products/image_486f52419ce83450.png', thumb: 'assets/AI%20Images/thumbs/image_486f52419ce83450.webp' },
  { full: 'assets/AI%20Images/Products/image_4c9e0505388b5691.png', thumb: 'assets/AI%20Images/thumbs/image_4c9e0505388b5691.webp' },
  { full: 'assets/AI%20Images/Products/image_63c0025388e12bea.png', thumb: 'assets/AI%20Images/thumbs/image_63c0025388e12bea.webp' },
  { full: 'assets/AI%20Images/Products/image_644368834e433788.png', thumb: 'assets/AI%20Images/thumbs/image_644368834e433788.webp' },
  { full: 'assets/AI%20Images/Products/image_683e7056a899be7b.png', thumb: 'assets/AI%20Images/thumbs/image_683e7056a899be7b.webp' },
  { full: 'assets/AI%20Images/Products/image_6_b41ab8d56b60406e.png', thumb: 'assets/AI%20Images/thumbs/image_6_b41ab8d56b60406e.webp' },
  { full: 'assets/AI%20Images/Products/image_6a699026e1bd41f7.png', thumb: 'assets/AI%20Images/thumbs/image_6a699026e1bd41f7.webp' },
  { full: 'assets/AI%20Images/Products/image_6b047b384d39a954.png', thumb: 'assets/AI%20Images/thumbs/image_6b047b384d39a954.webp' },
  { full: 'assets/AI%20Images/Products/image_6d1f1d6b0eadfed7.png', thumb: 'assets/AI%20Images/thumbs/image_6d1f1d6b0eadfed7.webp' },
  { full: 'assets/AI%20Images/Products/image_72364af6b30ad2d7.png', thumb: 'assets/AI%20Images/thumbs/image_72364af6b30ad2d7.webp' },
  { full: 'assets/AI%20Images/Products/image_79be7d4642dc8590.png', thumb: 'assets/AI%20Images/thumbs/image_79be7d4642dc8590.webp' },
  { full: 'assets/AI%20Images/Products/image_7_561731b2d9bbf505.png', thumb: 'assets/AI%20Images/thumbs/image_7_561731b2d9bbf505.webp' },
  { full: 'assets/AI%20Images/Products/image_7a91445e1dff4d31.png', thumb: 'assets/AI%20Images/thumbs/image_7a91445e1dff4d31.webp' },
  { full: 'assets/AI%20Images/Products/image_7dc811a0aec09292.png', thumb: 'assets/AI%20Images/thumbs/image_7dc811a0aec09292.webp' },
  { full: 'assets/AI%20Images/Products/image_7dfec0ab81c2a2db.png', thumb: 'assets/AI%20Images/thumbs/image_7dfec0ab81c2a2db.webp' },
  { full: 'assets/AI%20Images/Products/image_7f9f7f4df9e8df20.png', thumb: 'assets/AI%20Images/thumbs/image_7f9f7f4df9e8df20.webp' },
  { full: 'assets/AI%20Images/Products/image_8029ef2d48a7a83e.png', thumb: 'assets/AI%20Images/thumbs/image_8029ef2d48a7a83e.webp' },
  { full: 'assets/AI%20Images/Products/image_850db235ff777235.png', thumb: 'assets/AI%20Images/thumbs/image_850db235ff777235.webp' },
  { full: 'assets/AI%20Images/Products/image_8_ebc60d0e33be6d34.png', thumb: 'assets/AI%20Images/thumbs/image_8_ebc60d0e33be6d34.webp' },
  { full: 'assets/AI%20Images/Products/image_8f8fc17074b83653.png', thumb: 'assets/AI%20Images/thumbs/image_8f8fc17074b83653.webp' },
  { full: 'assets/AI%20Images/Products/image_9037286eb8114099.png', thumb: 'assets/AI%20Images/thumbs/image_9037286eb8114099.webp' },
  { full: 'assets/AI%20Images/Products/image_90832bc18796d261.png', thumb: 'assets/AI%20Images/thumbs/image_90832bc18796d261.webp' },
  { full: 'assets/AI%20Images/Products/image_94f99283d66b2483.png', thumb: 'assets/AI%20Images/thumbs/image_94f99283d66b2483.webp' },
  { full: 'assets/AI%20Images/Products/image_95083082114a653b.png', thumb: 'assets/AI%20Images/thumbs/image_95083082114a653b.webp' },
  { full: 'assets/AI%20Images/Products/image_9989ba3d886296b8.png', thumb: 'assets/AI%20Images/thumbs/image_9989ba3d886296b8.webp' },
  { full: 'assets/AI%20Images/Products/image_9_b3006047d566ab4f.png', thumb: 'assets/AI%20Images/thumbs/image_9_b3006047d566ab4f.webp' },
  { full: 'assets/AI%20Images/Products/image_9e9087ff1ad561b3.png', thumb: 'assets/AI%20Images/thumbs/image_9e9087ff1ad561b3.webp' },
  { full: 'assets/AI%20Images/Products/image_a40133c4b04bf32f.png', thumb: 'assets/AI%20Images/thumbs/image_a40133c4b04bf32f.webp' },
  { full: 'assets/AI%20Images/Products/image_a64aeaa7f0c12efc.png', thumb: 'assets/AI%20Images/thumbs/image_a64aeaa7f0c12efc.webp' },
  { full: 'assets/AI%20Images/Products/image_ab5fe90828c11d0e.png', thumb: 'assets/AI%20Images/thumbs/image_ab5fe90828c11d0e.webp' },
  { full: 'assets/AI%20Images/Products/image_b70cfa48e4980170.png', thumb: 'assets/AI%20Images/thumbs/image_b70cfa48e4980170.webp' },
  { full: 'assets/AI%20Images/Products/image_bda4bd062362a519.png', thumb: 'assets/AI%20Images/thumbs/image_bda4bd062362a519.webp' },
  { full: 'assets/AI%20Images/Products/image_be2777810d7fd739.png', thumb: 'assets/AI%20Images/thumbs/image_be2777810d7fd739.webp' },
  { full: 'assets/AI%20Images/Products/image_c1d5d4d09b84ee65.png', thumb: 'assets/AI%20Images/thumbs/image_c1d5d4d09b84ee65.webp' },
  { full: 'assets/AI%20Images/Products/image_c53b8da4e04a8cef.png', thumb: 'assets/AI%20Images/thumbs/image_c53b8da4e04a8cef.webp' },
  { full: 'assets/AI%20Images/Products/image_c59e9ba4815daf4b.png', thumb: 'assets/AI%20Images/thumbs/image_c59e9ba4815daf4b.webp' },
  { full: 'assets/AI%20Images/Products/image_cc48e67de18fa4a0.png', thumb: 'assets/AI%20Images/thumbs/image_cc48e67de18fa4a0.webp' },
  { full: 'assets/AI%20Images/Products/image_d29087db0afc36c5.png', thumb: 'assets/AI%20Images/thumbs/image_d29087db0afc36c5.webp' },
  { full: 'assets/AI%20Images/Products/image_d31fff41b679c8a8.png', thumb: 'assets/AI%20Images/thumbs/image_d31fff41b679c8a8.webp' },
  { full: 'assets/AI%20Images/Products/image_d3ba665a74a7dea2.png', thumb: 'assets/AI%20Images/thumbs/image_d3ba665a74a7dea2.webp' },
  { full: 'assets/AI%20Images/Products/image_d47520a126c23970.png', thumb: 'assets/AI%20Images/thumbs/image_d47520a126c23970.webp' },
  { full: 'assets/AI%20Images/Products/image_d774dd2bb784e133.png', thumb: 'assets/AI%20Images/thumbs/image_d774dd2bb784e133.webp' },
  { full: 'assets/AI%20Images/Products/image_dd53e55e4de608b3.png', thumb: 'assets/AI%20Images/thumbs/image_dd53e55e4de608b3.webp' },
  { full: 'assets/AI%20Images/Products/image_e65740e75f025652.png', thumb: 'assets/AI%20Images/thumbs/image_e65740e75f025652.webp' },
  { full: 'assets/AI%20Images/Products/image_e79e7125b9aa004b.png', thumb: 'assets/AI%20Images/thumbs/image_e79e7125b9aa004b.webp' },
  { full: 'assets/AI%20Images/Products/image_eeafb1884765ade6.png', thumb: 'assets/AI%20Images/thumbs/image_eeafb1884765ade6.webp' },
  { full: 'assets/AI%20Images/Products/image_f7c7f270b5c6a061.png', thumb: 'assets/AI%20Images/thumbs/image_f7c7f270b5c6a061.webp' },
  { full: 'assets/AI%20Images/Products/image_fbfc5127384c4937.png', thumb: 'assets/AI%20Images/thumbs/image_fbfc5127384c4937.webp' },
  { full: 'assets/AI%20Images/Products/media-c2b2608c6e29154d.png', thumb: 'assets/AI%20Images/thumbs/media-c2b2608c6e29154d.webp' },
];

function createImg(src, lazy) {
  const el = document.createElement('img');
  if (lazy) {
    el.loading = 'lazy';
    el.decoding = 'async';
  }
  el.src = src;
  el.alt = 'AI Art';
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
let revealObserver;
let currentLb = 0;
const GALLERY_PAGE_SIZE = 20;
let galleryLoaded = 0;

function updateGalleryCount() {
  const count = document.getElementById('galleryCount');
  if (count) count.textContent = ALL_IMAGES.length + ' ' + T[currentLang]['gallery.unit'];
}

function loadMoreGallery() {
  const grid = document.getElementById('galleryGrid');
  const btn  = document.getElementById('galleryLoadMore');
  if (!grid) return;

  const end = Math.min(galleryLoaded + GALLERY_PAGE_SIZE, ALL_IMAGES.length);
  for (let i = galleryLoaded; i < end; i++) {
    const img  = ALL_IMAGES[i];
    const item = document.createElement('div');
    item.className = 'gallery-item reveal';
    item.dataset.index = i;
    item.appendChild(createImg(img.thumb, true));
    item.addEventListener('click', () => openLightbox(i));
    grid.appendChild(item);
    if (revealObserver) revealObserver.observe(item);
  }
  galleryLoaded = end;

  if (btn) btn.style.display = galleryLoaded >= ALL_IMAGES.length ? 'none' : '';
}

(function buildGallery() {
  updateGalleryCount();
  loadMoreGallery();
  const btn = document.getElementById('galleryLoadMore');
  if (btn) btn.addEventListener('click', loadMoreGallery);
})();

/* ═══════ Lightbox ═══════ */
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCounter = document.getElementById('lbCounter');

function openLightbox(i) {
  currentLb = i;
  lb.classList.add('active', 'lb-loading');
  lbImg.onload = () => lb.classList.remove('lb-loading');
  lbImg.src = ALL_IMAGES[i].full;
  lbCounter.textContent = `${i + 1} / ${ALL_IMAGES.length}`;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lb.classList.remove('active');
  lbImg.src = '';
  document.body.style.overflow = '';
}

function lbNavigate(dir) {
  currentLb = (currentLb + dir + ALL_IMAGES.length) % ALL_IMAGES.length;
  lb.classList.add('lb-loading');
  lbImg.onload = () => lb.classList.remove('lb-loading');
  lbImg.src = ALL_IMAGES[currentLb].full;
  lbCounter.textContent = `${currentLb + 1} / ${ALL_IMAGES.length}`;
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
revealObserver = new IntersectionObserver(entries => {
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
