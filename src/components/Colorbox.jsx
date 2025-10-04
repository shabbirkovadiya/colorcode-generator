import { useEffect, useState } from "react";
import "../App.css"

const Colorbox = ({hex,textColor}) => {
    const [isCopied, setisCopied] = useState(false);

    const handleBoxClick = ()=>{
        navigator.clipboard.writeText(`#${hex}`)
        setisCopied(true)
    }



    useEffect(()=>{
    const timer = setTimeout(()=> setisCopied(false), 2000)
    return () => clearTimeout(timer)
    }
    , [isCopied] );

  return (
     <div
            className="shade-box"
            style={{
              background: `#${hex}`,
              color: textColor === "tint" ? "black" : "white"
            }}
            onClick={handleBoxClick}
          >
            <p className="hexcode">#{hex}</p>
            <p className="copyText">{isCopied ? "Code Copied!" : "Click to copy"}</p>
          </div>
  )
}

export default Colorbox