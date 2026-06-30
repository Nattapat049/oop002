let library: [string, boolean][] = [
    ["The Great Gatsby", true],
    ["To Kill a Mockingbird", false],
    ["1984", true],
    ["Pride and Prejudice", false],
    ["The Catcher in the Rye", false]
];

let available = 0, borrowed = 0;

for (let book of library) {
    let title = book[0];
    let isBorrowed = book[1];

    if (isBorrowed) {
        console.log(`${title} - Status: Borrowed`);
        borrowed++;
    } else {
        console.log(`${title} - Status: Available`);
        available++;
    }
}

console.log(`Total Available Books: ${available}`);
console.log(`Total Borrowed Books: ${borrowed}`);