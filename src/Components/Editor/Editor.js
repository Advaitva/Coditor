import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'

import View from './View/View';
import "./Editor.css"

class Editor extends React.Component{
    state = {
        code: '',
        data: {
            0: "",
            1:"",
            2: "",
        },
        active:0
    }
    onEditCode = (e, active) => {
        let { data, code } = this.state;
        data[active] = e.target.value;
        code =  "<style>"+ data[2]+"</style>"+data[0]+"<script>"+ data[1]+"</script>" ;
        this.setState({ data });
        setTimeout(() => {
            this.setState({ code });
        },2000)
    }
    onClickFile = (id) => {
        this.setState({ active: id });
    }
    onScrollEvent=(e)=>{
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    render() {
        let files = ["Index.html", "Index.js", "Index.css"];
        let { code,active,data } = this.state;
        

        return (

            <div className="Editor">
                <div className="Editor--Explorer">
                    {
                        files.map((file, id) => {
                            return (
                                <div key={id} className={id === active ? "Editor--FileActive" : "Editor--File"} onClick={()=>this.onClickFile(id)}>{file}</div>
                            )
                        })
                    }
                </div>
                <div className="Editor--Main">
                    <div className="Editor--EditArea">
                        
                        <textarea className="Editor--TextArea" placeholder="Just start coding..." value={data[active]} id="code"  onChange={(e)=>this.onEditCode(e,active)} spellcheck="false" onScroll={(e)=>this.onScrollEvent(e)}>
                        </textarea>
                        <div className="Editor--EditHighlight">
                            <SyntaxHighlighter language={files[active].split(".")[1]} style={okaidia} >
                                {data[active]}
                            </SyntaxHighlighter>
                            <div style={{ float: "left", clear: "both" }} ref={(el) => { this.messagesEnd = el }}></div>
                        </div>
                    </div>
                </div>
                <div className="Editor--View">
                    <View code={code}/>
                </div>
            </div>
        )
    }
}
export default Editor;