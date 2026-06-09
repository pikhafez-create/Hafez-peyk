import React, { useState } from "react";
import Page from "../components/layout/Page";
import ProfileCard from "../components/ProfileCard";
import Avatar from "../components/ui/Avatar";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import { View, Text } from "react-native";

export default function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <Page title="پروفایل">
      <View style={{ padding: 16, gap: 12 }}>
        <Avatar name="User" />

        <ProfileCard name="کاربر سیستم" role="مشتری / راننده / مدیر" />

        <Button title="تنظیمات" onPress={() => setOpen(true)} />

        <Modal visible={open} onClose={() => setOpen(false)}>
          <Text>تنظیمات کاربر</Text>
        </Modal>
      </View>
    </Page>
  );
}
