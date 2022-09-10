
import React, { useState } from 'react'

const FileUploader = () => {
  const  [file, setFile] = useState(null)

    const handleFileInput = (e) => {
        setFile(e.target.files[0])
        console.log(file)
    }

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} />

        </div>
    )
}


// Need to try again with this methods.....

// import { getFiles } from '../features/fileSlicer'
// import { useDispatch } from 'react-redux'

// const FileUploader = () => {

//     const dispatch = useDispatch()

//     const handleFileInput = (e) => {
//         const file = e.target.files[0]
//         delete file.lastModified
//         delete file.lastModifiedDate
//         console.log(file)
//         dispatch(getFiles(file))

//     }

//     return (
//         <div className="file-uploader">
//             <input type="file" onChange={handleFileInput} />

//         </div>
//     )
// }



export default FileUploader