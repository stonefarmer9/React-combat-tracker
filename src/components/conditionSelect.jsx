import { MenuItem, Select } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { getConditions } from '../axios/getConditions';


function ConditionSelect () {
    const [conditionsList, setConditions] = useState([]);

// function renderMenuItems(array) {
//     console.log(array);
//     return array.map((condition) => {
//         <MenuItem value={condition.name}>{ condition.name }</MenuItem>
//     })
// }
async function fetchConditions() {
    const response = await getConditions();
    setConditions(response)
}

    useEffect(() => {
        if (conditionsList.length === 0) {
            fetchConditions()
        }
    })
    return (
        <Select
        >
            {
                conditionsList?.map(condition => {
                    return (
                        <MenuItem key={condition.id} value={condition.name}>
                            {condition.name}
                        </MenuItem>
                    )
                })
            }
        </Select>
    )
}

export default ConditionSelect;