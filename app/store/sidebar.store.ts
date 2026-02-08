import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarState {
  isCollapsed: boolean;
  isHovered: boolean;
  toggleSidebar: () => void;
  setCollapsed: (collapsed: boolean) => void;
  setHovered: (hovered: boolean) => void;
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      isCollapsed: false,
      isHovered: false,
      toggleSidebar: () =>
        set((state) => ({ isCollapsed: !state.isCollapsed })),
      setCollapsed: (collapsed: boolean) => set({ isCollapsed: collapsed }),
      setHovered: (hovered: boolean) => set({ isHovered: hovered }),
    }),
    {
      name: "sidebar-storage",
    },
  ),
);
