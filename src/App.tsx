import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type React from "react";
import { useRef } from "react";

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
		<main className="h-dvh w-screen bg-[#DDEBF7] flex flex-col relative overflow-x-hidden">
			<img
				src="/background.svg"
				className="w-screen object-cover fixed inset-0 h-[75dvh] sm:h-[70dvh] md:h-[60dvh] xl:h-[40dvh] overflow-visible"
				alt="Background"
				draggable="false"
				id="background-image"
			/>
			<img
				src="/hero/glow-group.svg"
				className="fixed bottom-0 scale-200 w-screen"
				alt="Glow 2"
				draggable="false"
				id="glow-group"
			/>
			<div className="flex-1 relative flex flex-col max-md:px-4 px-20 pt-6.5 pb-22.5 lg:justify-between items-stretch">
				<nav className="flex items-center gap-10 justify-between max-w-360 self-center w-full">
					<img
						src="/hero/logo.svg"
						alt=""
					/>
					<ul className="flex items-center gap-5 max-lg:hidden">
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

				<div className="flex flex-col flex-1 items-center pt-12 md:pt-24 lg:pt-30 gap-2">
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
							<p className="font-jakarta font-extrabold sm:font-bold text-4xl sm:text-5xl lg:text-7xl text-center">
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
				<Partners />
			</div>

			<p className="fixed bottom-4 text-[#151516] text-xs left-1/2 -translate-x-1/2 text-center">
				Code:{" "}
				<a
					className="underline"
					href="https://x.com/itzadetunji1"
				>
					Adetunji Adeyinka
				</a>{" "}
				<br />
				Design:{" "}
				<a
					className="underline"
					href="https://x.com/nerooeth"
				>
					Nero
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

const Partners = () => {
	const containerRef = useRef<HTMLUListElement | null>(null);

	useGSAP(() => {
		const container = containerRef.current;
		if (!container) return;

		// I am cloning the items so the animation can be seamless
		const items = container.children;
		const itemsArray = Array.from(items);

		// Add all the items to the div there
		itemsArray.forEach((item) => {
			const clone = item.cloneNode(true);
			container.appendChild(clone);
		});

		// The width is half of the width of the container since we cloned the items
		const totalWidth = container.scrollWidth / 2;

		// Timeline for gsap
		const tl = gsap.timeline({ repeat: -1 });

		tl.to(container, {
			x: -totalWidth,
			duration: 30,
			ease: "none",
			onComplete: () => {
				gsap.set(container, { x: 0 });
			},
		});

		container.addEventListener("mouseenter", () => tl.pause());
		container.addEventListener("mouseleave", () => tl.resume());

		return () => {
			tl.kill();
		};
	}, []);

	return (
		<div className="overflow-hidden max-w-4xl self-center py-8">
			<ul
				ref={containerRef}
				className="flex gap-12 items-center"
				id="partner-container"
				style={{ width: "fit-content" }}
			>
				{partners.map((partner, idx) => (
					<img
						key={partner}
						src={partner}
						alt={partner.split("/")[5]}
						className="w-24 h-7 object-contain"
						id={`partner-${idx}`}
					/>
				))}
			</ul>
		</div>
	);
};
