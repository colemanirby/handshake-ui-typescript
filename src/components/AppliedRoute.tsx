import * as React from 'react';
import { Route } from 'react-router-dom';

export default ( C: any, ...rest: any[]  ) =>
    <Route {...rest} render={props => <C.component {...props} {...(C.props.childProps)} />} />;