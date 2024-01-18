import ScoreCard from "@/components/shared/ScoreCard";

const FinishPage = () => {
  return (
    <div className=" flex pt-20 justify-between max-laptop:flex-col gap-16 max-tablet:gap-10 ">
      <div className=" ">
        <h2 className=" text-heading-l-regular">Quiz completed</h2>
        <h3 className="text-heading-l-bold">You scored...</h3>
      </div>
      <ScoreCard imgSrc="/assets/images/icon-css.svg" topic="Css" />
    </div>
  );
};

export default FinishPage;
