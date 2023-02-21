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
            </Head>
            <DarkMode />
            <ProfilePic />
            <Project />
            <Footer />
        </>
    );
}
