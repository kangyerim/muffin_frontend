import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from 'react-quill';
import './opinionRegister.css';


const OpinionRegister = () => {
    const [value, setValue] = useState("")

    return <>
        <table>
            <tr>
                <td colSpan={2}><h2 className={"text-2xl"}>게시글 작성하기</h2></td>
            </tr>
        </table>
        <input className="form-input input_title" placeholder="제목을 입력하세요" type="text"/>
        <div className="w-full mb-4">
            <div className="w-full">
                <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="내용을 입력하세요"/>
            </div>
        </div>
        <input className={"form-input"} placeholder={"#키워드 입력"} type="text"/>
        <div className={"buttons"}>
            <button className="btn btn-default bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-rounded btn-raised"><Link to="opinionList">취소하기</Link></button>
        <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded"><Link to="opinionList">등록하기</Link></button>
        </div>
    </>
}




export default OpinionRegister;