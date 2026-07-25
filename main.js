import { includeHTML } from './js/html-load.js';
import { initCursor } from './js/dot.js';
import { initConfig } from './js/configSystem.js';

// 1. Сначала жестко запускаем сборку HTML-панелей
includeHTML();

// 2. Запускаем кастомный курсор
initCursor();

// 3. Запускаем систему конфигов
initConfig();
