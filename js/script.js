document.addEventListener('DOMContentLoaded', () => {
    // Creazione degli elementi
    const decrementButton = document.createElement('button');
    decrementButton.id = 'decrement';
    decrementButton.textContent = '-';
    const incrementButton = document.createElement('button');
    incrementButton.id = 'increment';
    incrementButton.textContent = '+';
    const doubleButton = document.createElement('button');
    doubleButton.id = 'double';
    doubleButton.innerHTML = '&times;2';
    const restartButton = document.createElement('button');
    restartButton.id = 'restart';
    restartButton.innerHTML = '&#x23EF';
    const valueElement = document.createElement('span');
    valueElement.id = 'value';
    valueElement.textContent = '0';

    // Aggiunta degli elementi al DOM
    const counterDiv = document.createElement('div');
    counterDiv.className = 'controller';
    counterDiv.appendChild(restartButton);
    counterDiv.appendChild(decrementButton);
    counterDiv.appendChild(incrementButton);
    counterDiv.appendChild(doubleButton);
    document.body.appendChild(valueElement);
    document.body.appendChild(counterDiv);

    // Selettore di lingua
    const languageSelector = document.getElementById('language-selector');

    let counter = 0;

    restartButton.addEventListener('click', () => {
        counter = 0;
        valueElement.textContent = counter;
    });

    decrementButton.addEventListener('click', () => {
        counter--;
        valueElement.textContent = counter;
    });

    incrementButton.addEventListener('click', () => {
        counter++;
        valueElement.textContent = counter;
    });

    doubleButton.addEventListener('click', () => {
        counter *= 2;
        valueElement.textContent = counter;
    });

    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        translatePage(selectedLanguage);
    });

    function translatePage(language) {
        document.getElementById('title').textContent = translations[language].title;
        document.getElementById('header').textContent = translations[language].title;
        document.getElementById('description').innerHTML = translations[language].description;
        incrementButton.textContent = translations[language].increment;
        decrementButton.textContent = translations[language].decrement;
    }

    // Imposta Italiano come lingua predefinita
    translatePage('it');
});
