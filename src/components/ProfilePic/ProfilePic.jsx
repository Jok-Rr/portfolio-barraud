import Image from 'next/image';
import { useState } from 'react';
import profilePic from '../../../public/image/PDP.png';

const ProfilePic = () => {
    return (
        <>
            <div className="col-span-4 ">
                <figure className="overflow-hidden m-auto w-1/2 rounded-full ring-myRed ring-[6px] ring-offset-[6px] ring-offset-myWhite dark:ring-offset-myDarkblue ">
                    <Image src={profilePic} />
                </figure>
            </div>
            <div className="col-span-4 text-center text-">
                <h1>Florian Barraud</h1>
                <p className="mb-2">Graphiste / Marketing</p>
                <div className="flex justify-center">
                    <a href="https://twitter.com/1P0INT7" target={'_blank'}>
                        <i class="fa-brands fa-twitter text-3xl mx-2 "></i>
                    </a>
                    <a href="https://www.linkedin.com/in/florian-barraud01/">
                        <i class="fa-brands fa-linkedin text-3xl mx-2 "></i>
                    </a>
                    <a href="https://www.instagram.com/1p0int7/">
                        <i class="fa-brands fa-instagram text-3xl mx-2 "></i>
                    </a>
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
                href="/files/Barraud_Florian_CV_2022_2024.pdf"
                target={'_blank'}
                className="col-span-2 py-4 text-center text-myWhite rounded-2xl bg-myRed"
            >
                Open CV <i class="fa-solid fa-eye"></i>
            </a>
            <a
                href="mailto:florian.barraud01@gmail.com"
                className="col-span-2 py-4 text-center bg-white dark:text-myWhite rounded-2xl dark:bg-myDarklight"
            >
                Contact me
            </a>
        </>
    );
};

export default ProfilePic;
