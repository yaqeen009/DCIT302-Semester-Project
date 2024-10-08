const Achievement = () => {
  return (
    <div className="achievement my-4">
      <div className="w-full h-28 sm:h-20 flex flex-row">
        <div className="w-[90%] h-full bg-secondary-300 rounded-l-lg">
          <div className="text m-4">
            <h1 className="text-title sm:text-mobile-title text-primary-400">Math</h1>
            <span className="flex flex-row items center justify-between text-body sm:text-mobile-body text-primary-400">
              <p className="">Complete 20 math games</p>
              <p className="">10/20</p>
            </span>
          </div>
          <div className="progress-bar h-3 sm:h-2 border border-success-100 rounded-lg mx-4 flex">
            <span className="w-[50%] h-full bg-success-100 rounded-lg"></span>
          </div>
        </div>
        <div className="w-[10%] sm:w-[25%] h-full bg-success-200 rounded-r-lg flex items-center">
            <h1 className="text-headline sm:text-mobile-headline text-center md:text-mobile-headline  mx-4 text-secondary-200">Claim</h1>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
