import Image from "next/image";
import styles from "./page.module.css";
import { CharacterProvider } from "../context/CharacterContext";
import App from "../components/App";

export default function Home() {
  return (
    <CharacterProvider>
      <App />
    </CharacterProvider>
  );
}
