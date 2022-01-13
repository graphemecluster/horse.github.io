declare type data = {
	Index: number;
	Japanese: string;
	English: string;
	Chinese: string;
	Status: "Unnamed" | "Temporary" | "Enquiry" | "Newspaper" | "Comfirmed";
	Birth: `${number}-${number}-${number}`;
	Living: boolean;
	Voice: string;
	Source: string | null;
	Note: string | null;
}[];
declare const data: data;
export default data;
