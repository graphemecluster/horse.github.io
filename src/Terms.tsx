import tables from "./tables.txt";
const language: Record<string, string> = { 日文: "ja", 日略: "ja", 英文: "en" };
const page = (
	<>
		{tables.map(({ title, subtitle, header, rows, notes }, index) => (
			<section key={index}>
				<h3>{title}</h3>
				<h4 lang="ja">{subtitle}</h4>
				<div className="terms-table">
					<table>
						<thead>
							<tr>
								{header.map((column, index) => (
									<th key={index}>{column}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{rows.map((row, index) => (
								<tr key={index}>
									{row.map((item, index) => (
										<td key={index} lang={language[header[index]]}>
											{item}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
				{notes.map((note, index) => (
					<p key={index}>{note}</p>
				))}
			</section>
		))}
	</>
);
export default function Terms() {
	return page;
}
