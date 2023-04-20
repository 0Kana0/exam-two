import React, { createContext, useState } from 'react'

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
	const [profile, setProfile] = useState(() => {
			const savedProfile = localStorage.getItem("profile")
 
			if (savedProfile) {
			 return JSON.parse(savedProfile)
			} else {
			 return []
			}
		}
	)

	const [ first, setFirst ] = useState(0);
  const [ rows, setRows ] = useState(5);
	const [ selectedProfiles, setSelectedProfiles ] = useState([]);
	const [ editStatus, setEditStatus ] = useState(false);
	const [ editedProfiles, setEditedProfiles ] = useState([]);

	return (
		<ProfileContext.Provider value={
			{ 
				profile, setProfile, 
				first, setFirst, 
				rows, setRows, 
				selectedProfiles, setSelectedProfiles,
				editStatus, setEditStatus,
				editedProfiles, setEditedProfiles
			}
		}>
			{children}
		</ProfileContext.Provider>
	)
}