import ProjectCard from './ProjectCard';
import ai from '../../../public/image/AI.jpg';
import ps from '../../../public/image/photoshop.jpg';
import id from '../../../public/image/ID.jpg';
import ae from '../../../public/image/after_effect.jpg';
import pr from '../../../public/image/premiree_pro.jpg';
import figma from '../../../public/image/figma.jpg';
import MoodBoard from '../../../public/image/MOODBOARD3.png';
import jordan from '../../../public/image/jordan.jpg';
import hoodlife from '../../../public/image/concours_chris_brown.png';
import unpointsept from '../../../public/image/1point7.png';
import ad from '../../../public/image/ad.jpg';
import vc from '../../../public/image/v&c.png';
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
                    <>
                        <ProjectCard
                            urlSite={'https://www.instagram.com/p/CoR1Rsyt-0a/?utm_source=ig_web_copy_link'}
                            title={'HOODLIFE'}
                            imgFile={hoodlife}
                        />
                        <ProjectCard
                            urlSite={'https://www.instagram.com/tv/CeLjFJigVDa/?utm_source=ig_web_copy_link'}
                            title={'1P0INT7'}
                            imgFile={unpointsept}
                        />
                        <ProjectCard
                            urlSite={'https://www.instagram.com/p/CeQbg-rriwX/?utm_source=ig_web_copy_link'}
                            title={'AD'}
                            imgFile={ad}
                        />
                        <ProjectCard
                            urlSite={'https://www.instagram.com/p/Co7VAEMMCMS/?utm_source=ig_web_copy_link'}
                            title={'MOODBOARD'}
                            imgFile={MoodBoard}
                        />
                        <ProjectCard
                            urlSite={'https://www.instagram.com/p/Ck0a3kHL5-h/?utm_source=ig_web_copy_link'}
                            title={'POSTER JORDAN III UNC'}
                            imgFile={jordan}
                        />

                        <ProjectCard
                            title={'Facebook Vins et Cadeaux'}
                            subtitle={
                                'Je fais la création des visuels, rédaction des posts, programmation, et statistiques'
                            }
                            urlSite={'https://www.facebook.com/vinsetcadeaux/?locale=fr_FR'}
                            imgFile={vc}
                        />
                        <ProjectCard
                            title={'Instagram Vins & Cadeaux'}
                            subtitle={
                                'Je fais la création des visuels, rédaction des posts, programmation, et statistiques'
                            }
                            urlSite={'https://www.instagram.com/vinsetcadeaux/'}
                            imgFile={vc}
                        />
                        <ProjectCard
                            title={'Tiktok Vins & Cadeaux'}
                            subtitle={
                                'Je fais la création des visuels, rédaction des posts, programmation, et statistiques'
                            }
                            urlSite={'https://www.tiktok.com/@vinsetcadeaux'}
                            imgFile={vc}
                        />
                    </>
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
