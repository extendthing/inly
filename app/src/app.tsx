/**
 * Copyright (c) 2025 Bluespada <pentingmain@gmail.com>
 * Copyright (c) 2025 ExtendThing
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

export interface AppProps {
    /// we need to define which runtime we are using, each application have their approach
    /// on how to handle the application, like accessing cameras, files, location, sharing, etc.
    runtime: "webapp" | "electron" | "capacitor"
}

const App : React.FC<AppProps> = (props) => {
    return (<>
        <h1>Hello</h1>
    </>);
}

export default App;