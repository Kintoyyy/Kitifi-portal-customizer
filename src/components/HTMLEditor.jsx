import { useState } from 'react';
import './HTMLEditor.css';

function HTMLEditor({ value, onChange }) {
  const [lineCount, setLineCount] = useState(value.split('\n').length);

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
    setLineCount(newValue.split('\n').length);
  };

  return (
    <div className="html-editor">
      <div className="editor-header">
        <span className="editor-title">📝 HTML Editor</span>
        <span className="editor-info">{lineCount} lines</span>
      </div>
      <textarea
        className="code-textarea"
        value={value}
        onChange={handleChange}
        spellCheck={false}
        placeholder="Enter your HTML code here..."
      />
    </div>
  );
}

export default HTMLEditor;
