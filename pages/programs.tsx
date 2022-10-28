import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import SignUpModal from "@/components/layout/SignUpModal";
import TabPage from "@/components/pages/TabPage";
import { useDashboardNav } from "@/lib/hooks/useDashboardNav";
import { useData } from "@/lib/hooks/useData";
import StudentData from "@/lib/types/StudentData";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import Image from "next/image";
import Banner from "@/components/layout/Banner";

interface ProgramProps {
  user: StudentData;
}

export default function Programs(props: ProgramProps) {
  const user = useData(props.user!);
  const nav = useDashboardNav(user);

  return (
    <Container
      title="Class Registration"
      noNav
      navTitle={(props.user.role+" dashboard").toUpperCase(   )}
      customNav={nav}
    >
      <PartialBanner
        title="STEM Frontiers Workshop Registration"
        subheader="Monday Jan 6 to Friday Jan 10, 2023"
      />
      <div style={{backgroundColor:"#F2F2F2", height:'100%', padding:"20px", alignItems: 'center', justifyContent: 'center', display:'flex', flexDirection: 'column' }}>
        <div style={{backgroundColor:"white", width:"75%", justifyContent:"center", alignItems:"center", padding:'15px', display:'flex', flexDirection: 'column'}}>
                <h1 className="text-center font-display text-4xl font-bold mb-8">
                  Guest Speakers
                </h1>
                <div>
                  <div style={{display:'table-cell', padding:'40px'}}>
                    <Image src="/person.png" height='100' width='100' alt='bob'/>
                    <h2 style={{fontSize:'22px', fontWeight:'bold'}}>Bob</h2>
                    <p>Professional Builder</p>
                  </div>
                  <div style={{display:'table-cell', padding:'40px'}}>
                    <Image src="/person.png" height='100' width='100' alt='bob'/>
                    <h2 style={{fontSize:'22px', fontWeight:'bold'}}>Bob #2</h2>
                    <p>Professional Builder</p>
                  </div>
                  <div style={{display:'table-cell', padding:'40px'}}>
                    <Image src="/person.png" height='100' width='100' alt='bob'/>
                    <h2 style={{fontSize:'22px', fontWeight:'bold'}}>Bob the builder</h2>
                    <p>Professional Builder</p>
                  </div>
                </div>
        </div>
        <br></br><br></br>
        <div style={{backgroundColor:"white", width:"75%", justifyContent:"center", alignItems:"center", padding:'15px', display:'flex', flexDirection: 'column'}}>
        <h1 className="text-center font-display text-4xl font-bold mb-8">
          Instructors
        </h1>
        <div>
          <div style={{display:'table-cell', padding:'40px'}}>
            <Image src="/person.png" height='100' width='100' alt='bob'/>
            <h2 style={{fontSize:'22px', fontWeight:'bold'}}>Bob</h2>
            <p>Professional Civil Engineer</p>
          </div>
          <div style={{display:'table-cell', padding:'40px'}}>
            <Image src="/person.png" height='100' width='100' alt='bob'/>
            <h2 style={{fontSize:'22px', fontWeight:'bold'}}>Bob #2</h2>
            <p>Professional Civil Engineer</p>
          </div>
          <div style={{display:'table-cell', padding:'40px'}}>
            <Image src="/person.png" height='100' width='100' alt='bob'/>
            <h2 style={{fontSize:'22px', fontWeight:'bold'}}>Bob the builder</h2>
            <p>Professional Civil Engineer</p>
          </div>
        </div>
        </div>
        <br></br>
        <h2 style={{fontSize:'22px'}}>Register for the STEM Frontiers workshop where...</h2>
        <div style={{width:'75%', marginTop:'40px', marginBottom:'20px', display:'flex', flexDirection: 'column', justifyContent:"center", alignItems:"center"}}>
         <SignUpModal/>
        </div>
      {/*<h1 className="text-center font-display text-4xl font-bold mb-5">
        What We Teach
      </h1>
      <div className="">
        <TabPage />
  </div>*/}
  </div>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps<ProgramProps> = async (
  ctx
) => {
  const cookie = cookies(ctx).user! as Object;
  if (cookie === undefined) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  } else {
  }
  return {
    props: {
      user: cookie as StudentData,
    },
  };
};
