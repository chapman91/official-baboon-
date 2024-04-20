import React, { useState, useRef } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';


const CopyButton = ({ address }) => {
    const [copied, setCopied] = useState(false);
    const ref = useRef(null);


    const handleClick = () => {
        setCopied(true);
        ref.current.select(); 
    };

    return (
        <CopyToClipboard text={address} onCopy={handleClick}>
            <button ref={ref}>{copied ? 'Copied' : address}</button>
        </CopyToClipboard>
    )
}

export default CopyButton; 