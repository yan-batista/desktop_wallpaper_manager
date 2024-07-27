import { useState } from "react";
import ImagesPage from "./pages/images"
import SettingsPage from "./pages/settings";
import "./App.css";


function App() {
  const [isActive, setIsActive] = useState<boolean>(false);

  function onClickActivateImages() {
    setIsActive(true)
  }

  function onClickActivateSettings() {
    setIsActive(false)
  }

  return (
    <>
      <header>
        <p className={`${isActive ? "window_active" : ""}`} onClick={onClickActivateImages}>Images</p>
        <p className={`${isActive ? "" : "window_active"}`} onClick={onClickActivateSettings}>Settings</p>
      </header>

      <div className="content">
        {isActive ? (
          <ImagesPage />
        ) : (
          <SettingsPage />
        )}
        </div>
    </>
  );
}

export default App;