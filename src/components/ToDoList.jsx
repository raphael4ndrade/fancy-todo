import React, { PureComponent } from 'react'
import PropType from 'prop-types'
import ToDoListItem from './ToDoListItem'

class ToDoList extends PureComponent {
    constructor(props) {
        super(props)
    }

    getRandomCategory() {
        const values = ['Eletronicos', 'Alimentação', 'Vestuário']
        return values[Math.random(2)]
    }

    renderListItems() {
        const listOfItems = [], size = this.props.list.length
        for (let i = 0; i < size; i++) {
            listOfItems.push(
                <ToDoListItem id={i} category={this.getRandomCategory()} />
            )
        }
        return listOfItems
    }

    render() {
        return (
            <div>
                <div>TODO LIST</div><br />
                {this.renderListItems()}
            </div>
        )
    }
}

ToDoList.defaultProps = {
    list: [1, 2, 3, 4, 5]
}

ToDoList.propType = {
    list: PropType.array
}

export default ToDoList