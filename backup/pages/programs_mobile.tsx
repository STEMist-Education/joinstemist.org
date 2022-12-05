import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/SuperBanner";
import SignUpModal from "@/components/layout/SignUpModal";
import TabPage from "@/components/pages/TabPage";
import { useDashboardNav } from "@/lib/hooks/useDashboardNav";
import { useData } from "@/lib/hooks/useData";
import StudentData from "@/lib/types/StudentData";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import Image from "next/image";
import Banner from "@/components/layout/Banner";
import { useRouter, NextRouter } from "next/router";
import React from "react";
import BottomBanner from "@/components/layout/BottomBanner";

interface ProgramProps {
  user: StudentData;
}

export default function Programs(props: ProgramProps) {
  const user = useData(props.user!);
  const nav = useDashboardNav(user);
  var router = useRouter()
  try {
    if (props.user.role==undefined) {
      router.push('/auth/login')
    }
  } catch {
      try{router.push('/auth/login')}catch{}
  }

  const [isMobile, setMobile] = React.useState(false);


  React.useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setMobile(mobile);
  }, []);

  if (!isMobile) {
    try {
    //router.push('/programs')
    } catch {}
  }

  return (
    <Container
      title="Class Registration"
      noNav
      navTitle={(props.user.role+" dashboard").toUpperCase(   )}
      customNav={nav}
    >
      <PartialBanner
        title="STEM Frontiers Workshop"
        subheader="Developing STEM fields, presented by our talented instructors and five additional guest speakers!"
      />
      <style jsx>{`
        h6 {
          font-size: 22px;
          color: #9933ff;
          font-weight: bold;
        }
      `}</style>
      <div style={{backgroundColor:"#F2F2F2", height:'100%', padding:"20px", alignItems: 'center', justifyContent: 'center'}}>
        <div style={{backgroundColor:"white", width:"90%", justifyContent:"center", alignItems:"center", padding:'15px'}}>
                <h1 className="text-center font-display text-2xl font-bold mb-8">
                  When and Where
                </h1>
                <div>
                  <div style={{display:'table-cell', paddingTop:'40px', paddingBottom:'40px'}}>
                  <Image src="/Calendar.png" height='150' width='150' alt='ERROR'/>
                  </div>
                  <div style={{display:'table-cell', paddingTop:'40px'}}>
                    <h2 style={{fontWeight:'bold'}}>Date and time</h2>
                    <h4 style={{fontSize:'18px'}}>Jan 2nd to 6th, 4:00 to 5:30 PM PST</h4>
                  </div>
                </div>
                <div>
                  <div style={{display:'table-cell', paddingTop:'40px', paddingBottom:'40px'}}>
                  <Image src="/Calendar.png" height='100' width='100' alt='ERROR'/>
                  </div>
                  <div style={{display:'table-cell', paddingTop:'40px'}}>
                    <h2 style={{fontWeight:'bold'}}>Duration</h2>
                    <h4 style={{fontSize:'18px'}}>1.5hrs</h4>
                  </div>
                </div>
                <div>
                  <div style={{display:'table-cell', paddingTop:'40px', paddingBottom:'40px'}}>
                  <Image src="/Location.ico" height='100' width='100' alt='ERROR'/>
                  </div>
                  <div style={{display:'table-cell', paddingTop:'40px'}}>
                    <h2 style={{fontWeight:'bold'}}>Location</h2>
                    <h4 style={{fontSize:'18px'}}>Online (on zoom)</h4>
                  </div>
                </div>
        </div>

        <br></br><br></br>
        <div style={{backgroundColor:"white", width:"90%", justifyContent:"center", alignItems:"center", padding:'15px'}}>
                <h1 className="text-center font-display text-2xl font-bold mb-8">
                  Schedule and Speakers
                </h1>
                <p style={{textDecoration:'underline'}}>Mon 1/2</p>
                <p style={{fontSize:'12px'}}>- 4:00 to 5:00 PM: Polymer Chemistry by Steve Yang</p>
                <p style={{fontSize:'12px'}}>- 5:00 to 5:30 PM: 3D Printing by Paul Dalton</p>
                <p style={{textDecoration:'underline'}}>Tues 1/3</p>
                <p style={{fontSize:'12px'}}>- 4:00 to 4:30 PM: Climate Engineering by Kandis Leslie Abdul-Aziz</p>
                <p style={{fontSize:'12px'}}>- 4:30 to 5:30 PM: JS Frameworks by Snehil Kakani</p>
                <p style={{textDecoration:'underline'}}>Wed 1/4</p>
                <p style={{fontSize:'12px'}}>- 4:00 to 4:30 PM: [Insert Topic] by Melaine Cocco</p>
                <p style={{fontSize:'12px'}}>- 4:30 to 5:30 PM: Neurosignaling by Selena Yang</p>
                <p style={{textDecoration:'underline'}}>Thurs 1/5</p>
                <p style={{fontSize:'12px'}}>- 4:00 to 4:30 PM: Our Expanding Universe by Spencer Chang</p>
                <p style={{fontSize:'12px'}}>- 4:30 to 5:30 PM: Astrobiology by Abhiram Maniguri</p>
                <p style={{textDecoration:'underline'}}>Fri 1/6</p>
                <p style={{fontSize:'12px'}}>- 4:00 to 4:30 PM: Terpenes by Benjamin Morehouse</p>
                <p style={{fontSize:'12px'}}>- 4:30 to 5:30 PM: Hydrogen Energy by Vyaas Baskar</p>
        </div>

        <br></br><br></br>
        <div style={{backgroundColor:"white", width:"90%", justifyContent:"center", alignItems:"center", padding:'15px'}}>
        <h1 className="text-center font-display text-4xl font-bold mb-8">
          Speakers
        </h1>
        <div style={{justifyContent:"center", alignItems:"center"}}>
            <h6>Monday 1/2</h6><br></br>
            <p>4:00-5:00 PM PST</p>
            <div>
              <div>
                  <div style={{display:'table-cell', paddingTop:'20px', width:'100px'}}>
                    <Image src="/team/Steve Yang.png" height='150' width='150' alt='Steve Yang' style={{borderRadius:'50%'}}/>
                  </div>
                  <div style={{display:'table-cell', paddingTop:'40px'}}>
                  <h2 style={{fontSize:'18px', fontWeight:'bold'}}>Polymer Chem</h2>
                    <h2 style={{fontSize:'14px'}}>Steve Yang</h2>
                    <p style={{fontSize:'10px'}}>Science Bowl ‘20, ‘22, ‘23, Science Olympiad ‘19 - ‘23, OSB ‘22, ‘23</p>
                  </div>
              </div>
            </div>
            <br></br><p>5:00-5:30 PM PST</p>
            <div>
              <div>
                  <div style={{display:'table-cell', paddingTop:'20px', width:'100px'}}>
                    <Image src="/GSP/pd.jpg" height='100' width='100' alt='John Dalton' style={{borderRadius:'50%'}}/>
                  </div>
                  <div style={{display:'table-cell', paddingTop:'40px'}}>
                  <h2 style={{fontSize:'18px', fontWeight:'bold'}}>3D Printing</h2>
                    <h2 style={{fontSize:'14px'}}>Paul Dalton, PhD</h2>
                    <p style={{fontSize:'10px'}}>University of Oregon</p>
                  </div>
              </div>
            </div>

            <br></br><h6>Tuesday 1/3</h6><br></br>
            <p>4:00-5:00 PM PST</p>
            <div>
              <div>
                  <div style={{display:'table-cell', paddingTop:'20px', width:'100px'}}>
                    <Image src="/GSP/laa.jpg" height='150' width='150' alt='Kandis Abdul-Aziz' style={{borderRadius:'50%'}}/>
                  </div>
                  <div style={{display:'table-cell', paddingTop:'40px'}}>
                  <h2 style={{fontSize:'18px', fontWeight:'bold'}}>Climate Engineering</h2>
                    <h2 style={{fontSize:'14px'}}>Kandis Abdul-Aziz, PhD</h2>
                    <p style={{fontSize:'10px'}}>UC Riverside</p>
                  </div>
              </div>
            </div>
            <br></br><p>5:00-5:30 PM PST</p>
            <div>
              <div>
                  <div style={{display:'table-cell', paddingTop:'20px', width:'100px'}}>
                    <Image src="/team/Snehil Kakani.jpg" height='100' width='100' alt='Snehil Kakani' style={{borderRadius:'50%'}}/>
                  </div>
                  <div style={{display:'table-cell', paddingTop:'40px'}}>
                  <h2 style={{fontSize:'18px', fontWeight:'bold'}}>JS Frameworks</h2>
                    <h2 style={{fontSize:'14px'}}>Snehil Kakani</h2>
                    <p style={{fontSize:'10px'}}>Officer of Frontend @ LHS Webdev</p>
                  </div>
              </div>
            </div>

            <br></br><h6>Wednesday 1/4</h6><br></br>
            <p>4:00-5:00 PM PST</p>
            <div>
              <div>
                  <div style={{display:'table-cell', paddingTop:'20px', width:'100px'}}>
                    <Image src="/GSP/mc.jpg" height='150' width='150' alt='Melanie Cocco' style={{borderRadius:'50%'}}/>
                  </div>
                  <div style={{display:'table-cell', paddingTop:'40px'}}>
                  <h2 style={{fontSize:'18px', fontWeight:'bold'}}>Treating Sickle Cell Anemia</h2>
                    <h2 style={{fontSize:'14px'}}>Melanie Cocco, PhD</h2>
                    <p style={{fontSize:'10px'}}>UC Irvine</p>
                  </div>
              </div>
            </div>
            <br></br><p>5:00-5:30 PM PST</p>
            <div>
              <div>
                  <div style={{display:'table-cell', paddingTop:'20px', width:'100px'}}>
                    <Image src="/team/Selena Yang.jpg" height='100' width='100' alt='Selena Yang' style={{borderRadius:'50%'}}/>
                  </div>
                  <div style={{display:'table-cell', paddingTop:'40px'}}>
                  <h2 style={{fontSize:'18px', fontWeight:'bold'}}>Neurosignaling</h2>
                    <h2 style={{fontSize:'14px'}}>Selena Yang</h2>
                    <p style={{fontSize:'10px'}}>USABO T50 ‘22, USABO Semifinalist ‘21, ‘22</p>
                  </div>
              </div>
            </div>

            <br></br><h6>Thursday 1/5</h6><br></br>
            <p>4:00-5:00 PM PST</p>
            <div>
              <div>
                  <div style={{display:'table-cell', paddingTop:'20px', width:'100px'}}>
                    <Image src="/GSP/sc.jpg" height='150' width='150' alt='Spencer Chang' style={{borderRadius:'50%'}}/>
                  </div>
                  <div style={{display:'table-cell', paddingTop:'40px'}}>
                  <h2 style={{fontSize:'18px', fontWeight:'bold'}}>Our Expanding Universe</h2>
                    <h2 style={{fontSize:'14px'}}>Spencer Chang</h2>
                    <p style={{fontSize:'10px'}}>University of Oregon</p>
                  </div>
              </div>
            </div>
            <br></br><p>5:00-5:30 PM PST</p>
            <div>
              <div>
                  <div style={{display:'table-cell', paddingTop:'20px', width:'100px'}}>
                    <Image src="/team/Abhiram Manuguri.jpg" height='100' width='100' alt='Abhiram Manuguri' style={{borderRadius:'50%'}}/>
                  </div>
                  <div style={{display:'table-cell', paddingTop:'40px'}}>
                  <h2 style={{fontSize:'18px', fontWeight:'bold'}}>Astrobiology</h2>
                    <h2 style={{fontSize:'14px'}}>Abhiram Manuguri</h2>
                    <p style={{fontSize:'10px'}}>Research Author, Science Olympiad ‘20</p>
                  </div>
              </div>
            </div>

        <br></br><h6>Friday 1/6</h6><br></br>
            <p>4:00-5:00 PM PST</p>
            <div>
              <div>
                  <div style={{display:'table-cell', paddingTop:'20px', width:'100px'}}>
                    <Image src="/GSP/bm.jpg" height='100' width='100' alt='Benjamin Morehouse' style={{borderRadius:'50%'}}/>
                  </div>
                  <div style={{display:'table-cell', paddingTop:'40px'}}>
                  <h2 style={{fontSize:'18px', fontWeight:'bold'}}>Terpene Chemical Signals</h2>
                    <h2 style={{fontSize:'14px'}}>Benjamin Morehouse</h2>
                    <p style={{fontSize:'10px'}}>UC Irvine</p>
                  </div>
              </div>
            </div>
            <br></br><p>5:00-5:30 PM PST</p>
            <div>
              <div>
                  <div style={{display:'table-cell', paddingTop:'20px', width:'100px'}}>
                    <Image src="/team/Vyaas Baskar.jpg" height='100' width='100' alt='Vyaas Baskar' style={{borderRadius:'50%'}}/>
                  </div>
                  <div style={{display:'table-cell', paddingTop:'40px'}}>
                  <h2 style={{fontSize:'18px', fontWeight:'bold'}}>Hydrogen Energy</h2>
                    <h2 style={{fontSize:'14px'}}>Vyaas Baskar</h2>
                    <p style={{fontSize:'10px'}}>Science Olympiad ‘20-‘23 </p>
                  </div>
              </div>
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
  <BottomBanner/>
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
