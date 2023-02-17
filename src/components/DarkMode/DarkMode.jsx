import { useState, useEffect } from 'react';

const DarkMode = () => {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        localTheme === null ? setTheme('dark') : setTheme(localTheme);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const handleDark = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    };
    return (
        <div className="col-span-4 m-auto">
            <p onClick={handleDark} className="overflow-hidden rounded-full">
                {theme === 'dark' ? (
                    <i className="p-4 bg-white fa-solid fa-moon-over-sun dark:text-myGrey dark:bg-myDarklight"></i>
                ) : (
                    <i className="p-4 bg-white fa-solid fa-moon dark:text-myGrey dark:bg-myDarklight"></i>
                )}
            </p>
        </div>
    );
};

export default DarkMode;
