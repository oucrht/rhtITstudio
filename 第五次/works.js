import React from 'react'
import works1 from './static/works1.png'
import works2 from './static/works2.png'
import works3 from './static/works3.png'
function Works() {
    return(
        <div className={'works'}>
            <div className={'workOfLeft padding45px30px borderRadius10px'}>
                <img className={'worksImg height250px'} src={works1} alt={'work1'}/>
            </div>
            <div className={'workOfMiddle padding45px30px borderRadius10px'}>
                <img className={'worksImg height300px'} src={works2} alt={'work2'}/>
            </div>
            <div className={'workOfRight padding45px30px borderRadius10px'}>
                <img className={'worksImg height250px'} src={works3} alt={'work3'}/>
            </div>
            <div className={'clear'}/>
        </div>
    );
}

export default Works