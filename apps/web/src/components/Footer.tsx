const Footer = () => {
	const currentYear = new Date().getFullYear();

	const currentPath = window.location.pathname;

	return (
		<footer className="footer border-t border-border-subtle bg-section">
			<div className="footer__content container mx-auto px-6 py-12">
				<div className="footer__grid grid grid-cols-1 gap-8 md:grid-cols-4">
					<div className="footer__brand">
						<h3 className="mb-4 text-lg font-semibold text-body">happenDK</h3>
						<p className="text-sm text-muted">Is it happening? it is here.</p>
					</div>
					<div className="footer__links">
						<h4 className="mb-4 text-sm font-semibold text-heading">
							Navigation
						</h4>
						<nav className="footer__nav flex flex-col gap-2">
							<a
								href="/"
								className={`cursor-pointer text-left text-sm transition-colors ${
									currentPath === "/"
										? "font-semibold"
										: "text-body hover:text-accent"
								}`}
							>
								Home
							</a>
							<a
								href="/events"
								className={`cursor-pointer text-left text-sm transition-colors ${
									currentPath === "/events"
										? "font-semibold"
										: "text-body hover:text-accent"
								}`}
							>
								Events
							</a>
							<a
								href="/about"
								className={`cursor-pointer text-left text-sm transition-colors ${
									currentPath === "/about"
										? "font-semibold"
										: "text-body hover:text-accent"
								}`}
							>
								About
							</a>
							<a
								href="contact"
								className={`cursor-pointer text-left text-sm transition-colors ${
									currentPath === "/contact"
										? "font-semibold"
										: "text-body hover:text-accent"
								}`}
							>
								Contact
							</a>
						</nav>
					</div>
					<div className="footer__links">
						<h4 className="mb-4 text-sm font-semibold text-heading">Account</h4>
						<nav className="footer__nav flex flex-col gap-2">
							<a
								href="/login"
								className={`cursor-pointer text-left text-sm transition-colors ${
									currentPath === "/login"
										? "font-semibold"
										: "text-body hover:text-accent"
								}`}
							>
								Log in
							</a>
							<a
								href="/signup"
								className={`cursor-pointer text-left text-sm transition-colors ${
									currentPath === "/signup"
										? "font-semibold"
										: "text-body hover:text-accent"
								}`}
							>
								Sign up
							</a>
						</nav>
					</div>
					<div className="footer__legal">
						<h4 className="mb-4 text-sm font-semibold text-heading">Legal</h4>
						<p className="text-sm text-muted">
							© {currentYear} happenDK. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
