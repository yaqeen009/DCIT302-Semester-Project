import Button from "../components/button";
import grass from "../assets/Grass.svg";
import Achievement from "../components/achievement";

const Rewards = () => {
  return (
    <div className="relative">
      <div className="absolute -top-20 left-0 w-full z-10 sm:hidden md:-top-16">
        <img src={grass} alt="Grass" className="w-full" />
      </div>
      <div className="rewards font-comic mt-10 mx-10 sm:mx-4 sm:my-0 z-0">
        <h1 className="text-primary-300 text-headline font-bold">Rewards</h1>
        <div className="flex flex-col">
          <section className="achievement-box mb-8">
            <h1 className="text-primary-400 text-body">Achievements</h1>
            <div className="box-border border border-tertiary-300 h-[418px]"></div>
          </section>
          <section className="rewards flex flex-col">
            <div className="flex flex-row justify-between items-baseline mb-4 sm:-mb-4">
              <h1 className="text-primary-400 text-body sm:text-mobile-title">Claim Rewards</h1>
              <div className="sm:-mr-5">
                <Button btnName={"Claim All"} btnType={"button"} btnColor={"primary-400"} btntxtColor={"tertiary-400"} btnHoverColor={"secondary-400"}/>
              </div>
            </div>
            <div className="overflow-y-scroll w-full h-[80vh] mb-12 md:mb-8">
                <Achievement/>
                <Achievement/>
                <Achievement/>
                <Achievement/>
                <Achievement/>
                <Achievement/>
                <Achievement/>
            </div>
          </section>
        </div>
        <img className="absolute -bottom-12 md:-bottom-6 sm:-bottom-2 left-0 w-full z-10 rotate-180 mt-10" src={grass} />
      </div>
    </div>
  );
};

export default Rewards;
