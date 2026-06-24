let bookTitle: string = "TypeScript";
let isbn: string = "978-1234567890";
let price: number = 650;
let book: [string, number] = [bookTitle, price];
let isAvailable: boolean = true;

let discountPrice = price * 0.85;
let isPremium = price > 500;
let canDisplay = isPremium && isAvailable;

console.log(`
ชื่อหนังสือ: ${bookTitle}
ISBN: ${isbn}
Tuple: [${book[0]}, ${book[1]}]
ราคาเดิม: ${price} บาท
ราคาหลังลด 15%: ${discountPrice} บาท
Premium: ${isPremium}
จัดแสดงหน้าตู้โชว์ได้: ${canDisplay}
`);