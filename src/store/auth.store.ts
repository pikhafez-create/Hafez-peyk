import { create } from "zustand";

type Role = "admin" | "driver" | "customer" | null;

type AuthState = {
  user: null | { id: string; phone: string };
  role: Role;
  login: (phone: string, role: Role) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  role: null,

  login: (phone, role) =>
    set({
      user: { id: Date.now().toString(), phone },
      role,
    }),

  logout: () => set({ user: null, role: null }),
}));
