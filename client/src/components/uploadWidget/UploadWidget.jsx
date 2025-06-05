import { createContext, useEffect, useState, useCallback } from "react";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

function UploadWidget({ uwConfig, setPublicId, setState }) {
  const [loaded, setLoaded] = useState(false);
  const [widget, setWidget] = useState(null);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  useEffect(() => {
    if (loaded && !widget) {
      const myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setState((prev) => [...prev, result.info.secure_url]);
          }
        }
      );
      setWidget(myWidget);
    }
  }, [loaded, uwConfig, setState, widget]);

  const handleClick = useCallback(() => {
    if (widget) {
      widget.open();
    }
  }, [widget]);

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="cloudinary-button"
        onClick={handleClick}
        type="button"
      >
        Upload
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadWidget;
export { CloudinaryScriptContext };
