declare type data = {
	Index: number;
	Japanese: string;
	English: string;
	Chinese: `${string};${string}`;
	Status: "Unnamed" | "Temporary" | "Enquiry" | "Newspaper" | "Confirmed";
	Birth: `${number}-${number}-${number}`;
	Living: 0 | 1 | 2;
	Voice: `${string};${string}` | null;
	Source: `${string};${string}` | null;
	Note: string | null;
}[];
declare const data: data;
export default data;
