import React from 'react'

const Container = ({ children, classNames="" }: { children: React.ReactNode, classNames?: string }) => {
    return <div className={`max-w-xl m-auto bg-slate-400`}>{children}</div>
}
export default Container