import React from 'react'
import Button from 'react-bootstrap/Button'

const AddButton = (props) => {
    return (
        <Button variant="success" onClick={props.handleAddClick}>
            Add
        </Button>
    )
}

export default AddButton
