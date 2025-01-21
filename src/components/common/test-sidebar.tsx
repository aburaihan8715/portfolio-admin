const TestSidebar = () => {
  const x = false;
  return (
    <div
      className={`fixed bottom-0 top-0 z-50 flex h-screen w-[250px] items-center justify-center overflow-auto bg-slate-900/50 text-white ${x ? 'left-full' : 'left-0'}`}
    >
      <div>
        <p>item1</p>
        <p>item2</p>
        <p>item3</p>
        <p>item4</p>
        <p>item5</p>
      </div>
    </div>
  );
};

export default TestSidebar;
