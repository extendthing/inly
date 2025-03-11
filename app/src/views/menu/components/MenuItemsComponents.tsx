/**
 * Copyright (c) 2025 Bluespada <pentingmain@gmail.com>
 * Copyright (c) 2025 ExtendThing
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { twMerge } from 'tailwind-merge';

const MenuItems : React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {keybind?: string }> = ({keybind,className, children, ...buttonProps}) => {
    const buttonClass = twMerge("w-full flex flex-row items-center justify-between gap-2.5 hover:bg-primary/25 disabled:hover:bg-transparent text-gray-600 dark:text-gray-300 disabled:text-gray-500 hover:text-base-content dark:disabled:text-gray-400 rounded-md px-4 py-2.5  cursor-pointer disabled:cursor-default", className)
    return (<>
        <button
            {...buttonProps}
            className={buttonClass}
        >
            <div className="flex flex-row items-center justify-between gap-2.5">
                { children }
            </div>
            <kbd className="kbd kbd-md">
                {keybind}
            </kbd> 
        </button>
    </>)
}

export default MenuItems;