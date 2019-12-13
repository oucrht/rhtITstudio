import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import Header from "./header";
import {Content1,Content2,Content3,Content4,Content5,Content6} from "./content";
import BackgroundImg from "./bgImg";
import Footer from "./footer";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contentChineseTitle:['关于我们 ','部门介绍 ','成员介绍 ','历史介绍 ','作品介绍 ','留言板 '],
            contentEnglishTitle:[' About us',' Departments',' Members',' Zeitgeist',' Works',' Comment'],
            contentSubtitle:['耕耘十七载，始终为技术','五大门派，总有你所爱','一身才华，每刻迸发','玩转技术世界，已知惹人注目','一Code一世界，代码有乾坤','在这里留下你的宝贵意见'],
            content:[
                '爱特工作室成立于2002年，是一个在中国海洋大学信息科学与工程学院院领导主持下，以计算机技术人才培养，网络开发为特色的技术性团体。自成立以来，爱特以发现人才，培养人才，输送人才为最终目的，现已拥有UI设计、前端开发、程序设计、Android开发、游戏设计五大类方向，数十人的技术团队。优秀的团队文化与良好的技术氛围使爱特能够脱颖而出，经过多年的发展，现已成为海大网络技术的中坚力量！',
                '爱特工作室现在拥有五个部门，分别为：UI设计，前端开发，程序开发，APP开发和游戏开发。多样的部门满足丰富的兴趣。在这里，不论年龄，不论性别，只要你有一颗学技术的心，爱特工作室总能给予你惊喜！',
                '每一届爱特人都身怀绝技，在每一刻都能迸发出奇思妙想。用双手解决一切难题，是极客的通行证。加入我们，和这些有趣又万能的灵魂在一起，把思考与责任铭记于心，把对技艺的热爱传承下去。',
            ],
        };
    }
    render() {
        return(
            <>
                <Header />
                <BackgroundImg/>
                <div id={'content'}>
                <Content1
                    contentChineseTitle={this.state.contentChineseTitle[0]}
                    contentEnglishTitle={this.state.contentEnglishTitle[0]}
                    contentSubtitle={this.state.contentSubtitle[0]}
                    content={this.state.content[0]}
                />
                <Content2
                    contentChineseTitle={this.state.contentChineseTitle[1]}
                    contentEnglishTitle={this.state.contentEnglishTitle[1]}
                    contentSubtitle={this.state.contentSubtitle[1]}
                    content={this.state.content[1]}
                />
                <Content3
                    contentChineseTitle={this.state.contentChineseTitle[2]}
                    contentEnglishTitle={this.state.contentEnglishTitle[2]}
                    contentSubtitle={this.state.contentSubtitle[2]}
                    content={this.state.content[2]}
                />
                <Content4
                    contentChineseTitle={this.state.contentChineseTitle[3]}
                    contentEnglishTitle={this.state.contentEnglishTitle[3]}
                    contentSubtitle={this.state.contentSubtitle[3]}
                    content={this.state.content[2]}
                />
                <Content5
                    contentChineseTitle={this.state.contentChineseTitle[4]}
                    contentEnglishTitle={this.state.contentEnglishTitle[4]}
                    contentSubtitle={this.state.contentSubtitle[4]}
                />
                <Content6
                    contentChineseTitle={this.state.contentChineseTitle[5]}
                    contentEnglishTitle={this.state.contentEnglishTitle[5]}
                    contentSubtitle={this.state.contentSubtitle[5]}

                />
                <Footer/>
                </div>
            </>

        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
