import PropTypes from 'prop-types'

function List(props) {
    const listItems = props.items.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.calories}</b></li>);
    return (
      <>
      <h3 className="category">{props.category}</h3>
      <ol className="list-item">
        {listItems}
      </ol>
      </>
    );
  }

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

List.defaultProps = {
  category: "Category",
  items: [],
}

export default List
  