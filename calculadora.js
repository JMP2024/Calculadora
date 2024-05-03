
document.addEventListener('DOMContentLoaded', (event) => {
    const screen = document.querySelector('.screen');
    const botones = document.querySelectorAll('.btn, .operator');

    botones.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.value;

            if (value === 'C') {
                screen.value = '';
            } else if (value === '=') {
                try {
                    screen.value = eval(screen.value);
                } catch (error) {
                    screen.value = 'Error';
                }
            } else {
                screen.value += value;
            }
        });
    });

    //EXTRAS
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.value;
            const currentValue = parseFloat(screen.value) || 0;
    
            switch (value) {
                case 'sin':
                    screen.value = Math.sin(currentValue);
                    break;
                case 'cos':
                    screen.value = Math.cos(currentValue);
                    break;
                case 'tan':
                    screen.value = Math.tan(currentValue);
                    break;
                case 'ln':
                    screen.value = Math.log(currentValue);
                    break;
                default:
                    break;
            }
        });
    });
});

