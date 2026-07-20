export async function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  for (const el of elements) {
    const filePath = el.getAttribute('data-include');
    try {
      const response = await fetch(filePath);
      if (!response.ok) throw new Error(`Статус: ${response.status}`);
      el.innerHTML = await response.text();
      el.removeAttribute('data-include');
    } catch (error) {
      console.error(`[Ошибка] ${filePath}:`, error);
    }
  }
}
