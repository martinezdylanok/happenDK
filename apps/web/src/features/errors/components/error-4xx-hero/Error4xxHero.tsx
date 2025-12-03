const Error4xxHero = () => {
	return (
		<div className="error-4xx-hero">
			<div className="error-4xx-hero__wrapper flex flex-col items-center justify-center py-20">
				<h1 className="mb-4 text-6xl font-bold text-heading">404</h1>
				<p className="mb-6 text-xl text-body">Page not found</p>
				<p className="text-muted">
					The page you're looking for doesn't exist or has been moved.
				</p>
				<a
					href="/"
					className="mt-8 text-accent transition-colors hover:text-active hover:underline"
				>
					← Back to home
				</a>
			</div>
		</div>
	);
};

export default Error4xxHero;
