import Image from 'next/image';

const ProjectCard = ({ title, subtitle, urlSite = false, imgFile, className, skillsCard = false }) => {
    const handleClick = () => {
        urlSite && window.open(urlSite, '_ blank');
    };

    return (
        <>
            <div
                className={`relative flex col-span-4 overflow-hidden text-center text-white cursor-pointer h-52 group/card isolate rounded-2xl col-span-4 md:col-span-2  lg:col-span-6 ${className} `}
                onClick={handleClick}
            >
                <Image
                    src={imgFile}
                    placeholder={'blur'}
                    className={'object-cover h-full transition duration-300 ease-in-out lg:group-hover/card:scale-125'}
                    alt={''}
                />
                {skillsCard != true && (
                    <div className="lg:absolute hidden lg:px-4 lg:top-0 lg:left-0 lg:flex bg-myRed/[.80] lg:h-full lg:w-full lg:items-center lg:flex-col lg:justify-center lg:opacity-0 lg:backdrop-blur-md lg:transition lg:duration-300 lg:ease-in-out lg:group-hover/card:opacity-100">
                        {title && <h2>{title}</h2>}
                        {subtitle && <p className="mb-4">{subtitle}</p>}
                        <i className="p-4 bg-white rounded-full fa-solid fa-link-simple text-lightText dark:text-darkText dark:bg-myDarklight"></i>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProjectCard;
