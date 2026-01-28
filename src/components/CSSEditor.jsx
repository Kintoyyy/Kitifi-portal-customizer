import { useState } from 'react';
import './CSSEditor.css';

function CSSEditor({ value, onChange }) {
  const [lineCount, setLineCount] = useState(value.split('\n').length);

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
    setLineCount(newValue.split('\n').length);
  };

  return (
    <div className="css-editor">
      <div className="editor-header">
        <span className="editor-title">🎨 CSS Editor</span>
        <span className="editor-info">{lineCount} lines</span>
      </div>
      <textarea
        className="code-textarea"
        value={value}
        onChange={handleChange}
        spellCheck={false}
        placeholder="Enter your CSS code here..."
      />
    </div>
  );
}

export default CSSEditor;
