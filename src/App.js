import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [groceryList, setGreoceryList] = useState([]);
  const notify = (e) => {
    if (item === "") {
      toast("Please Provide an Item to Add");
    } else if (e !== undefined) {
      console.log(e);
      toast("Item Added To Grocery");
    } else {
      toast("Deleting Item");
    }
  };
  const addItem = (e) => {
    e.preventDefault();
    if (item !== "") {
      setGreoceryList([...groceryList, { name: item, checked: false }]);
    }
  };

  const Delete = (index) => {
    const items = [...groceryList];
    items.splice(index, 1);
    setGreoceryList(items);
  };
  return (
    <div>
      <div className="top">
        <form onSubmit={addItem}>
          <h3>Grocery Box</h3>
          <div>
            <input
              type="text"
              placeholder="
              Item"
              onChange={(e) => {
                setItem(e.target.value);
              }}
            ></input>
            <button className="add" key="add" onClick={notify} type="submit">
              ADD
            </button>
            <ToastContainer position="top-center" autoClose={1500} />
          </div>
        </form>
      </div>
      <div className="below">
        {groceryList.map((e, index) => {
          return (
            <div
              className="item-container"
              key={index}
              style={{
                textDecorationLine: e.checked ? "line-through" : "none",
              }}
            >
              <div>
                <input
                  type="checkbox"
                  onClick={() => {
                    if (groceryList[index].checked === false) {
                      groceryList[index].checked = true;
                      setGreoceryList([...groceryList]);
                    } else {
                      groceryList[index].checked = false;
                      setGreoceryList([...groceryList]);
                    }
                  }}
                ></input>
              </div>
              <div>
                <h5>{e.name}</h5>
              </div>
              <div>
                <button
                  className="delete"
                  onClick={() => {
                    Delete(index);
                    notify();
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
