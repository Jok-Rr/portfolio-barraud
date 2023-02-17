import Image from 'next/image';
import profilePic from '../../../public/image/PDP.png';

const ProfilePic = () => {
    return (
        <>
            <div className="col-span-4 lg:col-span-12">
                <figure className="overflow-hidden m-auto w-1/2 lg:w-1/4 rounded-full ring-myRed ring-[6px] ring-offset-[6px] ring-offset-myWhite dark:ring-offset-myDarkblue ">
                    <Image src={profilePic} placeholder={'blur'} alt={''} />
                </figure>
            </div>
            <div className="col-span-4 text-center lg:col-span-12 text-">
                <h1>Florian Barraud</h1>
                <p className="mb-2">Graphiste / Marketing</p>
                <div className="flex justify-center">
                    <a
                        href="https://twitter.com/1P0INT7"
                        target={'_blank'}
                        className={
                            'hover:text-myRed hover:scale-110 hover:rotate-[360deg] transition-transform duration-700  animate-pulse'
                        }
                    >
                        <i className="mx-2 text-3xl fa-brands fa-twitter "></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/florian-barraud01/"
                        className={
                            'hover:text-myRed hover:scale-110 hover:rotate-[360deg] transition-transform duration-700 animate-pulse'
                        }
                    >
                        <i className="mx-2 text-3xl fa-brands fa-linkedin "></i>
                    </a>
                    <a
                        href="https://www.instagram.com/1p0int7/"
                        className={
                            'hover:text-myRed hover:scale-110 hover:rotate-[360deg] transition-transform duration-700  animate-pulse'
                        }
                    >
                        <i className="mx-2 text-3xl fa-brands fa-instagram "></i>
                    </a>
                </div>
            </div>
            <div className="flex justify-between col-span-4 text-center lg:col-span-12">
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
                href="/files/Barraud_Florian_CV_2022_2024.pdf"
                target={'_blank'}
                className="col-span-2 py-4 text-center transition-transform duration-500 lg:col-span-6 text-myWhite rounded-2xl bg-myRed hover:scale-105"
            >
                Open CV <i className="fa-solid fa-eye"></i>
            </a>
            <a
                href="mailto:florian.barraud01@gmail.com"
                className="col-span-2 py-4 text-center transition-transform duration-500 bg-white lg:col-span-6 dark:text-myWhite rounded-2xl dark:bg-myDarklight hover:scale-105"
            >
                Contact me
            </a>
        </>
    );
};

export default ProfilePic;
