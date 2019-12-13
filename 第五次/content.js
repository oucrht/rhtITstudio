import React from 'react'
import CardWithContent from "./card";
import History from "./history";
import Comment from "./comment";
import content2_icon1 from './static/content2_icon1.png';
import content2_icon2 from './static/content2_icon2.png';
import content2_icon3 from './static/content2_icon3.png';
import content2_icon4 from './static/content2_icon4.png';
import content2_icon5 from './static/content2_icon5.png';
import Works from "./works";
class Content1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contentChineseTitle:this.props.contentChineseTitle,
            contentEnglishTitle:this.props.contentEnglishTitle,
            contentSubtitle:this.props.contentSubtitle,
            content:this.props.content,
            cardContent1:[
                '爱特一直以聚集和培养计算机人才为己任，发掘技术潜力，感受合作乐趣，让项目高效执行，让大家一同进步。',
                '用创意打磨精巧设计，用智慧实现炫酷交互；用热情呈现高效代码，以交流触碰灵感火花；以创造激发全新想象，用双手创造改变未来。',
                '汇聚技术力量，解剖程序内核，研究代码本质，巧解应用难题。以逻辑洞察数据，以细节战胜漏洞。'
            ],
            title1:['团队文化','优秀创意','乐在其中'],
            title2:['合作也是艺术','灵感建构未来','洞察技术玄机'],
            imgSrc:[<img className={'inlineBlock'} src={require('./static/icon_1.png')} alt={'1'} />,<img className={'inlineBlock'} src={require('./static/icon_2.png')} alt={'1'} />,<img className={'inlineBlock'} src={require('./static/icon_3.png')} alt={'1'} />],
        };
    }
    render() {
        return(
            <div className="content">
                <div className={'title'}>
                    <h3 className={'fontSize12px'}>
                        <span className={'fontColorBlue'}>{this.state.contentChineseTitle}</span>
                        <span className={'fontColor8b8b8b'}>{this.state.contentEnglishTitle}</span></h3>
                    <h2 className={'fontSize18px fontColorOrange'}>{this.state.contentSubtitle}</h2>
                </div>
                <p>{this.state.content}</p>
                <div className={'cardContainer'}>
                <CardWithContent imgSrc={this.state.imgSrc[0]} title1={this.state.title1[0]} title2={this.state.title2[0]} content={this.state.cardContent1[0]}/>
                <CardWithContent imgSrc={this.state.imgSrc[1]} title1={this.state.title1[1]} title2={this.state.title2[1]} content={this.state.cardContent1[1]}/>
                <CardWithContent id={'card3'} imgSrc={this.state.imgSrc[2]} title1={this.state.title1[2]} title2={this.state.title2[2]} content={this.state.cardContent1[2]}/>
                </div>
            </div>
        );
    }
}
class Content2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contentChineseTitle:this.props.contentChineseTitle,
            contentEnglishTitle:this.props.contentEnglishTitle,
            contentSubtitle:this.props.contentSubtitle,
            cardContent:[content2_icon1,content2_icon2,content2_icon3,content2_icon4,content2_icon5],
            title:['UI设计','前端开发','程序开发','安卓开发','游戏开发'],
        };
    }
    render() {
        return(
            <div className="content">
                <div className={'title'}>
                    <h3 className={'fontSize12px'}>
                        <span className={'fontColorBlue'}>{this.state.contentChineseTitle}</span>
                        <span className={'fontColor8b8b8b'}>{this.state.contentEnglishTitle}</span></h3>
                    <h2 className={'fontSize18px fontColorOrange'}>{this.state.contentSubtitle}</h2>
                </div>
                <p>{this.props.content}</p>
                <div className={'cardContainer5'}>
                <div id={'cd1'} className={'card borderRadius10px'}>
                    <div className={'imgH3Container'}>
                        <div className={'fontSize36px fontColorWhite'}><img className={'icon'} src={this.state.cardContent[0]} alt={'ui'}/></div>
                        <h3 className={'fontSize15px fontColorWhite'}>{this.state.title[0]}</h3>
                    </div>
                </div>
                <div id={'cd2'} className={'card borderRadius10px'}>
                    <div className={'imgH3Container'}>
                        <div className={'fontSize36px fontColorWhite'}><img className={'icon'} src={this.state.cardContent[1]} alt={'前端'}/></div>
                        <h3 className={'fontSize15px fontColorWhite'}>{this.state.title[1]}</h3>
                    </div>
                </div>
                <div id={'cd3'} className={'card borderRadius10px'}>
                    <div className={'imgH3Container'}>
                        <div className={'fontSize36px fontColorWhite'}><img className={'icon'} src={this.state.cardContent[2]} alt={'程序'}/></div>
                        <h3 className={'fontSize15px fontColorWhite'}>{this.state.title[2]}</h3>
                    </div>
                </div>
                <div id={'cd4'} className={'card borderRadius10px'}>
                    <div className={'imgH3Container'}>
                        <div className={'fontSize36px fontColorWhite'}><img className={'icon'} src={this.state.cardContent[3]} alt={'安卓'}/></div>
                        <h3 className={'fontSize15px fontColorWhite'}>{this.state.title[3]}</h3>
                    </div>
                </div>
                <div id={'cd5'} className={'card borderRadius10px'}>
                    <div className={'imgH3Container'}>
                        <div className={'fontSize36px fontColorWhite'}><img className={'icon'} src={this.state.cardContent[4]} alt={'游戏'}/></div>
                        <h3 className={'fontSize15px fontColorWhite'}>{this.state.title[4]}</h3>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
class Content3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contentChineseTitle:this.props.contentChineseTitle,
            contentEnglishTitle:this.props.contentEnglishTitle,
            contentSubtitle:this.props.contentSubtitle,
            cardContent:['14’','15’','16’','17’','18’'],
            title:['2014届','2015届','2016届','2017届','2018届'],
        };
    }
    render() {
        return(
            <div className="content">
                <div className={'title'}>
                    <h3 className={'fontSize12px'}>
                        <span className={'fontColorBlue'}>{this.state.contentChineseTitle}</span>
                        <span className={'fontColor8b8b8b'}>{this.state.contentEnglishTitle}</span></h3>
                    <h2 className={'fontSize18px fontColorOrange'}>{this.state.contentSubtitle}</h2>
                </div>
                <p>{this.props.content}</p>
                <div className={'cardContainer5'}>
                <div className={'crd1 card borderRadius10px'}>
                    <div className={'textContainer5'}>
                    <p className={'icon fontColorWhite'}>{this.state.cardContent[0]}</p>
                    <h3 className={'fontSize15px fontColorWhite'}>{this.state.title[0]}</h3>
                </div>
                </div>
                <div className={'crd2 card borderRadius10px'}>
                    <div className={'textContainer5'}>
                    <p className={'icon fontColorWhite'}>{this.state.cardContent[1]}</p>
                    <h3 className={'fontSize15px fontColorWhite'}>{this.state.title[1]}</h3>
                </div>
                </div>
                <div className={'crd3 card borderRadius10px'}>
                    <div className={'textContainer5'}>
                    <p className={'icon fontColorWhite'}>{this.state.cardContent[2]}</p>
                    <h3 className={'fontSize15px fontColorWhite'}>{this.state.title[2]}</h3>
                    </div>
                </div>
                <div className={'crd4 card borderRadius10px'}>
                    <div className={'textContainer5'}>
                    <p className={'icon fontColorWhite'}>{this.state.cardContent[3]}</p>
                    <h3 className={'fontSize15px fontColorWhite'}>{this.state.title[3]}</h3>
                    </div>
                </div>
                <div id={'crd5'} className={'crd5 card borderRadius10px'}>
                    <div className={'textContainer5'}>
                    <p className={'icon fontColorWhite'}>{this.state.cardContent[4]}</p>
                    <h3 className={'fontSize15px fontColorWhite'}>{this.state.title[4]}</h3>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
class Content4 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contentChineseTitle:this.props.contentChineseTitle,
            contentEnglishTitle:this.props.contentEnglishTitle,
            contentSubtitle:this.props.contentSubtitle,
            content:this.props.content,
        };
    }
    render() {
        return(
            <div className="content">
                <div className={'title'}>
                    <h3 className={'fontSize12px'}>
                        <span className={'fontColorBlue'}>{this.state.contentChineseTitle}</span>
                        <span className={'fontColor8b8b8b'}>{this.state.contentEnglishTitle}</span></h3>
                    <h2 className={'fontSize18px fontColorOrange'}>{this.state.contentSubtitle}</h2>
                </div>
                <p>{this.state.content}</p>
                <History/>
            </div>
        );
    }
}
class Content5 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contentChineseTitle:this.props.contentChineseTitle,
            contentEnglishTitle:this.props.contentEnglishTitle,
            contentSubtitle:this.props.contentSubtitle,

        };
    }
    render() {
        return(
            <div className="content">
                <div className={'title'}>
                    <h3 className={'fontSize12px'}>
                        <span className={'fontColorBlue'}>{this.state.contentChineseTitle}</span>
                        <span className={'fontColor8b8b8b'}>{this.state.contentEnglishTitle}</span></h3>
                    <h2 className={'fontSize18px fontColorOrange'}>{this.state.contentSubtitle}</h2>
                </div>
                <p className={'textAlignCenter'}>Coding是我们与世界对话的方式，技术是我们与未来沟通的语言。
                    用键盘奏起一曲华丽乐章，调度程序去搭建理想的大厦与桥梁。
                </p>
                <Works/>
            </div>
        );
    }
}
class Content6 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contentChineseTitle:this.props.contentChineseTitle,
            contentEnglishTitle:this.props.contentEnglishTitle,
            contentSubtitle:this.props.contentSubtitle,

        };
    }
    render() {
        return(
            <div className="content">
                <div className={'title'}>
                    <h3 className={'fontSize12px'}>
                        <span className={'fontColorBlue'}>{this.state.contentChineseTitle}</span>
                        <span className={'fontColor8b8b8b'}>{this.state.contentEnglishTitle}</span></h3>
                    <h2 className={'fontSize18px fontColorOrange'}>{this.state.contentSubtitle}</h2>
                </div>
                <Comment/>
            </div>
        );
    }
}
export {Content1,Content2,Content3,Content4,Content5,Content6}