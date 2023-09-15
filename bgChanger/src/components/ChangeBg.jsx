import { useState } from "react";

function ChangeBg() {
  const [color, setColor] = useState("grey");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed bottom-12 inset-x-0 px-2 flex  flex-wrap justify-center">
        <div className="flex flex-wrap bg-slate-300 px-3 py-2 rounded-3xl gap-3">
          <button
            onClick={() => setColor("red")}
            className="text-white px-4 py-1 rounded-full outline-none"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="text-white px-4 py-1 rounded-full outline-none"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="text-white px-4 py-1 rounded-full outline-none"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("violet")}
            className="text-white  px-4 py-1 rounded-full outline-none"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
          <button
            onClick={() => setColor("purple")}
            className="text-white  px-4 py-1 rounded-full outline-none"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("black")}
            className="text-white  px-4 py-1 rounded-full outline-none"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("white")}
            className="text-black  px-4 py-1 rounded-full outline-none"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("cyan")}
            className="text-black  px-4 py-1 rounded-full outline-none"
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>
          <button
            onClick={() => setColor("pink")}
            className="text-black  px-4 py-1 rounded-full outline-none"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="text-black  px-4 py-1 rounded-full outline-none"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("lavender")}
            className="text-black  px-4 py-1 rounded-full outline-none"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("olive")}
            className="text-white  px-4 py-1 rounded-full outline-none"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangeBg;
