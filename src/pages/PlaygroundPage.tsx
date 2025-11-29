import { useState } from "react";
import Confetti from "react-confetti";
import { themes } from "./SeasonalPage";

const DEFAULT_VALUES = {
	numberOfPieces: 200,
	gravity: 0.1,
	wind: 0,
	initialVelocityX: 0,
	initialVelocityY: 0,
	friction: 0.99,
	opacity: 1,
	useCustomColors: false,
	customColors: ["#FF0000", "#00FF00", "#0000FF", "", ""],
};

const PlaygroundPage = () => {
	console.log(themes);
	const [numberOfPieces, setNumberOfPieces] = useState(200);
	const [gravity, setGravity] = useState(0.1);
	const [wind, setWind] = useState(0);
	const [initialVelocityX, setInitialVelocityX] = useState(0);
	const [initialVelocityY, setInitialVelocityY] = useState(0);
	const [friction, setFriction] = useState(0.99);
	const [opacity, setOpacity] = useState(1);
	const [useCustomColors, setUseCustomColors] = useState(false);
	const [customColors, setCustomColors] = useState([
		"#FF0000",
		"#00FF00",
		"#0000FF",
		"",
		"",
	]);

	const [copied, setCopied] = useState(false);
	const [showConfetti, setShowConfetti] = useState(true);

	const confettiColors = useCustomColors
		? customColors.filter((c) => c !== "")
		: undefined; // undefined uses React Confetti's default 17 colors

	const restartConfetti = () => {
		setShowConfetti(false);
		setTimeout(() => setShowConfetti(true), 100);
	};

	const handleResetParameters = () => {
		setNumberOfPieces(DEFAULT_VALUES.numberOfPieces);
		setGravity(DEFAULT_VALUES.gravity);
		setWind(DEFAULT_VALUES.wind);
		setInitialVelocityX(DEFAULT_VALUES.initialVelocityX);
		setInitialVelocityY(DEFAULT_VALUES.initialVelocityY);
		setFriction(DEFAULT_VALUES.friction);
		setOpacity(DEFAULT_VALUES.opacity);
		restartConfetti();
	};

	const handleResetColors = () => {
		setCustomColors(DEFAULT_VALUES.customColors);
		setUseCustomColors(DEFAULT_VALUES.useCustomColors);
		restartConfetti();
	};

	const handleResetAll = () => {
		setNumberOfPieces(DEFAULT_VALUES.numberOfPieces);
		setGravity(DEFAULT_VALUES.gravity);
		setWind(DEFAULT_VALUES.wind);
		setInitialVelocityX(DEFAULT_VALUES.initialVelocityX);
		setInitialVelocityY(DEFAULT_VALUES.initialVelocityY);
		setFriction(DEFAULT_VALUES.friction);
		setOpacity(DEFAULT_VALUES.opacity);
		setCustomColors(DEFAULT_VALUES.customColors);
		setUseCustomColors(DEFAULT_VALUES.useCustomColors);
		restartConfetti();
	};

	const handlePreset = (themeIndex: number) => {
		const theme = themes[themeIndex];
		setNumberOfPieces(theme.numberOfPieces);
		setGravity(theme.gravity);
		setWind(theme.wind ?? DEFAULT_VALUES.wind);
		setInitialVelocityX(
			theme.initialVelocityX ?? DEFAULT_VALUES.initialVelocityX,
		);
		setInitialVelocityY(
			theme.initialVelocityY ?? DEFAULT_VALUES.initialVelocityY,
		);
		setFriction(DEFAULT_VALUES.friction);
		setOpacity(DEFAULT_VALUES.opacity);

		// Set colors from theme
		const themeColors = [...theme.colors];
		while (themeColors.length < 5) {
			themeColors.push("");
		}
		setCustomColors(themeColors);
		setUseCustomColors(true);
		restartConfetti();
	};

	return (
		<div className="flex flex-col h-full">
			{/* Controls */}
			<div className="p-4">
				{/* Row 1 */}
				<div className="flex gap-4 mb-4">
					<div className="flex-1">
						<label
							htmlFor="numberOfPieces"
							className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
						>
							Number of Pieces: {numberOfPieces} (default: 200)
						</label>
						<input
							id="numberOfPieces"
							type="range"
							min="50"
							max="500"
							step="10"
							value={numberOfPieces}
							onChange={(e) => setNumberOfPieces(Number(e.target.value))}
							onMouseUp={restartConfetti}
							onTouchEnd={restartConfetti}
							className="w-full"
						/>
					</div>
					<div className="flex-1">
						<label
							htmlFor="gravity"
							className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
						>
							Gravity: {gravity} (default: 0.1)
						</label>
						<input
							id="gravity"
							type="range"
							min="0"
							max="0.3"
							step="0.01"
							value={gravity}
							onChange={(e) => setGravity(Number(e.target.value))}
							onMouseUp={restartConfetti}
							onTouchEnd={restartConfetti}
							className="w-full"
						/>
					</div>
					<div className="flex-1">
						<label
							htmlFor="wind"
							className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
						>
							Wind: {wind} (default: 0)
						</label>
						<input
							id="wind"
							type="range"
							min="-0.1"
							max="0.1"
							step="0.01"
							value={wind}
							onChange={(e) => setWind(Number(e.target.value))}
							onMouseUp={restartConfetti}
							onTouchEnd={restartConfetti}
							className="w-full"
						/>
					</div>
				</div>
				{/* Row 2 */}
				<div className="flex gap-4 mb-4">
					<div className="flex-1">
						<label
							htmlFor="initialVelocityX"
							className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
						>
							Initial Velocity X: {initialVelocityX} (default: 0)
						</label>
						<input
							id="initialVelocityX"
							type="range"
							min="-10"
							max="10"
							step="1"
							value={initialVelocityX}
							onChange={(e) => setInitialVelocityX(Number(e.target.value))}
							onMouseUp={restartConfetti}
							onTouchEnd={restartConfetti}
							className="w-full"
						/>
					</div>

					<div className="flex-1">
						<label
							htmlFor="initialVelocityY"
							className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
						>
							Initial Velocity Y: {initialVelocityY} (default: 0)
						</label>
						<input
							id="initialVelocityY"
							type="range"
							min="-20"
							max="0"
							step="1"
							value={initialVelocityY}
							onChange={(e) => setInitialVelocityY(Number(e.target.value))}
							onMouseUp={restartConfetti}
							onTouchEnd={restartConfetti}
							className="w-full"
						/>
					</div>
				</div>

				{/* Row 3 */}
				<div className="flex gap-4 mb-4">
					<div className="flex-1">
						<label
							htmlFor="friction"
							className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
						>
							Friction: {friction} (default: 0.99)
						</label>
						<input
							id="friction"
							type="range"
							min="0.9"
							max="1.0"
							step="0.01"
							value={friction}
							onChange={(e) => setFriction(Number(e.target.value))}
							onMouseUp={restartConfetti}
							onTouchEnd={restartConfetti}
							className="w-full"
						/>
					</div>

					<div className="flex-1">
						<label
							htmlFor="opacity"
							className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300"
						>
							Opacity: {opacity} (default: 1)
						</label>
						<input
							id="opacity"
							type="range"
							min="0"
							max="1"
							step="0.1"
							value={opacity}
							onChange={(e) => setOpacity(Number(e.target.value))}
							onMouseUp={restartConfetti}
							onTouchEnd={restartConfetti}
							className="w-full"
						/>
					</div>
				</div>
				{/* Row 4: Colors */}
				<div className="mb-4">
					<div className="mb-3">
						<div className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
							Colors:
						</div>
						<div className="flex gap-4">
							<div className="flex items-center">
								<input
									id="defaultColors"
									type="radio"
									name="colorMode"
									checked={!useCustomColors}
									onChange={() => setUseCustomColors(false)}
									className="w-4 h-4 mr-2"
								/>
								<label
									htmlFor="defaultColors"
									className="text-sm text-gray-700 dark:text-gray-300"
								>
									Use default colors (17 colors)
								</label>
							</div>

							<div className="flex items-center">
								<input
									id="customColors"
									type="radio"
									name="colorMode"
									checked={useCustomColors}
									onChange={() => setUseCustomColors(true)}
									className="w-4 h-4 mr-2"
								/>
								<label
									htmlFor="customColors"
									className="text-sm text-gray-700 dark:text-gray-300"
								>
									Custom colors (up to 5)
								</label>
							</div>
						</div>
					</div>

					{useCustomColors && (
						<div className="flex flex-col gap-2">
							<div className="flex gap-2 items-center">
								{customColors.map((color, index) => (
									<div
										key={`${index}-${color}`}
										className="flex flex-col gap-1"
									>
										<input
											type="color"
											value={color || "#000000"}
											onChange={(e) => {
												const newColors = [...customColors];
												newColors[index] = e.target.value;
												setCustomColors(newColors);
											}}
											className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
										/>
										<input
											type="text"
											value={color}
											placeholder="#000000"
											onChange={(e) => {
												const newColors = [...customColors];
												let value = e.target.value;
												if (value && !value?.startsWith("#")) {
													value = `#${value}`;
												}
												newColors[index] = value;
												setCustomColors(newColors);
											}}
											className="w-20 px-1 py-1 text-xs border border-gray-300 rounded dark:bg-gray-700 dark:text-gray-200"
										/>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
				{/* Row 5: Preset buttons */}
				<div className="mb-4">
					<div className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
						Preset Themes:
					</div>
					<div className="flex flex-wrap gap-2">
						{themes.map((theme, index) => (
							<button
								key={theme.id}
								type="button"
								onClick={() => handlePreset(index)}
							>
								{theme.emoji} {theme.name}
							</button>
						))}
					</div>
				</div>

				{/* Row 6: Control buttons */}
				<div className="flex gap-2">
					<button
						type="button"
						onClick={() => setShowConfetti(!showConfetti)}
						className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition-all"
					>
						{showConfetti ? "Stop Confetti" : "Start Confetti"}
					</button>
					<button
						type="button"
						onClick={handleResetColors}
						className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
					>
						Reset Colors
					</button>
					<button
						type="button"
						onClick={handleResetParameters}
						className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
					>
						Reset Parameters
					</button>
					<button
						type="button"
						onClick={handleResetAll}
						className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
					>
						Reset All
					</button>
				</div>
			</div>

			{/* Confetti (fullscreen) */}
			{showConfetti && (
				<Confetti
					numberOfPieces={numberOfPieces}
					gravity={gravity}
					wind={wind}
					initialVelocityX={initialVelocityX}
					initialVelocityY={initialVelocityY}
					friction={friction}
					opacity={opacity}
					colors={confettiColors}
				/>
			)}

			{/* Bottom: Code snippet */}
			<div className="fixed bottom-4 left-1/2 -translate-x-1/2">
				{/* Code and Copy button */}
			</div>
		</div>
	);
};

export default PlaygroundPage;
