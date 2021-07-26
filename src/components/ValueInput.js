import React from 'react'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import AddButton from './AddButton'
import CloseButton from 'react-bootstrap/CloseButton'

const ValueInput = (props) => {
    return (
        <InputGroup>
            <FormControl
                type="number"
                value={props.value}
                onChange={(e) => props.handleInputChange(props.index, e)}
            />
            <FormControl.Feedback type="invalid">
                Must be a numerical value!
            </FormControl.Feedback>
            <InputGroup.Text>{'\u03A9'}</InputGroup.Text>
            {props.isLast ? (
                <AddButton handleAddClick={props.handleAddClick} />
            ) : null}
            {props.inputCount > 1 ? (
                <CloseButton
                    onClick={() => props.handleRemoveClick(props.index)}
                />
            ) : null}
        </InputGroup>
    )
}

export default ValueInput
