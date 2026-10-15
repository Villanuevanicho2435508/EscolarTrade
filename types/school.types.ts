export const PROGRAMS = [
	{ value: "ab-comm-media", label: "AB Communication & Media" },
	{ value: "bs-accountancy", label: "BS Accountancy" },
	{ value: "bs-it", label: "BS Information Technology" },
	{ value: "bs-ihm", label: "BS Intl Hospitality Management" },
	{ value: "bs-tourism-travel", label: "BS Intl Tourism & Travel Mgmt" },
	{ value: "bs-medtech", label: "BS Medical Technology" },
	{ value: "bs-nursing", label: "BS Nursing" },
	{ value: "bs-pharmacy", label: "BS Pharmacy" },
	{ value: "bs-psychology", label: "BS Psychology" },
	{ value: "ddm", label: "Doctor of Dental Medicine" },
	{ value: "bsned", label: "BS Special Needs Education" },
	{ value: "bsba-intl-mgmt", label: "BSBA Intl Management" },
	{ value: "od", label: "Doctor of Optometry" },
] as const;

export type Program = (typeof PROGRAMS)[number]["value"];

export const YEAR_LEVELS = [
	{ value: "1", label: "1st Year" },
	{ value: "2", label: "2nd Year" },
	{ value: "3", label: "3rd Year" },
	{ value: "4", label: "4th Year" },
	{ value: "5", label: "5th Year" },
	{ value: "6", label: "6th Year" },
] as const;

export type YearLevel = (typeof YEAR_LEVELS)[number]["value"];
