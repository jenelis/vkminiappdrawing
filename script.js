document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('registerBtn');
    const resultPopup = document.getElementById('resultPopup');
    const closePopup = document.getElementById('closePopup');
    const resultMessage = document.getElementById('resultMessage');

    const dataToSend = {
        username: 'exampleUser',  // Пример данных
        email: 'example@example.com'  // Пример данных
    };

    const queryParams = new URLSearchParams(dataToSend).toString();

    // Выполняем GET запрос с параметрами
    fetch(`/register_users?${queryParams}`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            resultMessage.textContent = `Результат: ${JSON.stringify(data)}`;
            resultPopup.style.display = 'block';
        })
        .catch(error => {
            resultMessage.textContent = `Ошибка: ${error}`;
            resultPopup.style.display = 'block';
        });

    registerBtn.addEventListener('click', function() {

    });

    closePopup.addEventListener('click', function() {
        resultPopup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == resultPopup) {
            resultPopup.style.display = 'none';
        }
    });
});