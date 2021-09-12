import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import React, {useState} from "react";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contacts from "./components/contacts/Contacts";
import './app.css'
import Menu from "./components/menu/Menu";

function App() {
    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <div className={'app'}>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                <Intro/>
                <Portfolio/>
                <Works/>
                <Testimonials/>
                <Contacts/>
            </div>
        </div>
    );
}

export default App;
