const DarkMode = () => {
	const handleDark = () => {
		document.documentElement.classList.toggle("dark");
	};
	return (
		<div className="col-span-4 m-auto">
			<button onClick={handleDark}>
				<i className="p-4 bg-white rounded-full fa-solid fa-brightness dark:text-myGrey dark:bg-myDarklight"></i>
			</button>
		</div>
	);
};

export default DarkMode;
