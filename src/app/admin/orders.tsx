import React, { useState } from "react";
import Page from "../../components/layout/Page";
import StateView from "../../components/ui/StateView";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import SegmentedControl from "../../components/ui/SegmentedControl";
import SearchInput from "../../components/ui/SearchInput";
import { View, Text } from "react-native";

export default function Orders() {
  const [loading] = useState(false);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const data = [
    { id: 1, title: "سفارش 1", status: "success" },
    { id: 2, title: "سفارش 2", status: "warning" },
  ];

  const filtered = data
    .filter((i) => (filter === "all" ? true : i.status === filter))
    .filter((i) => i.title.includes(search));

  return (
    <Page title="سفارش‌ها">
      <View style={{ padding: 16, gap: 10 }}>
        <SearchInput
          value={search}
          onChangeText={setSearch}
          placeholder="جستجو"
        />

        <SegmentedControl
          items={[
            { label: "همه", value: "all" },
            { label: "موفق", value: "success" },
            { label: "در انتظار", value: "warning" },
          ]}
          value={filter}
          onChange={setFilter}
        />

        <StateView loading={loading} empty={filtered.length === 0}>
          <View style={{ gap: 10 }}>
            {filtered.map((item) => (
              <Card key={item.id}>
                <Text>{item.title}</Text>
                <Badge label={item.status} variant={item.status as any} />
              </Card>
            ))}
          </View>
        </StateView>
      </View>
    </Page>
  );
}
