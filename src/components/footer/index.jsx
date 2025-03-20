import { useSelector } from 'react-redux'

function Footer() {
    const stateDarkMode = useSelector(state => state.darkMode.value)

    return (
        <>
            <footer className={`${stateDarkMode ? 'bg-white' : 'dark:bg-gray-800 '} flex flex-wrap fixed bottom-0 left-0 right-0 `}>
                <div className="flex justify-start w-full md:w-1/3 p-0 md:p-4 "></div>
                <div className="flex justify-center w-full md:w-1/3 p-4 ">@2025</div>
                <div className="flex justify-end w-full md:w-1/3 p-0 md:p-4 "></div>
            </footer>
        </>
    );
}

export {Footer}