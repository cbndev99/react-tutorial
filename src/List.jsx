import propTypes from "prop-types"

function List(props) {
  //   const fruits = [
  //     { id: 1, name: "apple", calories: 95 },
  //     { id: 2, name: "banana", calories: 45 },
  //     { id: 3, name: "orange", calories: 105 },
  //     { id: 4, name: "coconut", calories: 159 },
  //     { id: 5, name: "pineapple", calories: 37 },
  //   ]

  // ASC Oder
  const sortedItem = props.items.sort((a, b) => a.name.localeCompare(b.name))

  const lowCalItems = sortedItem.filter((item) => item.calories < 100)
  const highCalItems = sortedItem.filter((item) => item.calories >= 100)

  const listItems = sortedItem.map((item) => (
    <li key={item.id}>
      {item.name} : <b>{item.calories}</b>
    </li>
  ))

  return (
    <div>
      <h3 className="list-category">{props.category}</h3>
      <ol className="list-items">{listItems}</ol>
    </div>
  )
}

List.propTypes = {
  category: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      calories: propTypes.number,
    })
  ),
}

List.defaultProps = {
  category: "Category",
  items: [],
}

export default List
