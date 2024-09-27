import en from '../locales/en/translation.json';
import es from '../locales/es/translation.json';
import fr from '../locales/fr/translation.json';

export function getTranslation(lang) {
	switch (lang) {
		case 'en':
			return en;
		case 'fr':
			return fr;
		case 'es':
			return es;
		default:
			return en;
	}
}
