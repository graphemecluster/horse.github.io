module.exports = function (source) {
	const sections = [];
	let curr;
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
	return "module.exports = " + JSON.stringify(sections);
};
