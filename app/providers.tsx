"use client";
import { Suspense } from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";

import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import i18next from "i18next";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "nl", "by", "ru", "kz", "tr"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
  });

const loadingMarkup = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Suspense fallback={loadingMarkup}>{children}</Suspense>
    </Provider>
  );
}
