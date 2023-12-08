import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserState {
  user: Object;
  count: number;
}

const useUserStore = create<UserState>()(
  devtools((set) => ({
    user: {},
    count: 0,
    userCount: (num: number) => set((state) => ({ count: num })),
    setUser: (user: any) => set((state) => ({ user: user })),
  })),
);

export default useUserStore;
