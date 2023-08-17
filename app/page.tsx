"use client";
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState("");
  fetch("http://localhost:3000/api/user").then(async (res) => setName((await res.json()).name));
  return (
    <div>{name}</div>
  )
}
