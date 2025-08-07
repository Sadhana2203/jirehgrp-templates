// src/App.jsx

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Header from "@/components/common/Header";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);
  const t = useTranslation();

  return (
    <>
      <Header />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="flex gap-10 mb-6">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo w-32 h-32" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={reactLogo}
              className="logo react w-32 h-32"
              alt="React logo"
            />
          </a>
        </div>

        <h1 className="text-3xl font-bold mb-4">{t.vite_react}</h1>

        <div className="card mb-4">
          <Button onClick={() => setCount((count) => count + 1)}>
            {t.count_is} {count}
          </Button>
          <p className="mt-2">
            {t.edit_code} <code>src/App.tsx</code> {t.and_save}
          </p>
        </div>

        <p className="read-the-docs text-muted-foreground text-sm">
          {t.read_the_docs}
        </p>
      </main>
    </>
  );
}

export default App;
