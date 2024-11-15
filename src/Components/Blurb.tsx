import { text } from "stream/consumers";

interface blubProps{
    title: string
    text: string
}


export default function Blurb({title, text}:blubProps) {
  return (
    <div className="ml-auto mr-auto w-4/5 mb-5 mt-5 bg-slate-100 p-9 rounded-xl border-2 border-neutral-950">
      <h2>{title}</h2>
      <p>
        {text}
      </p>
    </div>
  );
}