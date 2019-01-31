// @flow
import * as React from 'react';

import { boxBlue, purpleRain } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    color?: string,
    title?: string | React.Element<any>,
    type?: 'cascade' | 'default',
    width?: number,
    height?: number,
};

const IconMetadataColored = ({ className = '', color, title, type, width = 16, height = 16 }: Props) => {
    let fill;

    if (color) {
        fill = color;
    } else if (type === 'cascade') {
        fill = purpleRain;
    } else if (type === 'default') {
        fill = boxBlue;
    } else {
        fill = boxBlue;
    }

    return (
        <AccessibleSVG
            className={`icon-metadata ${className}`}
            title={title}
            width={width}
            height={height}
            viewBox="0 0 16 16"
        >
            <path
                className="fill-color"
                d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-2.515-5.879L6.2 7.263l1.376 2.202a.5.5 0 0 0 .848 0L9.8 7.263l.715 2.858a.5.5 0 0 0 .97-.242l-1-4a.5.5 0 0 0-.909-.144L8 8.257 6.424 5.735a.5.5 0 0 0-.91.144l-1 4a.5.5 0 0 0 .971.242z"
                fill={fill}
                fillRule="evenodd"
            />
        </AccessibleSVG>
    );
};

export default IconMetadataColored;