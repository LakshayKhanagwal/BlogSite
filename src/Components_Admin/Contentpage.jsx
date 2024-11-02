import React, { useRef, useState } from 'react'

const Contentpage = () => {


    var form_page = useRef()
    const [sub_heading_count, set_sub_heading_count] = useState(0)
    const [paragraph_count, set_paragraph_count] = useState(0)
    const [img_count, set_img_count] = useState(0)
    const [img_src, set_img_src] = useState(null)

    const handleTextareaAutoResize = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    const set = (e) => {
        console.log(e.target.value)
    }

    const imageUpload = (e) => {
        var img_2 = e.target
        const img_up = document.createElement('input')
        img_up.type = 'file'
        img_up.click()
        img_up.addEventListener('change', (e_img) => {
            const file = e_img.target.files[0]
            console.log(file)
            if (file) {
                const read = new FileReader()
                read.readAsDataURL(file)
                read.onload = () => {
                    img_2.src = read.result
                }
            }
        })
    }

    const close = (e)=>{
        e.target.parentNode.remove()
    }

    function create(e) {

        const form_data = form_page.current
        const value = e.target.value
        e.target.value = ''

        const span_element = document.createElement('span')
        span_element.className = 'delete-x sub-heading'
        span_element.addEventListener('click',close)
        span_element.innerHTML = 'X'

        if (value === 'sub-heading') {

            const div_element = document.createElement('div')
            div_element.append(span_element)

            const sub_heading = document.createElement('input')

            sub_heading.className = 'mt-2 sub-heading'
            sub_heading.placeholder = 'sub-Heading'
            sub_heading.addEventListener('input', set)
            sub_heading.name = `h3.${sub_heading_count}`
            set_sub_heading_count(sub_heading_count + 1)

            div_element.append(sub_heading)

            form_data.append(div_element)
        }

        if (value === 'paragraph') {

            const div_element = document.createElement('div')
            div_element.append(span_element)

            const paragraph_element = document.createElement('textarea')

            paragraph_element.className = 'mt-2 text-area-height'
            paragraph_element.addEventListener('input', handleTextareaAutoResize)
            paragraph_element.addEventListener('input', set)
            paragraph_element.placeholder = 'Write Content'
            paragraph_element.name = `p.${paragraph_count}`
            set_paragraph_count(paragraph_count + 1)

            div_element.append(paragraph_element)

            form_data.append(div_element)
        }

        if (value === 'image') {
            set_img_src(null)

            const div_element = document.createElement('div')
            div_element.append(span_element)

            const img_element = document.createElement('img')

            img_element.className = 'mt-3 img-input'
            img_element.alt = 'add-image'
            img_element.addEventListener('click', imageUpload)
            img_element.name = `img.${img_count}`
            set_img_count(img_count + 1)

            div_element.append(img_element)

            form_data.append(div_element)
        }
    }

    return (
        <div>
            <form ref={form_page}>
                <h1>Title</h1>
                <input type="text" placeholder='Enter Title or Topic Name' className='title-topic' onChange={set} />
                <div>
                    <span className='delete-x sub-heading'>X</span>
                    <input type="text" placeholder='sub-Heading' className='mt-2 sub-heading' />
                </div>
                {/* <textarea name="" id="" placeholder='Write Content' ref={textareaRef} className='form-control mt-2 text-area-height' onChange={handleInputChange} /> */}
                {/* <img className='mt-3 img-input' src="./Image/test.jpg" alt="add-image" /> */}
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
