/**
 * Copyright (c) 2025 Bluespada <pentingmain@gmail.com>
 * Copyright (c) 2025 ExtendThing
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { ZodSchema, ZodIssue } from 'zod';
import { twMerge } from 'tailwind-merge';


export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    schema?: ZodSchema
    errorFallback?: (errors: ZodIssue[]) => void
};

export const Input : React.FC<InputProps> = ({
    schema,
    className,
    errorFallback,
    onChange,
    onBlur,
    ...inputProps
}) => {
    const inputClass = twMerge("relative w-full outline-none px-4 py-2.5 text-lg", className);
    return (<>
        <div className="w-full flex flex-col">
            <div className="relative w-full">
                <input
                    {...inputProps}
                    onChange={(e) => {
                        if(onChange) onChange(e);
                    }}
                    onBlur={(e) => {
                        if(onBlur) onBlur(e);
                    }}
                    className={inputClass}
                />
            </div>
        </div>
    </>);
}
