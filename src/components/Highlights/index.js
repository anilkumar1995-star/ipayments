import React from 'react';

export default function Highlight({ children, className }) {
    return (
        <span className={className}>
            {children}
        </span>
    )
};