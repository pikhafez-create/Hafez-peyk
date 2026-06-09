import AsyncStorage from "@react-native-async-storage/async-storage";

export type OrderStatus =
  | "pending"
  | "assigned"
  | "picked"
  | "delivering"
  | "done";

export type Order = {
  id: string;
  customerName: string;
  pickup: string;
  dropoff: string;
  status: OrderStatus;
  driver?: string;
};

export type Driver = {
  id: string;
  name: string;
};

const ORDER_KEY = "ORDERS_DB";
const DRIVER_KEY = "DRIVERS_DB";

/* ---------------- ORDERS ---------------- */

export async function getOrders(): Promise<Order[]> {
  const data = await AsyncStorage.getItem(ORDER_KEY);
  return data ? JSON.parse(data) : [];
}

export async function saveOrders(orders: Order[]) {
  await AsyncStorage.setItem(ORDER_KEY, JSON.stringify(orders));
}

export async function addOrder(order: Order) {
  const orders = await getOrders();
  orders.push(order);
  await saveOrders(orders);
}

export async function updateStatus(id: string, status: OrderStatus) {
  const orders = await getOrders();
  const order = orders.find(o => o.id === id);

  if (order) {
    order.status = status;
  }

  await saveOrders(orders);
}

export async function assignDriver(id: string, driverId: string) {
  const orders = await getOrders();
  const order = orders.find(o => o.id === id);

  if (order) {
    order.driver = driverId;
    order.status = "assigned";
  }

  await saveOrders(orders);
}

/* ---------------- DRIVERS ---------------- */

export async function getDrivers(): Promise<Driver[]> {
  const data = await AsyncStorage.getItem(DRIVER_KEY);
  return data ? JSON.parse(data) : [];
}

export async function saveDrivers(drivers: Driver[]) {
  await AsyncStorage.setItem(DRIVER_KEY, JSON.stringify(drivers));
}

/* ---------------- SEED ---------------- */

export async function initializeStorage() {
  const drivers = await getDrivers();

  if (drivers.length === 0) {
    await saveDrivers([
      {
        id: "d1",
        name: "راننده شماره 1",
      },
      {
        id: "d2",
        name: "راننده شماره 2",
      },
      {
        id: "d3",
        name: "راننده شماره 3",
      },
    ]);
  }

  const orders = await getOrders();

  if (orders.length === 0) {
    await saveOrders([
      {
        id: "o1",
        customerName: "علی",
        pickup: "میدان آزادی",
        dropoff: "تجریش",
        status: "pending",
      },
      {
        id: "o2",
        customerName: "رضا",
        pickup: "صادقیه",
        dropoff: "ونک",
        status: "pending",
      },
    ]);
  }
}
