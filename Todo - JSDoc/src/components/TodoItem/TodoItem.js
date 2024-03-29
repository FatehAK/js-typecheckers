//@ts-check
import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

/**
 * @typedef {object} Props
 * @prop {object} item
 * @prop {function} deleteItem
 * @extends {React.Component<Props>}
 */
class TodoItem extends React.Component {
    /**
     * Handles click on delete button
     * @method handleClick
     * @param {string} id - Item id
     */
    handleClick(id) {
        this.props.deleteItem(id);
    }

    render() {
        const { id, content } = this.props.item;
        return (
            <div className="todo-item" data-test="component-todo-item">
                <div className="todo-content" data-test="todo-content">{content}</div>
                <button onClick={() => this.handleClick(id)} className="delete-button" data-test="delete-button"><i className="fas fa-check"></i></button>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    }).isRequired
};

export default TodoItem;
