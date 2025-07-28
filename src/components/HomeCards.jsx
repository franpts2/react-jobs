import Card from "./Card";
import Button from "./Button";

const HomeCards = () => {
	return (
		<section className="py-4">
			<div className="container-xl lg:container m-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
					<Card>
						<h2 className="text-2xl font-bold">For Developers</h2>
						<p className="mt-2 mb-4">
							Browse our React jobs and start your career today
						</p>
						<Button text="Browse Jobs" link="/jobs" />
					</Card>
					<Card bg="bg-indigo-100">
						<h2 className="text-2xl font-bold">For Employers</h2>
						<p className="mt-2 mb-4">
							List your job to find the perfect developer for the role
						</p>
						<Button
							text="Add Job"
							link="/add-job"
							bg="bg-indigo-500"
							bgHover="bg-indigo-600"
						/>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default HomeCards;
