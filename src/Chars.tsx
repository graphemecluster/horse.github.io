const page = (
	<>
		<p>
			This page is a proposal for a new set of{" "}
			<a href="https://www.unicode.org/reports/tr37/" target="_blank">
				Ideographic Variation Database (IVD)
			</a>
			, which defines new Ideographic Variation Sequences (IVS) for characters containing the Horse component (U+99AC{" "}
			<a href="https://en.wiktionary.org/wiki/%E9%A6%AC" target="_blank">
				馬
			</a>
			), including but not limited to{" "}
			<a href="https://en.wikipedia.org/wiki/Radical_187" target="_blank">
				Radical Horse (187)
			</a>
			.
		</p>
		<p>
			In the series, the four dots of the Horse component is altered to two dots to match the world building. Being one of the most popular games in the CJK
			circle in 2021,{" "}
			<a href="https://twitter.com/mangasuki2kjm/status/1475471660224770052" target="_blank">
				actual uses
			</a>{" "}
			of the characters can be found. (<i>More research required.</i>)
		</p>
		<p>Additionally, writing two dots instead of four dots for this component as a left radical seems to look more pleasant in an aspect of font design.</p>
		<figure className="flex flex-col items-center max-w-lg">
			<div className="crop">
				<img src="https://pbs.twimg.com/media/FJN8V6ZacAEPbkb?format=png&name=900x900" alt="Sample made by others" />
			</div>
			<figcaption className="text-lg font-semibold text-base-content my-3">
				<a href="https://twitter.com/Kiogoll/status/1482665476337840136" target="_blank">
					Sample
				</a>{" "}
				made by{" "}
				<a href="https://twitter.com/Kiogoll" target="_blank">
					Kiogoll
				</a>
			</figcaption>
		</figure>
		<p>
			<b className="font-semibold">Previous work:</b>{" "}
			<a href="https://nukosuki.booth.pm/items/2873062" target="_blank">
				A font
			</a>{" "}
			with the number of dots altered has already been made by{" "}
			<a href="https://twitter.com/amogaata" target="_blank">
				Nukosuki Kōbō
			</a>
			, though the design was not very pleasant as it was made by modifying an existing font.
		</p>
		<p>
			There is also an idea to include another variant of Horse (U+2B809{" "}
			<a href="https://zi.tools/zi/%F0%AB%A0%89" target="_blank">
				𫠉
			</a>
			) as new IVSes using another variation selector.
		</p>
	</>
);
export default function Chars() {
	return page;
}
