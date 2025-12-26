export default function Footer() {
  return (
		<div>
			<footer className="bg-blue-700 text-white pt-12">
				<div className="text-center mb-10">
					<h1 className="text-2xl font-bold mb-3">Start Your Journey Today</h1>
					<p className="text-sm text-gray-200 max-w-xl mx-auto mb-6">
						Join our platform and experience a simple, fast and user-friendly
						solution designed to help you achieve better results with less
						effort.
					</p>
					<button className="bg-green-500 hover:bg-green-600 p-4 rounded font-medium cursor-pointer">
						Get Started Now
					</button>
				</div>
				<div className="border-t border-blue-500 py-8 px-4">
					<div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-sm text-gray-200-200">
							© 2025 Landing Page Project
						</p>
						<div className="flex gap-6 text-sm">
							<a className="hover:underline cursor-pointer">About</a>
							<a className="hover:underline cursor-pointer">Contact</a>
							<a className="hover:underline cursor-pointer">Privacy Policy</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
