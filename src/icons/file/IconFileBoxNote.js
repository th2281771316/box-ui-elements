// @flow
import * as React from 'react';

import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconFileBoxNote = ({ className = '', height = 32, title, width = 32 }: Props) => (
    <AccessibleSVG
        className={`icon-file-box-note ${className}`}
        title={title}
        width={width}
        height={height}
        viewBox="0 0 32 32"
    >
        <path fill="#fff" d="M25 27H7V5h13l5 5v17z" />
        <path
            d="M20 4H7a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9.89zm5 23H7V5h13v4a1 1 0 0 0 1 1h4z"
            fill="#0061d5"
        />
        <path d="M18.85 14.5H10.1a.75.75 0 0 0 0 1.5h7.7z" fill="#980de0" />
        <path d="M16.7 17.5h-6.6a.76.76 0 0 0 0 1.52h5.59z" fill="#0061d5" />
        <path d="M14.7 20.5h-4.6a.75.75 0 0 0 0 1.5H14l.05-.25c.05-.15.05-.4.15-.5z" fill="#00c9c1" />
        <path
            d="M19.7 14.95a2.57 2.57 0 0 0 .6.6 2.17 2.17 0 0 0 .75.35l-4.6 6.45-.3.3-1.55 1.15c-.1.1-.2 0-.15-.1l.45-1.9a1.5 1.5 0 0 1 .2-.4zm1-1.5a1 1 0 0 1 1.25.9 6.38 6.38 0 0 1-.5.85 4.86 4.86 0 0 1-.75-.3 1.7 1.7 0 0 1-.65-.65z"
            fill="#000123"
        />
    </AccessibleSVG>
);

export default IconFileBoxNote;