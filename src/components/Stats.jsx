export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked / numItems) * 100);

  if (!numItems)
    return (
      <p className="stats">
        <em>start adding some items to your packing list</em>
      </p>
    );
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? `You got everything! ready to go ✈`
          : ` You have ${numItems} items on your list, and you already packed
          ${numPacked} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
