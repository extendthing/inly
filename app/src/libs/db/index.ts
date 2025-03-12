/**
 * Copyright (c) 2025 Bluespada <pentingmain@gmail.com>
 * Copyright (c) 2025 ExtendThing
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { WrapperHelper } from '@app/libs/db/wrapper';

export default class Database<T extends WrapperHelper> {
     adapter : T;
    constructor(adapter: T){
        this.adapter = adapter;
        adapter.load();
    }

    allVault(){
    }

}