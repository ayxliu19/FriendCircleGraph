import React from "react";
import { FocusStyleManager, Button } from "@blueprintjs/core";
import { SelectExample } from "../components/dataInput";
import { useNavigate } from "react-router-dom";

import '../css/home.css';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";

import logo from '../assets/pepefrg-4.gif';

FocusStyleManager.onlyShowFocusOnTabs();

function Home() {
    const navigate = useNavigate()
    return (
        <div className="home">
            <div>
                <a href="https://discord.gg/sMN4Kc9k">
                    <img src={logo}/>
                </a>
            </div>
            <h1>Welcome To The Poketmonster Hang Out Graph</h1>
            <p>
                This is a fun project that builds a weighted graph on how often everyone hangs out with each other in Poketmonster.
            </p>
            <SelectExample />
            <Button
                className={"button"}
                icon="graph"
                onClick={() => {navigate("/graph");}}
            >
            {"View Graph"}
            </Button>
            <Button 
                className={"button"}
                icon="th"
                onClick={() => {navigate("/table");}}
            >
            {"View Table"}
            </Button>
        </div>
    )
}
  
export default Home;