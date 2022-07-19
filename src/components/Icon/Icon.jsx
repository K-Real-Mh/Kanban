import React, { memo } from 'react';
import * as icons from '../../icons';

function getIconByName(name) {
    return icons[name];
}

function Icon({ width = '20', height = '20', viewBox, name, color = '#FFFFFF' }) {
    const IconComponent = getIconByName(name);

    let viewBoxCustom = viewBox;
    switch (name) {
        default:
            break;
        case 'LogoIcon':
            viewBoxCustom = '0 0 25 24'
            break;
        case 'BellIcon':
            viewBoxCustom = '0 0 22 22'
            break;
        case 'ArrowDownIcon':
            viewBoxCustom = '0 0 10 5'
            break;
        case 'ArrowRightIcon':
            viewBoxCustom = '0 0 10 18'
            break;
        case 'QuestionIcon':
            viewBoxCustom = '0 0 24 24'
            break;
    }

    if (!IconComponent) {
        return null;
    }

    return (
        <svg
            viewBox={viewBox || viewBoxCustom || '0 0 20 20'}
            width={width}
            height={height}
            aria-hidden={true}
        >
            <IconComponent color={color} />
        </svg>
    )

}

export default memo(Icon);