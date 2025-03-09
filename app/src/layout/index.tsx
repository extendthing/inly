/**
 * Copyright (c) 2025 Bluespada <pentingmain@gmail.com>
 * Copyright (c) 2025 ExtendThing
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { type AppViews } from '@app/utils/type';
import { Outlet } from 'react-router';
import HeaderComponent from './HeaderComponents';
import FooterComponent from './FooterComponents';

const AppLayout : AppViews  = () => {
    return (<>
        <HeaderComponent/>
        <main>
            <Outlet/>
        </main>
        <FooterComponent/>
    </>);
};

export default AppLayout;