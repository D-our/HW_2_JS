let score = 0;

    let countTwo = prompt('Сколько будет 2+2?');
        
        if (countTwo == 4 || countTwo == 'четыре') {
            score = score + 10;
        };
    
    let sunRise = prompt('Солнце встает на востоке?');
    
        if (sunRise == 'Да' || sunRise == 'да') {
            score = score + 10;
        };
    
    let countFive = prompt('Сколько будет 5 / 0?');
    
        if (countFive == '0' || countFive == 'ноль') {
            score = score + 10;
        };
        
    let skyColor= prompt('Какого цвета небо?');
    
        if (skyColor == 'Голубое' || skyColor == 'голубое') {
            score = score + 10;
        };
    
    let waterBoils = prompt('При какой температуре закипает вода?');
    
        if (waterBoils == 100 || waterBoils == 'сто') {
            score = score + 10;
        };
    
    alert(score + ' баллов');









