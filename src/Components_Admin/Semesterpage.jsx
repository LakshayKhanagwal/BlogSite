import React, { useContext, useEffect, useState } from 'react'
import Context from '../Context'
import Firebase from '../Firebase'

const Semesterpage = () => {
    var { boolen_insert, boolen_fetch } = useContext(Context)
    let [boolen_subject, set_boolen_subject] = useState(false)
    let [sem, setsem] = useState(null)
    let [subject, setsubject] = useState(null)
    let [new_subject, set_new_subject] = useState(null)
    let [alldata, setalldata] = useState({
        semester: '',
        subject: '',
        unit: ''
    })

    let [details, setdetails] = useState()

    useEffect(function () {
        Firebase.child(`${boolen_fetch.Course}`).on('value', (detils) => {
            setdetails(detils.val())
        })
    }, [boolen_fetch.Course])

    useEffect(function () {
        setsem(alldata.semester)
    }, [alldata.semester])

    useEffect(function () {
        if (sem !== null) {
            var sub = details[sem]
            setsubject(sub)
        }

    }, [alldata.subject])

    function set(e) {
        setalldata({ ...alldata, [e.target.name]: e.target.value })
    }

    function set_subject(e) {
        set_new_subject({ ...new_subject, [e.target.name]: e.target.value })
    }

    function proceed(e) {
        e.preventDefault()
        if (alldata.semester !== '' && alldata.subject !== '' && alldata.unit !== '') {
            boolen_insert({ ...boolen_fetch, semesterboolen: false, contentboolen: true, ...alldata })
        } else {
            alert('all fields are mandatory')
        }

    }

    function add_subject() {
        set_boolen_subject(true)
    }

    function close() {
        set_boolen_subject(false)
    }

    function add(e) {
        e.preventDefault()
        console.log(boolen_fetch.Course)
        if (new_subject.Semester !== "" && new_subject.Subject !== "") {
            var i = 1
            while (i <= 4) {
                Firebase.child(`${boolen_fetch.Course}/${new_subject.Semester}/${new_subject.Subject}/Unit-${i}`).update({ disable: 'disabled' }, err => {
                    if (err) {
                        alert('Some Internal Error Occured')
                    } else {
                        boolen_insert({ ...boolen_fetch, newcourse: false })
                    }
                })
                i++
            }
        } else {
            alert('all Fields are Mandatory')
        }

    }

    return (
        <div>
            <h2 className='semester-heading'>Select Semester and Subject</h2>
            <div className='div_semesterpage'>
                <form className=' select-semesterpage'>
                    <label className='semester_label'>Semester:</label>
                    <select name="semester" id="" onChange={set} className='form-control'>
                        <option value="">Select Semester</option>
                        {
                            details && Object.keys(details).map((semester) => {
                                return (
                                    <option value={semester} key={semester}>{semester}</option>
                                )
                            })
                        }
                    </select>

                    <label className='semester_label'>Subject:</label>
                    <select name="subject" id="" onChange={set} className='form-control'>
                        <option value="">Select Subject</option>
                        {
                            sem && Object.keys(details[sem]).map((subjects) => {
                                return (
                                    <option value={subjects} key={subjects}>{subjects}</option>
                                )
                            })
                        }
                    </select>

                    <label className='semester_label'>Unit:</label>
                    <select name="unit" id="" onChange={set} className='form-control'>
                        <option value="">Select Unit</option>
                        {
                            subject && Object.keys(subject[alldata.subject]).map((units) => {
                                return (
                                    <option value={units} key={units}>{units}</option>
                                )
                            })
                        }
                    </select>
                    <button className='mt-2 btn btn-primary form-control' onClick={proceed}>Proceed</button>
                    <div style={{ fontSize: 'medium' }} className='text-center pt-1'>Add Another Subject <span className='click-here' onClick={add_subject}>Click Here</span> </div>
                </form>
            </div>

            {
                boolen_subject && (
                    <div className='course_form new-subject'>
                        <div>
                            <h2>Add Subject <span className='crose_X' onClick={close}>X</span></h2>
                            <div>
                                <form>
                                    <label>Semester:<span>*</span></label>
                                    <select name='Semester' className=' form-control' onChange={set_subject}>
                                        <option value="">Select Semester</option>
                                        <option value="Semester-1">Semester-1</option>
                                        <option value="Semester-2">Semester-2</option>
                                        <option value="Semester-3">Semester-3</option>
                                        <option value="Semester-4">Semester-4</option>
                                        <option value="Semester-5">Semester-5</option>
                                        <option value="Semester-6">Semester-6</option>
                                    </select>
                                    <label>Subject Name:<span>*</span></label>
                                    <input type="text" name='Subject' onChange={set_subject} className=' form-control' placeholder='Enter Subject Name' />
                                    <button className='btn btn-primary mt-2 form-control' onClick={add}>Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Semesterpage
