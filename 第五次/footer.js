import React from 'react'
import logoOrange from './static/logo_orange.png';
function Footer() {
    return(
        <div className="footer">
            <div className={'flex'}>
            <img className={'footerImg'} src={logoOrange} alt={'logo'}/>
            <div className="information textAlignRight">
                <ul className={'fontColora3a3a3 fontSize8px'}>
                    <li>鲁ICP备XXXXXXXXX号</li>
                    <li>山东省青岛市</li>
                    <li>中国海洋大学</li>
                    <li>信息科学与工程学院北楼B505</li>
                    <li/>
                    <li>©2019 ITStudio All Right Reserved</li>
                </ul>
            </div>
            </div>
        </div>
    );
}
export default Footer