// src/components/common/LanguageContext.js

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const LanguageContext = createContext(undefined); // Removed type annotation for createContext

export function LanguageProvider({ children }) { // Removed type annotation for children prop
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("jireh-language");
    const resolvedLanguage =
      savedLanguage === "en" || savedLanguage === "am" ? savedLanguage : "en"; // Removed 'as Language' cast
    
    document.documentElement.lang = resolvedLanguage;
    
    return resolvedLanguage;
  });

  useEffect(() => {
    localStorage.setItem("jireh-language", language);
    document.documentElement.lang = language;
  }, [language]);
  
  const updateLanguage = useCallback((newLanguage) => { // Removed type annotation for newLanguage
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