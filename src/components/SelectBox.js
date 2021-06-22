import _ from 'lodash'
import {useState} from "react";

export const SelectBox = (props) => {
    const [selectedValue, setSelectedValue] = useState(props.selectedValue);

    const onChange = (e) => {
        console.info('onChange - ', e.currentTarget.value)
        setSelectedValue(e.currentTarget.value)
        props.onSelect(selectedValue)
    }
    return (
        <>
            <select style={{width: `100px`}}
                    defaultValue={selectedValue}
            onChange={onChange}
            >
                {_.map(props.options, (item) => {
                    return (
                        <option key={item.value}
                                value={item.value}>
                            {item.name}
                        </option>
                    )
                })}
            </select>
        </>
    )
}
