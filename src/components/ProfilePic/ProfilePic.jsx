import Image from "next/image";
import profilePic from "../../../public/image/1675265277430.jpeg";

const ProfilePic = () => {
	return (
		<div className="col-span-2 col-start-2">
			<figure className="overflow-hidden rounded-full ring-myRed ring-4 ring-offset-4 ring-offset-myDarkblue">
				<Image src={profilePic} />
			</figure>
		</div>
	);
};

export default ProfilePic;
