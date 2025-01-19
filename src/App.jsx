import { GlobalContext } from "./context/GlobalContext";
import PostContent from "./Components/PostContent";
import './App.css'


function App() {



  return (
    <>
      <GlobalContext.Provider value={{ count: 1 }}>
        <PostContent />
      </GlobalContext.Provider>


    </>
  )
}

export default App
