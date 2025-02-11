import Link from 'next/link';

export function Navbar() {
	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
				<Menu />
			</div>
			<div className="navbar-center">
				<h1 className="text-xl font-bold">Let's Gather</h1>
			</div>
			<div className="navbar-end">
				<Notifications />
			</div>
		</div>
	);
}

function Menu() {
	return (
		<div className="dropdown">
			<button type="button" className="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<title>Menu</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16M4 18h7"
					/>
				</svg>
			</button>
			<ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/events">Events</Link>
				</li>
				<li>
					<Link href="/clubs">Clubs</Link>
				</li>
				<li>
					<Link href="/chats">Chats</Link>
				</li>
			</ul>
		</div>
	);
}

function Notifications() {
	return (
		<button type="button" className="btn btn-ghost btn-circle">
			<div className="indicator">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<title>Notifications</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/>
				</svg>
				<span className="badge badge-xs badge-primary indicator-item" />
			</div>
		</button>
	);
}
