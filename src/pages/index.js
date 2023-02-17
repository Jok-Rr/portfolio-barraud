import DarkMode from '../components/DarkMode/DarkMode';
import Footer from '../components/Footer/Footer';
import ProfilePic from '../components/ProfilePic/ProfilePic';
import Project from '../components/Project/Project';

export default function Home() {
    return (
        <>
            <DarkMode />
            <ProfilePic />
            <Project />
            <Footer />
        </>
    );
}
