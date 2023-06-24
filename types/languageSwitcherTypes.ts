import { StaticImageData } from "next/image";

export interface languageSwitcherTypes {
  code: string;
  name: string;
  flag: string | StaticImageData;
}
