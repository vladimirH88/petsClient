import i18n from 'i18next';
import ru from './ru.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
    ru: {
        translation: ru,
    },
} as const;

i18n.use(initReactI18next).init({
    lng: 'ru',
    resources,
});
