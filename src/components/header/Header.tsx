export const Header = () => {
  return (
    <header className="border-b border-t px-8 lg:px-12 flex items-center justify-center h-[250px]">
      <div className="grid lg:grid-cols-2 gap-8 w-full">
        <div className="flex items-center">
          <div className="grid gap-2">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary">
              THEMOON-SCRIPTS
            </h1>
            <h1 className="text-2xl lg:text-4xl font-semibold">
              License Panel
            </h1>
          </div>
        </div>
        <div className="w-full flex lg:justify-end items-center gap-4">
          <div></div>
        </div>
      </div>
    </header>
  );
};
