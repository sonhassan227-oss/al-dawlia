const translations = {
en: {
"Home": "Home",
"About": "About",
"Why Us": "Why Us",
"Luxury Pools & Water Treatment": "Luxury Pools & Water Treatment",
"Engineering • Maintenance • Cleaning Services": "Engineering • Maintenance • Cleaning Services",
"Explore Services": "Explore Services",
"Services": "Services",
"Our Projects": "Our Projects",
"Pool Construction": "Pool Construction",
"Cleaning Services": "Cleaning Services",
"Water Treatment": "Water Treatment",
"Maintenance Contracts": "Maintenance Contracts"
},

ar: {
"Home": "الرئيسية",
"About": "من نحن",
"Why Us": "لماذا نحن",
"Luxury Pools & Water Treatment": "حمامات سباحة فاخرة ومعالجة المياه",
"Engineering • Maintenance • Cleaning Services": "هندسة • صيانة • خدمات تنظيف",
"Explore Services": "استكشف الخدمات",
"Services": "الخدمات",
"Our Projects": "مشروعاتنا",
"Pool Construction": "إنشاء حمامات السباحة",
"Cleaning Services": "خدمات التنظيف",
"Water Treatment": "معالجة المياه",
"Maintenance Contracts": "عقود الصيانة"
}
};

const langBtn = document.getElementById("langBtn");

function translatePage(lang) {

document.querySelectorAll("*").forEach(el => {

```
if (
  el.children.length === 0 &&
  el.textContent.trim() &&
  translations[lang][el.textContent.trim()]
) {
  el.textContent =
  translations[lang][el.textContent.trim()];
}
```

});

document.documentElement.lang = lang;
document.body.dir = lang === "ar" ? "rtl" : "ltr";

langBtn.textContent = lang === "ar" ? "EN" : "AR";

localStorage.setItem("siteLang", lang);
}

langBtn.addEventListener("click", () => {

const current =
document.documentElement.lang === "ar"
? "en"
: "ar";

translatePage(current);
});

window.addEventListener("load", () => {

const saved =
localStorage.getItem("siteLang") || "en";

translatePage(saved);
});
