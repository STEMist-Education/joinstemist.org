import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import LinkPage from "@/components/pages/LinkPage";
import { PageLinks } from "@/lib/types";

const aboutLinks: PageLinks[] = [
  {
    name: "Who We Are",
    description: "If you want learn about our organization, go here!",
    url: "/who-we-are",
  },
  {
    name: "Our Team",
    description: "If you would like to learn about our team, go here!",
    url: "/team",
  },
  {
    name: "Contact Us",
    description: "If you would like to contact us, go here!",
    url: "/contact",
  },
];

export default function AboutUs() {
  return (
    <Container title="About Us">
      <PartialBanner title="About Us" />
      <LinkPage links={aboutLinks} columns={2} base="/about" />
    </Container>
  );
}
