// @ts-check
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import paraglide from '@inlang/paraglide-astro';
import { defineConfig } from 'astro/config';

// Configuration complète combinant toutes les intégrations
export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	// Configuration pour l'internationalisation avec paraglide
	i18n: {
		locales: ['en', 'fr', 'es'],
		defaultLocale: 'en',
	},
	// Liste de toutes les intégrations
	integrations: [
		react(),
		tailwind(),
		sitemap(),
		paraglide({
			// recommended settings for Paraglide
			project: './project.inlang',
			outdir: './src/paraglide', // where your files should be generated
		}),
	],
});
