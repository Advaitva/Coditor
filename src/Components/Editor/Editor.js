import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

import { Controlled as CodeEditor } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-ocean.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

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
        active: 0,
        url:""
    }
    async componentDidMount() {
        
        // let id = this.props.match.params.id;
        // if (id !== undefined) {
        //     let url="https://pastebin.com/raw/"+id
        //     try {
        //         let res = await axios.get(url);
        //         // let 
        //         this.setState({ code: res.data });
        //     } catch (e) {
        //         console.log(e);
                
        //     }
        // }
        
    }
    onEditCode = (e, active) => {
        let { data, code } = this.state;
        data[active] = e.target.value;
        code =  "<style>"+ data[2]+"</style>"+data[0]+"<script>"+ data[1]+"</script>" ;
        this.setState({ data });
        setTimeout(() => {
            this.setState({ code });
        }, 2000)
    }
    onClickFile = (id) => {
        this.setState({ active: id });
    }
    onSaveCode = async () => {
        const params = new URLSearchParams();
        params.append("api_dev_key", "M5DdG_pG8S-0tckZ_R7Pav67v7UyG4jI");
        params.append( "api_option", "paste");
        params.append( "api_paste_code",this.state.code);
        let url="https://pastebin.com/api/api_post.php"
        try {
            let res = await axios.post(url, params);
            console.log(res);
            let path = res.data;
            const code = path.substring(path.lastIndexOf('/') + 1);
            let urlPaste = "https://advaitva.github.io/edit/" + code;
            this.setState({ url:urlPaste });
            
        } catch (e) {
            console.log(e);
            this.setState({ url: "Error occured!" });
        }
   }
    render() {
        let files = ["Index.html", "Index.js", "Index.css"];
        let lang = ["xml", "javascript", "css"];
        let { code,active,data,url } = this.state;
        

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
                    <div className="Editor--SaveBtn" onClick={() => this.onSaveCode()}>Save Code</div>
                    { url}
                </div>
                <div className="Editor--Main">
                    <div className="Editor--EditArea">

                        <CodeEditor
                            height="100px"
                        value={data[active]}
                        options={{
                            mode: lang[active],
                            theme: 'material-ocean',
                            lineNumbers: true,
                            lineWrapping: true,
                            lint: true,
                            
                            
                            }}
                        className="Editor--EditCode"
                            onBeforeChange={(editor, d, value) => {
                                let { data, code } = this.state;
                                data[active] = value;
                                code =  "<style>"+ data[2]+"</style>"+data[0]+"<script>"+ data[1]+"</script>" ;
                                this.setState({ data });
                                setTimeout(() => {
                                    this.setState({ code });
                                }, 2000)
                          }}
                        />
                    </div>
                </div>
                <div className="Editor--View">
                    <View code={code}/>
                </div>
            </div>
        )
    }
}
// export default withRouter(Editor);
export default Editor;