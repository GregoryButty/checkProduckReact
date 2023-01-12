import React from 'react';

class MainList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candelsProducts: {},
            sayHello: "Hello",
            deletMasege: ""
        }

        // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (<section className='main_list'>
            <div className='left_sec'>
            </div>

            <div className='midle_sec'>
                <h1>{this.state.sayHello}</h1>
            </div>

            <div className='right_sec'>

            </div>
        </section>)
    }
}

export default MainList