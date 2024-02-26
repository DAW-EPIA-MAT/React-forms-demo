export const Note = ({ note }) => {
  const level = note.important ? "important" : "normal";

  return (
    <li className="list-item">
      <div className={`list-item__level list-item__level--${level}`}>❕</div>
      <div className="list-item__content">{note.content}</div>
    </li>
  );
};
