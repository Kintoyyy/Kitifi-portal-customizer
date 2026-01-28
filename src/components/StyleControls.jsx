import './StyleControls.css';

function StyleControls({ styles, onStyleChange, onApply, onReset }) {
  const fontOptions = [
    'Segoe UI',
    'Arial',
    'Helvetica',
    'Times New Roman',
    'Georgia',
    'Courier New',
    'Verdana',
    'Tahoma',
    'Trebuchet MS',
    'Impact',
    'Comic Sans MS',
  ];

  return (
    <div className="style-controls">
      <div className="controls-header">
        <h2>⚙️ Style Controls</h2>
        <p className="controls-description">Customize your portal appearance</p>
      </div>

      <div className="control-section">
        <h3>🎨 Colors</h3>
        
        <div className="control-group">
          <label htmlFor="primaryColor">Primary Color</label>
          <div className="color-input-wrapper">
            <input
              type="color"
              id="primaryColor"
              value={styles.primaryColor}
              onChange={(e) => onStyleChange('primaryColor', e.target.value)}
            />
            <input
              type="text"
              value={styles.primaryColor}
              onChange={(e) => onStyleChange('primaryColor', e.target.value)}
              className="color-text-input"
            />
          </div>
        </div>

        <div className="control-group">
          <label htmlFor="secondaryColor">Secondary Color</label>
          <div className="color-input-wrapper">
            <input
              type="color"
              id="secondaryColor"
              value={styles.secondaryColor}
              onChange={(e) => onStyleChange('secondaryColor', e.target.value)}
            />
            <input
              type="text"
              value={styles.secondaryColor}
              onChange={(e) => onStyleChange('secondaryColor', e.target.value)}
              className="color-text-input"
            />
          </div>
        </div>

        <div className="control-group">
          <label htmlFor="textColor">Text Color</label>
          <div className="color-input-wrapper">
            <input
              type="color"
              id="textColor"
              value={styles.textColor}
              onChange={(e) => onStyleChange('textColor', e.target.value)}
            />
            <input
              type="text"
              value={styles.textColor}
              onChange={(e) => onStyleChange('textColor', e.target.value)}
              className="color-text-input"
            />
          </div>
        </div>

        <div className="control-group">
          <label htmlFor="backgroundColor">Background Color</label>
          <div className="color-input-wrapper">
            <input
              type="color"
              id="backgroundColor"
              value={styles.backgroundColor}
              onChange={(e) => onStyleChange('backgroundColor', e.target.value)}
            />
            <input
              type="text"
              value={styles.backgroundColor}
              onChange={(e) => onStyleChange('backgroundColor', e.target.value)}
              className="color-text-input"
            />
          </div>
        </div>
      </div>

      <div className="control-section">
        <h3>📝 Typography</h3>
        
        <div className="control-group">
          <label htmlFor="fontFamily">Font Family</label>
          <select
            id="fontFamily"
            value={styles.fontFamily}
            onChange={(e) => onStyleChange('fontFamily', e.target.value)}
            className="select-input"
          >
            {fontOptions.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="fontSize">Font Size</label>
          <div className="range-input-wrapper">
            <input
              type="range"
              id="fontSize"
              min="12"
              max="24"
              value={parseInt(styles.fontSize)}
              onChange={(e) => onStyleChange('fontSize', `${e.target.value}px`)}
              className="range-input"
            />
            <span className="range-value">{styles.fontSize}</span>
          </div>
        </div>
      </div>

      <div className="control-section">
        <h3>📐 Layout</h3>
        
        <div className="control-group">
          <label htmlFor="buttonRadius">Button Radius</label>
          <div className="range-input-wrapper">
            <input
              type="range"
              id="buttonRadius"
              min="0"
              max="30"
              value={parseInt(styles.buttonRadius)}
              onChange={(e) => onStyleChange('buttonRadius', `${e.target.value}px`)}
              className="range-input"
            />
            <span className="range-value">{styles.buttonRadius}</span>
          </div>
        </div>

        <div className="control-group">
          <label htmlFor="inputRadius">Input Radius</label>
          <div className="range-input-wrapper">
            <input
              type="range"
              id="inputRadius"
              min="0"
              max="30"
              value={parseInt(styles.inputRadius)}
              onChange={(e) => onStyleChange('inputRadius', `${e.target.value}px`)}
              className="range-input"
            />
            <span className="range-value">{styles.inputRadius}</span>
          </div>
        </div>

        <div className="control-group">
          <label htmlFor="containerPadding">Container Padding</label>
          <div className="range-input-wrapper">
            <input
              type="range"
              id="containerPadding"
              min="10"
              max="60"
              value={parseInt(styles.containerPadding)}
              onChange={(e) => onStyleChange('containerPadding', `${e.target.value}px`)}
              className="range-input"
            />
            <span className="range-value">{styles.containerPadding}</span>
          </div>
        </div>

        <div className="control-group">
          <label htmlFor="elementSpacing">Element Spacing</label>
          <div className="range-input-wrapper">
            <input
              type="range"
              id="elementSpacing"
              min="5"
              max="40"
              value={parseInt(styles.elementSpacing)}
              onChange={(e) => onStyleChange('elementSpacing', `${e.target.value}px`)}
              className="range-input"
            />
            <span className="range-value">{styles.elementSpacing}</span>
          </div>
        </div>
      </div>

      <div className="control-actions">
        <button onClick={onApply} className="btn-apply">
          Apply Styles to CSS
        </button>
        <button onClick={onReset} className="btn-reset">
          Reset to Default
        </button>
      </div>
    </div>
  );
}

export default StyleControls;
