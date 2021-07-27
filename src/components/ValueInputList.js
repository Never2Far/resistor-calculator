import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import ValueInput from './ValueInput'
import AddButton from './AddButton'
import RemoveButton from './RemoveButton'
import CloseButton from 'react-bootstrap/CloseButton'
import Jumbotron from 'react-bootstrap/Jumbotron'
import InputGroup from 'react-bootstrap/InputGroup'

const ValueInputList = (props) => {
    const type = props.type

    const [inputList, setInputList] = useState([{ value: null }])

    const handleInputChange = (i, e) => {
        console.log(i)
        console.log(e.target.value)
        const values = [...inputList]
        values[i].value = e.target.value
        console.log(values)
        setInputList(values)
        calculateTotal()
    }

    const handleAddClick = () => {
        const inputs = [...inputList]
        inputs.push({ value: null })
        setInputList(inputs)
        calculateTotal()
    }

    const handleRemoveClick = (index) => {
        const inputs = [...inputList]
        inputs.splice(index, 1)
        console.log(inputs)
        setInputList(inputs)
        calculateTotal()
    }

    const calculateTotal = () => {
        let sum = 0
        for (const input of inputList) {
            if (input.value != null) {
                switch (type) {
                    case 'series':
                        sum = sum + parseFloat(input.value)
                        break
                    case 'parallel':
                        sum = sum + 1 / parseFloat(input.value)
                        break
                    default:
                        break
                }
            }
        }
        console.log(sum)
        return type === 'series' ? sum : 1 / sum
    }

    return (
        <>
            <h1>{type === 'series' ? 'Series' : 'Parallel'} Calculator</h1>
            <Jumbotron>
                <h3>
                    Enter the values (in Ohms) of the resistors in{' '}
                    {type === 'series' ? 'Series' : 'parallel'}:
                </h3>
                <Container className="series-input-container">
                    {inputList.map((input, idx) => {
                        return (
                            <ValueInput
                                handleInputChange={handleInputChange}
                                handleAddClick={handleAddClick}
                                handleRemoveClick={handleRemoveClick}
                                inputCount={inputList.length}
                                index={idx}
                                key={`${input}-${idx}`}
                                id={`${input}-${idx}`}
                                value={input.value}
                                isLast={
                                    idx == inputList.length - 1 ? true : false
                                }
                            />
                        )
                    })}
                </Container>
                <div className="result-container">
                    <span className="result">
                        Total Resistance = {calculateTotal()} {'\u03A9'}
                    </span>
                </div>
            </Jumbotron>
        </>
    )
}

export default ValueInputList
