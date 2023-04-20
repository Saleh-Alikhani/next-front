import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        welcome: 'Welcome to my personal website',
        login: 'Login',
      },
    },
    fa: {
      translation: {
        welcome: 'به وبسایت شخصی من خوش آمدید',
        login: 'ورود',
        Logout: 'خروج',
        Dashboard: 'داشبورد',
        Home: 'خانه',
      },
    },
  },
});

export default i18n;
