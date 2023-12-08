import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserState {
  user: Object;
}

const useUserStore = create<UserState>()(
  devtools((set) => ({
    user: {},
    setUser: (user: any) => set((state) => ({ user: user })),
  })),
);

export default useUserStore;
