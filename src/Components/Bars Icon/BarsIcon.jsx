import React from 'react'
import {
    useState

} from 'react'
import './BarsIcon.css'
const BarsIcon = () => {


    const [check, setCheck] = useState(true);
    const [leftSpam, setleftSpam] = useState();
    const [rightSpam, setrightSpam] = useState();
    const [secondSpamStyle, SecondSpamStyle] = useState();

    function exit() {
        if (check) {
            setCheck(!check);
            const left = {
                transform: "rotate(45deg)",
                marginBottom: 0,
            }
            const right = {
                transform: "rotate(-45deg)",
                marginBottom: 0,
            }
            const secondSpam = {
                display: 'none',
            }
            setleftSpam(left);
            setrightSpam(right);
            SecondSpamStyle(secondSpam);
        } else {
            setCheck(!check);
            setleftSpam();
            setrightSpam();
            SecondSpamStyle();
        }
    }

    return (
        <div className='icon' onClick={() => exit()}>
            <span style={leftSpam} className='spam firstSpam '></span>
            <span style={secondSpamStyle} className='secondSpam'> </span>
            <span style={rightSpam} className='spam '></span>
        </div>
    )
}

export default BarsIcon
