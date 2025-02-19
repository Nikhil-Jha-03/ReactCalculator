import { useState } from "react"
import Button from "./components/Button"
import Input from "./components/Input"

function App() {
  const [inputDisplay, setInputDisplay] = useState('');

  const performOperation = (value) => {
    if (value === "=") {
      try {
        setInputDisplay(eval(
          inputDisplay.replace(/%/g, "/100")
        ).toString());
      } catch (error) {
        setInputDisplay("Error");
      }
    } else if (value === "C") {
      setInputDisplay("")
    } else if (value === "←") {
      setInputDisplay((prev) => (
        prev.slice(0, inputDisplay.length - 1)
      ))
    }else if(value === "%"){
        setInputDisplay((prev) => (parseFloat(prev) / 100).toString())
    }
    else {
      setInputDisplay((prev) => (prev.toString() + value.toString()))
    }
  }

  return (
    <>
      <div className="w-full max-w-xs mx-auto bg-gray-900 p-6 rounded-3xl shadow-2xl">
        <div className="mb-5 bg-gray-800 text-right text-white p-5 rounded-xl text-4xl font-semibold h-20 flex items-center justify-end">
          <Input value={inputDisplay || "0"} />
        </div>

        <div className="grid grid-cols-4 gap-3">
          {["←", "C", "%", "/"].map((num) => (
            <Button
              key={num}
              text={num}
              className={`text-black font-bold py-5 rounded-full text-lg shadow-md ${num === "C"
                ? "bg-gray-400 hover:bg-gray-300"
                : num === "←"
                  ? "bg-gray-500 hover:bg-gray-400"
                  : num === "/"
                    ? "bg-orange-500 hover:bg-orange-400 text-white"
                    : "bg-gray-400 hover:bg-gray-300"
                }`}
              onClick={performOperation}
            />
          ))}

          {["7", "8", "9", "*"].map((num) => (
            <Button
              key={num}
              text={num}
              className={`bg-gray-700 hover:bg-gray-600 text-white font-bold py-5 rounded-full text-lg shadow-md ${num === "*" ? "bg-orange-500 hover:bg-orange-400" : ""
                }`}
              onClick={performOperation}
            />
          ))}
          {["4", "5", "6", "-"].map((num) => (
            <Button
              key={num}
              text={num}
              className={`bg-gray-700 hover:bg-gray-600 text-white font-bold py-5 rounded-full text-lg shadow-md ${num === "-" ? "bg-orange-500 hover:bg-orange-400" : ""
                }`}
              onClick={performOperation}
            />
          ))}
          {["1", "2", "3", "+"].map((num) => (
            <Button
              key={num}
              text={num}
              className={`bg-gray-700 hover:bg-gray-600 text-white font-bold py-5 rounded-full text-lg shadow-md ${num === "+" ? "bg-orange-500 hover:bg-orange-400" : ""
                }`}
              onClick={performOperation}
            />
          ))}

          <Button
            key="0"
            text="0"
            className="col-span-2 w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-5 rounded-full text-lg shadow-md"
            onClick={performOperation}
          />
          <Button
            key="."
            text="."
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-5 rounded-full text-lg shadow-md"
            onClick={performOperation}
          />
          <Button
            key="="
            text="="
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-5 rounded-full text-lg shadow-md"
            onClick={performOperation}
          />
        </div>
      </div>
    </>

  )
}

export default App
