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
		title: 'Clone Nike website',
		skills: ['HTML', 'Tailwind'],
		descripcion:
			'A clone of the Nike website, I used Tailwind to create the website.',
		demoURL: 'https://nike-clone.gregoryleroux.com/',
		repoURL: 'https://github.com/lrxgregory/nike-clone-tailwind',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/tickettoridereact.png',
		title: 'Ticket To Ride React',
		skills: ['React', 'TypeScript', 'HTML', 'CSS'],
		descripcion:
			'A website connect to the API created with nodeJS to calculate score.',
		demoURL: 'https://react-ticket-to-ride.vercel.app/',
		repoURL: 'https://github.com/lrxgregory/react-ticket-to-ride',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/tickettorideapi.png',
		title: 'Ticket To Ride NodeJS API',
		skills: ['NodeJS'],
		descripcion:
			'An API with the data of the scores of the differents roads and destinations.',
		demoURL: 'https://ticket-to-ride-api-rest-node-js.onrender.com/api-docs',
		repoURL: 'https://github.com/lrxgregory/node-ticket-to-ride-api-rest',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/falshcard.PNG',
		title: 'Flashcard generator',
		skills: ['JavaScript', 'CSS', 'HTML','PHP'],
		descripcion:
			'A website to create flashcard from a csv file. I created this website to help me to generate many flashcard to learning spanish.',
		demoURL: 'https://flashcardgenerator.online/',
		repoURL: 'https://github.com/lrxgregory/flashcards',
		anim: 'fade-right',
	}
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
	NodeJS: 'skill-icons:nodejs-dark'
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
