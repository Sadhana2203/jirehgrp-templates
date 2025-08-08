// src/components/common/Header.js

import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

const Header = () => {
  return (
    <div className="absolute top-0 right-0 z-50">
      <div className="flex items-center gap-4 p-4">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </div>
  );
};

export default Header;