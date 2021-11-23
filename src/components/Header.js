import React from 'react';
import { Link } from "gatsby";

function Header() {
	return (
		<header className="xl:max-w-screen-xl mx-auto">
			<div className="flex items-center justify-between py-6 px-6">
				<div>
					<Link to="/">Gatsby.js Blog</Link>
				</div>
				<div className="space-x-4">
					<Link to="/archive" activeClassName="opacity-70">Archive</Link>
					<Link to="/contact" activeClassName="opacity-70">Contact</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;
