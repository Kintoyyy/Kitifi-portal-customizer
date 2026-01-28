import { useState } from 'react';
import './App.css';
import HTMLEditor from './components/HTMLEditor';
import CSSEditor from './components/CSSEditor';
import Preview from './components/Preview';
import StyleControls from './components/StyleControls';

const defaultHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Captive Portal</title>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to Our Network</h1>
      <p class="subtitle">Please log in to continue</p>
    </div>
    
    <div class="login-box">
      <form class="login-form">
        <div class="form-group">
          <label for="username">Username or Email</label>
          <input type="text" id="username" name="username" placeholder="Enter your username">
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password">
        </div>
        
        <button type="submit" class="btn-primary">Login</button>
        
        <div class="form-footer">
          <a href="#" class="link">Forgot password?</a>
          <span class="divider">|</span>
          <a href="#" class="link">Create account</a>
        </div>
      </form>
    </div>
    
    <div class="footer">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <p class="terms">
        <a href="#" class="link">Terms of Service</a> | 
        <a href="#" class="link">Privacy Policy</a>
      </p>
    </div>
  </div>
</body>
</html>`;

const defaultCSS = `body {
  margin: 0;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  width: 100%;
  padding: 40px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  margin: 0 0 10px 0;
  color: #333;
  font-size: 28px;
  font-weight: 600;
}

.subtitle {
  margin: 0;
  color: #666;
  font-size: 16px;
}

.login-box {
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: #667eea;
}

.btn-primary {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-top: 10px;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.form-footer {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
}

.divider {
  margin: 0 10px;
  color: #ccc;
}

.footer {
  text-align: center;
  font-size: 12px;
  color: #666;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.footer p {
  margin: 5px 0;
}

.link {
  color: #667eea;
  text-decoration: none;
  transition: color 0.2s;
}

.link:hover {
  color: #764ba2;
  text-decoration: underline;
}

.terms {
  margin-top: 10px;
}`;

function App() {
  const [htmlCode, setHtmlCode] = useState(defaultHTML);
  const [cssCode, setCssCode] = useState(defaultCSS);
  const [styles, setStyles] = useState({
    primaryColor: '#667eea',
    secondaryColor: '#764ba2',
    textColor: '#333333',
    backgroundColor: '#ffffff',
    fontFamily: 'Segoe UI',
    fontSize: '16px',
    buttonRadius: '8px',
    inputRadius: '8px',
    containerPadding: '40px',
    elementSpacing: '20px',
  });

  const handleStyleChange = (key, value) => {
    setStyles((prev) => ({ ...prev, [key]: value }));
  };

  const generateCSSFromStyles = () => {
    return `body {
  margin: 0;
  padding: 20px;
  font-family: '${styles.fontFamily}', sans-serif;
  background: linear-gradient(135deg, ${styles.primaryColor} 0%, ${styles.secondaryColor} 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background: ${styles.backgroundColor};
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  width: 100%;
  padding: ${styles.containerPadding};
}

.header {
  text-align: center;
  margin-bottom: ${styles.elementSpacing};
}

h1 {
  margin: 0 0 10px 0;
  color: ${styles.textColor};
  font-size: 28px;
  font-weight: 600;
}

.subtitle {
  margin: 0;
  color: #666;
  font-size: ${styles.fontSize};
}

.login-box {
  margin-bottom: ${styles.elementSpacing};
}

.form-group {
  margin-bottom: ${styles.elementSpacing};
}

label {
  display: block;
  margin-bottom: 8px;
  color: ${styles.textColor};
  font-weight: 500;
  font-size: 14px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: ${styles.inputRadius};
  font-size: 15px;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: ${styles.primaryColor};
}

.btn-primary {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, ${styles.primaryColor} 0%, ${styles.secondaryColor} 100%);
  color: white;
  border: none;
  border-radius: ${styles.buttonRadius};
  font-size: ${styles.fontSize};
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-top: 10px;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.form-footer {
  text-align: center;
  margin-top: ${styles.elementSpacing};
  font-size: 14px;
}

.divider {
  margin: 0 10px;
  color: #ccc;
}

.footer {
  text-align: center;
  font-size: 12px;
  color: #666;
  padding-top: ${styles.elementSpacing};
  border-top: 1px solid #e0e0e0;
}

.footer p {
  margin: 5px 0;
}

.link {
  color: ${styles.primaryColor};
  text-decoration: none;
  transition: color 0.2s;
}

.link:hover {
  color: ${styles.secondaryColor};
  text-decoration: underline;
}

.terms {
  margin-top: 10px;
}`;
  };

  const applyCSSFromStyles = () => {
    setCssCode(generateCSSFromStyles());
  };

  const resetToDefault = () => {
    setHtmlCode(defaultHTML);
    setCssCode(defaultCSS);
    setStyles({
      primaryColor: '#667eea',
      secondaryColor: '#764ba2',
      textColor: '#333333',
      backgroundColor: '#ffffff',
      fontFamily: 'Segoe UI',
      fontSize: '16px',
      buttonRadius: '8px',
      inputRadius: '8px',
      containerPadding: '40px',
      elementSpacing: '20px',
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎨 Kitifi Portal Customizer</h1>
        <p>Customize your captive portal with live preview</p>
      </header>

      <div className="editor-container">
        <div className="controls-panel">
          <StyleControls
            styles={styles}
            onStyleChange={handleStyleChange}
            onApply={applyCSSFromStyles}
            onReset={resetToDefault}
          />
        </div>

        <div className="code-panels">
          <div className="editor-panel">
            <HTMLEditor value={htmlCode} onChange={setHtmlCode} />
          </div>
          <div className="editor-panel">
            <CSSEditor value={cssCode} onChange={setCssCode} />
          </div>
        </div>

        <div className="preview-panel">
          <Preview html={htmlCode} css={cssCode} />
        </div>
      </div>
    </div>
  );
}

export default App;
