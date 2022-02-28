import React from 'react'
import { ButtonGroup, Button } from "@material-ui/core";
import { Link } from 'react-router-dom'

function SelectionButtons() {
    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>
                <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}} >Photos</Link>
            </Button>
            <Button>
                <Link to='/albums' style={{ color: 'inherit', textDecoration: 'inherit'}} >Albums</Link>
            </Button>
        </ButtonGroup>
    )
}

export default SelectionButtons
