import React, { useContext, useEffect, useState } from 'react'
import Newcourseform from './Components_Admin/Newcourseform'

import Mainpannel from './Components_Admin/Mainpannel'
import Context from './Context'
import Semesterpage from './Components_Admin/Semesterpage'
import Contentpage from './Components_Admin/Contentpage'

const AdminPage = () => {
  var { boolen_fetch } = useContext(Context)
  let [context_data, set_context_data] = useState({})

  useEffect(() => {
    localStorage.setItem('context', JSON.stringify(boolen_fetch))
    setTimeout(() => {
      var data =  JSON.parse(localStorage.getItem('context'))
      set_context_data(data)
    }, 1000);
    
  }, [boolen_fetch])

  return (
    <div>
      <div className='header'>

      </div>
      <aside className='topic_name'>
        {
          context_data.contentboolen && (
            <>
              <div className='titles-aside titles-aside-shadow'>afasdfasdasdasd asdasdasdasdayyyy dasd as asdaaaaaaaa asddddddddd asddddddddd asdddddddd asdsdsdsdsdsdsdsdsd asddddddddd</div>
              <div className='titles-aside'>aa</div>
              <div className='titles-aside'>aa</div>
              <div className='titles-aside'>aa</div>
              <div className='titles-aside'>aa</div>
            </>
          )
        }
      </aside>
      <main className='main_pannel'>

        {
          boolen_fetch.semesterboolen ? (
            <Semesterpage />
          ) : boolen_fetch.contentboolen ? (
            <Contentpage />
          ) : (
            <Mainpannel />
          )
        }
      </main>
      {
        boolen_fetch.newcourse && (
          <Newcourseform />
        )}
    </div>
  )
}

export default AdminPage
