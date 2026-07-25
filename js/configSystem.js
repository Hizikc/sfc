// Объект прогресса
let userConfig = {
  username: "hiz_student",
  completedLessons: []
};

// Функция экспорта (Выгрузка файла)
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

// Функция импорта (Загрузка файла)
window.importConfig = function(event) {
  const files = event.target.files;
  if (!files || files.length === 0) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedData = JSON.parse(e.target.result);
      if (importedData && Array.isArray(importedData.completedLessons)) {
        userConfig = importedData;
        alert(`Прогресс успешно загружен!`);
        updateLessonsUI();
      } else {
        alert("Ошибка: Неверный формат файла!");
      }
    } catch (err) {
      alert("Не удалось прочитать файл.");
    }
  };
  reader.readAsText(files[0]);
}

// Функция сохранения пройденного урока
window.saveLessonProgress = function(lessonId) {
  if (!userConfig.completedLessons.includes(lessonId)) {
    userConfig.completedLessons.push(lessonId);
    alert(`Урок ${lessonId} пройден! Теперь можно выгрузить конфиг.`);
  }
}

// Функция обновления интерфейса (галочки и свечение)
function updateLessonsUI() {
  userConfig.completedLessons.forEach(lessonId => {
    const card = document.getElementById(lessonId);
    if (card) {
      card.style.borderColor = 'rgba(46, 204, 113, 0.6)';
      card.style.boxShadow = '0 0 15px rgba(46, 204, 113, 0.2)';
    }
  });
}

// Инициализация при старте
export function initConfig() {
  console.log("Система конфигов готова!");
}
