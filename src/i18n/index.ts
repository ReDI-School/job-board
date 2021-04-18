import enTranslationMessages from '../../translations/en.json';

const LANGUAGES = ['en'];
const DEFAULT_LOCALE = 'en';

const translationMessages: { [locale: string]: { [key: string]: string } } = {
  en: enTranslationMessages as { [key: string]: string },
};

export const getTranslationMessages = (locale: string) => {
  return translationMessages[locale] || translationMessages[DEFAULT_LOCALE];
};

export function getLocale() {
  const browserLang = window.navigator.language;
  const fallbackLang = browserLang ? browserLang.split('-')[0] : '';
  if (LANGUAGES.indexOf(browserLang) !== -1) {
    return browserLang;
  }
  if (fallbackLang && LANGUAGES.indexOf(fallbackLang) !== -1) {
    return fallbackLang;
  }

  return DEFAULT_LOCALE;
}

export { IntlProvider } from './IntlContext';
export { default as FormattedMessage } from './FormattedMessage';
export { default as useIntl } from './useIntl';
