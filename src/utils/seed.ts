import { getDrivers, saveDrivers } from "./storage";

export async function seedDrivers() {
  const existing = await getDrivers();

  if (existing.length === 0) {
    await saveDrivers([
      { id: "d1", name: "راننده 1" },
      { id: "d2", name: "راننده 2" },
      { id: "d3", name: "راننده 3" }
    ]);
  }
}
