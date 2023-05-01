export const Header = (): JSX.Element => {
  return (
    <header className="stick top-0 bg-white flex justify-between items-center px-10">
      <h1 className="text-xl font-bold text-gray-600">
        <a href="/">César O. Araújo</a>
      </h1>
      <nav className=" items-center text-gray-500 text-sm py-[25px]">
        <ul className="flex justify-between items-center">
          <li className="mr-6">
            <a href="/">Home</a>
          </li>
          <li className="mr-6">
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
