import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navLinks = [
		{ to: "/basic", label: "Basic" },
		{ to: "/countdown", label: "Countdown" },
		{ to: "/toast", label: "Toast" },
		{ to: "/seasonal", label: "Seasonal" },
		{ to: "/playground", label: "Playground" },
	];

	return (
		<div className="min-h-screen bg-white text-gray-800 flex flex-col">
			<header className="backdrop-blur-md shadow-sm sticky top-0 z-10">
				<nav className="px-4 py-2">
					<div className="flex justify-between items-center">
						<div>
							<Link
								to="/"
								className="text-2xl font-bold hover:text-indigo-900 transition-colors"
							>
								React Confetti
							</Link>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex space-x-8">
							{navLinks.map((link) => (
								<Link
									key={link.to}
									to={link.to}
									className="hover:text-indigo-900 transition-colors"
								>
									{link.label}
								</Link>
							))}
						</div>

						{/* Mobile Menu Button */}
						<div className="md:hidden">
							<button
								type="button"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="text-3xl hover:text-indigo-900 transition-colors"
							>
								{isMenuOpen ? "✕" : "☰"}
							</button>
						</div>
					</div>

					{/* Mobile Navigation */}
					{isMenuOpen && (
						<div className="md:hidden mt-4">
							{navLinks.map((link) => (
								<Link
									key={link.to}
									to={link.to}
									onClick={() => setIsMenuOpen(false)}
									className="block py-3 px-4 text-lg hover:text-indigo-900 transition-colors font-bold"
								>
									{link.label}
								</Link>
							))}
						</div>
					)}
				</nav>
			</header>

			<main className="flex-grow">
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
