export interface TertiaryMenuItem {
  id: number;
  title: string;
  content: string;
}

export interface SecondaryMenuItem {
  id: number;
  title: string;
  tertiaryMenu: TertiaryMenuItem[];
}

export interface Menu {
  id: number;
  title: string;
  secondaryMenu: SecondaryMenuItem[];
}

export interface MenuData {
  menu: Menu[];
}
