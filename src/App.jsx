import React, { useState } from 'react';
import Description from './components/Description';
import LanguageSelector from './components/LanguageSelector';
import EditorComponent from './components/EditorComponent';
import ResultOutput from './components/ResultOutput';
import { mockServer } from './services/mockServer';

function App() {
  const [language, setLanguage] = useState('go');
  const [code, setCode] = useState('// это пример кода\nfmt.Println("Hello, world!")');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRun = async () => {
    setIsLoading(true);
    setResult('');
    try {
      const response = await mockServer({ language, code });
      if (response.status === 'success') {
        setResult(response.output);
      } else {
        setResult(`Ошибка: ${response.error}`);
      }
    } catch (e) {
      setResult(`Ошибка: ${e.message}`);
    }
    setIsLoading(false);
  };

  return (
    <div className="container">
      <Description />
      <LanguageSelector
        language={language}
        onChange={(e) => setLanguage(e.target.value)}
      />
      <EditorComponent language={language} code={code} onCodeChange={setCode} />
      <button className="run-button" onClick={handleRun} disabled={isLoading}>
        {isLoading ? 'Выполняется...' : 'Запустить'}
      </button>
      <ResultOutput result={result} />
    </div>
  );
}

export default App;
