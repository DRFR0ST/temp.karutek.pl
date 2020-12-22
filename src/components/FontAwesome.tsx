import React from 'react';
import { loadCSS } from 'fg-loadcss';
import Icon, { IconProps } from '@material-ui/core/Icon';
import cx from 'classnames'

export default function FontAwesome(props: { children: string, style?: any, className?: string, iconProps?: IconProps }) {

    React.useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );

        return () => {
            node.parentNode!.removeChild(node);
        };
    }, []);

    return (
        <Icon className={cx(props.children, props.className)} style={props.style} {...props.iconProps} />
    );
}