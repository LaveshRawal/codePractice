import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
          {items.length ? (
            // sent items from here to ItemList oneLevel Props Drilling
            <ItemList
              items={items}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          ) : (
            <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
          )}
    </>
  );
};

export default Content;
