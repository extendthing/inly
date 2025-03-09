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