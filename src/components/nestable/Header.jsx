const Header = ({ blok }) => {
  const { logo, header_links } = blok?.content || {};

  return (
    <header className="bg-custombg shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <div className="flex items-center flex-shrink-0 mr-auto">
          <a href="/">
            <img src={logo?.filename} alt="Logo" className="h-16" />
          </a>
        </div>

        <nav className="hidden md:flex space-x-6 flex-grow justify-center ml-80">
          {Array.isArray(header_links) &&
            header_links.map((linkItem) => (
              <a
                key={linkItem._uid}
                href={`/${linkItem.url.cached_url}`}
                className="text-gray-700 hover:text-gray-900"
              >
                {linkItem.text}
              </a>
            ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
