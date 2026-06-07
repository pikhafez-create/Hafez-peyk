import { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import {
  getOrders,
  updateStatus,
  assignDriver,
  getDrivers,
  Order,
  Driver
} from "../../utils/storage";
import { useAutoRefresh } from "../../hooks/useAutoRefresh";

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [drivers, setDrivers] = useState<Driver[]>([]);

  const load = async () => {
    const [o, d] = await Promise.all([getOrders(), getDrivers()]);
    setOrders(o);
    setDrivers(d);
  };

  useEffect(() => {
    load();
  }, []);

  useAutoRefresh(() => load(), 4000);

  const refresh = async (fn: () => Promise<void>) => {
    await fn();
    await load();
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        پنل مدیریت سفارش‌ها
      </Text>

      {orders.map(order => (
        <View key={order.id} style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}>
          <Text>مشتری: {order.customerName}</Text>
          <Text>وضعیت: {order.status}</Text>
          <Text>راننده: {order.driver || "تعیین نشده"}</Text>

          <Text>انتخاب راننده:</Text>

          {drivers.map(driver => (
            <Pressable
              key={driver.id}
              onPress={() => refresh(() => assignDriver(order.id, driver.id))}
            >
              <Text>• {driver.name}</Text>
            </Pressable>
          ))}

          <Pressable onPress={() =>
            refresh(() => updateStatus(order.id, "delivering"))
          }>
            <Text>در حال ارسال</Text>
          </Pressable>

          <Pressable onPress={() =>
            refresh(() => updateStatus(order.id, "done"))
          }>
            <Text>تحویل شد</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}
