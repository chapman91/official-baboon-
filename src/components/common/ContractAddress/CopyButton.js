import React, { useState, useRef } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./CopyButton.css"

const CopyButton = ({ address }) => {
    const [copied, setCopied] = useState(false);
    const ref = useRef(null);


    const handleClick = () => {
        setCopied(true);
        ref.current.select(); 
    };

    return (
        <div className="AddressContainer">
        <CopyToClipboard text={address} onCopy={() => setCopied(true)}>
            <button ref={ref} className="ContractAddress" >{copied ? 'Copied' : address}</button>
        </CopyToClipboard>
        </div>
    )
}

export default CopyButton; 