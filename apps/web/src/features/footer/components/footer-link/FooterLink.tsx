interface FooterLinkProps {
	currentPath: string;
}

const FooterLink = ({ currentPath }: FooterLinkProps) => {
	const pathList = [
		{
			name: "Home",
			path: "/",
			id: 1,
		},
		{
			name: "About",
			path: "/about",
			id: 2,
		},
		{
			name: "Events",
			path: "/events",
			id: 3,
		},
		{
			name: "Contact",
			path: "/contact",
			id: 4,
		},
		{
			name: "Login",
			path: "/login",
			id: 5,
		},
		{
			name: "Signup",
			path: "/signup",
			id: 6,
		},
	];

	return (
		<div className="footer-link">
			{pathList.map((pathObject) => {
				return (
					<a
						key={pathObject.id}
						href={pathObject.path}
						className={`cursor-pointer text-left text-sm transition-colors ${
							currentPath === pathObject.path
								? "font-semibold"
								: "text-body hover:text-accent"
						}`}
					>
						{pathObject.name}
					</a>
				);
			})}
		</div>
	);
};

export default FooterLink;
