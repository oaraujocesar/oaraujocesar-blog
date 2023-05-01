export const Footer = (): JSX.Element => {
  return (
    <footer className="flex justify-center items-center text-gray-500 text-sm py-3">
      Todos os direitos reservados &copy; {new Date().getFullYear()}
    </footer>
  );
};
