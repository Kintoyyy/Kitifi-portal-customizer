import { useEffect, useRef } from 'react';
import './Preview.css';

function Preview({ html, css }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const document = iframe.contentDocument;
    if (!document) return;

    // Inject the HTML and CSS into the iframe
    let fullHTML = html;
    
    // If there's a closing head tag, inject the CSS there
    if (fullHTML.includes('</head>')) {
      fullHTML = fullHTML.replace('</head>', `<style>${css}</style></head>`);
    } else if (fullHTML.includes('<head>')) {
      // If there's an opening head tag but no closing, add after opening tag
      fullHTML = fullHTML.replace('<head>', `<head><style>${css}</style>`);
    } else {
      // If no head tag, wrap content with full HTML structure including CSS
      fullHTML = `<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}</body></html>`;
    }
    
    document.open();
    document.write(fullHTML);
    document.close();
  }, [html, css]);

  return (
    <div className="preview">
      <div className="preview-header">
        <span className="preview-title">👁️ Live Preview</span>
        <span className="preview-badge">Real-time</span>
      </div>
      <div className="preview-container">
        <iframe
          ref={iframeRef}
          className="preview-iframe"
          title="Preview"
          sandbox="allow-same-origin"
          // Note: Scripts are intentionally disabled for security
          // to prevent execution of potentially malicious user input
        />
      </div>
    </div>
  );
}

export default Preview;
