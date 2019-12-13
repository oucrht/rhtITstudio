import React from 'react'
import logoBlue from './static/logo_blue.png'
class Header extends React.Component{
    render() {
        return(
            <nav id={'nav'}>
                <img className={'float left logoBlue'} src={logoBlue} alt={'logo'}/>
                <ul className={'fontSize9px fontColor6b6b6b navUl float right'}>
                    <li className={'float '}>部门</li>
                    <li className={'float '}>成员</li>
                    <li className={'float '}>历史</li>
                    <li className={'float '}>作品</li>
                    <li className={'float '}>留言</li>
                    <li className={'float borderRadius10px'} id={"join"}>加入</li>
                </ul>
                <div className={'clear'}/>
            </nav>
        );
    }
}

export default Header