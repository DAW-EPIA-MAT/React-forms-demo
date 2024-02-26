export const ToggleButton = ({ handleToggleImportant, showAll }) => {
  const getButtonLabel = (showAll) => {
    const buttonLabel = showAll ? "Show important" : "Show all";
    return buttonLabel;
  };

  return (
    <button className="button toggle-button" onClick={handleToggleImportant}>
      {getButtonLabel(showAll)}
    </button>
  );
};
