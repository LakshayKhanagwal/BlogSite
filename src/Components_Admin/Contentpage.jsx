import React, { useRef, useState } from 'react'

const Contentpage = () => {


    var form_page = useRef()
    const [sub_heading_count, set_sub_heading_count] = useState(0)
    const [paragraph_count, set_paragraph_count] = useState(0)
    const [img_count, set_img_count] = useState(0)

    const handleTextareaAutoResize = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    const set = (e) =>{
        console.log(e.target.value)
    }

    function create(e) {

        const form_data = form_page.current
        const value = e.target.value
        e.target.value = ''

        if (value === 'sub-heading') {

            const sub_heading = document.createElement('input')

            sub_heading.className = 'mt-2 sub-heading'
            sub_heading.placeholder = 'sub-Heading'
            sub_heading.addEventListener('input', set)
            sub_heading.name = `h3.${sub_heading_count}`
            set_sub_heading_count(sub_heading_count + 1)

            form_data.append(sub_heading)
        }

        if (value === 'paragraph') {

            const paragraph_element = document.createElement('textarea')

            paragraph_element.className = 'form-control mt-2 text-area-height'
            paragraph_element.addEventListener('input', handleTextareaAutoResize)
            paragraph_element.addEventListener('input', set)
            paragraph_element.placeholder = 'Write Content'
            paragraph_element.name = `p.${paragraph_count}`
            set_paragraph_count(paragraph_count + 1)

            form_data.append(paragraph_element)
        }

        if (value === 'image') {

            const img_element = document.createElement('img')

            img_element.className = 'mt-3 img-input'
            img_element.alt = 'add-image'
            img_element.addEventListener('input', set)
            img_element.name = `img.${img_count}`
            set_img_count(img_count + 1)

            form_data.append(img_element)
        }
    }

    return (
        <div>
            <form ref={form_page}>
                <h1>Title</h1>
                <input type="text" placeholder='Enter Title or Topic Name' className='title-topic' onChange={set} />
                {/* <input type="text" placeholder='sub-Heading' className='mt-2 sub-heading' />
                <textarea name="" id="" placeholder='Write Content' ref={textareaRef} className='form-control mt-2 text-area-height' onChange={handleInputChange} />
                <img className='mt-3 img-input' src="" alt="add-image" /> */}
            </form>
            <select name="" className='btn border select-element' onChange={create}>
                <option value="">select</option>
                <option value="paragraph">paragraph</option>
                <option value="sub-heading">Sub-Heading</option>
                <option value="image">Image</option>
            </select>
        </div>
    )
}

export default Contentpage
