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
		</>
	);
};

export default ProfilePic;
