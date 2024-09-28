const PeopleSkeleton = () => {
  return (
    <div className="flex w-full items-center gap-4">
      <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
      <div className="skeleton h-10 w-40"></div>
    </div>
  );
};

export default PeopleSkeleton;
