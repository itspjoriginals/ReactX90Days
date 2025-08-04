import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passWordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+-={}[]~`';

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passWordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto mt-12 bg-gray-800 text-orange-500 rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Password Generator</h1>

        <div className="flex items-center rounded-lg overflow-hidden shadow-md mb-4">
          <input
            type="text"
            value={password}
            readOnly
            ref={passWordRef}
            placeholder="Generated Password"
            className="w-full py-2 px-4 bg-gray-700 text-white placeholder-gray-400 outline-none"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 transition duration-200"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-sm text-white">
          {/* Password Length Slider */}
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="font-medium">Password Length</label>
            <span className="font-bold text-orange-400">{length}</span>
          </div>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            id="length"
            className="w-full cursor-pointer accent-orange-500"
            onChange={(e) => setLength(e.target.value)}
          />

          {/* Options */}
          <div className="flex justify-between gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed(prev => !prev)}
                className="accent-orange-500"
              />
              <span>Include Numbers</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed(prev => !prev)}
                className="accent-orange-500"
              />
              <span>Include Symbols</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
