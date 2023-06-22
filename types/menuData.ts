export interface MenuItem {
  id: number;
  title: string;
  parentId: number | null;
  content?: string;
  subMenuItems?: MenuItem[];
}

export interface MenuData {
  menuItems: MenuItem[];
}
