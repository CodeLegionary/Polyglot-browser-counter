# Counter README

## Descrizione
Questo progetto è un semplice contatore creato e animato dinamicamente nel browser, attraverso la manipolazione del DOM.
Il progetto è disponibile in tre lingue attraverso l'uso del language selector, e prevede le funzionalità principali di un 
counter classico.

## Indice
1. ## Struttura
2. ## Indirizzo e Deployment
3. ## Lingue
4. ## Utilizzo

# I Struttura
Trattasi di una SPA (Single-Page-application) presentata in più lingue. Il sito, sebbene si basi sul classico documento index.html,
non ne fa un uso standard. Ma come è stato anticipato la creazione stessa del contatore, parte principale del sito, è effettuata in
JavaScript, proprio ad enfatizzare le potenzialità di questo linguaggio e la sua integrazione con il DOM e i vari linguaggi front-end (e.g. HTML e CSS).
La parte delle traduzioni è delegata ad un apposito file JS per offrire una struttura modulare, e ben organizzata.

# II Indirizzo e Deployment
Il sito è disponibile al seguente link: [Polyglot-browser-counter](https://codelegionary.github.io/Polyglot-browser-counter).
Il deployment del sito è stato effettuato facilmente mediante GitHub Pages.

# III Lingue
Il testo - come si evince dal sito - è strutturato in un formato trilingue, le quali lingue si possono selezionare
rapidamente dal language selector posizionato tra il titolo e il paragrafo. Le tre lingue sono italiano,
spagnolo e inglese. Il sito ha comunque come lingua principale l'italiano, ma resta accessibile ad una audience più ampia.

# IV Utilizzo
Le funzionalità sono quelle classiche che si possono trovare in un contatore realizzato in hardware:
1. Reset: imposta il valore a quello di partenza, cioè 0 (zero)
2. Decremento: decrementa di 1 (uno)
3. Incremento: incrementa di (uno)
4. Moltiplicazione per 2 (due): l'equivalente di uno shift left binario

Riguardo al tasto di Reset questo è stato realizzato con un semplice restart button, per garantire
una maggiore fruibilità e risultare più intuitivo per tutti.

P.S. In teoria si può azzerare il valore del contatore semplicemente riaggiornando la pagina, così
da ripristinare il valore iniziale di 0, ma questo resetterebe anche la lingua ad italiano. Questa è
infatti la lingua impostata di default.
