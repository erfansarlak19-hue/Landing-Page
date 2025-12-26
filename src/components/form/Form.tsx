import Visual from "../visual/Visual";

export default function Form() {
  return (
		<div className="flex justify-center gap-10 p-5">
			<form className="bg-white flex flex-col  gap-4 p-6 rounded-lg shadow-md w-140 h-140">
				<div className="flex flex-col gap-2 text-center">
					<h1 className="text-lg font-bold mb-2">Get Started</h1>
					<p className="text-sm mb-4">
						Please fill in your information to continue
					</p>
				</div>
				<div className="flex flex-col gap-2 pt-10">
					<input
						type="text"
						placeholder="First Name"
						className="w-ful border p-2 mb-3 rounded"
					/>
					<input
						type="text"
						placeholder="Last Name"
						className="w-full border p-2 mb-3 rounded"
					/>
					<input
						type="email"
						placeholder="Email Address"
						className="w-full border p-2 mb-4 rounded"
					/>
				</div>
				<div className="pt-25">
					<button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded font-medium cursor-pointer">
						Sign Up
					</button>
				</div>
			</form>
			<Visual />
		</div>
	);
}
