function sorter (textbooks) {
    return textbooks.sort((a,b) => {
        const bookA = a.toUpperCase();
        const bookB = b.toUpperCase();
        if (bookA < bookB) {
            return -1;
        }
        if (bookA > bookB) {
            return 1;
        }
        return 0;
    })
}

console.log(sorter(['Algebra', 'Geometry', 'english', 'history']))