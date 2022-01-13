

function digitRow (a,b) {
    let timer = setInterval(() => {
        console.log (a);
        if (a == b) {
            clearInterval(timer);
        } a++;
    }, 1000);
}

digitRow(5,15);
