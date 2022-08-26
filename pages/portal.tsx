import Banner from "@/components/layout/Banner";
import Container from "@/components/layout/Container";
import Hero from "@/components/pages/Hero";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Button from "@/components/layout/Button";


const events = ["STEMist Hacks", "Summer Classes"];

export default function Portal() {
  return (
    <Container title="Portal">
      <div>
        <Banner image="/portal_bg.jpg" full>
          <h1 className="text-left font-light font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:mb-5 max-w-[28ch]">
            STEMist Education Student Portal
          </h1>
          <span className="block sm:mb-4 text-lg font-light text-left sm:text-3xl">
            <div>Welcome to STEMist Education, a 501(c)3 nonprofit</div><br></br>
            <div>
      <style jsx global>{`
        ptext {
          margin-bottom: 10px;
          font-size: 14px;
          color: yellow;
        }
        rtext {
          margin-bottom: 10px;
          font-size: 16px;
          color: black;
          text-align: center;
          justify: center;
        }
        body {
          margin: 0;
          padding: 0;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.8;
          color: #333;
          font-family: sans-serif;
        }
        h1 {
          font-weight: 700;
        }
        hbig {
          font-weight: 100;
          font-size: 45px;
        }
      `}</style>
      <ptext>Here you can access your class link, messages, and assignments. Students can also access our digital database to study. Make sure to bookmark this page!</ptext>
            </div>
          </span> 
        </Banner>
        <br></br>
        <center>
          <hbig>Login to access Student Portal</hbig>
        </center>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <iframe src="https://mptrivia-fe.herokuapp.com" width="100%" height="800"></iframe>
        </div>
    </Container>
  );

}
