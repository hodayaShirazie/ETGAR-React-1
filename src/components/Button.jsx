export default function Button({ type, onClick }) {
  const typeClass = `btn-${type.toLowerCase()}`;

  return (
    <button className={`btn ${typeClass}`} onClick={onClick}>
      {type}
    </button>
  );
}