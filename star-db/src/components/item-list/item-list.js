import React from 'react';
import PropTypes from 'prop-types'
import './item-list.css'

const ItemList = (props) => {

    const {data, onItemSelected, children: renderItems} = props;

    const items = data.map((item) => {

        const {id} = item;
        const label = renderItems(item);

        return (
            <li className='list-group-item'
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        )
    });

    return (
        <ul className="list-group">
            {items}
        </ul>
    )
};

ItemList.defaultProps = {
    onItemSelected: () => {}
};

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object),
    // children: PropTypes.func.isRequired
}

export default ItemList;