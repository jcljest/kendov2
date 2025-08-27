// routing/withRoute.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export function withRoute(Component) {
  return React.forwardRef(function Routable(props, ref) {
    const { to, linkProps = {}, ...rest } = props;

    const node = <Component ref={ref} {...rest} />;

    // If no route requested, render plain component
    if (!to) return node;

    // If consumer already put a Link inside Component, avoid nesting
    // (convention: allow opt-out)
    if (props.avoidWrap) return node;

    // Wrap in Link; use className="contents" so the wrapper
    // doesn't break the layout box model
    return (
      <Link to={to} className="contents" {...linkProps}>
        {node}
      </Link>
    );
  });
}
