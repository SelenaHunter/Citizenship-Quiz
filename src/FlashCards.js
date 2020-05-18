
import React, {Component} from "react";
import Question from "./Question";
import Answer from "./Answer";
import GameOver from "./GameOver";

class FlashCards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedState: props.selectedState,
			quizQuestions: this.questionList,
			answerIsVisible: false,
			currentCard: {},
			count: 0,

			isSixtyFiveTwenty: props.isSixtyFiveTwenty,
			currentSenators: props.currentSenators,
			currentRepresentatives: props.currentRepresentatives,
		}
		this.handleClick = this.handleClick.bind(this)
		this.chooseRandomQuestions = this.chooseRandomQuestions.bind(this)
	}
	questionList = [
		{
			id: 0,
			number: 1,
			category: "American Government: A: Principles of American Democracy",
			question: "What is the supreme law of the land?",
			answer: "The Constitution.",
			sixtyFiveTwenty: false,
		},
		{
			id: 1,
			number: 2,
			category: "American Government: A: Principles of American Democracy",
			question: "What does the Constitution do?",
			answer: "Sets up the government.\nDefines the government.\nProtects basic rights of Americans.",
			sixtyFiveTwenty: false,
		},
		{
			id: 2,
			number: 3,
			category: "American Government: A: Principles of American Democracy",
			question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
			answer: "We the People.",
			sixtyFiveTwenty: false,
		},
		{
			id: 3,
			number: 4,
			category: "American Government: A: Principles of American Democracy",
			question: "What is an amendment?",
			answer: "A change (to the Constitution).\nAn addition (to the Constitution).",
			sixtyFiveTwenty: false,
		},
		{
			id: 4,
			number: 5,
			category: "American Government: A: Principles of American Democracy",
			question: "What do we call the first ten amendments to the Constitution?",
			answer: "The Bill of Rights.",
			sixtyFiveTwenty: false,
		},
		{
			id: 5,
			number: 6,
			category: "American Government: A: Principles of American Democracy",
			question: "What is one right or freedom from the First Amendment?",
			answer: "Speech.\nReligion.\nAssembly.\nPress.\nPetition the government.",
			sixtyFiveTwenty: true,
		},
		{
			id: 6,
			number: 7,
			category: "American Government: A: Principles of American Democracy",
			question: "How many amendments does the Constitution have?",
			answer: "Twenty-seven (27).",
			sixtyFiveTwenty: false,
		},
		{
			id: 7,
			number: 8,
			category: "American Government: A: Principles of American Democracy",
			question: "What did the Declaration of Independence do?",
			answer: "Announced our independence (from Great Britain).\nDeclared our independence (from Great Britain).\nSaid that the United States is free (from Great Britain).",
			sixtyFiveTwenty: false,
		},
		{
			id: 8,
			number: 9,
			category: "American Government: A: Principles of American Democracy",
			question: "What are two rights in the Declaration of Independence?",
			answer: "Life.\nLiberty.\nPursuit of happiness.",
			sixtyFiveTwenty: false,
		},
		{
			id: 9,
			number: 10,
			category: "American Government: A: Principles of American Democracy",
			question: "What is freedom of religion?",
			answer: "You can practice any religion, or not practice a religion.",
			sixtyFiveTwenty: false,
		},
		{
			id: 10,
			number: 11,
			category: "American Government: A: Principles of American Democracy",
			question: "What is the economic system in the United States?",
			answer: "Capitalist economy.\nMarket economy.",
			sixtyFiveTwenty: true,
		},
		{
			id: 11,
			number: 12,
			category: "American Government: A: Principles of American Democracy",
			question: "What is the \"rule of law\"?",
			answer: "Everyone must follow the law.\nLeaders must obey the law.\nGovernment must obey the law.\nNo one is above the law.",
			sixtyFiveTwenty: false,
		},
		{
			id: 12,
			number: 13,
			category: "American Government: B: System of Government",
			question: "Name one branch or part of the government.",
			answer: "Congress.\nLegislative.\nPresident.\nExecutive.\nThe courts.\nJudicial.",
			sixtyFiveTwenty: true,
		},
		{
			id: 13,
			number: 14,
			category: "American Government: B: System of Government",
			question: "What stops one branch of government from becoming too powerful?",
			answer: "Checks and balances.\nSeparation of powers.",
			sixtyFiveTwenty: false,
		},
		{
			id: 14,
			number: 15,
			category: "American Government: B: System of Government",
			question: "Who is in charge of the executive branch?",
			answer: "The President.",
			sixtyFiveTwenty: false,
		},
		{
			id: 15,
			number: 16,
			category: "American Government: B: System of Government",
			question: "Who makes federal laws?",
			answer: "Congress.\nSenate and House (of Representatives)\n(U.S. or national) legislature.",
			sixtyFiveTwenty: false,
		},
		{
			id: 16,
			number: 17,
			category: "American Government: B: System of Government",
			question: "What are the two parts of the U.S. Congress?",
			answer: "The Senate and House (of Representatives).",
			sixtyFiveTwenty: true,
		},
		{
			id: 17,
			number: 18,
			category: "American Government: B: System of Government",
			question: "How many U.S. Senators are there?",
			answer: "One hundred (100).",
			sixtyFiveTwenty: false,
		},
		{
			id: 18,
			number: 19,
			category: "American Government: B: System of Government",
			question: "We elect a U.S. Senator for how many years?",
			answer: "Six (6).",
			sixtyFiveTwenty: false,
		},
		{
			id: 19,
			number: 20,
			category: "American Government: B: System of Government",
			question: "Who is one of your state’s U.S. Senators now?",
			answer: this.props.currentSenators.join('\n'),
			sixtyFiveTwenty: false,
		},
		{
			id: 20,
			number: 21,
			category: "American Government: B: System of Government",
			question: "The House of Representatives has how many voting members?",
			answer: "Four hundred thirty-five (435).",
			sixtyFiveTwenty: false,
		},
		{
			id: 21,
			number: 22,
			category: "American Government: B: System of Government",
			question: "We elect a U.S. Representative for how many years?",
			answer: "Two (2).",
			sixtyFiveTwenty: false,
		},
		{
			id: 22,
			number: 23,
			category: "American Government: B: System of Government",
			question: "Name your U.S. Representative.",
			answer: this.props.currentRepresentatives.join('\n'),
			sixtyFiveTwenty: false,
		},
		{
			id: 23,
			number: 24,
			category: "American Government: B: System of Government",
			question: "Who does a U.S. Senator represent?",
			answer: "All people of the state.",
			sixtyFiveTwenty: false,
		},
		{
			id: 24,
			number: 25,
			category: "American Government: B: System of Government",
			question: "Why do some states have more Representatives than other states?",
			answer: "(Because of) the state’s population.\n(Because) they have more people.\n(Because) some states have more people.",
			sixtyFiveTwenty: false,
		},
		{
			id: 25,
			number: 26,
			category: "American Government: B: System of Government",
			question: "We elect a President for how many years?",
			answer: "Four (4).",
			sixtyFiveTwenty: false,
		},
		{
			id: 26,
			number: 27,
			category: "American Government: B: System of Government",
			question: "In what month do we vote for President?",
			answer: "November.",
			sixtyFiveTwenty: true,
		},
		{
			id: 27,
			number: 28,
			category: "American Government: B: System of Government",
			question: "What is the name of the President of the United States now?",
			answer: "Donald Trump.",
			sixtyFiveTwenty: true,
		},
		{
			id: 28,
			number: 29,
			category: "American Government: B: System of Government",
			question: "What is the name of the Vice President of the United States now?",
			answer: "Mike Pence",
			sixtyFiveTwenty: false,
		},
		{
			id: 29,
			number: 30,
			category: "American Government: B: System of Government",
			question: "If the President can no longer serve, who becomes President?",
			answer: "The Vice President.",
			sixtyFiveTwenty: false,
		},
		{
			id: 30,
			number: 31,
			category: "American Government: B: System of Government",
			question: "If both the President and the Vice President can no longer serve, who becomes President?",
			answer: "The Speaker of the House.",
			sixtyFiveTwenty: false,
		},
		{
			id: 31,
			number: 32,
			category: "American Government: B: System of Government",
			question: "Who is the Commander in Chief of the military?",
			answer: "The President.",
			sixtyFiveTwenty: false,
		},
		{
			id: 32,
			number: 33,
			category: "American Government: B: System of Government",
			question: "Who signs bills to become laws?",
			answer: "The President.",
			sixtyFiveTwenty: false,
		},
		{
			id: 33,
			number: 34,
			category: "American Government: B: System of Government",
			question: "Who vetoes bills?",
			answer: "The President.",
			sixtyFiveTwenty: false,
		},
		{
			id: 34,
			number: 35,
			category: "American Government: B: System of Government",
			question: "What does the President’s Cabinet do?",
			answer: "Advises the President.",
			sixtyFiveTwenty: false,
		},
		{
			id: 35,
			number: 36,
			category: "American Government: B: System of Government",
			question: "What are two Cabinet-level positions?",
			answer: "Secretary of Agriculture.\nSecretary of Commerce.\nSecretary of Defense.\nSecretary of Education.\nSecretary of Energy.\nSecretary of Health and Human Services.\nSecretary of Homeland Security.\nSecretary of Housing and Urban Development.\nSecretary of the Interior.\nSecretary of Labor.\nSecretary of State.\nSecretary of Transportation.\nSecretary of the Treasury.\nSecretary of Veterans Affairs.\nAttorney General.\nVice President.",
			sixtyFiveTwenty: false,
		},
		{
			id: 36,
			number: 37,
			category: "American Government: B: System of Government",
			question: "What does the judicial branch do?",
			answer: "Reviews laws.\nExplains laws.\nResolves disputes (disagreements).\nDecides if a law goes against the Constitution.",
			sixtyFiveTwenty: false,
		},
		{
			id: 37,
			number: 38,
			category: "American Government: B: System of Government",
			question: "What is the highest court in the United States?",
			answer: "The Supreme Court.",
			sixtyFiveTwenty: false,
		},
		{
			id: 38,
			number: 39,
			category: "American Government: B: System of Government",
			question: "How many justices are on the Supreme Court?",
			answer: "9.",
			sixtyFiveTwenty: false,
		},
		{
			id: 39,
			number: 40,
			category: "American Government: B: System of Government",
			question: "Who is the Chief Justice of the United States now?",
			answer: "John Roberts",
			sixtyFiveTwenty: false,
		},
		{
			id: 40,
			number: 41,
			category: "American Government: B: System of Government",
			question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
			answer: "To print money.\nTo declare war.\nTo create an army.\nTo make treaties.",
			sixtyFiveTwenty: false,
		},
		{
			id: 41,
			number: 42,
			category: "American Government: B: System of Government",
			question: "Under our Constitution, some powers belong to the states. What is one power of the states?",
			answer: "Provide schooling and education.\nProvide protection (police).\nProvide safety (fire departments).\nGive a driver’s license.\nApprove zoning and land use.",
			sixtyFiveTwenty: false,
		},
		{
			id: 42,
			number: 43,
			category: "American Government: B: System of Government",
			question: "Who is the Governor of your state now?",
			answer: "https://en.wikipedia.org/wiki/List_of_United_States_governors",
			sixtyFiveTwenty: false,
		},
		{
			id: 43,
			number: 44,
			category: "American Government: B: System of Government",
			question: "What is the capital of your state?",
			answer: this.checkStateCapital(),
			sixtyFiveTwenty: true,
		},
		{
			id: 44,
			number: 45,
			category: "American Government: B: System of Government",
			question: "What are the two major political parties in the United States?",
			answer: "Democratic and Republican",
			sixtyFiveTwenty: true,
		},
		{
			id: 45,
			number: 46,
			category: "American Government: B: System of Government",
			question: "What is the political party of the President now?",
			answer: "Republican.",
			sixtyFiveTwenty: false,
		},
		{
			id: 46,
			number: 47,
			category: "American Government: B: System of Government",
			question: "What is the name of the Speaker of the House of Representatives now?",
			answer: "Nancy Pelosi",
			sixtyFiveTwenty: false,
		},
		{
			id: 47,
			number: 48,
			category: "American Government: C: Rights and Responsibilities",
			question: "There are four amendments to the Constitution about who can vote. Describe one of them.",
			answer: "Citizens eighteen (18) and older (can vote).\nYou don’t have to pay (a poll tax) to vote.\nAny citizen can vote. (Women and men can vote.)\nA male citizen of any race (can vote).",
			sixtyFiveTwenty: false,
		},
		{
			id: 48,
			number: 49,
			category: "American Government: C: Rights and Responsibilities",
			question: "What is one responsibility that is only for United States citizens?",
			answer: "Serve on a jury.\nVote in a federal election.",
			sixtyFiveTwenty: true,
		},
		{
			id: 49,
			number: 50,
			category: "American Government: C: Rights and Responsibilities",
			question: "Name one right only for United States citizens.",
			answer: "Vote in a federal election.\nRun for federal office.",
			sixtyFiveTwenty: false,
		},
		{
			id: 50,
			number: 51,
			category: "American Government: C: Rights and Responsibilities",
			question: "What are two rights of everyone living in the United States?",
			answer: "Freedom of expression.\nFreedom of speech.\nFreedom of assembly.\nFreedom to petition the government.\nFreedom of religion.\nThe right to bear arms.",
			sixtyFiveTwenty: false,
		},
		{
			id: 51,
			number: 52,
			category: "American Government: C: Rights and Responsibilities",
			question: "What do we show loyalty to when we say the Pledge of Allegiance?",
			answer: "The United States.\nThe flag.",
			sixtyFiveTwenty: false,
		},
		{
			id: 52,
			number: 53,
			category: "American Government: C: Rights and Responsibilities",
			question: "What is one promise you make when you become a United States citizen?",
			answer: "Give up loyalty to other countries.\nDefend the Constitution and laws of the United States.\nObey the laws of the United States.\nServe in the U.S. military (if needed).\nServe (do important work for) the nation (if needed).\nBe loyal to the United States.",
			sixtyFiveTwenty: false,
		},
		{
			id: 53,
			number: 54,
			category: "American Government: C: Rights and Responsibilities",
			question: "How old do citizens have to be to vote for President?",
			answer: "Eighteen (18) and older.",
			sixtyFiveTwenty: true,
		},
		{
			id: 54,
			number: 55,
			category: "American Government: C: Rights and Responsibilities",
			question: "What are two ways that Americans can participate in their democracy?",
			answer: "Vote.\nJoin a political party.\nHelp with a campaign.\nJoin a civic group.\nJoin a community group.\nGive an elected official your opinion on an issue.\nCall Senators and Representatives.\nPublicly support or oppose an issue or policy.\nRun for office.\nWrite to a newspaper.",
			sixtyFiveTwenty: false,
		},
		{
			id: 55,
			number: 56,
			category: "American Government: C: Rights and Responsibilities",
			question: "When is the last day you can send in federal income tax forms?",
			answer: "April 15.",
			sixtyFiveTwenty: true,
		},
		{
			id: 56,
			number: 57,
			category: "American Government: C: Rights and Responsibilities",
			question: "When must all men register for the Selective Service?",
			answer: "At age eighteen (18).\nBetween eighteen (18) and twenty-six (26).",
			sixtyFiveTwenty: false,
		},
		{
			id: 57,
			number: 58,
			category: "American History: A: Colonial Period and Independence",
			question: "What is one reason colonists came to America?",
			answer: "Freedom.\nPolitical liberty.\nReligious freedom.\nEconomic opportunity.\nPractice their religion.\nEscape persecution.",
			sixtyFiveTwenty: false,
		},
		{
			id: 58,
			number: 59,
			category: "American History: A: Colonial Period and Independence",
			question: "Who lived in America before the Europeans arrived?",
			answer: "American Indians.\nNative Americans.",
			sixtyFiveTwenty: false,
		},
		{
			id: 59,
			number: 60,
			category: "American History: A: Colonial Period and Independence",
			question: "What group of people was taken to America and sold as slaves?",
			answer: "Africans.\nPeople from Africa.",
			sixtyFiveTwenty: false,
		},
		{
			id: 60,
			number: 61,
			category: "American History: A: Colonial Period and Independence",
			question: "Why did the colonists fight the British?",
			answer: "Because of high taxes (taxation without representation).\nBecause the British army stayed in their houses (boarding, quartering).\nBecause they didn't have self-government.",
			sixtyFiveTwenty: false,
		},
		{
			id: 61,
			number: 62,
			category: "American History: A: Colonial Period and Independence",
			question: "Who wrote the Declaration of Independence?",
			answer: "(Thomas) Jefferson.",
			sixtyFiveTwenty: false,
		},
		{
			id: 62,
			number: 63,
			category: "American History: A: Colonial Period and Independence",
			question: "When was the Declaration of Independence adopted?",
			answer: "July 4, 1776.",
			sixtyFiveTwenty: false,
		},
		{
			id: 63,
			number: 64,
			category: "American History: A: Colonial Period and Independence",
			question: "There were 13 original states. Name three.",
			answer: "New Hampshire.\nMassachusetts.\nRhode Island.\nConnecticut.\nNew York.\nNew Jersey.\nPennsylvania.\nDelaware.\nMaryland.\nVirginia.\nNorth Carolina.\nSouth Carolina.\nGeorgia.",
			sixtyFiveTwenty: false,
		},
		{
			id: 64,
			number: 65,
			category: "American History: A: Colonial Period and Independence",
			question: "What happened at the Constitutional Convention?",
			answer: "The Constitution was written.\nThe Founding Fathers wrote the Constitution.",
			sixtyFiveTwenty: false,
		},
		{
			id: 65,
			number: 66,
			category: "American History: A: Colonial Period and Independence",
			question: "When was the Constitution written?",
			answer: "1787.",
			sixtyFiveTwenty: false,
		},
		{
			id: 66,
			number: 67,
			category: "American History: A: Colonial Period and Independence",
			question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
			answer: "(James) Madison.\n(Alexander) Hamilton.\n(John) Jay.\nPublius.",
			sixtyFiveTwenty: false,
		},
		{
			id: 67,
			number: 68,
			category: "American History: A: Colonial Period and Independence",
			question: "What is one thing Benjamin Franklin is famous for?",
			answer: "U.S. diplomat.\nOldest member of the Constitutional Convention.\nFirst Postmaster General of the United States.\nWriter of 'Poor Richard's Almanac.'\nStarted the first free libraries.",
			sixtyFiveTwenty: false,
		},
		{
			id: 68,
			number: 69,
			category: "American History: A: Colonial Period and Independence",
			question: "Who is the 'Father of Our Country'?",
			answer: "(George) Washington.",
			sixtyFiveTwenty: false,
		},
		{
			id: 69,
			number: 70,
			category: "American History: A: Colonial Period and Independence",
			question: "Who was the first President?",
			answer: "(George) Washington.",
			sixtyFiveTwenty: true,
		},
		{
			id: 70,
			number: 71,
			category: "American History: B: 1800s",
			question: "What territory did the United States buy from France in 1803?",
			answer: "The Louisiana Territory.\nLouisiana.",
			sixtyFiveTwenty: false,
		},
		{
			id: 71,
			number: 72,
			category: "American History: B: 1800s",
			question: "Name one war fought by the United States in the 1800s.",
			answer: "War of 1812.\nMexican-American War.\nCivil War.\nSpanish-American War.",
			sixtyFiveTwenty: false,
		},
		{
			id: 72,
			number: 73,
			category: "American History: B: 1800s",
			question: "Name the U.S. war between the North and the South.",
			answer: "The Civil War.\nThe War between the States.",
			sixtyFiveTwenty: false,
		},
		{
			id: 73,
			number: 74,
			category: "American History: B: 1800s",
			question: "Name one problem that led to the Civil War.",
			answer: "Slavery.\nEconomic reasons.\nStates' rights.",
			sixtyFiveTwenty: false,
		},
		{
			id: 74,
			number: 75,
			category: "American History: B: 1800s",
			question: "What was one important thing that Abraham Lincoln did?",
			answer: "Freed the slaves (Emancipation Proclamation).\nSaved (or preserved) the Union.\nLed the United States during the Civil War.",
			sixtyFiveTwenty: true,
		},
		{
			id: 75,
			number: 76,
			category: "American History: B: 1800s",
			question: "What did the Emancipation Proclamation do?",
			answer: "Freed the slaves.\nFreed slaves in the Confederacy.\nFreed slaves in the Confederate states.\nFreed slaves in most Southern states.",
			sixtyFiveTwenty: false,
		},
		{
			id: 76,
			number: 77,
			category: "American History: B: 1800s",
			question: "What did Susan B. Anthony do?",
			answer: "Fought for women's rights.\nFought for civil rights.",
			sixtyFiveTwenty: false,
		},
		{
			id: 77,
			number: 78,
			category: "American History: C: Recent American History and Other Important Historical Information",
			question: "Name one war fought by the United States in the 1900s.",
			answer: "World War I.\nWorld War II.\nKorean War.\nVietnam War.\n(Persian) Gulf War.",
			sixtyFiveTwenty: true,
		},
		{
			id: 78,
			number: 79,
			category: "American History: C: Recent American History and Other Important Historical Information",
			question: "Who was President during World War I?",
			answer: "(Woodrow) Wilson.",
			sixtyFiveTwenty: false,
		},
		{
			id: 79,
			number: 80,
			category: "American History: C: Recent American History and Other Important Historical Information",
			question: "Who was President during the Great Depression and World War II?",
			answer: "(Franklin) Roosevelt.",
			sixtyFiveTwenty: false,
		},
		{
			id: 80,
			number: 81,
			category: "American History: C: Recent American History and Other Important Historical Information",
			question: "Who did the United States fight in World War II?",
			answer: "Japan, Germany, and Italy.",
			sixtyFiveTwenty: false,
		},
		{
			id: 81,
			number: 82,
			category: "American History: C: Recent American History and Other Important Historical Information",
			question: "Before he was President, Eisenhower was a general. What war was he in?",
			answer: "World War II.",
			sixtyFiveTwenty: false,
		},
		{
			id: 82,
			number: 83,
			category: "American History: C: Recent American History and Other Important Historical Information",
			question: "During the Cold War, what was the main concern of the United States?",
			answer: "Communism.",
			sixtyFiveTwenty: false,
		},
		{
			id: 83,
			number: 84,
			category: "American History: C: Recent American History and Other Important Historical Information",
			question: "What movement tried to end racial discrimination?",
			answer: "Civil rights (movement).",
			sixtyFiveTwenty: false,
		},
		{
			id: 84,
			number: 85,
			category: "American History: C: Recent American History and Other Important Historical Information",
			question: "What did Martin Luther King, Jr. do?",
			answer: "Fought for civil rights.\nWorked for equality for all Americans.",
			sixtyFiveTwenty: false,
		},
		{
			id: 85,
			number: 86,
			category: "American History: C: Recent American History and Other Important Historical Information",
			question: "What major event happened on September 11, 2001, in the United States?",
			answer: "Terrorists attacked the United States.",
			sixtyFiveTwenty: false,
		},
		{
			id: 86,
			number: 87,
			category: "American History: C: Recent American History and Other Important Historical Information",
			question: "Name one American Indian tribe in the United States. [USCIS Officers will be supplied with a list of federally recognized American Indian tribes.]",
			answer: "Cherokee.\nNavajo.\nSioux.\nChippewa.\nChoctaw.\nPueblo.\nApache.\nIroquois.\nCreek.\nBlackfeet.\nSeminole.\nCheyenne.\nArawak.\nShawnee.\nMohegan.\nHuron.\nOneida.\nLakota.\nCrow.\nTeton.\nHopi.\nInuit.",
			sixtyFiveTwenty: false,
		},
		{
			id: 87,
			number: 88,
			category: "Integrated Civics: A: Geography",
			question: "Name one of the two longest rivers in the United States.",
			answer: "Missouri (River).\nMississippi (River).",
			sixtyFiveTwenty: false,
		},
		{
			id: 88,
			number: 89,
			category: "Integrated Civics: A: Geography",
			question: "What ocean is on the West Coast of the United States?",
			answer: "Pacific (Ocean).",
			sixtyFiveTwenty: false,
		},
		{
			id: 89,
			number: 90,
			category: "Integrated Civics: A: Geography",
			question: "What ocean is on the East Coast of the United States?",
			answer: "Atlantic (Ocean).",
			sixtyFiveTwenty: false,
		},
		{
			id: 90,
			number: 91,
			category: "Integrated Civics: A: Geography",
			question: "Name one U.S. territory.",
			answer: "Puerto Rico.\nU.S. Virgin Islands.\nAmerican Samoa.\nNorthern Mariana Islands.\nGuam.",
			sixtyFiveTwenty: false,
		},
		{
			id: 91,
			number: 92,
			category: "Integrated Civics: A: Geography",
			question: "Name one state that borders Canada.",
			answer: "Maine.\nNew Hampshire.\nVermont.\nNew York.\nPennsylvania.\nOhio.\nMichigan.\nMinnesota.\nNorth Dakota.\nMontana.\nIdaho.\nWashington.\nAlaska.",
			sixtyFiveTwenty: false,
		},
		{
			id: 92,
			number: 93,
			category: "Integrated Civics: A: Geography",
			question: "Name one state that borders Mexico.",
			answer: "California.\nArizona.\nNew Mexico.\nTexas.",
			sixtyFiveTwenty: false,
		},
		{
			id: 93,
			number: 94,
			category: "Integrated Civics: A: Geography",
			question: "What is the capital of the United States?",
			answer: "Washington, D.C.",
			sixtyFiveTwenty: true,
		},
		{
			id: 94,
			number: 95,
			category: "Integrated Civics: A: Geography",
			question: "Where is the Statue of Liberty?",
			answer: "New York (Harbor).\nLiberty Island.\n[Also acceptable are New Jersey,\nnear New York City, and on the Hudson (River).]",
			sixtyFiveTwenty: true,
		},
		{
			id: 95,
			number: 96,
			category: "Integrated Civics: B: Symbols",
			question: "Why does the flag have 13 stripes?",
			answer: "Because there were 13 original colonies.\nBecause the stripes represent the original colonies.",
			sixtyFiveTwenty: false,
		},
		{
			id: 96,
			number: 97,
			category: "Integrated Civics: B: Symbols",
			question: "Why does the flag have 50 stars?",
			answer: "Because there is one star for each state.\nBecause each star represents a state.\nBecause there are 50 states.",
			sixtyFiveTwenty: true,
		},
		{
			id: 97,
			number: 98,
			category: "Integrated Civics: B: Symbols",
			question: "What is the name of the national anthem?",
			answer: "The Star-Spangled Banner.",
			sixtyFiveTwenty: false,
		},
		{
			id: 98,
			number: 99,
			category: "Integrated Civics: C: Holidays",
			question: "When do we celebrate Independence Day?",
			answer: "July 4.",
			sixtyFiveTwenty: true,
		},
		{
			id: 99,
			number: 100,
			category: "Integrated Civics: C: Holidays",
			question: "Name two national U.S. holidays.",
			answer: "New Year's Day.\nMartin Luther King, Jr. Day.\nPresidents' Day.\nMemorial Day.\nIndependence Day.\nLabor Day.\nColumbus Day.\nVeterans Day.\nThanksgiving.\nChristmas.",
			sixtyFiveTwenty: false,
		},
	]

	componentDidMount() {
		// Once the FlashCards module is loaded, start the questions.
		this.chooseRandomQuestions()
	}
	
	chooseRandomQuestions() {
		// If the user selects the 65/20 exemption, give only the 18 exempt questions.
		if (this.state.isSixtyFiveTwenty === "on") {
			const sixtyFiveTwentyResults = this.state.quizQuestions.filter(question => question.sixtyFiveTwenty === true)
			const randomNumber = Math.floor(Math.random() * sixtyFiveTwentyResults.length);
			const randomQuestion = this.state.quizQuestions[randomNumber]
			this.setState(({currentCard: randomQuestion}))
		// Otherwise, select from the list of 100 total questions.
		} else {
			const randomNumber = Math.floor(Math.random() * 100);
			const randomQuestion = this.state.quizQuestions[randomNumber];
			this.setState(({currentCard: randomQuestion}))
		}
	}
	
	handleClick() {
		// If the user clicks the card, switch the visibility boolean.
		this.setState(state => ({
			answerIsVisible: !state.answerIsVisible
		}))
		
		// If the user is already viewing the answer, pick a different question.
		if (this.state.answerIsVisible === true) {
			this.chooseRandomQuestions()
			this.setState(prevState => ({
				count: prevState.count + 1
			}))
		}
	}

	checkStateCapital() {
		let USState = this.props.selectedState
		if (USState === "AL") {
			return "Montgomery"
		} else if (USState === "AK") {
			return "Juneau"
		} else if (USState === "AZ") {
			return "Phoenix"
		} else if (USState === "AR") {
			return "Little Rock"
		} else if (USState === "CA") {
			return "Saramento"
		} else if (USState === "CO") {
			return "Denver"
		} else if (USState === "CT") {
			return "Hartford"
		} else if (USState === "DE") {
			return "Dover"
		} else if (USState === "DC") {
			return "DC is not a state and does not have a state capital."
		} else if (USState === "FL") {
			return "Tallahassee"
		} else if (USState === "GA") {
			return "Atlanta"
		} else if (USState === "HI") {
			return "Honolulu"
		} else if (USState === "ID") {
			return "Boise"
		} else if (USState === "IL") {
			return "Springfield"
		} else if (USState === "IN") {
			return "Indianapolis"
		} else if (USState === "IA") {
			return "Des Moines"
		} else if (USState === "KS") {
			return "Topeka"
		} else if (USState === "KY") {
			return "Frankfort"
		} else if (USState === "LA") {
			return "Baton Rouge"
		} else if (USState === "ME") {
			return "Augusta"
		} else if (USState === "MD") {
			return "Annapolis"
		} else if (USState === "MA") {
			return "Boston"
		} else if (USState === "MI") {
			return "Lansing"
		} else if (USState === "MN") {
			return "St. Paul"
		} else if (USState === "MS") {
			return "Jackson"
		} else if (USState === "MO") {
			return "Jefferson City"
		} else if (USState === "MT") {
			return "Helena"
		} else if (USState === "NE") {
			return "Lincoln"
		} else if (USState === "NV") {
			return "Carson City"
		} else if (USState === "NH") {
			return "Concord"
		} else if (USState === "NJ") {
			return "Trenton"
		} else if (USState === "NM") {
			return "Santa Fe"
		} else if (USState === "NY") {
			return "Albany"
		} else if (USState === "NC") {
			return "Raleigh"
		} else if (USState === "ND") {
			return "Bismarck"
		} else if (USState === "OH") {
			return "Columbus"
		} else if (USState === "OK") {
			return "Oklahoma City"
		} else if (USState === "OR") {
			return "Salem"
		} else if (USState === "PA") {
			return "Harrisburg"
		} else if (USState === "RI") {
			return "Providence"
		} else if (USState === "SC") {
			return "Columbia"
		} else if (USState === "SD") {
			return "Pierre"
		} else if (USState === "TN") {
			return "Nashville"
		} else if (USState === "TX") {
			return "Austin"
		} else if (USState === "UT") {
			return "Salt Lake City"
		} else if (USState === "VT") {
			return "Montpelier"
		} else if (USState === "VA") {
			return "Richmond"
		} else if (USState === "WA") {
			return "Olympia"
		} else if (USState === "WV") {
			return "Charleston"
		} else if (USState === "WI") {
			return "Madison"
		} else if (USState === "WY") {
			return "Cheyenne"
		}
	}
	
	render() {
		// If the user has tried less than 10 questions.
		if (this.state.count < 10) {
			// If the answer visibility flag is set to false, show the question.
			if (!this.state.answerIsVisible) {
				return (
					<div>
						<Question 
							onClick={this.handleClick}
							key={this.state.currentCard.id}
							number={this.state.currentCard.number}
							category={this.state.currentCard.category}
							question={this.state.currentCard.question}
						/>
					</div>
				)
			} else {
				return (
					<div>
						<Answer 
							onClick={this.handleClick}
							category={this.state.currentCard.category}
							question={this.state.currentCard.question}
							answer={this.state.currentCard.answer}
							number={this.state.currentCard.number}
						/>
					</div>
				)
			}
		// If the user has seen more than 10 questions, show the game over screen with an option to continue.
		} else {
			return (<GameOver onClick={() => {
				this.setState({count:0})
				this.chooseRandomQuestions();
				}}
			/>)
		}
	}
}

export default FlashCards