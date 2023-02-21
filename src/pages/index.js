import DarkMode from '../components/DarkMode/DarkMode';
import Footer from '../components/Footer/Footer';
import ProfilePic from '../components/ProfilePic/ProfilePic';
import Project from '../components/Project/Project';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Florian Barraud | Portfolio </title>
                <meta property="og:title" content="Florian Barraud | Portfolio " key="title" />
                <meta
                    property="og:description"
                    content="Bienvenue sur mon Portfolio, je suis graphiste / marketeur. Vous pourrez découvrir mes différents projets et skills."
                />
            </Head>
            <DarkMode />
            <ProfilePic />
            <Project />
            <Footer />
        </>
    );
}
