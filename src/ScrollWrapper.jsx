const ScrollWrapper = (props) => {
  const { children, className } = props;
  return (
    <div className={`grid grid-cols-2 gap-4 sm:grid-cols-3 ${className}`}>
      {children}
    </div>
  );
};

export default ScrollWrapper;
