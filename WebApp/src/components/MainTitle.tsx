import React from 'react';

interface MainTitleProps {
    text: string;
}

const MainTitle: React.FC<MainTitleProps> = ({ text }) => {
    return (
        <h1 className="main-title">
            {text}
        </h1>
    );
}

export default MainTitle;