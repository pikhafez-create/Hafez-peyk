import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

type Props = {
  value: boolean;
  onChange: (v: boolean) => void;
};

export default function Toggle({ value, onChange }: Props) {
  return (
    <Pressable
      onPress={() => onChange(!value)}
      style={[styles.track, value && styles.activeTrack]}
    >
      <View style={[styles.thumb, value && styles.activeThumb]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: 44,
    height: 26,
    borderRadius: 13,
    backgroundColor: colors.border,
    justifyContent: "center",
    padding: 3,
  },
  activeTrack: {
    backgroundColor: colors.primary,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  activeThumb: {
    alignSelf: "flex-end",
  },
});
