import Image from "next/image";
import profilePic from "../../../public/image/1675265277430.jpeg";

const ProfilePic = () => {
	return (
		<div className="col-span-2 col-start-2">
			<figure className="overflow-hidden rounded-full outline-myRed outline-4 outline outline-offset-4">
				<Image src={profilePic} className={""} />
			</figure>
		</div>
	);
};

export default ProfilePic;
