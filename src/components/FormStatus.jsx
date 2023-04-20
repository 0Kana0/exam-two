import React, { useContext } from 'react'
import { ProfileContext } from '../context/ProfileProvider'
import Forms from './Forms'
import FormsEdit from './FormsEdit'

const FormStatus = () => {
	const { editStatus } = useContext(ProfileContext)

	if (editStatus) {
		return <FormsEdit/>
	} else {
		return <Forms/>
	}
}

export default FormStatus