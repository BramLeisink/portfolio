// src/lib/data.ts
export interface Project {
	title: string;
	description: string;
	technologies: string[];
	imageUrl?: string;
	githubLink?: string;
	demoLink?: string;
}

export const personalInfo = {
	name: 'Bram Leisink',
	tagline: 'Student, Programmeur & Grafisch Ontwerper',
	bio: "",
	email: 'bramleisink@outlook.com',
	location: 'Nederland',
	socialLinks: {
		linkedin: 'https://www.linkedin.com/in/bram-leisink-a55a532a4',
		github: 'https://github.com/bramleisink'
	}
};

export const skills = [
	'Web Development',
	'Svelte',
	'TypeScript',
	'Tailwind CSS',
	'Grafisch Ontwerp',
	'UI/UX Design',
	'Python',
    'LaTeX'
];

export const projects: Project[] = [
		{
		title: 'Unfolding the Infinite',
		description: 'Dit profielwerkstuk heeft als hoofdvraag: "Is het mogelijk om een algoritme te ontwerpen om n-dimensionale polytopen te ontwikkelen naar (n-1)-dimensionale netstructuren?"',
		technologies: ['LaTeX', 'Python'],
		imageUrl: '/unfolding-the-infinite.png',
		demoLink: 'https://pws.bramleisink.nl'
	},
	
	{
		title: 'Fibonacci Clock',
		description: 'Een unieke klok die gebruik maakt van de fibonacci-reeks.',
		technologies: ['Svelte', 'TailwindCSS', 'ShadcnUI'],
		imageUrl: '/fibonacci-clock.png',
		githubLink: 'https://github.com/bramleisink/fibonacci-clock',
		demoLink: 'https://fibonacci.bramleisink.nl'
	},
	{
		title: 'Nijmegen 2120',
		description:
			'Dit is de site bij een onderzoek naar een duurzame en hoopvolle toekomst voor Nijmegen.',
		technologies: ['React', 'TailwindCSS', 'TypeScript'],
		imageUrl: '/nijmegen2120.jpg',
		demoLink: 'https://nijmegen2120.nl'
	},
	{
		title: 'Visual Panorama Maker',
		description:
			'Maak interactieve en aanpasbare 360-graden rondleidingen, allemaal vanuit een intuïtieve webinterface.',
		technologies: ['Svelte', 'TailwindCSS', 'ShadcnUI', 'Panellum'],
		imageUrl: '/visual-panorama-maker.png',
		githubLink: 'https://github.com/bramleisink/visual-panorama-maker',
		demoLink: 'https://visual-panorama-maker.bramleisink.nl'
	},
	{
		title: 'Wijkmakerij Dukenburg',
		description:
			'We helpen nieuwe initiatieven op te starten, want samen maken wij Dukenburg mooier, krachtiger en gezelliger!',
		technologies: ['Wix'],
		imageUrl: '/wijkmakerij-dukenburg.png',
		demoLink: 'https://wijkmakerijdukenburg.nl'
	}
];
