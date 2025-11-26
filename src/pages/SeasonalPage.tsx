import { useState } from "react";
import Confetti from "react-confetti";

const themes = [
	{
		id: "sakura",
		name: "Sakura",
		emoji: "🌸",
		description: "Cherry blossom petals gently swirl and flutter in the breeze",
		colors: ["#FFB7C5", "#FFC0CB"],
		numberOfPieces: 100,
		gravity: 0.02,
		wind: 0.01,
		initialVelocityY: -2,
	},
	{
		id: "snow",
		name: "Snow",
		emoji: "❄️",
		description: "Snowflakes softly fall straight down (dark mode recommended)",
		colors: ["#FFFFFF", "#E0F2F7"],
		numberOfPieces: 300,
		gravity: 0.01,
	},
	{
		id: "koyo",
		name: "Autumn",
		emoji: "🍁",
		description: "Autumn leaves dance and swirl in the wind",
		colors: ["#FF6347", "#FFA500"],
		numberOfPieces: 200,
		gravity: 0.08,
		wind: 0.02,
	},
	{
		id: "star",
		name: "Star",
		emoji: "✨",
		description: "Stars shoot upward and twinkle down",
		colors: ["#FFD700", "#FFFF00"],
		numberOfPieces: 100,
		gravity: 0.03,
		initialVelocityY: -5,
	},
	{
		id: "christmas",
		name: "Christmas",
		emoji: "🎄",
		description: "Festive confetti bursts and spreads in celebration",
		colors: ["#FF0000", "#00FF00", "#DAA520", "#4169E1"],
		numberOfPieces: 500,
		gravity: 0.06,
		initialVelocityX: 3,
	},
];

const SeasonalPage = () => {
	const [selectedThemeIndex, setSelectedThemeIndex] = useState<number | null>(
		null,
	);
	const currentTheme =
		selectedThemeIndex !== null ? themes[selectedThemeIndex] : null;
	const [showConfetti, setShowConfetti] = useState(false);

	return (
		<div className="flex flex-col items-center justify-center h-full gap-8 p-4">
			<div className="flex flex-col md:flex-row gap-4">
				{themes.map((t, index) => {
					const isSelected = index === selectedThemeIndex;
					return (
						<button
							type="button"
							key={t.id}
							onClick={() => {
								setShowConfetti(false);
								setSelectedThemeIndex(index);
								setTimeout(() => {
									setShowConfetti(true);
								}, 100);
							}}
							className={`px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl ${
								isSelected
									? "bg-gradient-to-r from-orange-100 to-pink-200 text-gray-800"
									: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
							}`}
						>
							{t.emoji} {t.name}
						</button>
					);
				})}
			</div>
			{/* Description */}
			{currentTheme && (
				<p className="text-xl text-gray-600 dark:text-gray-400">
					{currentTheme.description}
				</p>
			)}

			{showConfetti && (
				<button
					type="button"
					onClick={() => setShowConfetti(false)}
					className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
				>
					Stop Confetti
				</button>
			)}

			{/* Confetti */}
			{showConfetti && currentTheme && (
				<Confetti
					colors={currentTheme.colors}
					numberOfPieces={currentTheme.numberOfPieces}
					gravity={currentTheme.gravity}
					wind={currentTheme.wind}
					initialVelocityY={currentTheme.initialVelocityY}
					initialVelocityX={currentTheme.initialVelocityX}
				/>
			)}

			{/* Parameters */}
			{showConfetti && currentTheme && (
				<div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
					<div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
						<div>
							<span className="font-semibold">Theme:</span> {currentTheme.name}
						</div>
						<div>
							<span className="font-semibold">Colors:</span>{" "}
							{currentTheme.colors.join(", ")}
						</div>
						<div>
							<span className="font-semibold">Pieces:</span>{" "}
							{currentTheme.numberOfPieces}
						</div>
						<div>
							<span className="font-semibold">Gravity:</span>{" "}
							{currentTheme.gravity}
						</div>
						{currentTheme.wind !== undefined && (
							<div>
								<span className="font-semibold">Wind:</span> {currentTheme.wind}
							</div>
						)}
						{currentTheme.initialVelocityY !== undefined && (
							<div>
								<span className="font-semibold">InitialVelocityY:</span>{" "}
								{currentTheme.initialVelocityY}
							</div>
						)}
						{currentTheme.initialVelocityX !== undefined && (
							<div>
								<span className="font-semibold">InitialVelocityX:</span>{" "}
								{currentTheme.initialVelocityX}
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default SeasonalPage;
