export function initCursor() {
  const dot = document.querySelector('.cursor-dot');
  if (!dot) return;

  let timeout;
  let isOverInteractive = false;

  // 1. Движение мыши и скрытие при остановке
  window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';

    if (!isOverInteractive) {
      dot.style.opacity = '1';
    }

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      dot.style.opacity = '0';
    }, 1000);
  });

  // 2. Отслеживаем наведение на динамические кнопки (Делегирование)
  window.addEventListener('mouseover', (e) => {
    // Проверяем, является ли элемент ссылкой, кнопкой или имеет класс .btn
    const isButton = e.target.closest('a, button, .btn');

    if (isButton) {
      isOverInteractive = true;
      dot.style.opacity = '0'; // Прячем точку
    }
  });

  window.addEventListener('mouseout', (e) => {
    const isButton = e.target.closest('a, button, .btn');

    if (isButton) {
      isOverInteractive = false;
      dot.style.opacity = '1'; // Возвращаем точку
    }
  });
}
