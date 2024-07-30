import Button from "../components/button";

const Rewards = () => {
  return (
      <div className="home font-comic my-10 mx-10 z-0">
        <h1 className="text-primary-300 text-headline">All Games</h1>
        <div className="flex flex-col">
            <section className="achievement-box mb-8">
                <h1 className="text-primary-400 text-body">Achievements</h1>
                <div className="box-border border border-tertiary-300 h-[418px]"></div>
            </section>
            <section className="rewards">
                <div className="flex flex-row justify-between items-baseline mb-4">
                    <h1 className="text-primary-400 text-body">Claim Rewards</h1>
                    <Button btnName={"Claim All"} btnType={"button"}/>
                </div>
            </section>
        </div>
      </div>
  );
};

export default Rewards;
