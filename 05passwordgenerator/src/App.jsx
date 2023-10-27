import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const passwordRef = useRef();
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) string += "0123456789";
    if (characterAllowed) string += "!@#$%^&*()-_+=[]{}|:,.<>?/'";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * string.length + 1);

      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed]);

  return (
    <div className="w-full h-screen flex-col items-center align-middle  shadow-md   px-4 py-3 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Paasword Generator</h1>
      <div className="flex max-w-md mx-auto shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          ref={passwordRef}
          readOnly
          className="outline-none w-full py-1 px-3"
        />
        <button
          className="bg-blue-600 p-3 text-white font-bold"
          onClick={copyPassword}
        >
          Copy
        </button>
      </div>
      <div className="flex max-w-md mx-auto items-center gap-x-3">
        <div>
          <input
            className="outline-none mx-1 my-1"
            type="range"
            min={6}
            max={200}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            name="length"
            id="length"
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div>
          <input
            className="outline-none  py-1 px-3"
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={(e) => {
              setNumberAllowed((prev) => !prev);
            }}
            name="number"
            id="number"
          />
          <label htmlFor="number">Number</label>
        </div>
        <div>
          <input
            className="outline-none  py-1 px-3"
            type="checkbox"
            defaultChecked={characterAllowed}
            onChange={(e) => {
              setCharacterAllowed((prev) => !prev);
            }}
            name="char"
            id="char"
          />
          <label htmlFor="char">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
