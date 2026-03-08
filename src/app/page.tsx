import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import CardSection from "@/components/CardSection/CardSection";
import RichText from "@/components/RichText/RichText";
import Form from "@/components/Form/Form";
import Footer from "@/components/Footer/Footer";
import content from "@/data/content.json";

export default function Home() {
  const serviceCards = content.services.items.map((item) => ({
    title: item.title,
    body: item.description,
    image: item.image,
  }));

  const testimonialCards = content.testimonials.items.map((item) => ({
    body: item.body,
    attribution: item.attribution,
    align: "center" as const,
  }));

  return (
    <>
      <Header />
      <main>
        <Hero />
        <RichText
          heading={content.about.heading}
          body={content.about.body}
          id="about"
          variant="alt"
        />
        <CardSection
          heading={content.services.heading}
          cards={serviceCards}
          id="services"
        />
        <Form id="contact" />
        <CardSection
          heading={content.testimonials.heading}
          cards={testimonialCards}
          id="testimonials"
          variant="alt"
        />
      </main>
      <Footer />
    </>
  );
}
