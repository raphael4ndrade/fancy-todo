import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const initialState = {
    isSelected: false
}

class ToDoListItem extends PureComponent {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    render() {
        return (
            <div className='item'>
                <span>{this.props.id}</span>
                <span>{this.props.category}</span><br />
                <span>{this.props.dateRegister}</span>
            </div>
        )
    }
}

ToDoListItem.defaultProps = {
    id: 0,
    category: 'Default',
    dateRegister: '01/01/2018'
}

ToDoListItem.propTypes = {
    id: PropTypes.number,
    category: PropTypes.string,
    dateRegister: PropTypes.string
}

export default ToDoListItem