import { FocusStyleManager } from "@blueprintjs/core";

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import '../css/App.css'

import { SelectExample } from "./dataInput"
import logo from '../assets/pepefrg-4.gif'

FocusStyleManager.onlyShowFocusOnTabs();

function App() {

  return (
    <div className="App">
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
    </div>
  )
}

export default App