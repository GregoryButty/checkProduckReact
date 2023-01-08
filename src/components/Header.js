import React from 'react';

class Header extends React.Component {
    render() {
        return (<div className='top_header'>

            <header className='main_header'>
                <h1 className='title_head'>Бжілка-<span className='title_span_head'>Українка</span></h1>
                <nav className='nav_head'>
                    <ul className='ul_head'>
                        <li className='li_head'><a className='a_head' href='#'>Main</a></li>
                        <li className='li_head'><a className='a_head' href='#'>Hany</a></li>
                        <li className='li_head'><a className='a_head' href='#'>Candels</a></li>
                        <li className='li_head'><a className='a_head' href='#'>Other</a></li>
                    </ul>
                </nav>
            </header>

        </div>)
    }
}

export default Header