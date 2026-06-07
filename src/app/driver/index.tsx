import { useEffect, useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { getOrders, updateStatus, Order } from "../../utils/storage";
import { getUser } from "../../utils/auth";
import { useAutoRefresh } from "../../hooks/useAutoRefresh";

export default function DriverPanel() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [driverId, setDriverId] = useState<string>("");

  const loadUser = async () => {
    const user = await getUser();
    if (user?.role === "driver") {
      setDriverId(user.id);
    }
  };

  const load = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  useEffect(() => {
    loadUser();
    load();
  }, []);

  useAutoRefresh(() => {
    load();
    loadUser();
  }, 3000);

  const myOrders = orders.filter(o => o.driver === driverId);

  const refresh = async (fn: () => Promise<void>) => {
    await fn();
    await load();
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        پنل راننده
      </Text>

      {driverId === "" ? (
        <Text>کاربر راننده شناسایی نشد</Text>
      ) : myOrders.length === 0 ? (
        <Text>سفارشی برای شما وجود ندارد</Text>
      ) : (
        myOrders.map(order => (
          <View
            key={order.id}
            style={{
              borderWidth: 1,
              padding: 10,
              marginBottom: 10,
              borderRadius: 8,
            }}
          >
            <Text>مشتری: {order.customerName}</Text>
            <Text>مبدا: {order.pickup}</Text>
            <Text>مقصد: {order.dropoff}</Text>
            <Text>وضعیت: {order.status}</Text>

            {order.status === "assigned" && (
              <Pressable onPress={() =>
                refresh(() => updateStatus(order.id, "picked"))
              }>
                <Text>برداشتن سفارش</Text>
              </Pressable>
            )}

            {order.status === "picked" && (
              <Pressable onPress={() =>
                refresh(() => updateStatus(order.id, "delivering"))
              }>
                <Text>شروع ارسال</Text>
              </Pressable>
            )}

            {order.status === "delivering" && (
              <Pressable onPress={() =>
                refresh(() => updateStatus(order.id, "done"))
              }>
                <Text>تحویل شد</Text>
              </Pressable>
            )}
          </View>
        ))
      )}
    </ScrollView>
  );
}
