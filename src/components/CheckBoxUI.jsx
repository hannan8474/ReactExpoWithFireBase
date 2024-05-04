import { StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react'

const CheckBoxUi = (props) => {
    const [value, setValue] = useState(props.value)
    return (
        <TouchableOpacity onPress={() => setValue(!value)}>
            {value ? <Feather name="check-square" size={24} color="black" /> : <Feather name="square" size={24} color="black" />}
        </TouchableOpacity>
    )
}

export default CheckBoxUi

const styles = StyleSheet.create({})