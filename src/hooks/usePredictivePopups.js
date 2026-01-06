import { useState } from "react";

export const usePredictivePopups = () => {
  const [popups, setPopups] = useState([]);

  const showPopup = (message, type = "info") => {
    const id = Date.now();
    const popup = { id, message, type };
    setPopups((prev) => [...prev, popup]);

    setTimeout(() => {
      setPopups((prev) => prev.filter((p) => p.id !== id));
    }, 5000);

    return id;
  };

  const hidePopup = (id) => {
    setPopups((prev) => prev.filter((p) => p.id !== id));
  };

  return { popups, showPopup, hidePopup };
};
