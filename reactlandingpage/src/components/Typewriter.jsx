import { useState, useEffect } from "react";

export default function Typewriter({ phrases, speed = 150, deleteSpeed = 50 }) {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState({ i: 0, j: 0, del: false });

  useEffect(() => {
    const { i, j, del } = phase;
    const phrase = phrases[i];

    const timer = setTimeout(() => {
      if (!del && j < phrase.length) {
        setText(phrase.slice(0, j + 1));
        setPhase({ i, j: j + 1, del });
      } else if (del && j > 0) {
        setText(phrase.slice(0, j - 1));
        setPhase({ i, j: j - 1, del });
      } else if (!del && j === phrase.length) {
        setPhase({ i, j, del: true });
      } else if (del && j === 0) {
        setPhase({ i: (i + 1) % phrases.length, j: 0, del: false });
      }
    }, del ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [phase, phrases, speed, deleteSpeed]);

  return <span>{text}</span>;
}
