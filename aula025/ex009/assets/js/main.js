function meuEscopo () {
    // sábado, 18 de abril de 2026 00:00

    window.addEventListener(`load`, function () {
        const date = new Date();
        const dayWeek = getDayWeek(date);
        const dayNumber = getDayNumber(date);
        const month = getMonth(date);
        const year = getYear(date);
        const hours = getHours(date);
        const minutes = getMinutes(date);

        setMessage(dayWeek, dayNumber, month, year, hours, minutes);
    });

    function getDayWeek(date) {
        const dayWeek = date.getDay();

        return convertDate(dayWeek);
    }

    function convertDate(dayWeek) {
        switch (dayWeek) {
            case 0:
                return `Domingo`;
            case 1:
                return `Segunda-feira`;
            case 2:
                return `Terça-feira`;
            case 3:
                return `Quarta-feira`;
            case 4:
                return `Quinta-feira`;
            case 5:
                return `Sexta-feira`;
            case 6:
                return `Sábado`;
            default:
                return `Dia inválido!`;
        }
    }

    function getDayNumber(date) {
        return date.getDate();
    }

    function getMonth(date) {
        const month = date.getMonth();

        return convertMonth(month);  
    }

    function convertMonth(month) {
        switch (month + 1) {
            case 1:
                return `Janeiro`;
            case 2:
                return `Fevereiro`;
            case 3:
                return `Março`;   
            case 4:
                return `Abril`;
            case 5:
                return `Maio`;
            case 6:
                return `Junho`;
            case 7:
                return `Julho`;   
            case 8:
                return `Agosto`;
            case 9:
                return `Setembro`;
            case 10:
                return `Outubro`;
            case 11:
                return `Novembro`;   
            case 12:
                return `Dezembro`;    
        }
    }

    function getYear(date) {
        return date.getFullYear();
    }

    function getHours(date) {
        return date.getHours();
    }

    function getMinutes(date) {
        const minutes = date.getMinutes();

        if (minutes < 10) {
            return `0${minutes}`;
        } else {
            return minutes;
        }
        
    }

    function setMessage(dayWeek, dayNumber, month, year, hours, minutes) {
        setResult(`${dayWeek}, ${dayNumber} de ${month} de ${year} ${hours}:${minutes}`);
    }

    function setResult (msg) {
        const h1 = document.querySelector(`h1#date`);
        h1.innerHTML = msg;
    }

}

meuEscopo();