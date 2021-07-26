import React from 'react'
import Button from 'react-bootstrap/Button'

const RemoveButton = (props) => {
    return (
        <Button variant="success" onClick={props.handleRemoveClick}>
            Remove
        </Button>
    )
}

export default RemoveButton
