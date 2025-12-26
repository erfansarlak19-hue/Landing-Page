type users = {
  id:number;
	name: string;
	role: string;
	message: string;
}

const users = [
	{
    id:1,
		name: "Ali Rezaei",
		role: "Student",
		message:
			"This platform helped me understand the process quickly and saved me a lot of time.",
	},
	{
    id:2,
		name: "Sara Mohammadi",
		role: "Junior Developer",
		message:
			"The interface is very clean and user-friendly. I enjoyed working with it.",
	},
	{
    id:3,
		name: "Mohammad Karimi",
		role: "Freelancer",
		message:
			"Everything was clear from the beginning. The workflow makes sense and feels professional.",
	},
];

export default function socialProof2() {
	return (
		<div>
			<div className="py-10">
				<div className="flex justify-center gap-6">
					{users.map((item) => (
						<div
							key={item.id}
							className="bg-white p-6 rounded-lg shadow w-full max-w-sm"
						>
							<div className="text-yellow-400 mb-2">★★★★★</div>
							<p className="text-sm text-gray-600 mb-4">“{item.message}”</p>
							<div className="border-t pt-3">
								<p className="font-medium">{item.name}</p>
								<p className="text-xs text-gray-500">{item.role}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
