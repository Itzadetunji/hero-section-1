import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type React from "react";

export const App: React.FC = () => {
	useGSAP(() => {
		const glowTimeline = gsap.timeline({
			repeat: -1,
			yoyo: true,
			repeatDelay: 0.2,
		});
		glowTimeline.fromTo(
			"#glow-group",
			{ scale: 1, y: 50 },
			{ scale: 1.75, y: 0, duration: 2, delay: 0.5, ease: "sine.inOut" }
		);

		gsap.set("#background-image", { opacity: 0, y: -20 });

		const downsTimeline = gsap.timeline({
			repeat: -1,
			yoyo: true,
			repeatDelay: 0.25,
		});

		downsTimeline.fromTo(
			"#background-image",
			{ y: -20, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1.25, ease: "sine.inOut" }
		);

		const arrowTimeline = gsap.timeline({
			repeat: -1,
			yoyo: true,
			repeatDelay: 0.25,
		});

		arrowTimeline.fromTo(
			"#arrow-right",
			{ x: 0 },
			{ x: 5, duration: 0.8, ease: "sine.inOut" }
		);
	}, []);

	return (
		<main className="h-dvh w-screen bg-[#DDEBF7] flex flex-col relative overflow-hidden">
			<img
				src="/background.svg"
				className="w-screen object-cover absolute inset-0"
				alt="Background"
				draggable="false"
				id="background-image"
			/>
			<img
				src="/hero/glow-group.svg"
				className="absolute bottom-0 scale-200"
				alt="Glow 2"
				draggable="false"
				id="glow-group"
			/>
			<div className="flex-1 relative flex flex-col px-20 pt-6.5 pb-22.5 justify-between items-stretch">
				<nav className="flex items-center gap-10 justify-between">
					<img
						src="/hero/logo.svg"
						alt=""
					/>
					<ul className="flex items-center gap-5">
						{navlinks.map((link) => (
							<li key={link}>{link}</li>
						))}
					</ul>
					<button
						className="relative w-34 py-2.5 rounded-[0.625rem] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.22),0px_1px_0px_0px_rgba(255,255,255,0.32),0px_1px_3px_-1px_rgba(3,0,11,1),0px_0px_0px_1px_rgba(107,158,255,1)] text-white bg-[rgb(72,112,249)]"
						type="button"
					>
						<p>Get Started</p>
					</button>
				</nav>

				<div className="flex flex-col flex-1 items-center pt-30 gap-2">
					<div className="border-white rounded-lg border w-fit h-10.5 px-2.5 flex items-center gap-1.5">
						<img
							src="/trusted-people.png"
							className="w-16"
							alt=""
						/>
						<p className="text-black/43">Trusted by 10,000 others</p>
					</div>
					<div className="flex flex-col gap-8">
						<div className="flex flex-col gap-2">
							<p className="font-jakarta font-bold text-7xl text-center">
								Stop Repeating Yourself.
								<br /> Let AI Remember Everything.
							</p>
							<p className="text-center py-2">
								RecallIQ turns your teama&apos;s chats, docs, and decisions into
								an intelligent, <br /> searchable brain — so answers are always
								just a prompt away.
							</p>
						</div>
						<div className="flex items-center justify-center gap-2">
							<button
								className="relative w-34 py-2.5 rounded-[0.625rem] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.22),0px_1px_0px_0px_rgba(255,255,255,0.32),0px_1px_3px_-1px_rgba(3,0,11,1),0px_0px_0px_1px_rgba(107,158,255,1)] text-white bg-[rgb(72,112,249)]"
								type="button"
							>
								<p>Get Started</p>
							</button>
							<button
								className="relative w-34 py-2.5 bg-white rounded-[0.625rem] text-[#151516] gap-2 flex justify-center items-center backdrop-blur-[60px] shadow-[0px_1.5px_1px_0px_rgba(227,223,222,1)]"
								type="button"
							>
								<p>Learn More</p>
								<img
									src="/arrow-right.svg"
									className="size-6"
									alt=""
									id="arrow-right"
								/>
							</button>
						</div>
					</div>
				</div>

				<ul className="flex gap-18.5 justify-center items-center flex-wrap">
					{partners.map((item) => (
						<img
							key={item}
							src={item}
							alt={item.split(",")[0]}
						/>
					))}
				</ul>
			</div>

			<p className="fixed bottom-4 text-[#151516] text-xs left-1/2 -translate-x-1/2">
				Code:{" "}
				<a
					className="underline"
					href="https://x.com/itzadetunji1"
				>
					Adetunji Adeyinka
				</a>{" "}
				Design:{" "}
				<a
					className="underline"
					href="https://x.com/itzadetunji1"
				>
					Adetunji Adeyinka
				</a>
			</p>
		</main>
	);
};

const partners = [
	"perplexity.svg",
	"deepseek.svg",
	"openai.svg",
	"google.svg",
	"grok.svg",
	"aws.svg",
];

const navlinks = ["Benefits", "Features", "Pricing", "Solutions", "FAQ’s"];
