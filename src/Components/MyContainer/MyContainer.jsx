const MyContainer = ({ className, children }) => {
  return (
    <div className={`${className} container mx-auto px-4`}>{children}</div>
  );
};

export default MyContainer;
