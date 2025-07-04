export interface ToggleMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
};

export interface NavigationLists {
    id: number;
    name: string;
    path: string;
};