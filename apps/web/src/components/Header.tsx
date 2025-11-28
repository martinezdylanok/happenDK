import { Button } from "./ui/button";

const Header = () => {
	const currentPath = window.location.pathname;

	return (
		<header className="header sticky top-0 z-50 border-b border-border-subtle bg-page/80 backdrop-blur-sm">
			<nav className="header__nav container mx-auto flex items-center justify-between px-6 py-4">
				<div className="header__brand">
					<a
						href="/"
						className="text-xl font-semibold cursor-pointer text-body transition-colors hover:text-accent"
					>
						happenDK
					</a>
				</div>
				<div className="header__navigation flex items-center gap-2">
					<Button
						className="cursor-pointer"
						variant={currentPath === "/log-in" ? "default" : "ghost"}
						size="sm"
					>
						<a href="/login">Log in</a>
					</Button>
					<Button
						className="cursor-pointer"
						variant={currentPath === "/contact" ? "default" : "ghost"}
						size="sm"
					>
						<a href="/contact">Contact</a>
					</Button>
					<Button
						className="cursor-pointer"
						variant={currentPath === "/sign-up" ? "default" : "default"}
						size="sm"
					>
						<a href="/signup">Sign up</a>
					</Button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
