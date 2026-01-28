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
    const fullHTML = html.replace('</head>', `<style>${css}</style></head>`);
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
        />
      </div>
    </div>
  );
}

export default Preview;
