import React from 'react';
class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: ["网页介绍", "网页特性", "开发者"],
            words: [<img src={require("./img/23.jpg")} alt={11}/>,<img src={require("./img/24.jpg")}/>,<img src={require("./img/25.jpg")}/>,"我是一个单页应用", "我是一个设计非常美观，实用性非常强的网页", "是一个特别帅的人写的网页", "嘤嘤嘤"],
            wordContent: "我是一个单页应用"
        };
    }
    render() {
        return (
            <div>
                <div id={'form'}>
                    <input id={"input"} type={"text"} value={this.state.inputValue}
                           onChange={(e)=>{
                               this.setState({
                                   inputValue: e.target.value
                               })
                           }}/>
                    <button id={'button'} onClick={(e)=>{
                        e.preventDefault();
                        this.setState({
                            list: [...this.state.list, this.state.inputValue],
                            inputValue: ""
                        })
                    }}>添加功能</button>
                </div>
                <ul> {
                    this.state.list.map((item, index) => {
                        return (
                            <li key={index} onClick={() => {
                                console.log(index);
                                this.setState({
                                        wordContent: this.state.words[index>3?3:index]
                                    }
                                );
                            }}><a href={"##"}>{item}</a></li>
                        )
                    })
                }
                </ul>
                <div className={'wordContent'}>{this.state.wordContent}</div>
            </div>
        );
    }
}

export default AddItem