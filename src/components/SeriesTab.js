import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import ValueInput from './ValueInput'
import AddButton from './AddButton'
import RemoveButton from './RemoveButton'
import CloseButton from 'react-bootstrap/CloseButton'
import InputGroup from 'react-bootstrap/InputGroup'

const SeriesTab = () => {
    // const [inputCount, setInputCount] = useState(1)
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
            input.value == null
                ? (sum = sum)
                : (sum = sum + parseFloat(input.value))
        }
        console.log(sum)
        return sum
        // inputList.reduce(
        //     (sum, input) =>
        //         input.value == null ? sum + 0 : sum + parseInt(input.value),
        //     0
        // )
    }

    return (
        <>
            <h1>Series Calculator</h1>
            <h3>Enter the values (in Ohms) of the resistors in series:</h3>
            <Container id="series-input-container">
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
                            isLast={idx == inputList.length - 1 ? true : false}
                        />
                    )
                })}
            </Container>
            <div className="result-container">
                <span className="result">
                    Total Resistance = {calculateTotal()} {'\u03A9'}
                </span>
            </div>
        </>
    )
}

export default SeriesTab
