import { useState } from "react";
import logo from "./logo.svg";
import Names from "./Names";
import Terms from "./Terms";
import Chars from "./Chars";
import "./index.css";

const sections = ["#names", "#terms", "#chars"] as const;
const tabNames = ["馬名", "術語", "新字"] as const;

export default function App() {
	const section = location.hash as typeof sections[number];
	const [current, setCurrent] = useState(sections.includes(section) ? section : sections[0]);
	return (
		<>
			<div className="m-auto pt-8 pb-12 px-6 sm:px-12 max-w-6xl">
				<header className="flex items-center">
					<img src={logo} alt="馬驛" className="w-20 mr-3.5" />
					<div>
						<h1>馬驛</h1>
						<p className="text-2xl font-normal mt-1">馬娘相關馬名術語標準翻譯規範</p>
					</div>
				</header>
				<nav>
					{sections.map((section, index) => (
						<a key={section} href={section} className={current === section ? "tab-active" : undefined} onClick={() => setCurrent(section)}>
							{tabNames[index]}
						</a>
					))}
				</nav>
				<main>
					<article hidden={current !== "#names"}>
						<h2>馬名翻譯</h2>
						<p>本網站為《賽馬娘》中出現的日本著名馬匹提供標準中文譯名及其出處，冀統一中文圈各界對這些馬匹的稱呼，以便交流。</p>
						<p>
							如欲對這些馬匹有更深入的認識，請閲讀{" "}
							<a href="https://wpstud.com/UmaMusume/UmaIntro.htm" target="_blank">
								wpstud.com 的馬匹介紹
							</a>
							。
						</p>
						<p>
							本網站以 MIT License 發佈，原始碼
							<a href="https://github.com/umrax/umrax.github.io" target="_blank">
								公開於 GitHub
							</a>
							，歡迎參與。
						</p>
						<p>下表預設順序同遊戲官方網站，共 73 匹，點擊表格標題列欄位即可改變排序方式。</p>
						<section>
							<Names />
						</section>
					</article>
					<article hidden={current !== "#terms"}>
						<h2>術語對照</h2>
						<p>本網站亦提供《賽馬娘》中出現的常用賽馬術語的中日文對照，詞彙以香港賽馬會為準。</p>
						<p>
							對於其他非常見賽馬術語，請參閲{" "}
							<a href="https://www.wpstud.com/Translation/term.htm" target="_blank">
								wpstud.com 的術語列表
							</a>
							。
						</p>
						<p>
							本網站以 MIT License 發佈，原始碼
							<a href="https://github.com/umrax/umrax.github.io" target="_blank">
								公開於 GitHub
							</a>
							，歡迎參與。
						</p>
						<section>
							<Terms />
						</section>
					</article>
					<article hidden={current !== "#chars"}>
						<h2>新字提案</h2>
						<section lang="en" className="with-margin">
							<Chars />
						</section>
					</article>
				</main>
			</div>
			<footer className="border-t border-base-300">
				<div className="m-auto p-12 max-w-6xl flex flex-col sm:flex-row justify-between items-center">
					<a href="https://github.com/graphemecluster" target="_blank" className="btn btn-ghost px-2 h-16 min-h-16 flex items-center">
						<img
							src="https://avatars.githubusercontent.com/graphemecluster?size=96"
							alt="Profile Image"
							className="mr-3 w-12 h-12 rounded-full border border-base-content border-opacity-25 box-content"
						/>
						<div className="text-left">
							<div className="text-xs text-base-content text-opacity-50">Made by</div>
							<div className="text-lg text-base-content text-opacity-70">graphemecluster</div>
						</div>
					</a>
					<a
						href="https://github.com/umrax/umrax.github.io"
						target="_blank"
						className="btn btn-ghost my-3 px-3 flex flex-row-reverse sm:flex-row items-center text-base-content"
					>
						<div className="text-lg mx-2">Source Code</div>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8 fill-current">
							<path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path>
						</svg>
					</a>
				</div>
			</footer>
		</>
	);
}
