import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getDrivers } from "../../utils/storage";
import { getDriverLocation } from "../../utils/location";

export default function AdminMap() {
  const [drivers, setDrivers] = useState([]);
  const [locations, setLocations] = useState({});

  const load = async () => {
    const d = await getDrivers();
    setDrivers(d);

    const locs = {};
    for (const driver of d) {
      const loc = await getDriverLocation(driver.id);
      if (loc) locs[driver.id] = loc;
    }
    setLocations(locs);
  };

  useEffect(() => {
    load();
    const t = setInterval(load, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 48.1351,
          longitude: 11.582,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {Object.keys(locations).map(id => (
          <Marker
            key={id}
            coordinate={{
              latitude: locations[id].lat,
              longitude: locations[id].lng,
            }}
            title={`راننده ${id}`}
          />
        ))}
      </MapView>
    </View>
  );
}
