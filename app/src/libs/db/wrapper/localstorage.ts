/**
 * Copyright (c) 2025 Bluespada <pentingmain@gmail.com>
 * Copyright (c) 2025 ExtendThing
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 */

import { EncryptStorage } from "encrypt-storage";
import { WrapperHelper  } from ".";

const createLocalStorage = (appKey = "") => {
    const store = new EncryptStorage(appKey, {
        stateManagementUse: false,
        storageType: "localStorage"
    });
    return {
        load() {
            console.info("Initialize LocalStorage");
        },
        getVault(name, password) {
            
        },
        setVault(name, password) {
            
        },
        removeVault(name, password) {
            
        },
        createNote(vaultName, noteId, password) {
            
        },
        editNote(vaultName, noteId, password) {
            
        },
        removeNote(vaultName, noteId, password) {
            
        },
    } satisfies WrapperHelper;
}

export default createLocalStorage;