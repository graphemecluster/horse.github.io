import type tables from "../../src/tables.txt";
import { Transformer } from "@parcel/plugin";

function transformation(source: string) {
	const sections: tables = [];
	let curr: tables[number];
	source.split("\n\n").forEach(section => {
		if (section.includes(",")) {
			const [titles, header, ...rows] = section.split("\n");
			const [subtitle, title] = titles.split(",");
			sections.push(
				(curr = {
					title,
					subtitle,
					header: header.split(","),
					rows: rows.map(row => row.split(",")),
					notes: [],
				})
			);
		} else curr.notes = section.split("\n");
	});
	return `module.exports = JSON.parse(${JSON.stringify(JSON.stringify(sections))})`;
}

export default new Transformer({
	async transform({ asset }) {
		asset.setCode(transformation(await asset.getCode()));
		asset.type = "js";
		return [asset];
	},
});
