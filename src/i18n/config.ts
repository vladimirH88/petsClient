import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './ru.json';

const resources = {
    ru: {
        translation: ru,
    },
} as const;

void i18n.use(initReactI18next).init({
    lng: 'ru',
    resources,
});

export default resources;
