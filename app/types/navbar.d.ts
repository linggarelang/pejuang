export interface ToggleMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
};

export interface NavList {
    id: number;
    name: string;
    path: string;
};