import { ChangeEvent, LegacyRef, createRef, useEffect, useRef, useState } from "react"

export default function Home() {
  const [ counter, setCounter ] = useState("");
  
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if(ref.current) ref.current.innerText = new Date().toTimeString();
  }, [counter]);

  
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setCounter(ev.target.value);
    console.log(ev.target.value);
  }

  return (
    <>
      <div className="h-screen">
        <div className="h-3/4 flex justify-center items-center tx-xl">Главная</div>
        <div ref={ref}></div>
        <input type="text" onChange={handleChange} value={counter} className="border-black justify-center flex"></input>
      </div>
    </>
  )
}