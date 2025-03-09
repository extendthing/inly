/**
 * Copyright (c) 2025 Bluespada <pentingmain@gmail.com>
 * Copyright (c) 2025 ExtendThing
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { RuntimeType } from '@app/utils/type';
import { RuntimeProvider } from '@app/provider/RuntimeProvider';
import route from '@app/route';
import { RouterProvider } from 'react-router';
import '@fontsource/shadows-into-light';
import '@fontsource-variable/geist';
import "@app/assets/main.css";

export interface AppProps {
    /// we need to define which runtime we are using, each application have their approach
    /// on how to handle the application, like accessing cameras, files, location, sharing, etc.
    runtime: RuntimeType
}

const App : React.FC<AppProps> = (props) => {
    return (<>
        <RuntimeProvider runtime={props.runtime}>
            <RouterProvider router={route} />
        </RuntimeProvider>
    </>);
}

export default App;