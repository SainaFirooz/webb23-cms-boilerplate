import { storyblokEditable } from "@storyblok/react/rsc";

const Hero = ({ blok }) => {
  return (
    <section className="bg-white py-12" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:space-x-2 items-center lg:justify-center">
        <div className="lg:w-4/12 w-full text-center lg:text-left mb-6 lg:mb-0 lg:flex lg:flex-col lg:justify-center">
          {blok?.title && (
            <h1 className="text-3xl font-semibold mb-2 lg:mb-4">
              {blok.title}
            </h1>
          )}

          {blok?.text && (
            <p className="text-base text-gray-600 mb-4 lg:mb-6 max-w-md mx-auto lg:mx-0">
              {blok.text}
            </p>
          )}

          {blok?.button_text && blok?.button_url?.cached_url && (
            <div className="flex justify-center lg:justify-start">
              <a
                href={`/${blok.button_url.cached_url}`}
                className="bg-black text-white py-2 px-4 md:px-6 rounded-full hover:bg-gray-800 transition-all inline-block"
              >
                {blok.button_text}
              </a>
            </div>
          )}
        </div>
        {blok.image && (
          <div className="lg:w-4/12 w-full flex justify-center lg:justify-end">
            <img
              src={`https:${blok.image}`}
              alt={blok.image.alt || "Hero Image"}
              className="w-full lg:w-auto h-auto max-w-md"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
