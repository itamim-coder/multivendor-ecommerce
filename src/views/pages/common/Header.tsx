export const Header = () => {
  return (
    <div className="container mx-auto  ">
      <div className="flex items-center justify-between">
        <div>
          <h1>header</h1>
        </div>
        <div className="flex">
          <input type="text" className="p-3 border-2" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};
