/**
 * Copyright (c) 2025 Bluespada <pentingmain@gmail.com>
 * Copyright (c) 2025 ExtendThing
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

export enum RuntimeType {
    webapp = "webapp",
    electron = "electron",
    capacitor = "capacitor",
}

export type AppViews<T = {}, F = {}> = React.FC<T> & {
    loader?: () => Promise<F>,
    loading?: React.ComponentType<{}>,
    error?: React.ComponentType,
};