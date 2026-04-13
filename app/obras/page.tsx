import Contact from "@/app/components/custom/contact";
import WorkCard from "@/app/components/custom/work-card";

export default function Works() {
  const works = [
    {
      title: "Obra 1",
      description: "Descrição da obra 1",
      images: ["/works/1/img1.jpg", "/works/1/img2.jpg", "/works/1/img3.jpg", "/works/1/img4.jpg"],
    },
    {
      title: "Obra 2",
      description: "Descrição da obra 2",
      images: ["/works/2/img1.jpg", "/works/2/img2.jpg", "/works/2/img3.jpg", "/works/2/img4.jpg"],
    },
    {
      title: "Obra 3",
      description: "Descrição da obra 3",
      images: ["/works/3/img1.jpg", "/works/3/img2.jpg", "/works/3/img3.jpg", "/works/3/img4.jpg"],
    },
  ];

  return (
    <>
      <div
        style={{
          background: "#f3f4f6",
          minHeight: "100vh",
          paddingTop: "96px",
          paddingBottom: "0",
        }}
      >
        {/*titulo*/}
        <div style={{ textAlign: "center", padding: "2.5rem 1.5rem 2.75rem" }}>
          <h1
            style={{
              color: "#111827",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Obras Realizadas
          </h1>
          <div
            style={{
              width: "48px",
              height: "3px",
              background: "linear-gradient(90deg, #3b82f6, #1d4ed8)",
              borderRadius: "999px",
              margin: "1rem auto 0",
            }}
          />
        </div>

        {/*grid*/}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem 5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {works.map((work, index) => (
            <WorkCard
              key={index}
              index={index}
              title={work.title}
              description={work.description}
              images={work.images}
            />
          ))}
        </div>
      </div>

      <Contact />
    </>
  );
}