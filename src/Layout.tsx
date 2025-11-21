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
		<div>
			<header>
				<nav>
					<div className="flex justify-between items-center">
						<div>
							<Link to="/">React Confetti</Link>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex space-x-8">
							{navLinks.map((link) => (
								<Link key={link.to} to={link.to}>
									{link.label}
								</Link>
							))}
						</div>

						{/* Mobile Menu Button */}
						<div className="md:hidden">
							<button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
								{isMenuOpen ? "✕" : "☰"}
							</button>
						</div>
					</div>

					{/* Mobile Navigation */}
					{isMenuOpen && (
						<div className="md:hidden">
							{navLinks.map((link) => (
								<Link
									key={link.to}
									to={link.to}
									onClick={() => setIsMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</div>
					)}
				</nav>
			</header>

			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
