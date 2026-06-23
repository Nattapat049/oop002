let productName: string = "คีย์บอร์ด";
let pricePerUnit: number = 990;
let quantity: number = 1;
let isMember: boolean = false;
let totalPrice: number = pricePerUnit * quantity;
let hasDiscount: boolean = totalPrice > 1000 || isMember;
let discountAmount: number = hasDiscount ? totalPrice * 0.1 : 0;
let finalPrice: number = totalPrice - discountAmount;
console.log(`ชื่อสินค้า: ${productName}จำนวนที่ซื้อ: ${quantity}ราคารวมทั้งหมด: ${totalPrice} บาท
ได้รับส่วนลด: ${hasDiscount}ราคาที่ต้องจ่ายจริง: ${finalPrice} บาท`);