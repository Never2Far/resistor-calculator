import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
// import Nav from 'react-bootstrap/Nav'
import ColorCodeTab from './ColorCodeTab'
import Spinner from 'react-bootstrap/Spinner'

const NavTabs = () => {
    const [key, setKey] = useState('colorCode')

    const colorsLoaded = useSelector((state) => state.colors.loaded)

    return (
        <Tabs id="nav-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
            <Tab eventKey="colorCode" title="Color Code">
                {colorsLoaded ? (
                    <ColorCodeTab />
                ) : (
                    <Spinner animation="border" />
                )}
            </Tab>
            <Tab eventKey="series" title="Series"></Tab>
            <Tab eventKey="parallel" title="Parallel"></Tab>
        </Tabs>
    )
}

export default NavTabs
