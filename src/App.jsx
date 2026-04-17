/* eslint-disable react-hooks/purity */
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [num, setNum] = useState(12);
  const [type, setType] = useState("linear");
  const [gradient, setGradient] = useState([]);

  // generate hex code for color
  const getHexCode = () => {
    const rgb = 255 * 255 * 255;
    const random = Math.random() * rgb;
    const int = Math.floor(random);
    const hexColorCode = int.toString(16);

    // Insure 6 character hex code 👇
    const hexCode = hexColorCode.padStart(6, "0");
    return `#${hexCode}`;
  };

  const gradientGenerate = ()=>{
    const colors = []
    for(let i=0; i<num; i++)
    {
      const color1 = getHexCode()
      const color2 = getHexCode()
      const degree = Math.floor(Math.random() * 360)
      const degreeString = `${degree}deg`
      if(type === "linear"){
        colors.push({
        gradient: `linear-gradient(${degreeString}, ${color1}, ${color2})`,
        css: `background: 'linear-gradient(${degreeString}, ${color1}, ${color2})'`
      })
      }else{
        colors.push({
        gradient: `radial-gradient(${color1}, ${color2})`,
        css: `background: 'linear-gradient( ${color1}, ${color2})'`
      })
      }
      
    }
    setGradient(colors)
  }

  const cssCopy= (css) =>{
    navigator.clipboard.writeText(css)
    toast.success("Gradient Code Copied 😉" ,{
      autoClose: 1000
    })
  }

  useEffect(()=>{
    gradientGenerate()
  }, [num, type])

  return (
    <div className="min-h-screen bg-[#EFD2B0]">
      <div className="w-9/12 mx-auto space-y-8">
        <div className="pt-5 flex justify-between">
          <h1 className="text-3xl font-bold"> 🎨 Gradient Generator</h1>
          <div className="flex justify-between gap-2">
            <input
              value={num}
              className="bg-white border rounded-xl w-28 p-2"
              placeholder="12"
              onChange={(event) => setNum(Number(event.target.value))}
            />

            {/* select value */}
            <select
              value={type}
              onChange={(event) => setType(event.target.value)}
              className="bg-white border rounded-xl w-28 p-2"
              name=""
              id=""
            >
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
            <button 
            onClick={()=>gradientGenerate()}
            className="px-12 py-2 bg-black text-white rounded-2xl">Generate</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {/* color tiles  */}
          {gradient.map((item, index) => (
            <div
            key={index}
              className="h-45 rounded-xl relative"
              style={{
                background: item.gradient,
              }}
            >
              <button 
              onClick={()=>cssCopy(item.css)}
              className="absolute bg-black/50 hover:bg-black text-white p-2 rounded-xl right-2 bottom-3">
                COPY
              </button>
              <ToastContainer/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
