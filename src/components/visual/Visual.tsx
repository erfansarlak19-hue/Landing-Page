export default function Visual() {
  return (
		<div>
			<div className="flex justify-center">
				<div className="bg-white rounded-lg shadow-md p-6 w-full max-w-3xl">
					<div className="flex justify-center">
            <img className="w-80" src="./public/undraw_all-the-data_ijgn.png" alt="" />
					</div>
					<p className="text-gray-600 text-sm text-center mb-8">
						This visual demonstrates how the platform works and how users can
						easily interact with the system to achieve better results.
					</p>
					<div className="border-t mb-6"></div>
					<h1 className="text-xl font-semibold text-center mb-4">
						What You Get
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
						<div className="bg-slate-50 p-4 rounded">
							<h1 className="font-medium mb-2">Clear Workflow</h1>
							<p className="text-sm text-gray-600">
								A simple and structured process that helps users understand the
								system quickly.
							</p>
						</div>
						<div className="bg-slate-50 p-4 rounded">
							<h1 className="font-medium mb-2">Time Saving</h1>
							<p className="text-sm text-gray-600">
								Reduces unnecessary steps and allows users to focus on what
								matters most.
							</p>
						</div>
						<div className="bg-slate-50 p-4 rounded">
							<h1 className="font-medium mb-2">User Friendly</h1>
							<p className="text-sm text-gray-600">
								Designed with usability in mind to ensure a smooth experience
								for everyone.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
