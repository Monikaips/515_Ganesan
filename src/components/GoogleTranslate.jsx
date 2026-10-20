import { useEffect, useRef } from 'react';

export default function GoogleTranslate() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    window.googleTranslateElementInit = () => {
      const mount = document.getElementById('google_translate_element');
      if (!mount || !window.google?.translate) return;
      mount.innerHTML = '';
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };

    const existing = document.getElementById('google-translate-script');
    if (existing) {
      if (window.google?.translate) window.googleTranslateElementInit();
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
  }, []);

  return <li id="google_translate_element" />;
}
