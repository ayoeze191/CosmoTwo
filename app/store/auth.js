import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";



export const useAuthStore = create()(
  devtools(
    persist(
      (set, get) => ({
        user: null,
        token: null,
        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
        setToken: (token) => {
          localStorage.setItem("token", token);
          set({ token: { token } });
        },
        getInitials: () => {
          const user = get().user;
          const firstName = user?.firstName;
          const lastName = user?.lastName;
          const initials = `${firstName?.charAt(0)}${lastName?.charAt(0)}`;
          return initials;
        },
        logout: (callback) => {
          if (callback) callback();
          localStorage.removeItem("token");
          set({ user: null, token: null });
        },
      }),
      { name: "authStore" },
    ),
  ),
);
