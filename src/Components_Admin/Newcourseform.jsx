import React, { useContext, useState } from 'react'
import Context from '../Context'
import Firebase from '../Firebase'

const Newcourseform = () => {
  var { boolen_insert, boolen_fetch } = useContext(Context)
  let [course_data, set_course_data] = useState({
    Course: '',
    Semester: '',
    Subject: ''
  })
  function close_form() {
    boolen_insert({ ...boolen_fetch, newcourse: false })
  }

  function data(e) {
    set_course_data({ ...course_data, [e.target.name]: e.target.value })
  }

  function save_course(e) {
    e.preventDefault()
    if (course_data.Course !== '' && course_data.Semester !== '' && course_data.Subject !== '') {
      var i = 1
      while (i <= 4) {
        Firebase.child(`${course_data.Course}/${course_data.Semester}/${course_data.Subject}/Unit-${i}`).update({ disable: 'disabled' }, err => {
          if (err) {
            alert('Some Internal Error Occured')
          } else {
            boolen_insert({ ...boolen_fetch, newcourse: false })
          }
        })
        i++
      }
    } else {
      alert('all fields are mandatory')
    }
  }

  return (
    <div className='course_form'>
      <div>
        <h2>Add New Course <span onClick={close_form} className='crose_X'>X</span></h2>
        <div>
          <form>
            <label>Course Name:<span>*</span></label>
            <input type="text" name='Course' className=' form-control' onChange={data} placeholder='Enter Course Name' />
            <label>Semester:<span>*</span></label>
            <select name='Semester' className=' form-control' onChange={data}>
              <option value="">Select Semester</option>
              <option value="Semester-1">Semester-1</option>
              <option value="Semester-2">Semester-2</option>
              <option value="Semester-3">Semester-3</option>
              <option value="Semester-4">Semester-4</option>
              <option value="Semester-5">Semester-5</option>
              <option value="Semester-6">Semester-6</option>
            </select>
            <label>Subject Name:<span>*</span></label>
            <input type="text" name='Subject' className=' form-control' onChange={data} placeholder='Enter Subject Name' />
            <button className='btn btn-primary mt-2 form-control' onClick={save_course}>Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newcourseform
