import React, { useContext, useEffect, useState } from 'react'
import Context from '../Context'
import Firebase from '../Firebase'


const Mainpannel = () => {
    var { boolen_insert, boolen_fetch } = useContext(Context)
    let [course, setcourse] = useState()

    useEffect(function () {
        Firebase.on('value', function (course) {
            var key = Object.keys(course.val())
            setcourse(key)
        })
    }, [])
    function add_course() {
        boolen_insert({ ...boolen_fetch, newcourse: true })
    }

    function semester(e) {
        boolen_insert({ ...boolen_fetch, semesterboolen: true, Course: e.target.innerHTML })
    }
    return (
        <div>
            {
                course && course.map(function (key) {
                    return (
                        <div className='cards' onClick={semester} key={key}>
                            {key}
                        </div>
                    )
                })
            }
            <div className='cards' onClick={add_course}>
                <img className='plus' src="./Image/Plus.svg" alt="" />
            </div>
        </div>
    )

}

export default Mainpannel
