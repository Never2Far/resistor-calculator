import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import ValueInput from './ValueInput'
import AddButton from './AddButton'
import RemoveButton from './RemoveButton'
import CloseButton from 'react-bootstrap/CloseButton'
import InputGroup from 'react-bootstrap/InputGroup'
import ValueInputList from './ValueInputList'

const ParallelTab = () => {
    return <ValueInputList type="parallel" />
}

export default ParallelTab
