/**
 * Copyright (c) 2025 Bluespada <pentingmain@gmail.com>
 * Copyright (c) 2025 ExtendThing
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 */

export type WrapperHelper = {
    load: () => void
    setVault: (name, password) => void
    getVault: (name, password) => void
    removeVault: (name, password) => void
    createNote: (vaultName, noteId, password) => void
    editNote: (vaultName, noteId, password) => void
    removeNote: (vaultName, noteId, password) => void
}