import ProjectCard from './ProjectCard';
import img from '../../../public/image/Rectangle 1.png';
import { useState } from 'react';

const Project = () => {
    const [tabs, setTabs] = useState(true);

    return (
        <>
            <div className="flex col-span-4 p-4 text-center bg-white dark:bg-myDarklight rounded-2xl">
                <p
                    className={`w-1/2 p-4 rounded-2xl ${tabs && 'bg-lightGrey dark:bg-myDarkblue '}`}
                    onClick={() => {
                        setTabs(true);
                    }}
                >
                    Portfolio
                </p>
                <p
                    className={`w-1/2 p-4 rounded-2xl ${!tabs && 'bg-lightGrey dark:bg-myDarkblue '}`}
                    onClick={() => {
                        setTabs(false);
                    }}
                >
                    Skills
                </p>
            </div>
            {tabs ? (
                <div className="grid grid-cols-4 col-span-4 gap-4">
                    <ProjectCard
                        title={'SmarterTrading411'}
                        subtitle={'Landing page of SmarterTrading411 created using wordPress'}
                        urlSite={'https://google.com'}
                        imgFile={img}
                    />
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-4 col-span-4 gap-4">
                        <ProjectCard imgFile={img} />
                    </div>
                    <div className="grid grid-cols-4 col-span-4 gap-4">
                        <ProjectCard imgFile={img} />
                    </div>
                </>
            )}
        </>
    );
};

export default Project;
