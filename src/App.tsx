import Hero from "./components/Hero.tsx";

import "./App.css";
import { TextInputProvider } from "./context/TextInputContext.tsx";
import { LevelSelectProvider } from "./context/LevelSelectContext.tsx";
import { CurrentLevelProvider } from "./context/CurrentLevelContext.tsx";
import { CssInputProvider } from "./context/CssInputContext.tsx";

function App() {
  return (
    <>
      <CurrentLevelProvider>
        <TextInputProvider>
          <LevelSelectProvider>
            <Hero />
          </LevelSelectProvider>
        </TextInputProvider>
      </CurrentLevelProvider>
    </>
  );
}

export default App;
