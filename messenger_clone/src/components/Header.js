import React from 'react'
import { Gradient } from 'react-gradient';

function Header(props) {

    const logo = require('../assets/chat.png');
    const gradients =
        [
            ['#3F51B5', '#FF4B2B'],
            ['#3F51B5', '#3F51B5'],
        ];

    return (
        <div>
            <img src={logo} alt="logo" height="100" width="100" style={{ marginTop: 20 }} />
            <Gradient
                gradients={gradients}
                property="text"
                element="h1"
                angle="30deg"
                className="h1_messenger"
            >{props.app_name}</Gradient>
            <Gradient
                gradients={gradients}
                property="text"
                element="h4"
                angle="30deg"
                className="h4_credits"
            >Done by Kareem Krayem</Gradient>
        </div>
    )
}

export default Header
