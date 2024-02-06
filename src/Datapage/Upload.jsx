import React from 'react';
import { IoCloudUploadOutline } from "react-icons/io5"
import './Upload.css'

const FileUploader = () => {
    return (
        <div className="wrapper">
            <header>File Uploader JavaScript</header>
            <form action="#">
                <input className="file-input" type="file" name="file" hidden />
                <IoCloudUploadOutline size='100px' />
                <p>Browse File to Upload</p>
            </form>
        </div>
    );
};

export default FileUploader;
