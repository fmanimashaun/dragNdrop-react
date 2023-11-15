import { useState, useEffect } from "react";
import propTypes from "prop-types";
import { FaGripLines } from "react-icons/fa6";

const ListItems = ({ data }) => {
  const [dragStartIndex, setDragStartIndex] = useState(null);
  const [dragEndindex, setDragEndIndex] = useState(null);
  const [list, setList] = useState(data);

  useEffect(() => {
    const swap = (from, to) => {
      const newItems = [...list];
      const fromItemName = newItems[from - 1].name;
      const toItemName = newItems[to - 1].name;
      newItems[from - 1].name = toItemName;
      newItems[to - 1].name = fromItemName;
      setList(newItems);
    };
    if (dragStartIndex && dragEndindex) {
      swap(dragStartIndex, dragEndindex);
    }
  }, [dragEndindex]);

  const handleDragStart = (e) => {
    const index = e.target.closest("li").getAttribute("data-index");
    setDragStartIndex(index);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragDrop = (e) => {
    const index = e.target.closest("li").getAttribute("data-index");
    setDragEndIndex(index);
    e.target.classList.remove("over");
  };

  const dragEnter = (e) => {
    e.target.classList.add("over");
  };

  const dragLeave = (e) => {
    e.target.classList.remove("over");
  };

  return (
    <ul className="draggable-list">
      {list.map((item) => (
        <li
          key={item.id}
          data-index={item.id}
          onDragStart={handleDragStart}
          onDragOver={dragOver}
          onDrop={dragDrop}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
        >
          <span className="number">{item.id}</span>
          <div className="draggable" draggable="true">
            <p className="person-name">{item.name}</p>
            <FaGripLines />
          </div>
        </li>
      ))}
    </ul>
  );
};

ListItems.propTypes = {
  data: propTypes.array.isRequired,
};

export default ListItems;
