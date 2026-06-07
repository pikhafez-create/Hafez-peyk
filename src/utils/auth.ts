import AsyncStorage from "@react-native-async-storage/async-storage";

export type UserRole = "admin" | "driver" | "customer";

export type User = {
  id: string;
  name: string;
  role: UserRole;
};

const USER_KEY = "CURRENT_USER";

export async function setUser(user: User) {
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
}

export async function getUser(): Promise<User | null> {
  const data = await AsyncStorage.getItem(USER_KEY);
  return data ? JSON.parse(data) : null;
}

export async function clearUser() {
  await AsyncStorage.removeItem(USER_KEY);
}
