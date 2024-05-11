/// функция переключения текста кнопки сохраниения

export const toggleSaveButton = (button, loading) => {
  if (loading) {
    button.textContent = "Сохранение...";
    button.disabled = true;
  } else {
    button.textContent = "Сохранить";
    button.disabled = false;
  }
};
