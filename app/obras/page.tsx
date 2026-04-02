import Carousel from "@/app/components/custom/carousel";
import Contact from "@/app/components/custom/contact";

export default function Works() {
  const works = [
    {
      title: "Obra 1",
      description: "Descrição da obra 1",
      images: ["/works/1/img1.jpg", "/works/1/img2.jpg", "/works/1/img3.jpg"],
    },
    {
      title: "Obra 2",
      description: "Descrição da obra 2",
      images: ["/img3.jpg", "/img4.jpg"],
    },
    {
      title: "Obra 3",
      description: "Descrição da obra 3",
      images: ["/img5.jpg", "/img6.jpg"],
    },
    {
      title: "Obra 4",
      description: "Outra obra",
      images: ["/img7.jpg", "/img8.jpg"],
    },
    {
      title: "Obra 5",
      description: "Outra obra",
      images: ["/img7.jpg", "/img8.jpg"],
    },
    {
      title: "Obra 6",
      description: "Outra obra",
      images: ["/img7.jpg", "/img8.jpg"],
    },
  ];

  return (
    <>
      <div className="bg-gray-100 min-h-screen pt-24 px-6 pb-24">
        <h1 className="text-center text-3xl mb-10">OBRAS REALIZADAS</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <Carousel
                imagesPaths={work.images}
                imageDimensions={{ width: "100%", height: "650px" }}
                rounded
              />

              <h2 className="mt-3 font-semibold text-lg">{work.title}</h2>

              <p className="text-sm text-gray-600">{work.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Contact/>
    </>
  );
}