import FlagUSA from "../public/assets/icons/flag-USA.svg";
import FlagNL from "../public/assets/icons/flag-NL.svg";
import FlagBY from "../public/assets/icons/flag-BY.svg";
import FlagRU from "../public/assets/icons/flag-RU.svg";
import FlagKZ from "../public/assets/icons/flag-KZ.svg";
import FlagTR from "../public/assets/icons/flag-TR.svg";
import { LanguageSwitcherTypes } from "@types";

export const languages: LanguageSwitcherTypes[] = [
  {
    code: "en",
    name: "United States",
    flag: FlagUSA,
  },
  {
    code: "nl",
    name: "Netherlands",
    flag: FlagNL,
  },
  {
    code: "by",
    name: "Беларусь",
    flag: FlagBY,
  },
  {
    code: "ru",
    name: "Россия",
    flag: FlagRU,
  },
  {
    code: "kz",
    name: "Казахстан",
    flag: FlagKZ,
  },
  {
    code: "tr",
    name: "Türkiye",
    flag: FlagTR,
  },
];
