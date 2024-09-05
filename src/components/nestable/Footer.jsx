const Footer = ({ blok }) => {
  const { footer_text, footer_links } = blok?.content || {};

  return (
    <footer className="bg-custombg shadow-md py-8 text-gray-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            {footer_text && <p className="text-sm">{footer_text}</p>}
          </div>

          <div className="text-center md:text-left">
            <nav className="mt-4">
              <ul className="flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-6">
                {footer_links?.map((linkItem) => (
                  <li key={linkItem._uid}>
                    <a
                      href={linkItem.url}
                      className="text-gray-700 hover:text-gray-900"
                    >
                      {linkItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-8  text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Mubi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
