/**
 * Copyright (c) 2025 Bluespada <pentingmain@gmail.com>
 * Copyright (c) 2025 ExtendThing
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { RouteObject, createBrowserRouter } from 'react-router';

/// import layout
import AppLayout from '@app/layout';

/// import views
import MenuViews from '@app/views/menu';

const route : RouteObject[] = [
    {
        path: "/",
        element: <AppLayout/>,
        loader: AppLayout?.loader,
        HydrateFallback: AppLayout?.loading,
        ErrorBoundary: AppLayout?.error,
        children: [
            {
                path: "",
                element: <MenuViews/>,
                loader: MenuViews?.loader,
                HydrateFallback: MenuViews?.loading,
                ErrorBoundary: MenuViews?.error
            }
        ]
    }
];

export default createBrowserRouter(route);