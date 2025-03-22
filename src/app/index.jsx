import { useSelector } from 'react-redux'
import { Header } from '../components/header';
import { Main } from '../components/main';
import { Footer } from '../components/footer';
import {useLocalStorage} from '../hooks/useLocalStorage.js';

function App() {
  const stateDarkMode = useSelector(state => state.darkMode.value)

  useLocalStorage('TASK_V1');

  return (
    <>
      <div className={`${stateDarkMode ? 'bg-white text-gray-900' : 'dark:bg-gray-800 dark:text-white'} sm:w-screen sm:h-screen md:w-full md:h-full `}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
