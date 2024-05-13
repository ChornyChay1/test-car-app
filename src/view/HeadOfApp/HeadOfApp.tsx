import React from 'react';
import './css/HeadOfApp.css';
import HeadFirstRow from "./HeadFirstRow";
import OptionsRow from "./OptionsRow";

interface HeadOfAppProps {
    onContainerStateChange: () => void;
}

function HeadOfApp({ onContainerStateChange }: HeadOfAppProps) {
    return (
        <div className="HeadContainer">
            <HeadFirstRow />
            <OptionsRow onContainerStateChange={onContainerStateChange} />
        </div>
    );
}

export default HeadOfApp;
