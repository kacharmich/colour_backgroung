// Функция для изменения цвета фона текущей вкладки на черный
function changeBackgroundColor() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "#FFE4B5";' }
        );
    });
}

// Функция для добавления кнопки во всплывающее окно
function addPopupButton() {
    let button = document.createElement("button");
    button.innerHTML = "Изменить цвет сайта на кремовый";
    button.onclick = changeBackgroundColor;
    document.body.appendChild(button);
}


// Функция, которая будет вызвана при загрузке popup окна
function onPopupLoad() {
    addPopupButton();
}

// Добавляем обработчик события загрузки popup окна
window.addEventListener("load", onPopupLoad);
