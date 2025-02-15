import {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
} from "./orders.js";

// Menambahkan beberapa pesanan
addOrder("Alice", [
  { name: "Nasi Goreng", price: 20000 },
  { name: "Teh Manis", price: 5000 },
]);

addOrder("Bob", [
  { name: "Mie Goreng", price: 15000 },
  { name: "Kopi", price: 10000 },
]);

console.log("Daftar Pesanan Awal:", orders);

updateOrderStatus(orders[0].id, "Diproses");
updateOrderStatus(orders[1].id, "Selesai");

console.log("Daftar Pesanan Setelah Update Status:", orders);

console.log("Total Pendapatan dari Pesanan Selesai:", calculateTotalRevenue());

deleteOrder(orders[0].id);

console.log("Daftar Pesanan Setelah Penghapusan:", orders);
