import { generateUniqueId } from "./utils.js";

let orders = [];

export function addOrder(customerName, items) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: "Menunggu",
  };
  orders.push(newOrder);
}

export function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

export function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === "Selesai")
    .reduce((sum, order) => sum + order.totalPrice, 0);
}

export function deleteOrder(orderId) {
  orders = orders.filter((order) => order.id !== orderId);
}

export { orders };
