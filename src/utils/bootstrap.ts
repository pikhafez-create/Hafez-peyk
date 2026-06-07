import { getDrivers, saveDrivers } from "./storage";

export async function bootstrapApp() {
  const drivers = await getDrivers();

  if (!drivers || drivers.length === 0) {
    await saveDrivers([
      { id: "d1", name: "راننده 1" },
      { id: "d2", name: "راننده 2" },
      { id: "d3", name: "راننده 3" },
      { id: "d4", name: "راننده 4" }
    ]);
  }
}
