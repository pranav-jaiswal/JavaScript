function starPattern(numberOfRows) {
    for(let i = 0; i < numberOfRows; i++) {
        let pattern = '';
        for(let j = 0; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

starPattern(6);