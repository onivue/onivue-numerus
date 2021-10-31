import clsx from 'clsx'

export const Container = ({ className, children }) => {
    return <div className={clsx('px-4 mx-auto max-w-screen-md', className)}>{children}</div>
}
