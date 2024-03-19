document.addEventListener('DOMContentLoaded', function () {
    const circle = document.querySelector('.circle');
    const dice = document.querySelector('.dice');

    const handleUserClick = async () => {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            if (!response.ok) {
                throw new Error('response is not good...');
            }

            const data = await response.json();

            const adviceIdElement = document.getElementById('advice-id');
            const adviceTextElement = document.getElementById('advice-text');

            adviceIdElement.innerText = data.slip.id;
            adviceTextElement.innerText = `"${data.slip.advice}"`;

            circle.style.transform = 'rotate(0deg)';
            dice.style.transform = 'rotate(180deg)';

            setTimeout(() => {
                circle.style.transform = 'rotate(0deg)';
                dice.style.transform = 'rotate(45deg)';
            }, 200);
        } catch (error) {
            console.error('There was an error...', error);
        }
    };

    const loadInitialAdvice = async () => {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            if (!response.ok) {
                throw new Error('Something went wrong...');
            }

            const data = await response.json();

            const adviceIdElement = document.getElementById('advice-id');
            const adviceTextElement = document.getElementById('advice-text');

            adviceIdElement.innerText = data.slip.id;
            adviceTextElement.innerText = `"${data.slip.advice}"`;
        } catch (error) {
            console.error('Something happen wrong...', error);
        }
    };

    loadInitialAdvice();
    circle.addEventListener('click', handleUserClick);
    dice.addEventListener('click', handleUserClick);
});