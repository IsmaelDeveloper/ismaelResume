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
        this.checked ? document.getElementById("recommandation_letter_1").href = "./recommandation_letter_fr.pdf" : document.getElementById("recommandation_letter_1").href = "./추천서_이스마엘.pdf"
        this.checked ? document.getElementById("recommandation_letter_EPS").href = "./Ismael_Hadj_EPS_recommandation_letter.pdf" : document.getElementById("recommandation_letter_EPS").href = "./추전서_EPS_엔지니어링.pdf"
        console.log(document.getElementById("recommandation_letter_1").href)
        changeLanguage(this.checked ? 'fr' : 'en');
      });
    } else {
      console.log('Le bouton toggle n\'a pas été trouvé dans le DOM');
    }
  });
  