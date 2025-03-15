import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToogleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearListItem() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onToogleItem={handleToogleItem}
        onClearList={handleClearListItem}
      />
      <Stats items={items} />
    </div>
  );
}
