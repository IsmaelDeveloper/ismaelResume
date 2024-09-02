document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
    const initialLang = toggleSwitch.checked ? 'fr' : 'en';
  
    function loadTranslations(lang) {
      fetch(`/language/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
          document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (translations[key]) {
              elem.textContent = translations[key];
            }
          });
        })
        .catch(error => console.error('Error loading the translation files: ', error));
    }
  
    function changeLanguage(lang) {
      loadTranslations(lang);
    }
    loadTranslations(initialLang);
  
    if (toggleSwitch) {
      toggleSwitch.addEventListener('change', function() {
        this.checked ? document.getElementById("resume_dl").href = "./Ismael-HADJ-resume-FR.pdf" : document.getElementById("resume_dl").href = "./Ismael-HADJ-resume-EN.pdf"
        console.log(document.getElementById("resume_dl").href)
        changeLanguage(this.checked ? 'fr' : 'en');
      });
    } else {
      console.log('Le bouton toggle n\'a pas été trouvé dans le DOM');
    }
  });
  