import React from "react";
import logo from "./logo.svg";
import Names from "./Names";
import Terms from "./Terms";
import "./index.css";

const sections = ["#names", "#terms", "#chars"] as const;
const tabNames = ["馬名", "術語", "新字"] as const;

type sections = typeof sections[number];

interface State {
	section: sections;
}

export default class App extends React.Component<{}, State> {
	constructor(props: {}) {
		super(props);
		let section = location.hash as sections;
		if (!sections.includes(section)) history.replaceState({}, document.title, (section = sections[0]));
		this.state = { section };
	}

	changeTab = (section: sections) => (event: React.MouseEvent) => {
		event.preventDefault();
		this.setState({ section });
		history.replaceState({}, document.title, section);
	};

	render() {
		const current = this.state.section;
		return (
			<div className="m-auto px-12 py-8 max-w-6xl">
				<header className="flex items-center">
					<img src={logo} alt="馬驛" className="w-20 mr-3.5" />
					<div>
						<h1>馬驛</h1>
						<p className="text-2xl font-normal mt-1">馬娘相關馬名術語標準翻譯規範</p>
					</div>
				</header>
				<nav>
					{sections.map((section, index) => (
						<a key={section} href={section} className={current === section ? "tab-active" : undefined} onClick={this.changeTab(section)}>
							{tabNames[index]}
						</a>
					))}
				</nav>
				<main>
					<article hidden={current !== "#names"}>
						<h2>馬名翻譯</h2>
						<section>
							<p>本網站為《賽馬娘》中出現的日本著名馬匹提供標準中文譯名及其出處，冀統一中文圈各界對該等馬匹的稱呼，以便交流。</p>
							<p>本網站亦提供遊戲中出現的常用術語中日對照。對於其他罕見術語，請參照 wpstud.com。</p>
							<p>本網站並不包含馬匹介紹，如有需要，請閲讀 wpstud.com。</p>
							<p>本網站以 MIT License 發佈，原始碼公開於 GitHub，歡迎參與。</p>
							<p>下表預設順序同遊戲官方網站，共 73 匹，點擊表格標題列欄位即可改變排序方式。</p>
							<Names />
						</section>
					</article>
					<article hidden={current !== "#terms"}>
						<h2>術語對照</h2>
						<section>
							<Terms />
						</section>
					</article>
					<article hidden={current !== "#chars"}>
						<h2>新字提案</h2>
						<section></section>
					</article>
				</main>
			</div>
		);
	}
}
