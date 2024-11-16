import React, { useEffect, useState, useContext } from 'react';
import './BarsIcon.css';
import { AppContext } from '../../Context/AppContext';

const BarsIcon = ({ close }) => {
    const { darkMode } = useContext(AppContext);

    const [check, setCheck] = useState(true);
    const [leftSpam, setleftSpam] = useState();
    const [rightSpam, setrightSpam] = useState();
    const [secondSpamStyle, SecondSpamStyle] = useState();
    useEffect(() => {
        // if (!close && !check) {
        setCheck(true);
        document.body.style.overflow = "scroll";
        setleftSpam();
        setrightSpam();
        SecondSpamStyle();
        // }
    }, [close])

    console.log('check ' + check)
    console.log('close ' + close)
    console.log('--------------------------------------');
    function exit() {
        if (check) {
            setCheck(!check);
            document.body.style.overflow = "hidden";
            const left = {
                transform: "rotate(45deg) translate(01px, 1px)",
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
            document.body.style.overflow = "scroll";
            setleftSpam();
            setrightSpam();
            SecondSpamStyle();
        }
    }

    return (
        <div className='icon' onClick={() => exit()}>
            <span style={leftSpam} className={`spam firstSpam ${darkMode == 'light' ? '' : 'primary-bg'}`}></span>
            <span style={secondSpamStyle} className={`secondSpam ${darkMode == 'light' ? '' : 'primary-bg'}`}> </span>
            <span style={rightSpam} className={`spam ${darkMode == 'light' ? '' : 'primary-bg'}`}></span>
        </div>
    )
}

export default BarsIcon
