import React, { useContext, useState } from 'react';
import { ProfileContext } from '../context/ProfileProvider'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css";  

const Table = () => {
	const { profile, 
					setProfile, 
					first, 
					setFirst, 
					rows, 
					setRows, 
					selectedProfiles,
					setSelectedProfiles,
					setEditedProfiles,
					editStatus,
					setEditStatus
				} = useContext(ProfileContext)

	let selectDelete = profile;

	const handleEditClick = (value) => {
		setEditStatus(true)
		setEditedProfiles(value)
	}

	const handleDeleteClick = (id) => {
		const removeProfile = profile.filter((item) => {
			return item.id !== id
		})

		setProfile(removeProfile)
	}
	const handleDeleteClickAll = () => {
		selectedProfiles.map((select) => {
			const removeProfile = selectDelete.filter((item) => item.id !== select.id)
			selectDelete = removeProfile
		})
		setProfile(selectDelete)
	}

	const showAllName = (value) => {
		return (
			<div>{value.firstname} {value.lastname}</div>
		)
	}
	const showMobilePhone = (value) => {
		return (
			<div>{value.code} {value.phone}</div>
		)
	}
	const showEditDelete = (value) => {
		return (
			<div>
					{editStatus ? 
					<button type="button" disabled className="btn btn-warning me-3" onClick={() => handleEditClick(value)}>EDIT</button> 
					: 
					<button type="button" className="btn btn-warning me-3" onClick={() => handleEditClick(value)}>EDIT</button> 
					}
					<button type="button" className="btn btn-danger" onClick={() => handleDeleteClick(value.id)}>DELETE</button>
			</div>
		)
	}

	return (
		<div className='container'>
			<div className="row">
				<div className="d-flex justify-content-between align-items-center experience">
					<div className="d-flex">
						<h4 className="me-3">Select All</h4>
						<button type="button" className="btn btn-danger" onClick={handleDeleteClickAll}>DELETE</button>
					</div>
					<Paginator 
						first={first} 
						rows={rows} 
						totalRecords={profile.length} 
						onPageChange={(e) => {
							setFirst(e.first)
							setRows(e.rows)
						}}
					/>
				</div>
			</div>
			<DataTable 
				dataKey="id"
				value={profile.slice(first, first+rows)}
				selectionMode='checkbox'
				selection={selectedProfiles} 
				onSelectionChange={(e) => setSelectedProfiles(e.value)} 

				sortMode="multiple" 
				removableSort
				responsiveLayout="scroll"

				tableStyle={{ minWidth: '50rem' }}
				emptyMessage="No Profile Found"
			>
        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
        <Column body={showAllName} field="firstname" sortable header="NAME"></Column>
        <Column field="gender" sortable header="GENDER"></Column>
        <Column body={showMobilePhone} field="phone" sortable header="MOBILE PHONE"></Column>
        <Column field="nationality" sortable header="NATIONALITY"></Column>
				<Column body={showEditDelete}></Column>
      </DataTable>
			<br />
		</div>
	);
}

export default Table