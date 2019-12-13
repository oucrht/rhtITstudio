import React from 'react'

class CardWithContent extends React.Component{
    render() {
        return(
            <div id={this.props.id} className={'cardWithContent borderRadius10px'}>
                <div className={'cardContainer'}>
                {this.props.imgSrc}
                    <div className={'titleContainer'}>
                        <h3 className={'fontSize12px'}>
                            <span className={'fontColorBlue'}>{this.props.title1}</span>
                        </h3>
                        <h2 className={'fontSize18px fontColorOrange'}>{this.props.title2}</h2>
                    </div>
                </div>
                <p className={'fontSize9px fontWeight400'} >{this.props.content}</p>
            </div>
        );
    }
}

export default CardWithContent