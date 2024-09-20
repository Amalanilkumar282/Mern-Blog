import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function CreatePost(){
    const [title,setTitle]=useState('');
    const [summary,setSummary]=useState('');
    const [Content,setContent]=useState('');
    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ];
    return(
        <form>
            <input type='title' placeholder={"title"}/>
            <input type='summary' placeholder={"summary"}/>
            <input type='file'/>
            <ReactQuill value={Content} modules={modules} formats={formats}/>
            <button style={{marginTop:'5px'}}>Create post</button>
        </form>
    )
}