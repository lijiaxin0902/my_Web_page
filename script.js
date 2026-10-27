const supportedLanguages = ['zh', 'en', 'ja'];
const languageTags = { zh: 'zh-CN', en: 'en', ja: 'ja' };
const titles = {
  zh: '李佳欣 · 个人学术主页',
  en: 'Jiaxin Li · Academic Profile',
  ja: '李 佳欣 · 研究者プロフィール'
};
const descriptions = {
  zh: '李佳欣的个人学术主页：数字游戏、直播与消费行为、跨文化研究。',
  en: 'Jiaxin Li: digital games, live streaming and consumer behaviour, and cross-cultural research.',
  ja: '李佳欣の研究者プロフィール：デジタルゲーム、配信と消費行動、異文化比較研究。'
};
const navigationLabels = { zh: '站内导航', en: 'Main navigation', ja: 'メインナビゲーション' };

function setLanguage(language) {
  if (!supportedLanguages.includes(language)) return;
  document.documentElement.lang = languageTags[language];
  document.querySelectorAll('[data-zh][data-en][data-ja]').forEach(element => {
    element.textContent = element.dataset[language];
  });
  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  document.title = titles[language];
  document.querySelector('meta[name="description"]').setAttribute('content', descriptions[language]);
  document.querySelector('nav').setAttribute('aria-label', navigationLabels[language]);
  try { localStorage.setItem('academic-language', language); } catch {}
}

document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});
document.getElementById('year').textContent = new Date().getFullYear();
let initialLanguage = 'zh';
try {
  const saved = localStorage.getItem('academic-language');
  if (supportedLanguages.includes(saved)) initialLanguage = saved;
} catch {}
setLanguage(initialLanguage);
