while (true) {
    var index, temp;
    do {
        index = Math.floor(Math.random() * 10) % 10;
    }
    while (temp == index);
    temp = index;

    console.log(index);
}