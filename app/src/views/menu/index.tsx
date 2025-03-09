/**
 * Copyright (c) 2025 Bluespada <pentingmain@gmail.com>
 * Copyright (c) 2025 ExtendThing
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { type AppViews } from '@app/utils/type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faTent, faShield } from '@fortawesome/free-solid-svg-icons';

const MenuViews : AppViews = () => {
    return (<>
        <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
            <h3 className="font-bold text-2xl">Your notes will be saved localy on your browser.</h3>
            <div className="w-96 h-full flex flex-col font-geist pt-12 gap-4">
                <button disabled className="w-full flex flex-row items-center justify-between gap-2.5 hover:bg-primary/20 disabled:hover:bg-transparent disabled:text-gray-500 dark:disabled:text-gray-400 rounded-md px-4 py-2.5 text-sm cursor-pointer disabled:cursor-default">
                    <div className="flex flex-row items-center justify-between gap-2.5">
                        <FontAwesomeIcon icon={faShield} />
                        <span>Open Vault</span>
                    </div>
                    <kbd className="kbd kbd-md">
                        Ctrl+O
                    </kbd>
                </button>
                <button className="w-full flex flex-row items-center justify-between gap-2.5 hover:bg-primary/20 disabled:hover:bg-transparent disabled:text-gray-500 dark:disabled:text-gray-400 rounded-md px-4 py-2.5 text-sm cursor-pointer disabled:cursor-default">
                    <div className="flex flex-row items-center justify-between gap-2.5">
                        <FontAwesomeIcon icon={faShield} />
                        <span>Create new Vault</span>
                    </div>
                    <kbd className="kbd kbd-md">
                        Ctrl+N
                    </kbd>
                </button>
                <button className="w-full flex flex-row items-center justify-between gap-2.5 hover:bg-primary/20 disabled:hover:bg-transparent disabled:text-gray-500 dark:disabled:text-gray-400 rounded-md px-4 py-2.5 text-sm cursor-pointer disabled:cursor-default">
                    <div className="flex flex-row items-center justify-between gap-2.5">
                        <FontAwesomeIcon icon={faTent} />
                        <span>Temporary Note</span>
                    </div>
                    <kbd className="kbd kbd-md">
                        Ctrl+T
                    </kbd>
                </button>
                <button className="w-full flex flex-row items-center justify-between gap-2.5 hover:bg-primary/20 disabled:hover:bg-transparent disabled:text-gray-500 dark:disabled:text-gray-400 rounded-md px-4 py-2.5 text-sm cursor-pointer disabled:cursor-default">
                    <div className="flex flex-row items-center justify-between gap-2.5">
                        <FontAwesomeIcon icon={faCircleQuestion} />
                        <span>Help</span>
                    </div>
                    <kbd className="kbd kbd-md">
                        ?
                    </kbd>
                </button>
            </div>
        </div>
    </>);
}

export default MenuViews;