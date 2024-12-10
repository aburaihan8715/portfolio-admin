import FlashSaleCard from './FlashSaleCard';

const FlashSaleList = () => {
  return (
    <section className="mt-10">
      <div className="w-full px-2 mx-auto max-w-7xl sm:px-2 md:px-5 lg:px-10">
        <h4>Flash Sale</h4>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
          <FlashSaleCard />
          <FlashSaleCard />
          <FlashSaleCard />
          <FlashSaleCard />
          <FlashSaleCard />
          <FlashSaleCard />
          <FlashSaleCard />
          <FlashSaleCard />
          <FlashSaleCard />
          <FlashSaleCard />
          <FlashSaleCard />
        </div>
      </div>
    </section>
  );
};

export default FlashSaleList;
