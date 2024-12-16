import React from 'react';

const LanguageSelector = ({ language, onChange }) => {
  const languages = [
    { value: 'go', label: 'Go' },
    { value: 'python', label: 'Python' },
  ];

  return (
    <div className="lang-select">
      <label>
        Язык:&nbsp;
        <select value={language} onChange={onChange}>
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default LanguageSelector;
