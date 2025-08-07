// src/components/common/LanguageContext.js

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  // Use a function to initialize the state to avoid re-running logic on every render.
  // This also ensures the initial document.documentElement.lang is set correctly.
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("jireh-language");
    const resolvedLanguage =
      savedLanguage === "en" || savedLanguage === "am" ? savedLanguage : "en";
    // Set the initial lang attribute on the document root

    document.documentElement.lang = resolvedLanguage;
    return resolvedLanguage;
  });

  // This effect handles changes to the language state.
  // It's not for initial setup, which is handled by useState's initializer.
  useEffect(() => {
    localStorage.setItem("jireh-language", language);
    document.documentElement.lang = language;
  }, [language]);

  // Memoize the update function for performance
  const updateLanguage = useCallback((newLanguage) => {
    setLanguage(newLanguage);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
