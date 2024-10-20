import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className='topic'>Topics</div>
            <select name="hello" id="" className='list'>
                <option value="">MCA</option>
                <option value="">BCA</option>
            </select>
            <select name="hello" id="" className='list'>
                <option value="">Semester</option>
                <option value="">asdfs</option>
            </select>
            <select name="hello" id="" className='list'>
                <option value="">subject</option>
                <option value="">asdfs</option>
            </select>
            <select name="hello" id="" className='list'>
                <option value="">Unit 1</option>
                <option value="">Unit 2</option>
                <option value="">Unit 3</option>
                <option value="">Unit 4</option>
            </select>

            <select name="hello" id="" className='list'>
                <option value="">New Scheme</option>
                <option value="">Old Scheme</option>
            </select>

        </div>
    )
}

export default Header
