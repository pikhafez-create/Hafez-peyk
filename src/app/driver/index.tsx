import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Screen from "../../components/layout/Screen";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";
import SearchBar from "../../components/SearchBar";
import FilterBar from "../../components/FilterBar";
import DashboardCard from "../../components/DashboardCard";
import OrderCard from "../../components/OrderCard";
import Button from "../../components/Button";

export default function DriverScreen() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header title="پنل راننده" />

      <Screen>
        <ProfileCard
          name="احمد محمدی"
          role="راننده"
        />

        <SearchBar
          value={search}
          onChangeText={setSearch}
        />

        <FilterBar />

        <View style={styles.statsRow}>
          <View style={styles.card}>
            <DashboardCard
              value="3"
              label="سفارش فعال"
            />
          </View>

          <View style={styles.card}>
            <DashboardCard
              value="12"
              label="تحویل امروز"
            />
          </View>
        </View>

        <Text style={styles.title}>
          مأموریت فعلی
        </Text>

        <OrderCard
          id="1254"
          customer="علی رضایی"
          pickup="بازار مرکزی"
          destination="میدان آزادی"
        />

        <Button
          title="شروع مأموریت"
          onPress={() => {}}
        />

        <Text style={styles.title}>
          سفارش‌های تخصیص یافته
        </Text>

        <OrderCard
          id="1255"
          customer="محمد کریمی"
          pickup="ترمینال"
          destination="خیابان امام"
        />

        <OrderCard
          id="1256"
          customer="رضا احمدی"
          pickup="میدان شهدا"
          destination="بلوار آزادی"
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: "row-reverse",
    marginBottom: 16,
  },

  card: {
    flex: 1,
    marginHorizontal: 4,
  },

  title: {
    textAlign: "right",
    fontSize: 18,
    fontWeight: "800",
    marginVertical: 16,
  },
});
