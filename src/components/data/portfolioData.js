/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/nike.png',
		title: {
			en: 'Clone Nike Website',
			fr: 'Clone du site de Nike',
			es: 'Clonar el sitio web de Nike',
		},
		skills: ['HTML', 'Tailwind'],
		descripcion: {
			en: 'A clone of the Nike website, I used Tailwind to create the website.',
			fr: "Un clone du site web de Nike, j'ai utilisé Tailwind pour créer le site web.",
			es: 'Un clon del sitio web de Nike, utilicé Tailwind para crear el sitio web.',
		},

		demoURL: 'https://nike-clone.gregoryleroux.com/',
		repoURL: 'https://github.com/lrxgregory/nike-clone-tailwind',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/tickettoridereact.png',
		title: {
			en: 'Ticket To Ride React',
			fr: 'Les aventuriers du rail React',
			es: 'Ticket To Ride React',
		},
		skills: ['React', 'TypeScript', 'HTML', 'CSS'],
		descripcion: {
			en: 'A website connect to the API created with nodeJS to calculate score.',
			fr: "Un site web se connecte à l'API créée avec nodeJS pour calculer le score.",
			es: 'Un sitio web se conecta a la API creada con nodeJS para calcular la puntuación.',
		},
		demoURL: 'https://react-ticket-to-ride.vercel.app/',
		repoURL: 'https://github.com/lrxgregory/react-ticket-to-ride',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/tickettorideapi.png',
		title: {
			en: 'Ticket To Ride NodeJS API',
			fr: 'API NodeJS pour les Aventuriers du Rail',
			es: 'Ticket To Ride API NodeJS',
		},
		skills: ['NodeJS'],
		descripcion: {
			en: 'An API with the data of the scores of the different roads and destinations.',
			fr: 'Une API contenant les données des scores des différentes routes et destinations.',
			es: 'Una API con los datos de las puntuaciones de las diferentes carreteras y destinos.',
		},
		demoURL:
			'https://ticket-to-ride-api-rest-node-js.onrender.com/api-docs',
		repoURL: 'https://github.com/lrxgregory/node-ticket-to-ride-api-rest',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/falshcard.PNG',
		title: {
			en: 'Flashcard Generator',
			fr: 'Générateur de Flashcards',
			es: 'Generador de Tarjetas',
		},
		skills: ['JavaScript', 'CSS', 'HTML', 'PHP'],
		descripcion: {
			en: 'A website to create flashcards from a CSV file. I created this website to help me generate many flashcards to learn Spanish.',
			fr: "Un site web pour créer des flashcards à partir d'un fichier CSV. J'ai créé ce site pour m'aider à générer de nombreuses flashcards afin d'apprendre l'espagnol.",
			es: 'Un sitio web para crear tarjetas a partir de un archivo CSV. Creé este sitio para ayudarme a generar muchas tarjetas y aprender español.',
		},
		demoURL: 'https://flashcardgenerator.online/',
		repoURL: 'https://github.com/lrxgregory/flashcards',
		anim: 'fade-right',
	},
];

const skillIcons = {
	TypeScript: 'skill-icons:typescript',
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	HTML: 'skill-icons:html',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	PHP: 'skill-icons:php-dark',
	NodeJS: 'skill-icons:nodejs-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
