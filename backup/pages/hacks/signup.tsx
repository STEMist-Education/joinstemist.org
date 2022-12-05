import SignupForm from "@/components/hacks/signup";
import Container from "@/components/layout/Container";
import { hackathonNavLinks } from "@/lib/data/navLinks";

export default function SignupPage() {
  return (
    <Container
      title="Sign Up"
      customNav={hackathonNavLinks}
      navTitle="Sign Up"
      noNav
    >
      <div className="h-screen">
        <div className="m-5 sticky h-5/6">
          <SignupForm className="mr-10 shadow-xl rounded-md border border-gray-400 " />
        </div>
      </div>
    </Container>
  );
}
