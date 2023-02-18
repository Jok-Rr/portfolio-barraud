import ProjectCard from './ProjectCard';
import ai from '../../../public/image/AI.jpg';
import ps from '../../../public/image/photoshop.jpg';
import id from '../../../public/image/ID.jpg';
import ae from '../../../public/image/after_effect.jpg';
import pr from '../../../public/image/premiree_pro.jpg';
import figma from '../../../public/image/figma.jpg';
import test from '../../../public/image/Rectangle 1.png';
import { useState } from 'react';

const Project = () => {
    const [tabs, setTabs] = useState(true);

    return (
        <>
            <div className="flex col-span-4 p-4 text-center bg-white lg:col-span-12 dark:bg-myDarklight rounded-2xl">
                <p
                    className={`w-1/2 p-4 cursor-pointer rounded-2xl ${tabs && 'bg-lightGrey dark:bg-myDarkblue '}`}
                    onClick={() => {
                        setTabs(true);
                    }}
                >
                    Portfolio
                </p>
                <p
                    className={`w-1/2 p-4 cursor-pointer rounded-2xl ${!tabs && 'bg-lightGrey dark:bg-myDarkblue '}`}
                    onClick={() => {
                        setTabs(false);
                    }}
                >
                    Skills
                </p>
            </div>
            <div className="grid grid-cols-4 col-span-4 gap-4 lg:grid-cols-12 lg:col-span-12">
                {tabs ? (
                    <ProjectCard
                        title={'SmarterTrading411'}
                        subtitle={'Landing page of SmarterTrading411 created using wordPress'}
                        urlSite={'https://google.com'}
                        imgFile={test}
                    />
                ) : (
                    <>
                        <ProjectCard imgFile={ps} skillsCard={true} />
                        <ProjectCard imgFile={ai} skillsCard={true} />
                        <ProjectCard imgFile={pr} skillsCard={true} />
                        <ProjectCard imgFile={ae} skillsCard={true} />
                        <ProjectCard imgFile={id} skillsCard={true} />
                        <ProjectCard imgFile={figma} skillsCard={true} />
                    </>
                )}
            </div>
        </>
    );
};

export default Project;
