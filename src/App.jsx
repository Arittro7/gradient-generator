import { useState } from "react";

const App = () => {

  const [num , setNum] = useState(12)
  const [type, setType] = useState('linear')

  // generate hex code for color
  const getHexCode = () =>{
    const rgb = 255 * 255 *255
    const random = Math.random() * rgb
    const int = Math.floor(random)
    const hexColorCode = int.toString(16)
    
    // Insure 6 character hex code 👇
    const hexCode = hexColorCode.padStart(6, "0")
    return `#${hexCode}`
  }

  return (
    <div className="min-h-screen bg-[#EFD2B0]">
      <div className="w-9/12 mx-auto">
        <div className="pt-5 flex justify-between">
          <h1 className='text-3xl font-bold'> 🎨 Gradient Generator - {num} {type}</h1>
          <div className="flex justify-between gap-2">
            <input 
            value={num}
            className="bg-white border rounded-xl w-28 p-2"
            placeholder="12"
            onChange={(event) => setNum(Number(event.target.value)) }
            />

            {/* select value */}
            <select
            value={type}
            onChange={(event) => setType(event.target.value) } 
            className="bg-white border rounded-xl w-28 p-2"
            name="" id="">
              
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>
          <div>
            <button onClick={getHexCode}>Test</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;