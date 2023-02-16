import Image from "next/image";
import profilePic from "../../../public/image/1675265277430.jpeg";

const ProfilePic = () => {
	return (
		<>
			<div className="w-1/2 col-span-4 m-auto">
				<figure className="overflow-hidden rounded-full ring-myRed ring-[6px] ring-offset-[6px] ring-offset-myWhite dark:ring-offset-myDarkblue ">
					<Image src={profilePic} />
				</figure>
			</div>
			<div className="col-span-4 text-center text-">
				<h1>Florian Barraud</h1>
				<p className="mb-2">Graphiste / Marketing</p>
				<div className="flex justify-center">
					<i class="fa-brands fa-twitter text-3xl"></i>
				</div>
			</div>
			<div className="flex justify-between col-span-4 text-center">
				<div className="w-[30%]">
					<span>7</span>
					<p>Years of work experience</p>
				</div>
				<div className="w-[30%]">
					<span>50+</span>
					<p>Completed projects</p>
				</div>
				<div className="w-[30%]">
					<span>20+</span>
					<p>Personal side projects</p>
				</div>
			</div>
			<a
				href=""
				className="col-span-2 py-4 text-center text-myWhite rounded-2xl bg-myRed"
			>
				Download CV <i class="fa-solid fa-download"></i>
			</a>
			<a
				href=""
				className="col-span-2 py-4 text-center text-myWhite rounded-2xl bg-myDarklight"
			>
				Contact me
			</a>
		</>
	);
};

export default ProfilePic;
