"use client"

import NavBar from "@/Components/NavBar";
import Cards from "@/Components/Card/Card";
import Link from "next/link";
import Image from "next/image";
import Blurb from "@/Components/Blurb";


export default function Home() {
  return (
    <main>

      <h1 className="varela-round-regular">Female Entrepreneurship Learning Hub</h1>

      <div className="flex flex-row justify-evenly">
        <Image className="rounded-xl" src="/women.jpeg" alt="women" height={200} width={400} />
        <Image className="rounded-xl" src="/women2.png" alt="women" height={200} width={400} />
      </div>

      <div className="mt-20 mb-20">
      <Blurb
        title="About"
        text={
          "At our core, we are dedicated to empowering female entrepreneurs at every stage of their journey. We believe that when women succeed in business, they not only transform their own lives but also create positive ripple effects that uplift families, communities, and industries. Our mission is to equip women with the tools, knowledge, and support they need to turn their dreams into reality. Below you will find resources and case studies to assist you, whether your taking your first step as an entrepreneur or your hundredth.  Whether you are a seasoned entrepreneur or just beginning to take the leap, our goal is to provide you with the resources, confidence, and inspiration to succeed. We believe in the power of women, and together, we can break barriers, shatter ceilings, and create a future where female entrepreneurship is limitless."
        }
      />
      </div>

      <div className="bg-green-300">
        <div className="w-5/6 ml-auto mr-auto">
        <h2 className="varela-round-regular">Resource Hub</h2>
        <div className="flex flex-row  justify-around p-4">
          <Cards text="I Fund Women" link="https://www.ifundwomen.com" image="/ifw.png" />
          <Cards text="Ladies Who Launch" link="https://www.ladieswholaunch.org" image="/lwl.png" />
          <Cards text="We Connect" link="https://weconnectinternational.org" image="weConnect.jpeg" />
          <Cards text="Goldman Sachs" link="https://10ksbapply.com" image="gs.jpg" />
        </div>
        </div>
      </div>
      <Blurb
        title="Case Study: Sarah"
        text={
          "In 2020, Sarah, a skilled graphic designer, ventured into entrepreneurship to start her own business, targeting small business clients needing branding and design services. Despite her experience and vision, Sarah quickly encountered significant barriers that many female entrepreneurs face. First, accessing funding posed a considerable challenge. Traditional financial institutions and investors often hesitated, prioritizing candidates with extensive business networks and collateral, which left her with limited options for securing the necessary capital to launch her business. Beyond financial hurdles, Sarah struggled with a lack of mentorship and female representation in the entrepreneurial community. As a new business owner, she sought advice from experienced entrepreneurs but found it difficult to connect with women who had navigated similar journeys. Her search for mentors and networks where she could see herself reflected remained a constant roadblock in her development as a business leader. Balancing her business ambitions with her responsibilities as a mother further complicated Sarah’s journey. Without family-friendly support systems, managing her household and dedicating enough time to grow her business seemed almost impossible. Sarah often felt torn between her roles as an entrepreneur and a mother, with little guidance on balancing these competing demands. Furthermore, establishing a foothold in a competitive market without the benefit of strong networking channels limited her ability to expand. Without access to larger networks and markets, Sarah found herself confined to smaller projects that restricted her business growth. She sought to reach new clients and markets but found herself continually challenged by her lack of access to a network that could open these doors. Finally, Sarah realized that, while her skills in design were strong, she needed business training to thrive as a business owner. From financial management to strategic growth planning, the technical skills required to run her business felt like an uphill battle. These skill gaps often left her feeling underprepared, hindering her confidence and slowing her business’s growth. Sarah’s story highlights the multifaceted challenges faced by many women entrepreneurs, underscoring the need for targeted support systems to overcome funding, mentorship, work-life balance, networking, and skill development barriers."
        }
      />
     
    </main>
  );
}
