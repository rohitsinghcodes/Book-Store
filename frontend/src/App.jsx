import { Outlet } from "react-router"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvide } from "./context/Authcontext";

function App() {
  
  return (
    <>
    <AuthProvide>
    <Navbar/>
      <main className="min-h-screen max-w-screen-2xl md:px-14 mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer/>
    </AuthProvide>
    </>
  )
}

export default App
