export const ScrollWrapper = (props) => {
    const { children } = props;
    return (<div className="grid grid-cols-3 gap-8">
        {children}
    </div>)
}