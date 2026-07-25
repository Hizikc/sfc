import { includeHTML } from './js/html-load.js';
import { initCursor } from './js/dot.js';
import { initconfig } from './js/configSystem.js';


// Запускаем сборку HTML-панелей
includeHTML();

// Запускаем логику дополнительного курсора
initCursor();

initconfig();
