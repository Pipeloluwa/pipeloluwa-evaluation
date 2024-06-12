import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/landingPage"
import NavBar from "./components/generalComponents/navBar"
import { useSelector } from "react-redux"
import { RootState } from "./state_management/store"


function App() {
  const mobileSelectorValue= useSelector((state: RootState) => state.mobile_button.value);



  
  return (
    <div id="parent-div-id" className={` w-full h-screen ${!mobileSelectorValue ? "overflow-y-scroll" : ""} overflow-hiddden text-[#202229]`}>
      <NavBar />
      <div className="mx-auto relative flex items-center justify-center w-full overflow-hidden">
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  )
}

export default App
