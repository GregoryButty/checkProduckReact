import React from 'react'

class ProductBoxes extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            button: 'Chuse',
        }

        this.btnClick = this.btnClick.bind(this);
    }

    render () {
        return (<div className='product_boxes'>
        <div className='pr_items' >
            <img className='pr_img' src={this.props.image} />
            <div className='pr_info'>
                <h2 className='pr_title'>{this.props.name}</h2>
                <div className='pr_text'>
                    <p className='pr_paragraph'>{this.props.textInfo}</p>
                    <div className='pr_cost'>Cost: {this.props.cost}grn</div>
                    <button className='pr_buttun'
                            onClick={this.btnClick}>{this.state.button}</button>
                </div>
            </div>
        </div>
    </div>)
    }

    btnClick(e) {
        console.log(e)
        this.setState( e.target.innerText === 'Chuse' ? {button: 'Delete'} : {button: 'Chuse'});
        e.target.innerText === 'Chuse' ? e.target.style.color = 'var(--red)' : e.target.style.color = '#000';
    }


}

export default ProductBoxes