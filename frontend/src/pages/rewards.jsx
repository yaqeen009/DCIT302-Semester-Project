import Button from "../components/button";
import grass from "../assets/Grass.svg";
import Footer from "../components/footer";
import Achievement from "../components/achievement";

const Rewards = () => {
  return (
    <div>
      <div className="home font-comic mt-10 mx-10 z-0">
        <div className="absolute mt-8 top-10 left-0 w-full z-10">
          <img src={grass} alt="Grass" className="w-full" />
        </div>
        <h1 className="text-primary-300 text-headline">All Games</h1>
        <div className="flex flex-col">
          <section className="achievement-box mb-8">
            <h1 className="text-primary-400 text-body">Achievements</h1>
            <div className="box-border border border-tertiary-300 h-[418px]"></div>
          </section>
          <section className="rewards flex flex-col">
            <div className="flex flex-row justify-between items-baseline mb-4">
              <h1 className="text-primary-400 text-body">Claim Rewards</h1>
              <Button btnName={"Claim All"} btnType={"button"} />
            </div>
            <div className="overflow-y-scroll w-full h-[80vh]">
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
      </div>
      <Footer />
    </div>
  );
};

export default Rewards;
