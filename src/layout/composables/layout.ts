interface LayoutConfig {
  ripple: boolean;
  darkTheme: boolean;
  inputStyle: string;
  menuMode: string;
  theme: string;
  scale: number;
  activeMenuItem: string | null;
}

interface LayoutState {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
}

export function useLayout(): {
  layoutConfig: LayoutConfig;
  layoutState: LayoutState;
  changeThemeSettings: (theme: string, darkTheme: boolean) => void;
  setScale: (scale: number) => void;
  onMenuToggle: () => void;
  isSidebarActive: Ref<boolean>;
  isDarkTheme: Ref<boolean>;
  setActiveMenuItem: (item: string | null) => void;
} {
  const layoutConfig: LayoutConfig = reactive({
    ripple: false,
    darkTheme: false,
    inputStyle: 'outlined',
    menuMode: 'static',
    theme: 'lara-light-indigo',
    scale: 14,
    activeMenuItem: null
  });

  const layoutState: LayoutState = reactive({
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false
  });

  const changeThemeSettings = (theme: string, darkTheme: boolean) => {
    layoutConfig.darkTheme = darkTheme;
    layoutConfig.theme = theme;
  };

  const setScale = (scale: number) => {
    layoutConfig.scale = scale;
  };

  const setActiveMenuItem = (item: string | null) => {
    layoutConfig.activeMenuItem = item;
  };

  const onMenuToggle = () => {
    if (layoutConfig.menuMode === 'overlay') {
      layoutState.overlayMenuActive = !layoutState.overlayMenuActive;
    }

    if (window.innerWidth > 991) {
      layoutState.staticMenuDesktopInactive = !layoutState.staticMenuDesktopInactive;
    } else {
      layoutState.staticMenuMobileActive = !layoutState.staticMenuMobileActive;
    }
  };

  const isSidebarActive = computed(() => layoutState.overlayMenuActive || layoutState.staticMenuMobileActive);

  const isDarkTheme = computed(() => layoutConfig.darkTheme);

  return {
    layoutConfig,
    layoutState,
    changeThemeSettings,
    setScale,
    onMenuToggle,
    isSidebarActive,
    isDarkTheme,
    setActiveMenuItem
  };
}
