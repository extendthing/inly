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
import { faArrowDown, faEllipsis, faStar, faBars, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

export interface HeaderComponentProps {

};

const HeaderComponent : React.FC<HeaderComponentProps> = ({}) => {
    return (<>
        <nav className="fixed top-0 left-0 w-full">
            <div className="w-full h-full flex flex-row items-center justify-between py-2.5 px-12">
                <div className="w-fit h-full px-8 flex flex-row items-center bg-base-200 rounded-full shadow-lg shadow-gray-200/50 dark:shadow-base-300/50">
                    <button className="btn btn-ghost bg-transparent shadow-none rounded-full border-none">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <div className="w-full">
                </div>
                <div className="w-fit h-full px-8 flex flex-row items-center bg-base-200 rounded-full shadow-lg shadow-gray-200/50 dark:shadow-base-300/50">
                    <button className="btn btn-ghost bg-transparent shadow-none rounded-full border-none">
                        <FontAwesomeIcon icon={faStarRegular} />
                    </button>
                    <button className="btn btn-ghost bg-transparent shadow-none rounded-full border-none">
                        <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                    <button className="btn btn-ghost bg-transparent shadow-none rounded-full border-none">
                        <FontAwesomeIcon icon={faEllipsis} />
                    </button>
                </div>
            </div>
        </nav>
    </>);
}

export default HeaderComponent;