import { useState } from "react";

export const useShowAll = () => {
  const [showAll, setShowAll] = useState(true);

  const handleToggleImportant = () => {
    setShowAll((prevState) => !prevState);
  };

  return {
    showAll,
    handleToggleImportant,
  };
};
