/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const copyToClipboard = useCallback(() => {
    if (window.navigator.clipboard && window.navigator.clipboard.writeText) {
      window.navigator.clipboard
        .writeText(password)
        .then(() => {
          passwordRef.current?.select();
        })
        .catch((err) => {
          alert("Failed to copy password to clipboard: " + err.message);
        });
    } else {
      console.log("api isnt working");
    }
  }, [password]);

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "1234567890";
    }

    if (charAllowed) {
      str += "!@#$%^&*()*+,-./:;<=>?@";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // passwordGen()  // use UseEffect instead

  useEffect(() => {
    passwordGen();
  }, [length, charAllowed, numberAllowed, passwordGen]);
  // when dependencies changed then usEffect will run its script

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg py-3 px-4 my-8 text-yellow-600 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            ref={passwordRef}
            readOnly
          />
          <button className="outline-none bg-blue-500 text-white px-4 py-2 shrink-0" onClick={() => copyToClipboard(password)}>
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((e) => !e);
              }}
            />

            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((e) => !e);
              }}
            />

            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
