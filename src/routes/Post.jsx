import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const postMeta = {
  aladdin: {
    title: "The oppressed cannot oppress—a myth? Misogyny debunks it",
    description: "As the Filipino queer community calls for inclusivity to combat oppression, some members echo the exclusionary rhetoric of misogyny and transphobia.",
    image: "https://i0.wp.com/thelasallian.com/wp-content/uploads/2025/06/OppressedCannotOppress_NaysaQuitain_NWM.png?fit=1920%2C1080&ssl=1",
  },
  jasmine: {
    title: "Commentary: How prepared are we really for disasters?",
    description: "Investments poured into local disaster preparedness continuously miss during disasters themselves, casting doubt on the country’s readiness for them.",
    image: "https://i0.wp.com/thelasallian.com/wp-content/uploads/2025/07/Disaster-Preparedness-Estrella-NWM-min-scaled.jpg?fit=1980%2C1322&ssl=1",
  },
};

export default function Post() {
  const { slug } = useParams();
  const meta = postMeta[slug] || {
    title: "Unknown Story",
    description: "No description available.",
    image: "https://i0.wp.com/thelasallian.com/wp-content/uploads/2025/06/Eugenio_KasaysayanNgKalayaan_NWM.jpg?fit=1920%2C1080&ssl=1",
  };

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <link rel="canonical" href={`https://metatagtest.onrender.com/post/${slug}`} />

        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={`https://metatag-test.onrender.com/post/${slug}`} />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />



      </Helmet>
      <h1>{meta.title}</h1>
      <p>{meta.description}</p>
    </>
  );
}
