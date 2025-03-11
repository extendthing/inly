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
import MenuItems from './components/MenuItemsComponents';
import { NewVaultModal } from '@app/components/vault';


const MenuViews : AppViews = () => {
    const [newVault, setNewVault] = React.useState(false);

    return (<>
        <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl tracking-wider">Your notes will be saved localy on your browser.</h1>
            <div className="w-96 h-full flex flex-col text-xl pt-12 gap-4">
                <MenuItems keybind="CTRL+O" disabled>
                    <FontAwesomeIcon icon={faShield} />
                    <span>Open Vault</span>
                </MenuItems>
                <MenuItems keybind="CTRL+N" onClick={() => setNewVault(!newVault)}>
                    <FontAwesomeIcon icon={faShield} />
                    <span>Create Vault</span>
                </MenuItems>
                <MenuItems keybind="CTRL+T">
                    <FontAwesomeIcon icon={faTent} />
                    <span>Temporary Note</span>
                </MenuItems>
                <MenuItems keybind="?">
                    <FontAwesomeIcon icon={faCircleQuestion} />
                    <span>Help</span>
                </MenuItems>
            </div>
        </div>
        <NewVaultModal open={newVault} toggle={() => setNewVault(!newVault)} />
    </>);
}

export default MenuViews;
