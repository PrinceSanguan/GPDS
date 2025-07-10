import { PropsWithChildren } from 'react';

export default function Background({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#c7af6e] via-[#004aad] to-[#c7af6e] relative overflow-hidden">
            {children}
        </div>
    );
}
