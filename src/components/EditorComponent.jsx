import React from 'react';
import Editor from '@monaco-editor/react';

const EditorComponent = ({ language, code, onCodeChange }) => {
  const monacoLanguage = language === 'go' ? 'go' : 'python';

  return (
    <div className="editor-container">
      <Editor
        height="100%"
        language={monacoLanguage}
        value={code}
        onChange={(value) => onCodeChange(value || '')}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
        }}
      />
    </div>
  );
};

export default EditorComponent;
