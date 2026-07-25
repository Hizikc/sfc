// Переменная, где хранится список пройденных уроков
let userConfig = {
  username: "hiz_student",
  completedLessons: ["lesson-1"] // добавили тестовый урок
};


// Функция 1: Скачивает файл с прогрессом на комп
window.exportConfig = function() {
  if (userConfig.completedLessons.length === 0) {
    alert("У вас пока нет пройденных уроков для сохранения!");
    return;
  }
  const configString = JSON.stringify(userConfig, null, 2);
  const blob = new Blob([configString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `css_guide_config.json`;
  link.click();
  URL.revokeObjectURL(url);
}

// Функция 2: Читает файл, который загрузил пользователь
window.importConfig = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedData = JSON.parse(e.target.result);
      if (importedData && Array.isArray(importedData.completedLessons)) {
        userConfig = importedData;
        alert(`Прогресс успешно загружен!`);
        updateLessonsUI(); // Обновляем галочки на экране
      } else {
        alert("Ошибка: Неверный формат файла!");
      }
    } catch (err) {
      alert("Не удалось прочитать файл.");
    }
  };
  reader.readAsText(file);
}

// Функция 3: Ищет уроки на странице и подсвечивает их, если они пройдены
function updateLessonsUI() {
  // Сначала убираем подсветку со всех уроков
  document.querySelectorAll('.new-card').forEach(card => {
    card.style.borderColor = '';
    card.style.boxShadow = '';
  });

  // Включаем зеленую подсветку для пройденных уроков
  userConfig.completedLessons.forEach(lessonId => {
    const card = document.getElementById(lessonId);
    if (card) {
      card.style.borderColor = 'rgba(46, 204, 113, 0.6)';
      card.style.boxShadow = '0 0 15px rgba(46, 204, 113, 0.2)';
    }
  });
}

// Эта функция запускается при старте сайта (ее вызывает твой main.js)
export function initConfig() {
  console.log("Система конфигов готова!");
}
