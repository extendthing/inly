/**
 * Copyright (c) 2025 Bluespada <pentingmain@gmail.com>
 * Copyright (c) 2025 ExtendThing
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { RuntimeType } from '@app/utils/type';

interface RuntimeContext {
    runtime: RuntimeType
};

const RuntimeContext = React.createContext({} as RuntimeContext);

export const RuntimeProvider : React.FC<{ runtime: RuntimeType, children: React.ReactNode }> = ({ runtime, children }) => {
    
    const state = {
        runtime
    } satisfies RuntimeContext;

    return (<>
        <RuntimeContext.Provider value={state}>
            { children }
        </RuntimeContext.Provider>
    </>);
}

export const useRuntime = () => React.useContext(RuntimeContext);