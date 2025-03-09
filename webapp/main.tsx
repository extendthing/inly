/**
 * Copyright (c) Bluespada <pentingmain@gmail.com>
 * Copyright (c) ExtendThing
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createRoot } from 'react-dom/client';
import App from '@app/app';

const root = createRoot(document.getElementById('anubis')!);
root.render(<App/>);