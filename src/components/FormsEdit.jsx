import React, { useContext, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { ProfileContext } from '../context/ProfileProvider'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css";  

const FormsEdit = () => {
  const { 
					profile, 
					setProfile, 
					setEditStatus,
					editedProfiles
				} = useContext(ProfileContext)
	const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const updateProfile = profile.map((item) => {
			return item.id === data.id ? data : item
		})
    setEditStatus(false)
		setProfile(updateProfile)
  }

  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile))
  }, [profile])
  
  return (
    <div className='container p-5 border border-2'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* line 1 */}
        <div className='d-flex justify-content-center'>
          {/* title */}
          <div className="input-group mb-3">
          <input type='hidden' className="form-control" {...register("id", { required: true })} defaultValue={editedProfiles.id}/>
            <div className="col-md-3"><label className="col-form-label">Title: <span className='text-danger'>*</span></label></div>
            <div className="col-md-8">
              <select className="form-control" {...register("title", { required: true })} defaultValue={editedProfiles.title}>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
              </select>
              {errors.title && <span className='text-danger'>This field is required</span>}
            </div>
          </div>
          {/* firstname */}
          <div className="input-group mb-3">
            <div className="col-md-3"><label className="col-form-label">Firstname: <span className='text-danger'>*</span></label></div>
            <div className="col-md-8">
              <input className="form-control" {...register("firstname", { required: true }) } defaultValue={editedProfiles.firstname}/>
              {errors.firstname && <span className='text-danger'>This field is required</span>}
            </div>
          </div>
          {/* lastname */}
          <div className="input-group mb-3">
            <div className="col-md-3"><label className="col-form-label">Lastname: <span className='text-danger'>*</span></label></div>
            <div className="col-md-8">
              <input className="form-control" {...register("lastname", { required: true })} defaultValue={editedProfiles.lastname}/>
              {errors.lastname && <span className='text-danger'>This field is required</span>}
            </div>
          </div>
        </div>
        {/* line 2 */}
        <div className='d-flex justify-content-center'>
          {/* birthday */}
          <div className="input-group mb-3">
            <div className="col-md-2"><label className="col-form-label">Birthday: <span className='text-danger'>*</span></label></div>
            <div className="col-md-9">
              <input type="date" className="form-control" {...register("birthday", { required: true })} defaultValue={editedProfiles.birthday}/>
              {errors.birthday && <span className='text-danger'>This field is required</span>}
            </div>
          </div>
          {/* nationality */}
          <div className="input-group mb-3">
            <div className="col-md-2"><label className="col-form-label">Nationality: </label></div>
            <div className="col-md-9">
              <select className="form-control" {...register("nationality")} defaultValue={editedProfiles.nationality}>
                <option value="" defaultValue>-- Please Select --</option>
                <option value="THAI">THAI</option>
                <option value="AMERICAN">AMERICAN</option>
                <option value="LAOS">LAOS</option>
              </select>
            </div>
          </div>
        </div>
        {/* line 3 */}
        <div className='d-flex justify-content-center'>
          {/* citizenIDOne to citizenIDFive */}
          <div className="input-group mb-3">
            <div className="col-md-1"><label className="col-form-label">CitizenID: </label></div>
            <div className="col-md-1">
              <input className="form-control" {...register("citizenIDOne")} defaultValue={editedProfiles.citizenIDOne}/>
            </div>
            <span className="col-form-label mx-2">-</span>
            <div className="col-md-2">
              <input className="form-control" {...register("citizenIDTwo")} defaultValue={editedProfiles.citizenIDTwo}/>
            </div>
            <span className="col-form-label mx-2">-</span>
            <div className="col-md-2">
              <input className="form-control" {...register("citizenIDThree")} defaultValue={editedProfiles.citizenIDThree}/>
            </div>
            <span className="col-form-label mx-2">-</span>
            <div className="col-md-1">
              <input className="form-control" {...register("citizenIDFour")} defaultValue={editedProfiles.citizenIDFour}/>
            </div>
            <span className="col-form-label mx-2">-</span>
            <div className="col-md-1">
              <input className="form-control" {...register("citizenIDFive")} defaultValue={editedProfiles.citizenIDFive}/>
            </div>
          </div>
        </div>
        {/* line 4 */}
        <div className='d-flex justify-content-center'>
          {/* gender */}
          <div className="input-group mb-3">
            <div className="col-md-1"><label className="col-form-label">Gender: </label></div>
            <div className="col-md-8">
              <input
                {...register("gender")}
								defaultChecked={editedProfiles.gender == "male"}
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="col-form-label ms-5 me-1"
              />
              <label className="col-form-label">male</label>
              <input
                {...register("gender")}
								defaultChecked={editedProfiles.gender == "female"}
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="col-form-label ms-5 me-1"
              />
              <label className="col-form-label">female</label>
              <input
                {...register("gender")}
								defaultChecked={editedProfiles.gender == "unisex"}
                type="radio"
                id="unisex"
                name="gender"
                value="unisex"
                className="col-form-label ms-5 me-1"
              />
              <label className="col-form-label">unisex</label>
            </div>
          </div>
        </div>
        {/* line 5 */}
        <div className='d-flex justify-content-center'>
          {/* code and phone */}
          <div className="input-group mb-3">
            <div className="col-md-2"><label className="col-form-label">Mobile Phone: <span className='text-danger'>*</span></label></div>
            <div className="col-md-1">
              <select className="form-control" {...register("code", { required: true })} defaultValue={editedProfiles.code}>
                <option value="+66" defaultValue>+66</option>
                <option value="+1">+1</option>
              </select>
              {errors.code}
            </div>
            <span className="col-form-label mx-2">-</span>
            <div className="col-md-3">
              <input className="form-control" {...register("phone", { required: true })} defaultValue={editedProfiles.phone}/>
              {errors.phone && <span className='text-danger'>This field is required</span>}
            </div>
          </div>
        </div>
        {/* line 6 */}
        <div className='d-flex justify-content-center'>
          {/* passport */}
          <div className="input-group mb-3">
            <div className="col-md-2"><label className="col-form-label">Passport No: </label></div>
            <div className="col-md-3">
              <input className="form-control" {...register("passport")} defaultValue={editedProfiles.passport}/>
            </div>
          </div>
        </div>
        {/* line 7 */}
        <div className='d-flex justify-content-between align-items-center experience'>
          {/* salary */}
          <div className="input-group mb-3">
            <div className="col-md-2"><label className="col-form-label">Excepted Salary: <span className='text-danger'>*</span></label></div>
            <div className="col-md-3">
              <input className="form-control" {...register("salary", { required: true })} defaultValue={editedProfiles.salary}/>
              {errors.salary && <span className='text-danger'>This field is required</span>}
            </div>
            <span className="col-form-label ms-3">THB</span>
          </div>
					<div className='d-flex'>
						<button className="btn btn-warning btn-lg">EDIT</button>
					</div>
        </div>
      </form>
    </div>
  );
}

export default FormsEdit