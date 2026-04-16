/* eslint-disable react-hooks/purity */
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(12);
  const [type, setType] = useState("linear");

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
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
        {/* color tiles - 1 */}
          <div
            className="h-45 rounded-xl relative"
            style={{
              background: getHexCode(),
            }}
          >
            <button className="absolute bg-black/50 hover:bg-black text-white p-1 rounded-xl right-2 bottom-3">
              COPY
            </button>
          </div>
        {/* color tiles - 2 */}
          <div
            className="h-45 rounded-xl relative"
            style={{
              background: getHexCode(),
            }}
          >
            <button className="absolute bg-black/50 hover:bg-black text-white p-1 rounded-xl right-2 bottom-3">
              COPY
            </button>
          </div>
        {/* color tiles - 3 */}
          <div
            className="h-45 rounded-xl relative"
            style={{
              background: getHexCode(),
            }}
          >
            <button className="absolute bg-black/50 hover:bg-black text-white p-1 rounded-xl right-2 bottom-3">
              COPY
            </button>
          </div>
        {/* color tiles - 4 */}
          <div
            className="h-45 rounded-xl relative"
            style={{
              background: getHexCode(),
            }}
          >
            <button className="absolute bg-black/50 hover:bg-black text-white p-1 rounded-xl right-2 bottom-3">
              COPY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
