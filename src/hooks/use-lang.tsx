import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang, languages, getTranslations, Translations } from "@/lib/i18n";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    return stored && ["en", "fr", "ar", "es"].includes(stored) ? stored : "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const langInfo = languages.find((l) => l.code === lang)!;

  useEffect(() => {
    document.documentElement.dir = langInfo.dir;
    document.documentElement.lang = lang;
  }, [lang, langInfo.dir]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: getTranslations(lang), dir: langInfo.dir }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
