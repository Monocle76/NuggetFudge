import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  var [name, setName] = useState("User");
  return (
    <nav>
      <h2>The Weact App</h2>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <Link href={`/greet/${name}`} onClick={() => setName("User")}>Greet</Link>
      </div>
    </nav>
  )
}