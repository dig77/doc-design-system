export type Menu = {
  mainLink: boolean;
  url: string;
  name: string;
  active: boolean;
  submenu: { name: string; url: string }[];
};
