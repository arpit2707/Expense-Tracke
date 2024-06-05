import React from "react";

const ExpenseList = (props) => {
  console.log("PROPS", props);
  return (
    <div>
      <header>All Expenses</header>
      <ul>
        {Object.entries(props.value).map(([key, item]) => (
          <li>
            <div className="d-flex ml-2">
              <p className="ml-2">Amount: {item.amount}</p>
              <p className="ml-2">Description: {item.description}</p>
              <p className="ml-2">Category: {item.category}</p>
              <button className="ml-2">Edit</button>
              <button
                className="ml-2"
                onClick={() => {
                  props.onDeleteEx(key);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExpenseList;
