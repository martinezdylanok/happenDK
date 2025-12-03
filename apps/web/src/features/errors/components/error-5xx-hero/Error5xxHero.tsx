const Error5xxHero = () => {
	return (
		<div className="error-5xx-hero">
			<div className="error-5xx-hero__wrapper flex flex-col items-center justify-center py-20">
				<h1 className="mb-4 text-6xl font-bold text-heading">500</h1>
				<p className="mb-6 text-xl text-body">Internal server error</p>
				<p className="text-muted">
					Something went wrong on our end. Please try again later.
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

export default Error5xxHero;
