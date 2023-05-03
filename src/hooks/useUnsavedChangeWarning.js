import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const unSavedChangeWarning = (
  message = "Are you sure you want to discard changes?",
) => {
  const [isDirty, setIsDirty] = useState(false);
  const location = useLocation();
  const handleUnsaveChange = (event) => {
    if (isDirty) event.returnValue = message;
  };
  useEffect(() => {
    window.addEventListener("beforeunload", handleUnsaveChange);

    return () => window.removeEventListener("beforeunload", handleUnsaveChange);
  }, [isDirty, location]);

  return [() => setIsDirty(true), () => setIsDirty(false)];
};

export default unSavedChangeWarning;
