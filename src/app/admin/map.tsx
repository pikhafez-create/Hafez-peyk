import React, { useState } from "react";
import Page from "../../components/layout/Page";
import ProgressBar from "../../components/ui/ProgressBar";
import EmptyState from "../../components/ui/EmptyState";
import { View } from "react-native";

export default function Map() {
  const [progress] = useState(0.6);

  return (
    <Page title="نقشه">
      <View style={{ padding: 16, gap: 12 }}>
        <ProgressBar progress={progress} />
        <EmptyState title="ماژول نقشه در حال اتصال" />
      </View>
    </Page>
  );
}
