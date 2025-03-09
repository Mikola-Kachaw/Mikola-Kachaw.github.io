const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        const messageElement = document.getElementById('message');
        const festivalStartedElement = document.getElementById('festival-started');

        // Целевая дата и время
        const targetDate = new Date('2025-04-04T16:59:59').getTime();

        // Функция для обновления таймера
        const updateTimer = () => {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            if (timeLeft <= 0) {
                // Скрываем таймер и сообщение
                document.getElementById('timer').style.display = 'none';
                document.querySelector('.labels').style.display = 'none';
                messageElement.style.display = 'none';

                // Показываем сообщение о начале фестиваля
                festivalStartedElement.style.display = 'block';
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            daysElement.textContent = String(days).padStart(2, '0');
            hoursElement.textContent = String(hours).padStart(2, '0');
            minutesElement.textContent = String(minutes).padStart(2, '0');
            secondsElement.textContent = String(seconds).padStart(2, '0');
        };

        // Обновляем таймер каждую секунду
        setInterval(updateTimer, 1000);

        // Инициализация таймера сразу после загрузки страницы
        updateTimer();