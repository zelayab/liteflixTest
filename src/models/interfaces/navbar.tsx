export enum NavItemKey {
  HOME = "HOME",
  SERIES = "SERIES",
  MOVIES = "MOVIES",
  RECENTLY_ADDED = "RECENTLY_ADDED",
  POPULAR = "POPULAR",
  MY_MOVIES = "MY_MOVIES",
  MY_LIST = "MY_LIST",
  ADD_MOVIE = "ADD_MOVIE",
  LOG_OUT = "LOG_OUT",
}

export interface NavItem {
  label: string;
  href: string;
  modalNav?: boolean;
}

export interface NavItems {
  [key: string]: NavItem;
}
