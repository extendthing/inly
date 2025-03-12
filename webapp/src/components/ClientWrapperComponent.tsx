"use client";
import dynamic from 'next/dynamic';
import { RuntimeType } from '@app/utils/type';

const App = dynamic(() => import('@app/app'), { ssr: false });

export default function ClientWrapperComponent() {
    return (typeof window != undefined) ? (<>
        <App runtime={RuntimeType.webapp} />
    </>) : null;
}