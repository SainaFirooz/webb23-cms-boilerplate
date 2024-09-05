import { storyblokEditable } from "@storyblok/react/rsc";

const Grid = ({ blok }) => {
  return (
    <section className="py-12 bg-white" {...storyblokEditable(blok)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blok.grid_items.map((item) => (
            <div
              key={item._uid}
              className="bg-gray-100 p-4 rounded-lg shadow-lg"
            >
              <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
                {item.grid_image && (
                  <img
                    src={item.grid_image.filename}
                    alt={item.grid_image.alt || "Image"}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.grid_title}</h3>
              <p className="text-gray-600">{item.grid_text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;
