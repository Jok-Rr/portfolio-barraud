import Image from 'next/image';

const ProjectCard = ({ title, subtitle, urlSite = false, imgFile }) => {
    const handleClick = () => {
        urlSite && window.open(urlSite, '_ blank');
    };

    return (
        <>
            <div
                className="relative flex col-span-4 overflow-hidden text-white cursor-pointer h-52 group/card isolate rounded-2xl"
                onClick={handleClick}
            >
                <Image
                    src={imgFile}
                    className={'object-cover w-full transition duration-300 ease-in-out lg:group-hover/card:scale-125'}
                />
                <div className="hidden lg:absolute lg:top-0 lg:left-0 lg:flex bg-myRed/[.80] lg:h-full lg:w-full lg:items-center lg:flex-col lg:justify-center lg:opacity-0 lg:backdrop-blur-md lg:transition lg:duration-300 lg:ease-in-out lg:group-hover/card:opacity-100">
                    <h2>{title}</h2>
                    <p className="mb-4">{subtitle}</p>
                    <i class="fa-solid fa-link-simple p-4 bg-white rounded-full text-lightText dark:text-darkText dark:bg-myDarklight"></i>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
