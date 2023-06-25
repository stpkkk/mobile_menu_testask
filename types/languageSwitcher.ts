import { StaticImageData } from "next/image";

export interface LanguageSwitcherTypes {
  code: string;
  name: string;
  flag: string | StaticImageData;
}
