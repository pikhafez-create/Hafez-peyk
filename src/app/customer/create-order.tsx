import React, { useState } from "react";
import Page from "../../components/layout/Page";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Stepper from "../../components/ui/Stepper";
import Toast from "../../components/ui/Toast";
import LoaderOverlay from "../../components/ui/LoaderOverlay";
import RadioGroup from "../../components/ui/RadioGroup";
import Toggle from "../../components/ui/Toggle";
import { View, Text } from "react-native";

export default function CreateOrder() {
  const [step] = useState(0);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [type, setType] = useState("normal");
  const [insurance, setInsurance] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setToast(true);
    }, 1200);
  };

  return (
    <Page title="سفارش جدید">
      {loading && <LoaderOverlay />}

      <View style={{ padding: 16, gap: 12 }}>
        <Stepper
          steps={[
            { label: "مبدا" },
            { label: "مقصد" },
            { label: "تأیید" },
          ]}
          current={step}
        />

        <Card>
          <View style={{ gap: 10 }}>
            <Input label="مبدا" value={origin} onChangeText={setOrigin} />
            <Input label="مقصد" value={destination} onChangeText={setDestination} />

            <RadioGroup
              value={type}
              onChange={setType}
              items={[
                { label: "عادی", value: "normal" },
                { label: "فوری", value: "urgent" },
              ]}
            />

            <View style={{ flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center" }}>
              <Text>بیمه</Text>
              <Toggle value={insurance} onChange={setInsurance} />
            </View>
          </View>
        </Card>

        <Button title="ثبت سفارش" onPress={submit} loading={loading} />

        <Toast
          visible={toast}
          message="سفارش ثبت شد"
          onHide={() => setToast(false)}
        />
      </View>
    </Page>
  );
}
