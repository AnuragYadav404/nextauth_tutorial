import { ReactNode } from "react";

export default function userLayout({children}: Readonly<{
    children: ReactNode
}>) {
    return (
        <div>
            <div className="bg-slate-900 text-white p-4 mb-2">
                Header for user routes
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}