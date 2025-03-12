/**
 * Copyright (c) 2025 Bluespada <pentingmain@gmail.com>
 * Copyright (c) 2025 ExtendThing
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { motion } from 'motion/react';
import { Input } from '@app/components/input';

export interface NewVaultModalProps {
    open?: boolean
    toggle?: () => void
}

export const NewVaultModal : React.FC<NewVaultModalProps> = ({ open, toggle }) => {

    /** State */
    const [vaultName, setVaultName] = React.useState("");
    const [vaultPassword, setVaultPassword] = React.useState("");

    const handleCloseEv = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toggle();
    }

    return (<>
        <motion.dialog
            initial={{
                visibility: open ? 'visible' : 'hidden',
                opacity: open ? 100 : 0,
            }}
            animate={{
                visibility: open ? 'visible' : 'hidden',
                opacity: open ? 100 : 0,
            }}
            transition={{ delay: 0.05 }}
            className="modal modal-open"
        >
            <div className="modal-box bg-base-200 rounded-md">
                <h3 className="text-3xl font-bold">New Vault</h3>
                <p className="text-gray-400 dark:text-gray-200/70">Vault is a secure workspace for organizing and storing notes.</p>
                <form className="flex flex-col gap-3 pt-3">
                    <Input
                        label="Vault Name"
                        value={vaultName}
                        onChange={(e) => setVaultName(e.target.value)}
                        placeholder="Vault Name"
                        required
                    />
                    <Input
                        label="Vault Password"
                        value={vaultPassword}
                        onChange={(e) => setVaultPassword(e.target.value)}
                        placeholder="Vault Password"
                        type="password"
                    />
                    <button className="btn btn-primary w-full text-base-content">
                        <span>Create</span>
                    </button>
                </form>
            </div>
            <form onSubmit={handleCloseEv} className="modal-backdrop">
                <button>close</button>
            </form>
        </motion.dialog>
    </>);
}

export const OpenVaultModal : React.FC = () => {
    return (<>
    </>);
}
