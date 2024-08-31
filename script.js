document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('registerBtn');
    const resultPopup = document.getElementById('resultPopup');
    const closePopup = document.getElementById('closePopup');
    const resultMessage = document.getElementById('resultMessage');

    registerBtn.addEventListener('click', function() {
        fetch('/register_users')
            .then(response => response.json())
            .then(data => {
                resultMessage.textContent = `Результат: ${JSON.stringify(data)}`;
                resultPopup.style.display = 'block';
            })
            .catch(error => {
                resultMessage.textContent = `Ошибка: ${error}`;
                resultPopup.style.display = 'block';
            });
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
