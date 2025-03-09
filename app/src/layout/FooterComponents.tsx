/**
 * Copyright (c) 2025 Bluespada <pentingmain@gmail.com>
 * Copyright (c) 2025 ExtendThing
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield, faKeyboard } from '@fortawesome/free-solid-svg-icons';

export interface FooterComponentProps {

};

const FooterComponent : React.FC<FooterComponentProps> = ({}) => {
    return (<>
        <footer className="fixed bottom-0 w-full h-fit">
            <div className="w-full h-full flex flex-row items-center justify-between p-8">
                <div className="w-full h-full flex flex-row items-center">
                </div>
                <div className="w-full h-full flex flex-row items-center justify-end gap-4">
                    <div className="tooltip [--tt-bg:black] [--color-neutral-content:white] before:!max-w-sm before:whitespace-pre-wrap before:text-xs">
                        <div className="tooltip-content text-xs font-geist">
                            <p>Inly encrypted with</p>
                            <p>End to end encryption</p>
                        </div>
                        <div className="btn btn-ghost p-3 hover:bg-base-300 dark:hover:bg-base-300 shadow-none text-primary rounded-full border-none">
                            <FontAwesomeIcon icon={faShield}/>
                        </div>
                    </div>
                    <div className="tooltip [--tt-bg:black] [--color-neutral-content:white] before:!max-w-sm before:whitespace-pre-wrap before:text-xs">
                        <div className="tooltip-content text-xs font-geist">
                            <p>Shortcut & Help</p>
                        </div>
                        <div className="btn btn-ghost p-3 hover:bg-base-300 dark:hover:bg-base-300 shadow-none text-primary rounded-full border-none">
                            <FontAwesomeIcon icon={faKeyboard}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>);
}

export default FooterComponent;