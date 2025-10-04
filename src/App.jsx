import { useEffect, useState } from "react";
import "./App.css";
import Values from "values.js";
import Colorbox from "./components/Colorbox";
import { LuClipboardPaste } from "react-icons/lu";
import { toast } from "react-toastify";


export default function ColorCodeGenerator() {
  const [shades, setShades] = useState();
  const [inputColor,setinputColor] = useState("#006400");
  const [GeneratedColor, setGeneratedColor] = useState([]);
  useEffect(() => handleClick(), [])

  const handleClick = () => {
    try {
      const colors = new Values(inputColor).all(Math.floor(100 / shades));
      setGeneratedColor(colors);
      console.log(GeneratedColor)
    } catch (e) {
      toast.error("Invalid colour code!");
    }
  };
const handleCopy = async () => {
  setinputColor(await navigator.clipboard.readText())
}
 

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="nav">
        <h1>Color Code Generator</h1>

             {/* Controls */}
               {/* Shades dropdown */}
             <div className="controls">

        <select onChange={(e)=>setShades(Number(e.target.value))}>
          <option disabled>Please Select Shade %</option>
          <option value={10} selected>10%</option>
          <option value={5}>20%</option>
          <option value={20}>5%</option>
          <option value={50}>2%</option>
          <option value={100}>1%</option>
        </select>

              <div className="input-wrapper"> <input
          type="text"
         value={inputColor}
         onChange={(e)=>setinputColor(e.target.value)}
          placeholder="Ex: #006400 or Darkgreen)"/>
        <button className="Paste-Btn" type="button" onClick={handleCopy}><LuClipboardPaste size={'20px'}/></button>
        </div>

        <button className="Generate-Btn" type="button" onClick={handleClick}>Generate</button>
             </div>
       
      </nav>
      <div className="tooltip-bar">Tap In Color Box Anywhere To Copy The ColorCode</div>

 

      {/* Shades Display */}
      <div className="shades">
        {GeneratedColor.map((color, index) => (
         <Colorbox hex={color.hex} key={index} textColor={color.type}/>
        ))}
      </div>
    </div>
  );
}
