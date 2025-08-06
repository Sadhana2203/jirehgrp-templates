import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from '@/components/common/Header';
import { useTranslation } from '@/hooks/useTranslation';

function App() {
  const [count, setCount] = useState(0);
  const t = useTranslation();

  return (
    <>
      <Header />
      <main className="relative z-10">
        <div>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>{t.vite_react}</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            {t.count_is} {count}
          </button>
          <p>
            {t.edit_code}{' '}
            <code>src/App.tsx</code> {t.and_save}
          </p>
        </div>
        <p className="read-the-docs">
          {t.read_the_docs}
        </p>
      </main>
    </>
  );
}

export default App;