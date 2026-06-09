import React from "react";
import { Modal as RNModal, View, StyleSheet, Pressable } from "react-native";
import { colors } from "../../theme/colors";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ visible, onClose, children }: Props) {
  return (
    <RNModal transparent visible={visible} animationType="fade">
      <View style={styles.backdrop}>
        <Pressable style={styles.overlay} onPress={onClose} />
        <View style={styles.content}>{children}</View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  content: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
  },
});
