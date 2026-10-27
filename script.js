const languageButton = document.getElementById('language');
function setLanguage(language) {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-en][data-zh]').forEach(element => {
    element.textContent = element.dataset[language];
  });
  languageButton.textContent = language === 'zh' ? 'EN' : '中文';
  languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
  try { localStorage.setItem('academic-language', language); } catch {}
}
languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en'));
document.getElementById('year').textContent = new Date().getFullYear();
try { const saved = localStorage.getItem('academic-language'); if (saved === 'zh') setLanguage(saved); } catch {}
