
let score = 0;

    let countTwo = prompt('Сколько будет 2+2?');

        if (countTwo == 4) {
            score = score + 10;
        };

    let sunRise = prompt('Солнце встает на востоке?');

        if (sunRise == 'да') {
            score = score + 10;
        };

    let countFive = prompt('Сколько будет 5 / 0?');

        if (countFive == '0') {
            score = score + 10;
        };

    let skyColor= prompt('Какого цвета небо?');

        if (skyColor == 'Голубое') {
            score = score + 10;
        };

    let waterBoils = prompt('При какой температуре закипает вода?');

        if (waterBoils == '100') {
            score = score + 10;
        };


    alert(score + ' баллов');









