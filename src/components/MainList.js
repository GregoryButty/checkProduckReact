import React from 'react';
import ProductBoxes from './ProductBoxes';
import my_img from '../img/my_img.webp'

class MainList extends React.Component {

    products = [
        {
            id: '1',
            img: my_img,
            name: 'Rose',
            par: 'SFdsfae dfvgea sdvadvd fdbfd.',
            cost: '235'
        },
        {
            id: '2',
            img: my_img,
            name: 'Ginho',
            par: 'Pwfew erbe enbebdaf sfabafd.',
            cost: '260'
        },
        {
            id: '3',
            img: my_img,
            name: 'Egg flovers',
            par: 'Pwds grnrg zxvdf tymty tr drg.',
            cost: '255'
        }
    ]

    render() {
        return (<section className='main_list'>
            <div className='left_sec'>
            </div>

            <div className='midle_sec'>
                {this.products.map((product) => (<ProductBoxes image={product.img} name={product.name} textInfo={product.par} cost={product.cost} />))}
            </div>

            <div className='right_sec'>
            </div>
        </section>)
    }
}

export default MainList