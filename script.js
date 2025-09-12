// FAQ toggle
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("active");
    btn.nextElementSibling.style.display =
      btn.nextElementSibling.style.display === "block" ? "none" : "block";
  });
});

// TRANSLATIONS
const translations = {
  en: {
    lang_button: "Language",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Our Services",
    nav_why: "Why Choose Us",
    nav_location: "Location",
    nav_hours: "Open Hours",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    hero_title: "Professional Welding Solutions",
    hero_subtitle: "Strong • Reliable • Precise",
    hero_waze: "Open in Waze",
    hero_contact: "Contact Us",
    about_title: "About Us",
    about_desc: "We are specialists in welding and metal fabrication, delivering durable and precise results for industrial, commercial, and residential projects.",
    services_title: "Our Services",
    service1_title: "Custom Iron, Steel and stainless steel Works",
    service2_title: "Gates, Fences & Railings",
    service3_title: "Staircases & Structures",
    service4_title: "Roofing & Canopies",
    service5_title: "Metal Furniture & Fixtures",
    service6_title: "Repair & Welding Services",
    why_title: "Why Choose Us",
    why1: "Experienced Welders",
    why2: "High Quality Materials",
    why3: "Affordable Pricing",
    location_title: "Our Location",
    location_waze: "Open in Waze",
    hours_title: "Open Hours",
    hours_weekdays: "Mon - Fri",
    hours_sat: "Saturday",
    hours_sun: "Sunday",
    closed: "Closed",
    faq_title: "FAQ",
    faq1_q: "Do you provide on-site welding?",
    faq1_a: "Yes, we provide on-site welding services, depending on your location.",
    faq2_q: "What materials do you weld?",
    faq2_a: "We focus on steel and stainless steel works, except aluminium.",
    faq3_q: "Can I request a custom design?",
    faq3_a: "Yes. We accept designs from customers, or we can recommend a suitable design based on your needs.",
    faq4_q: "Do you provide free quotations",
    faq4_a: "Yes, we give free quotations, no hidden charges at all.",
    faq5_q: "How can I reach you quickly?",
    faq5_a: "Contact us directly via WhatsApp (button on the website) for a quick response.",
    contact_title: "Contact Us",
    servicesData: {
      service1: { title: "Custom Iron, Steel & Stainless Steel Works", desc: "We specialize in designing and fabricating all kinds of custom metal products, from security grilles to decorative structures, tailored to your exact needs." },
      service2: { title: "Gates, Fences & Railings", desc: "Strong and safe staircases, platforms, and structures, carefully built for both homes and commercial projects." },
      service3: { title: "Staircases & Structures", desc: "Reliable and safe staircases, platforms, and structural frameworks, engineered with precision for residential and commercial projects." },
      service4: { title: "Roofing & Canopies", desc: "High-quality metal roofing and canopy solutions that provide shelter, protection, and modern style for homes and businesses." },
      service5: { title: "Industrial Racks", desc: "We design and build durable custom iron racks for homes, shops, and small industries—strong, practical, and made to last." },
      service6: { title: "Repair & Welding Services", desc: "From repairing rusty chairs to strengthening existing metalworks, we provide expert welding and maintenance to extend product lifespan." }
    }
  },
  ms: {
    lang_button: "Bahasa",
    nav_home: "Utama",
    nav_about: "Tentang",
    nav_services: "Perkhidmatan",
    nav_why: "Kenapa Pilih Kami",
    nav_location: "Lokasi",
    nav_hours: "Waktu Operasi",
    nav_faq: "Soalan",
    nav_contact: "Hubungi",
    hero_title: "Penyelesaian Welding Profesional",
    hero_subtitle: "Kukuh • Boleh Dipercayai • Tepat",
    hero_waze: "Buka di Waze",
    hero_contact: "Hubungi Kami",
    about_title: "Tentang Kami",
    about_desc: "Kami pakar dalam welding dan kerja logam, memberikan hasil yang tahan lama dan tepat untuk projek industri, komersial, dan kediaman.",
    services_title: "Perkhidmatan Kami",
    service1_title: "Kerja Besi & Keluli",
    service2_title: "Pagar, Grill & Railing",
    service3_title: "Tangga & Struktur",
    service4_title: "Bumbung & Kanopi",
    service5_title: "Perabot & Kelengkapan Logam",
    service6_title: "Pembaikan & Perkhidmatan Welding",
    why_title: "Kenapa Pilih Kami",
    why1: "Welder Berpengalaman",
    why2: "Bahan Berkualiti Tinggi",
    why3: "Harga Berpatutan",
    location_title: "Lokasi Kami",
    location_waze: "Buka di Waze",
    hours_title: "Waktu Operasi",
    hours_weekdays: "Isnin - Jumaat",
    hours_sat: "Sabtu",
    hours_sun: "Ahad",
    closed: "Tutup",
    faq_title: "Soalan Lazim",
    faq1_q: "Adakah anda buat welding di lokasi?",
    faq1_a: "Ya, kami menyediakan perkhidmatan kimpalan di lokasi, bergantung pada kawasan anda.",
    faq2_q: "Bahan apa yang anda welding?",
    faq2_a: "Kami memberi fokus pada kerja besi dan keluli tahan karat sahaja, tidak termasuk aluminium.",
    faq3_q: "Boleh tak saya minta design custom?",
    faq3_a: "Boleh. Kami menerima design daripada pelanggan, atau kami boleh cadangkan design yang sesuai mengikut keperluan anda.",
    faq4_q: "Adakah anda tawarkan sebut harga percuma?",
    faq4_a: "Ya, kami sediakan sebut harga percuma tanpa caj tersembunyi.",
    faq5_q: "Bagaimana saya boleh hubungi anda dengan cepat?",
    faq5_a: "Hubungi terus melalui WhatsApp (butang di laman web) untuk respon segera.",
    contact_title: "Hubungi Kami",
    servicesData: {
      service1: { title: "Kerja Besi, Keluli & Keluli Tahan Karat Custom", desc: "Kami pakar dalam mereka bentuk dan menghasilkan produk logam, daripada grill keselamatan hingga struktur dekoratif, mengikut keperluan anda." },
      service2: { title: "Pagar, Grill & Railing", desc: "Tangga, platform, dan rangka struktur yang kukuh serta selamat, dibina dengan teliti untuk kediaman dan projek komersial." },
      service3: { title: "Tangga & Struktur", desc: "Tangga, platform, dan rangka struktur yang selamat dan tepat, direka untuk projek kediaman dan komersial." },
      service4: { title: "Bumbung & Kanopi", desc: "Penyelesaian bumbung logam dan kanopi berkualiti tinggi yang melindungi serta memberi gaya moden." },
      service5: { title: "Rak Kegunaan Industri", desc: "Kami mereka bentuk dan membina rak besi custom yang tahan lama untuk rumah, kedai, dan industri kecil—kukuh, praktikal, dan tahan lasak." },
      service6: { title: "Pembaikan & Perkhidmatan Welding", desc: "Dari membaiki kerusi berkarat hingga mengukuhkan kerja besi sedia ada, kami menyediakan khidmat welding dan penyelenggaraan pakar untuk memanjangkan jangka hayat produk." }
    }
  },
  zh: {
    lang_button: "语言",
    nav_home: "主页",
    nav_about: "关于我们",
    nav_services: "服务项目",
    nav_why: "为什么选择我们",
    nav_location: "位置",
    nav_hours: "营业时间",
    nav_faq: "常见问题",
    nav_contact: "联系我们",
    hero_title: "专业焊接解决方案",
    hero_subtitle: "坚固 • 可靠 • 精准",
    hero_waze: "在 Waze 打开",
    hero_contact: "联系我们",
    about_title: "关于我们",
    about_desc: "我们专注于焊接和金属制造，为工业、商业和住宅项目提供耐用且精确的成果。",
    services_title: "我们的服务",
    service1_title: "定制铁和钢制品",
    service2_title: "大门、围栏和栏杆",
    service3_title: "楼梯和结构",
    service4_title: "屋顶和遮阳棚",
    service5_title: "金属家具和配件",
    service6_title: "维修与焊接服务",
    why_title: "为什么选择我们",
    why1: "经验丰富的焊工",
    why2: "优质材料",
    why3: "价格实惠",
    location_title: "我们的位置",
    location_waze: "在 Waze 打开",
    hours_title: "营业时间",
    hours_weekdays: "周一 - 周五",
    hours_sat: "周六",
    hours_sun: "周日",
    closed: "休息",
    faq_title: "常见问题",
    faq1_q: "你们提供上门焊接吗？",
    faq1_a: "是的，我们提供上门焊接服务，具体取决于您的位置。",
    faq2_q: "你们焊接哪些材料？",
    faq2_a: "我们专注于钢铁和不锈钢工程，不包括铝材。",
    faq3_q: "我可以要求定制设计吗？",
    faq3_a: "可以的。我们可以采用客户提供的设计，或根据您的需求推荐合适的方案。",
    faq4_q: "你们提供免费报价吗？",
    faq4_a: "有的，我们给的报价是免费的，没有隐藏费用。",
    faq5_q: "我怎样可以快速联系到您？",
    faq5_a: "通过 WhatsApp (网站上的按钮）直接联系我们，以获得快速回复。",

    
    contact_title: "联系我们",
    servicesData: {
      service1: { title: "定制铁、钢和不锈钢工程", desc: "我们专门设计和制造各种金属制品，从安全护栏到装饰结构，满足您的需求。" },
      service2: { title: "大门、围栏和栏杆", desc: "坚固耐用的大门、围栏和栏杆，既美观又安全，适合家庭和商业使用。" },
      service3: { title: "楼梯和结构", desc: "可靠且安全的楼梯、平台和结构框架，适用于住宅和商业项目。" },
      service4: { title: "屋顶和遮阳棚", desc: "高质量的金属屋顶和遮阳棚，为家庭和企业提供保护与现代风格。" },
      service5: { title: "工业用架子", desc: "我们设计并制造耐用的定制铁架，适用于家庭、商店和小型工业——坚固、实用、经久耐用。" },
      service6: { title: "维修与焊接服务", desc: "从修复生锈的椅子到加固现有金属结构，我们提供专业的焊接与维护服务，延长产品使用寿命。" }
    }
  },
  ta: {
    lang_button: "மொழி",
    nav_home: "முகப்பு",
    nav_about: "எங்களை",
    nav_services: "சேவை",
    nav_why: "ஏன் நாம்",
    nav_location: "இடம்",
    nav_hours: "நேரம்",
    nav_faq: "கேள்விகள்",
    nav_contact: "தொடர்பு",
    hero_title: "வெல்டிங் சேவை",
    hero_subtitle: "வலுவானது • நம்பகமானது • துல்லியம்",
    hero_waze: "Waze திறக்க",
    hero_contact: "தொடர்பு",
    about_title: "எங்களை பற்றி",
    about_desc: "நாங்கள் வெல்டிங் மற்றும் உலோக உற்பத்தியில் நிபுணர்கள், தொழில், வணிக மற்றும் குடியிருப்பு திட்டங்களுக்கு நீடித்த மற்றும் துல்லியமான முடிவுகளை வழங்குகிறோம்.",
    services_title: "எங்கள் சேவைகள்",
    service1_title: "தனிப்பயன் இரும்பு மற்றும் எஃகு வேலைகள்",
    service2_title: "வாசல்கள், வேலிகள் மற்றும் ரெயிலிங்",
    service3_title: "படிகள் மற்றும் அமைப்புகள்",
    service4_title: "கூரைகள் மற்றும் கானோபிகள்",
    service5_title: "உலோக мебели மற்றும் உபகரணங்கள்",
    service6_title: "பழுது மற்றும் வெல்டிங் சேவைகள்",
    why_title: "ஏன் எங்களைத் தேர்ந்தெடுக்க வேண்டும்",
    why1: "அனுபவமுள்ள வெல்டர்கள்",
    why2: "உயர் தர பொருட்கள்",
    why3: "விலைக்கேற்ற சேவை",
    location_title: "எங்கள் இடம்",
    location_waze: "Waze இல் திறக்கவும்",
    hours_title: "நேரம்",
    hours_weekdays: "திங்கள் - வெள்ளி",
    hours_sat: "சனி",
    hours_sun: "ஞாயிறு",
    closed: "மூடப்பட்டது",
    faq_title: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    faq1_q: "நீங்கள் இடத்திலேயே வெல்டிங் சேவையை வழங்குகிறீர்களா?",
    faq1_a: "ஆம், உங்கள் இருப்பிடத்தைப் பொறுத்து நாங்கள் தளத்திலேயே வெல்டிங் சேவைகளை வழங்குகிறோம்.",
    faq2_q: "நீங்கள் எந்த பொருட்களை வெல்ட் செய்கிறீர்கள்?",
    faq2_a: "நாங்கள் எஃகு மற்றும் ஸ்டெயின்லெஸ் ஸ்டீல் வேலைகளில் கவனம் செலுத்துகிறோம், அலுமினியம் சேர்க்கப்படவில்லை.",
    faq3_q: "நான் தனிப்பயன் வடிவமைப்பை கேட்டுக்கொள்ளலாமா?",
    faq3_a: "ஆம். வாடிக்கையாளர்கள் தங்கள் சொந்த வடிவமைப்பை வழங்கலாம், அல்லது உங்கள் தேவைக்கு ஏற்ப நாங்கள் பொருத்தமான வடிவமைப்பை பரிந்துரைக்கலாம்.",
    faq4_q: "நீங்கள் இலவச மதிப்பீட்டை வழங்குகிறீர்களா?",
    faq4_a: "ஆம், எங்கள் மதிப்பீடு இலவசம், எந்த மறைமுக செலவும் இல்லை.",
    faq5_q: "நீங்கள் இலவச மதிப்பீட்டை வழங்குகிறீர்களா?",
    faq5_a: "துரித பதிலுக்காக வலைத்தளத்தில் உள்ள WhatsApp பொத்தானில் நேரடியாக எங்களை தொடர்பு கொள்ளுங்கள்.",
    contact_title: "எங்களை தொடர்பு கொள்ளவும்",
    servicesData: {
      service1: { title: "தனிப்பயன் இரும்பு, எஃகு மற்றும் ஸ்டெயின்லெஸ் ஸ்டீல் வேலைகள்", desc: "பாதுகாப்பு கிரில்லுகள் முதல் அலங்கார அமைப்புகள் வரை, உங்களின் தேவைக்கேற்ப அனைத்து வகையான உலோகப் பொருட்களையும் வடிவமைத்து தயாரிக்கிறோம்." },
      service2: { title: "வாசல்கள், வேலிகள் மற்றும் ரெயிலிங்", desc: "நம்பகமான மற்றும் பாதுகாப்பான படிக்கட்டுகள், மேடைகள் மற்றும் அமைப்பு வேலைகள், வீட்டு மற்றும் வணிகத் திட்டங்களுக்கு துல்லியமாக வடிவமைக்கப்பட்டவை." },
      service3: { title: "படிகள் மற்றும் அமைப்புகள்", desc: "குடியிருப்பு மற்றும் வணிக திட்டங்களுக்கு துல்லியமாக வடிவமைக்கப்பட்ட நம்பகமான மற்றும் பாதுகாப்பான படிகள், தளங்கள் மற்றும் அமைப்புகள்." },
      service4: { title: "கூரைகள் மற்றும் கானோபிகள்", desc: "உயர் தரமான உலோக கூரைகள் மற்றும் கானோபிகள் வீடுகள் மற்றும் வணிகங்களுக்கு பாதுகாப்பையும் நவீன பாணியையும் வழங்குகின்றன." },
      service5: { title: "தொழில்துறை ரேக்குகள்", desc: "நாங்கள் வீடுகள், கடைகள் மற்றும் சிறிய தொழில்களுக்கு நீடித்த தனிப்பயன் இரும்பு ரேக்குகளை வடிவமைத்து உருவாக்குகிறோம் — வலிமையான, பயனுள்ள மற்றும் நீடிக்கக்கூடியவை." },
      service6: { title: "பழுது மற்றும் வெல்டிங் சேவைகள்", desc: "ஜங்கான நாற்காலிகளை பழுது பார்க்கும் பணியிலிருந்து இருக்கும் இரும்பு வேலைகளை வலுப்படுத்துவதுவரை, எங்கள் வெல்டிங் மற்றும் பராமரிப்பு சேவைகள் பொருளின் ஆயுளை நீட்டிக்கின்றன." }
    }
  }
};

// DEFAULT LANG
let currentLang = "en";

// Apply Translation
function setLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];

  // Update all elements with [data-translate]
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update service modal data
  servicesData = dict.servicesData;
}

// Service Modal Data (default English)
let servicesData = translations[currentLang].servicesData;

const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close");

// Open service modal
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    const serviceId = card.getAttribute("data-service");
    modalTitle.textContent = servicesData[serviceId].title;
    modalDesc.textContent = servicesData[serviceId].desc;
    modal.style.display = "flex";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
