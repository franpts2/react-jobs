import { useState, useEffect, use } from "react";
import Spinner from "./Spinner";
import JobListing from "./JobListing";

const JobListings = ({ isHome = false }) => {
	const [jobs, setJobs] = useState([]); //default is empty array
	const [loading, setLoading] = useState(true);

	useEffect(() => {
        const apiURL = isHome ? "http://localhost:4000/jobs?_limit=3" : "http://localhost:4000/jobs"
		const fetchJobs = async () => {
			try {
				const res = await fetch(apiURL);
				const data = await res.json();
				setJobs(data);
			} catch (error) {
				console.log("Error fetching data", error);
			} finally {
				setLoading(false);
			}
		};
		fetchJobs();
	}, []);

	return (
		<section className="bg-blue-50 px-4 py-10">
			<div className="container-xl lg:container m-auto">
				<h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
					{isHome ? "Recent Jobs" : "Browse Jobs"}
				</h2>

				{loading ? (
					<Spinner loading={loading} />
				) : (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{jobs.map((job) => (
							<JobListing key={job.id} job={job} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default JobListings;
