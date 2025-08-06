// @/components/common/LanguageContext.tsx

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type Language = "en" | "am";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Use a function to initialize the state to avoid re-running logic on every render.
  // This also ensures the initial document.documentElement.lang is set correctly.
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("jireh-language");
    const resolvedLanguage =
      savedLanguage === "en" || savedLanguage === "am" ? (savedLanguage as Language) : "en";
    
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
  const updateLanguage = useCallback((newLanguage: Language) => {
    setLanguage(newLanguage);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};