let tabColors = ['red', 'darkred', 'yellow', 'green', 'grey', 'pink', 'chartreuse',
    'blueviolet', 'blue', 'darkorange', 'fuchsia', 'lightgray'];


function getColor() {
    return tabColors[randomize(tabColors.length, 0)];
}

function randomize(base, minimum) {
    return Math.floor(Math.random() * base) + minimum;
}