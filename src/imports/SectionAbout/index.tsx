import svgPaths from "./svg-2fu0ngp5kp";
import imgSxnNfBGfA5OVxVphe3QmKs9Ysb8Png from "./6377906a4a3186e254326b5282c98eb265ff8025.png";
import imgWhatsAppImage20241220At143509045B96251 from "./ee07f7cbea960eb061d0000fd9be93c397a9ad95.png";
import imgImagePlacehholder from "./dc670446200b784e82daa72d6315d61336053dd4.png";
import imgIdPjS93Tvror4Y9KDbe0Q6KKaQJpg from "./f576cb3f6f76393ff49778ef0ce5c8837a2725cd.png";
import imgIdPjS93Tvror4Y9KDbe0Q6KKaQJpg1 from "./5af69f86f523ff9af8906232bf527dc576371d46.png";
import imgJDaeJ9U6LnOqhLgIBihZrkhEYsJpg from "./18ff227b5bdeb96d8ccd048bde3964ce6401e2fe.png";
import imgJDaeJ9U6LnOqhLgIBihZrkhEYsJpg1 from "./3aeb5e796d3acab6e1e203824db4176b0b2525f5.png";
import imgTcmcvcy80LrTrZmZl8AlQopVoJpg from "./a4a5dab1e24738b90f03216cdace1741bbae7271.png";
import imgImage4 from "./fccb3d2eeddcf428794a3798cb7f1c9f9393e5d0.png";
import { useRef, type ReactNode } from "react";
import ScrollReveal from "../../app/ScrollReveal";
import { usePortfolioContent } from "../../app/ContentProvider";
import { useStaticTextTranslation } from "../../app/useStaticTextTranslation";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] sm:text-[42px] text-white w-full">
        <p className="leading-[50.4px]">About</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-[1040px]" data-name="Header">
      <Heading />
    </div>
  );
}

function SxnNfBGfA5OVxVphe3QmKs9Ysb8Png({ src }: { src?: string }) {
  return (
    <div className="absolute inset-0 overflow-clip rounded-[12.333px]" data-name="sxnNfBGfA5oVxVphe3QmKS9Ysb8.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12.333px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSxnNfBGfA5OVxVphe3QmKs9Ysb8Png} />
      </div>
      <div className="absolute left-[0.5px] size-[334px] top-[-0.42px]" data-name="WhatsApp Image 2024-12-20 at 14.35.09_045b9625 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[133.33%] left-0 max-w-none top-0 w-full" src={src || imgWhatsAppImage20241220At143509045B96251} />
        </div>
      </div>
    </div>
  );
}

function Image({ src }: { src?: string }) {
  return (
    <div className="aspect-square relative rounded-[12.333px] shrink-0 w-full max-w-[333px]" data-name="Image">
      <SxnNfBGfA5OVxVphe3QmKs9Ysb8Png src={src} />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[1.17%_0_1.33%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.5" preserveAspectRatio="none" viewBox="0 0 20 19.5" width="20">
        <g id="Group">
          <path d={svgPaths.p13dfd300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p32bcc200} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p36989900} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1ebaed80} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Behance() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="behance 2">
      <Group />
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      aria-label={label}
      className="bg-[rgba(6,6,6,0.67)] content-stretch flex items-center justify-center overflow-clip relative rounded-[77px] shrink-0 size-[36px] transition-colors hover:bg-[rgba(20,100,180,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

function Group1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.001px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20.0009 20" width="20.0009">
        <g id="Group">
          <path d={svgPaths.p249fefe0} fill="var(--fill-0, white)" id="Path_2520" />
        </g>
      </svg>
    </div>
  );
}

function Linkedin() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[20.001px]" data-name="linkedin 1">
      <Group1 />
    </div>
  );
}

function Frame({ socialLinks }: { socialLinks: { behance: string; linkedin: string } }) {
  return (
    <div className="absolute bottom-[9.42px] content-stretch flex gap-[5px] items-center right-[9px]">
      <SocialLink href={socialLinks.behance} label="Open Behance profile"><Behance /></SocialLink>
      <SocialLink href={socialLinks.linkedin} label="Open LinkedIn profile"><Linkedin /></SocialLink>
    </div>
  );
}

function ImagePlaceholder({ src, socialLinks }: { src?: string; socialLinks: { behance: string; linkedin: string } }) {
  return (
    <div className="relative rounded-[18px] shrink-0 w-full max-w-[336px]" data-name="Image_placeholder">
      <div className="content-stretch flex flex-col gap-[24.667px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Image src={src} />
        <Frame socialLinks={socialLinks} />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Container1({ bio }: { bio: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#cdd6db] text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[34px] whitespace-pre-wrap">{bio}</p>
      </div>
    </div>
  );
}

function Content({ name, bio }: { name: string; bio: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="content">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] sm:text-[42px] text-white w-full">
        <p className="leading-[50.4px]">{name}</p>
      </div>
      <Container1 bio={bio} />
    </div>
  );
}

function Intro({ profileImage, name, bio, socialLinks }: { profileImage?: string; name: string; bio: string; socialLinks: { behance: string; linkedin: string } }) {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[16px] items-center sm:items-start justify-center max-w-[1040px] relative shrink-0 w-full" data-name="Intro">
      <ImagePlaceholder socialLinks={socialLinks} src={profileImage} />
      <Content name={name} bio={bio} />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans_Arabic:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[33.6px]">Experience</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Heading1 />
    </div>
  );
}

function ImagePlacehholder() {
  return (
    <div className="pointer-events-none relative rounded-[12px] shrink-0 size-[64px]" data-name="Image_placehholder">
      <div aria-hidden className="absolute inset-0 rounded-[12px]">
        <div className="absolute bg-[rgba(255,255,255,0.06)] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImagePlacehholder} />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 rounded-[12px]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[26px]">SENIOR PRODUCT DESIGNER (UI UX)</p>
      </div>
    </div>
  );
}

function CompanyName() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="company_name">
      <Heading2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">|</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[6px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">Jan 2023 - Present</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[168px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">|</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[6px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">{` Full time`}</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">|</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[6px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">Kuwait</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[61px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-wrap gap-[6px] items-center relative shrink-0 w-full" data-name="container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]" dir="auto">
          Creative Financial technology
        </p>
      </div>
      <Container6 />
      <Container8 />
      <Container10 />
      <Container12 />
      <Container14 />
      <Container16 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <CompanyName />
      <Container5 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cdd6db] text-[18px] w-full">
        <ul className="list-disc">
          <li className="mb-0 ms-[27px] whitespace-pre-wrap">
            <span className="leading-[32px]">{`Led end-to-end UX/UI design for enterprise SaaS products across LegalTech and FinTech  domains.`}</span>
          </li>
          <li className="mb-0 ms-[27px] whitespace-pre-wrap">
            <span className="leading-[32px]">{`Translated complex business requirements into scalable user flows, prototypes, and design  solutions.`}</span>
          </li>
          <li className="mb-0 ms-[27px] whitespace-pre-wrap">
            <span className="leading-[32px]">{`Collaborated with developers, stakeholders, and product teams to define features, priorities,  and delivery roadmap.`}</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[32px]">{` Managed product delivery process using Jira by creating user stories and acceptance criteria.`}</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[32px]">Designed legal management systems serving law firms and Kuwait Bar Association workflows.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <Container18 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full min-w-0" data-name="Container">
      <Container4 />
      <Description />
    </div>
  );
}

function CompanyExperiance() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Company_experiance_3">
      <ImagePlacehholder />
      <Container3 />
    </div>
  );
}

function IdPjS93Tvror4Y9KDbe0Q6KKaQJpg() {
  return (
    <div className="absolute inset-0 rounded-[12px]" data-name="idPjS93TVROR4y9kDbe0Q6kKaQ.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgIdPjS93Tvror4Y9KDbe0Q6KKaQJpg} />
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] relative rounded-[12px] shrink-0 size-[64px]" data-name="Image">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IdPjS93Tvror4Y9KDbe0Q6KKaQJpg />
      <div className="absolute border border-[rgba(13,12,34,0.07)] border-solid inset-0 rounded-[12px]" data-name="Border" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[26px]">SENIOR PRODUCT DESIGNER (UI UX)</p>
      </div>
    </div>
  );
}

function CompanyName1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="company_name">
      <Heading3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">|</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[6px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">Fep 2023 - Present</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[167px]" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">|</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[6px]" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">{` Part time`}</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">|</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[6px]" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px] whitespace-pre">{`Saudi  Arabia`}</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[121px]" data-name="Container">
      <Container33 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-wrap gap-[6px] items-center relative shrink-0 w-full" data-name="container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]" dir="auto">
          ITQAN Gulf Arab Financial Technology
        </p>
      </div>
      <Container22 />
      <Container24 />
      <Container26 />
      <Container28 />
      <Container30 />
      <Container32 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <CompanyName1 />
      <Container21 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cdd6db] text-[18px] w-full">
        <ul className="list-disc whitespace-pre-wrap">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[32px]">{`Led end-to-end design of enterprise SaaS products for finance, accounting, and facility  management domains.`}</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[32px]">{`Conducted requirement discovery sessions with stakeholders and domain experts to transform  complex workflows into intuitive digital solutions.`}</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[32px]">{`Designed scalable dashboards for accounting operations, financial tracking, and property  management.`}</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[32px]">{`Collaborated with accounting specialists to understand Saudi market requirements and  translate regulations/business logic into product features.`}</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[32px]">{`Created interactive prototypes and design documentation to improve alignment between  business and engineering teams.`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <Container34 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full min-w-0" data-name="Container">
      <Container20 />
      <Description1 />
    </div>
  );
}

function CompanyExperiance1() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Company_experiance_3">
      <Image1 />
      <Container19 />
    </div>
  );
}

function IdPjS93Tvror4Y9KDbe0Q6KKaQJpg1() {
  return (
    <div className="absolute inset-0 rounded-[12px]" data-name="idPjS93TVROR4y9kDbe0Q6kKaQ.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgIdPjS93Tvror4Y9KDbe0Q6KKaQJpg1} />
    </div>
  );
}

function Image2() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[64px]" data-name="Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[rgba(255,255,255,0.06)] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImagePlacehholder} />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IdPjS93Tvror4Y9KDbe0Q6KKaQJpg1 />
      <div className="absolute border border-[rgba(13,12,34,0.07)] border-solid inset-0 rounded-[12px]" data-name="Border" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[26px]">PRODUCT DESIGNER (UI UX)</p>
      </div>
    </div>
  );
}

function CompanyName2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="company_name">
      <Heading4 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">|</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[6px]" data-name="Container">
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">Sep 2022 - Jan 2023</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[182px]" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">|</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[6px]" data-name="Container">
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">{` Part time`}</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="Container">
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">|</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[6px]" data-name="Container">
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">Egypt</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[51px]" data-name="Container">
      <Container49 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-wrap gap-[6px] items-center relative shrink-0 w-full" data-name="container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]" dir="auto">
          Cutting Edge
        </p>
      </div>
      <Container38 />
      <Container40 />
      <Container42 />
      <Container44 />
      <Container46 />
      <Container48 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <CompanyName2 />
      <Container37 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#cdd6db] text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <ul className="list-disc">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[32px]">Owned the full product design lifecycle from discovery to developer handoff.</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[32px]">Conducted competitor analysis and translated insights into product improvements.</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[32px]">Created user flows, wireframes, prototypes, and high-fidelity interfaces.</span>
          </li>
          <li className="mb-0 ms-[27px] whitespace-pre-wrap">
            <span className="leading-[32px]">{`Collaborated with developers through Azure DevOps to track implementation and ensure  design quality.`}</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[32px]">Reviewed production builds and performed UX/UI quality assurance before release.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <Container50 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full min-w-0" data-name="Container">
      <Container36 />
      <Description2 />
    </div>
  );
}

function CompanyExperiance2() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Company_experiance_3">
      <Image2 />
      <Container35 />
    </div>
  );
}

function IdPjS93Tvror4Y9KDbe0Q6KKaQJpg2() {
  return (
    <div className="absolute inset-0 overflow-clip rounded-[12px]" data-name="idPjS93TVROR4y9kDbe0Q6kKaQ.jpg">
      <div className="absolute left-[-80px] size-[225px] top-[-80.75px]" data-name="image 5" />
    </div>
  );
}

function PersonalLogo() {
  return (
    <div className="h-[39.368px] relative shrink-0 w-[44px]" data-name="personal logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="39.3684" preserveAspectRatio="none" viewBox="0 0 44 39.3684" width="44">
        <g clipPath="url(#clip0_8_2506)" id="personal logo">
          <path d={svgPaths.p21954e00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p104f8900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pbfbca00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p163e3f00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3618a880} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1cb9dbc0} fill="var(--fill-0, white)" id="Vector_6" />
          <g id="Group">
            <path d={svgPaths.p4d12000} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p11581800} fill="var(--fill-0, white)" id="Vector_8" />
            <path d={svgPaths.p21604900} fill="var(--fill-0, white)" id="Vector_9" />
            <path d={svgPaths.p417040} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p3a177f80} fill="var(--fill-0, white)" id="Vector_11" />
            <path d={svgPaths.p1d67adf0} fill="var(--fill-0, white)" id="Vector_12" />
            <path d={svgPaths.p17d9100} fill="var(--fill-0, white)" id="Vector_13" />
            <path d={svgPaths.p2c3c5d80} fill="var(--fill-0, white)" id="Vector_14" />
            <path d={svgPaths.p3a0a7300} fill="var(--fill-0, white)" id="Vector_15" />
            <path d={svgPaths.p3bf2be00} fill="var(--fill-0, white)" id="Vector_16" />
            <path d={svgPaths.p1b4a6e00} fill="var(--fill-0, white)" id="Vector_17" />
            <path d={svgPaths.p672c080} fill="var(--fill-0, white)" id="Vector_18" />
            <path d={svgPaths.p28798e80} fill="var(--fill-0, white)" id="Vector_19" />
            <path d={svgPaths.p29ec4730} fill="var(--fill-0, white)" id="Vector_20" />
            <path d={svgPaths.p189fdb00} fill="var(--fill-0, white)" id="Vector_21" />
          </g>
          <path d={svgPaths.p3d61f400} fill="var(--fill-0, #3876FC)" id="Vector_22" />
        </g>
        <defs>
          <clipPath id="clip0_8_2506">
            <rect fill="white" height="39.3684" width="44" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute content-stretch flex gap-[5.029px] items-center left-[10px] top-[12.09px]" data-name="logo">
      <PersonalLogo />
    </div>
  );
}

function Image3() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] relative rounded-[12px] shrink-0 size-[64px]" data-name="Image">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IdPjS93Tvror4Y9KDbe0Q6KKaQJpg2 />
      <div className="absolute border border-[rgba(13,12,34,0.07)] border-solid inset-0 rounded-[12px]" data-name="Border" />
      <Logo />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[26px]">PRODUCT DESIGNER (UI UX)</p>
      </div>
    </div>
  );
}

function CompanyName3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="company_name">
      <Heading5 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">|</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[6px]" data-name="Container">
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">Jan 2021 - Sep 2022</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[177px]" data-name="Container">
      <Container57 />
    </div>
  );
}

function Container59() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Container" />;
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="Container">
      <Container59 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-wrap gap-[6px] items-center relative shrink-0 w-full" data-name="container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]" dir="auto">
          Freelance
        </p>
      </div>
      <Container54 />
      <Container56 />
      <Container58 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <CompanyName3 />
      <Container53 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#cdd6db] text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <ul className="list-disc">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[32px]">Delivered end-to-end UX/UI solutions for clients across multiple industries.</span>
          </li>
          <li className="mb-0 ms-[27px] whitespace-pre-wrap">
            <span className="leading-[32px]">{`Conducted user research and usability testing to identify pain points and improve product  experiences.`}</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[32px]">Created information architecture, user flows, prototypes, and scalable UI systems.</span>
          </li>
          <li className="mb-0 ms-[27px]">
            <span className="leading-[32px]">Collaborated with development teams to ensure accurate implementation.</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[32px]">Managed multiple client projects from discovery to launch.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Description3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <Container60 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full min-w-0" data-name="Container">
      <Container52 />
      <Description3 />
    </div>
  );
}

function CompanyExperiance3() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Company_experiance_3">
      <Image3 />
      <Container51 />
    </div>
  );
}

function IdPjS93Tvror4Y9KDbe0Q6KKaQJpg3() {
  return (
    <div className="absolute inset-0 overflow-clip rounded-[12px]" data-name="idPjS93TVROR4y9kDbe0Q6kKaQ.jpg">
      <div className="absolute left-[-80px] size-[225px] top-[-80.75px]" data-name="image 5" />
    </div>
  );
}

function PersonalLogo1() {
  return (
    <div className="h-[39.368px] relative shrink-0 w-[44px]" data-name="personal logo">
      <svg className="absolute block inset-0 size-full" fill="none" height="39.3684" preserveAspectRatio="none" viewBox="0 0 44 39.3684" width="44">
        <g clipPath="url(#clip0_8_2506)" id="personal logo">
          <path d={svgPaths.p21954e00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p104f8900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pbfbca00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p163e3f00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3618a880} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1cb9dbc0} fill="var(--fill-0, white)" id="Vector_6" />
          <g id="Group">
            <path d={svgPaths.p4d12000} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.p11581800} fill="var(--fill-0, white)" id="Vector_8" />
            <path d={svgPaths.p21604900} fill="var(--fill-0, white)" id="Vector_9" />
            <path d={svgPaths.p417040} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p3a177f80} fill="var(--fill-0, white)" id="Vector_11" />
            <path d={svgPaths.p1d67adf0} fill="var(--fill-0, white)" id="Vector_12" />
            <path d={svgPaths.p17d9100} fill="var(--fill-0, white)" id="Vector_13" />
            <path d={svgPaths.p2c3c5d80} fill="var(--fill-0, white)" id="Vector_14" />
            <path d={svgPaths.p3a0a7300} fill="var(--fill-0, white)" id="Vector_15" />
            <path d={svgPaths.p3bf2be00} fill="var(--fill-0, white)" id="Vector_16" />
            <path d={svgPaths.p1b4a6e00} fill="var(--fill-0, white)" id="Vector_17" />
            <path d={svgPaths.p672c080} fill="var(--fill-0, white)" id="Vector_18" />
            <path d={svgPaths.p28798e80} fill="var(--fill-0, white)" id="Vector_19" />
            <path d={svgPaths.p29ec4730} fill="var(--fill-0, white)" id="Vector_20" />
            <path d={svgPaths.p189fdb00} fill="var(--fill-0, white)" id="Vector_21" />
          </g>
          <path d={svgPaths.p3d61f400} fill="var(--fill-0, #3876FC)" id="Vector_22" />
        </g>
        <defs>
          <clipPath id="clip0_8_2506">
            <rect fill="white" height="39.3684" width="44" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute content-stretch flex gap-[5.029px] items-center left-[10px] top-[12.09px]" data-name="logo">
      <PersonalLogo1 />
    </div>
  );
}

function Image4() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] relative rounded-[12px] shrink-0 size-[64px]" data-name="Image">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <IdPjS93Tvror4Y9KDbe0Q6KKaQJpg3 />
      <div className="absolute border border-[rgba(13,12,34,0.07)] border-solid inset-0 rounded-[12px]" data-name="Border" />
      <Logo1 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans_Arabic:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[26px]">Graphic Designer</p>
      </div>
    </div>
  );
}

function CompanyName4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="company_name">
      <Heading6 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">|</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[6px]" data-name="Container">
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]">July 2018 - Jan 2021</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[175px]" data-name="Container">
      <Container67 />
    </div>
  );
}

function Container69() {
  return <div className="h-[27px] relative shrink-0 w-full" data-name="Container" />;
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="Container">
      <Container69 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-wrap gap-[6px] items-center relative shrink-0 w-full" data-name="container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a6b2b9] text-[18px] whitespace-nowrap">
        <p className="leading-[27px]" dir="auto">
          Freelance
        </p>
      </div>
      <Container64 />
      <Container66 />
      <Container68 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <CompanyName4 />
      <Container63 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#cdd6db] text-[18px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <ul className="list-disc">
          <li className="mb-0 ms-[27px]">
            <span className="leading-[32px]">Designed visual identities and marketing assets for digital and print platforms.</span>
          </li>
          <li className="ms-[27px]">
            <span className="leading-[32px]">Developed strong foundations in typography, visual hierarchy, and brand consistency.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Description4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <Container70 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full min-w-0" data-name="Container">
      <Container62 />
      <Description4 />
    </div>
  );
}

function CompanyExperiance4() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Company_experiance_3">
      <Image4 />
      <Container61 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="CONTAINER" data-reveal-stagger>
      <CompanyExperiance />
      <CompanyExperiance1 />
      <CompanyExperiance2 />
      <CompanyExperiance3 />
      <CompanyExperiance4 />
    </div>
  );
}

function Experience() {
  return (
    <div className="content-stretch flex flex-col gap-[32.01px] items-center justify-center max-w-[1040px] min-w-0 relative w-full" data-name="Experience">
      <Header1 />
      <Container2 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[33.6px]">Licences and Certifications</p>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Heading7 />
    </div>
  );
}

function JDaeJ9U6LnOqhLgIBihZrkhEYsJpg() {
  return (
    <div className="absolute inset-0 rounded-[12px]" data-name="jDaeJ9U6LnOQHLgIBihZrkhEYs.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgJDaeJ9U6LnOqhLgIBihZrkhEYsJpg} />
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[64px]" data-name="Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[rgba(255,255,255,0.06)] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImagePlacehholder} />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <JDaeJ9U6LnOqhLgIBihZrkhEYsJpg />
      <div className="absolute border border-[rgba(13,12,34,0.07)] border-solid inset-0 rounded-[12px]" data-name="Border" />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[26px]">User Experience Design Certificate</p>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Heading8 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#786f77] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[27px]">Google</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[57px]" data-name="Container">
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#786f77] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.6px]">•</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[7px]" data-name="Container">
      <Container77 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#786f77] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[27px]">See Credential</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[118px]" data-name="Container">
      <Container80 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container79 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-wrap gap-[6px] items-center relative shrink-0 w-full" data-name="container">
      <Container74 />
      <Container76 />
      <Container78 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col gap-[3.71px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Header3 />
      <Container73 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full min-w-0" data-name="Container">
      <Container72 />
    </div>
  );
}

function Variant() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Variant 1">
      <Image5 />
      <Container71 />
    </div>
  );
}

function Company() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Company">
      <Variant />
    </div>
  );
}

function JDaeJ9U6LnOqhLgIBihZrkhEYsJpg1() {
  return (
    <div className="absolute inset-[3px] rounded-[10.875px]" data-name="jDaeJ9U6LnOQHLgIBihZrkhEYs.jpg">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10.875px]">
        <div className="absolute bg-white inset-0 rounded-[10.875px]" />
        <img alt="" className="absolute max-w-none object-contain rounded-[10.875px] size-full" src={imgJDaeJ9U6LnOqhLgIBihZrkhEYsJpg1} />
      </div>
    </div>
  );
}

function Image6() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] relative rounded-[12px] shrink-0 size-[64px]" data-name="Image">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <JDaeJ9U6LnOqhLgIBihZrkhEYsJpg1 />
      <div className="absolute border border-[rgba(13,12,34,0.07)] border-solid inset-0 rounded-[12px]" data-name="Border" />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[26px]">User Research Certificate</p>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Heading9 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#786f77] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[27px]">Edraak</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[57px]" data-name="Container">
      <Container85 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#786f77] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.6px]">•</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[7px]" data-name="Container">
      <Container87 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#786f77] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[27px]">See Credential</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link1 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[118px]" data-name="Container">
      <Container90 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container89 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-wrap gap-[6px] items-center relative shrink-0 w-full" data-name="container">
      <Container84 />
      <Container86 />
      <Container88 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col gap-[3.71px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Header4 />
      <Container83 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full min-w-0" data-name="Container">
      <Container82 />
    </div>
  );
}

function Variant1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Variant 1">
      <Image6 />
      <Container81 />
    </div>
  );
}

function Company1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Company">
      <Variant1 />
    </div>
  );
}

function JDaeJ9U6LnOqhLgIBihZrkhEYsJpg2() {
  return (
    <div className="absolute inset-[3px] rounded-[10.875px]" data-name="jDaeJ9U6LnOQHLgIBihZrkhEYs.jpg">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[10.875px]">
        <div className="absolute bg-white inset-0 rounded-[10.875px]" />
        <img alt="" className="absolute max-w-none object-contain rounded-[10.875px] size-full" src={imgJDaeJ9U6LnOqhLgIBihZrkhEYsJpg1} />
      </div>
    </div>
  );
}

function Image7() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[64px]" data-name="Image">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[rgba(255,255,255,0.06)] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgImagePlacehholder} />
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <JDaeJ9U6LnOqhLgIBihZrkhEYsJpg2 />
      <div className="absolute border border-[rgba(13,12,34,0.07)] border-solid inset-0 rounded-[12px]" data-name="Border" />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[26px]">User Experience Design Certificate</p>
      </div>
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Heading10 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#786f77] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[27px]">Edraak</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[57px]" data-name="Container">
      <Container95 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.59px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#786f77] text-[16px] whitespace-nowrap">
        <p className="leading-[25.6px]">•</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[9px]" data-name="Container">
      <Container97 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#786f77] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[27px]">See Credential</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link2 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[118px]" data-name="Container">
      <Container100 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container99 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-wrap gap-[6px] items-center relative shrink-0 w-full" data-name="container">
      <Container94 />
      <Container96 />
      <Container98 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col gap-[3.71px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Header5 />
      <Container93 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full min-w-0" data-name="Container">
      <Container92 />
    </div>
  );
}

function Variant2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Variant 1">
      <Image7 />
      <Container91 />
    </div>
  );
}

function Company2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Company">
      <Variant2 />
    </div>
  );
}

function Licences() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center max-w-[1040px] min-w-0 relative w-full" data-name="Licences" data-reveal-stagger>
      <Header2 />
      <Company />
      <Company1 />
      <Company2 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[33.6px]">Education</p>
      </div>
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Heading11 />
    </div>
  );
}

function Tcmcvcy80LrTrZmZl8AlQopVoJpg() {
  return (
    <div className="absolute inset-0 overflow-clip rounded-[12px]" data-name="Tcmcvcy80LRTrZMZl8alQOPVo.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTcmcvcy80LrTrZmZl8AlQopVoJpg} />
      </div>
      <div className="absolute h-[83px] left-0 top-[-7.75px] w-[64px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Image8() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[64px]" data-name="Image">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Tcmcvcy80LrTrZmZl8AlQopVoJpg />
      <div className="absolute border border-[rgba(13,12,34,0.07)] border-solid inset-0 rounded-[12px]" data-name="Border" />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[26px]" dir="auto">
          Qena University
        </p>
      </div>
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Heading12 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b8b8b8] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[27px]">Engineering Bachelor Degree.</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[239px]" data-name="Container">
      <Container105 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="container">
      <Container104 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Header7 />
      <Container103 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full min-w-0" data-name="Container">
      <Container102 />
    </div>
  );
}

function Variant3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Variant 1">
      <Image8 />
      <Container101 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col h-px items-start justify-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[rgba(48,48,48,0.7)] flex-[1_0_0] min-h-px relative w-full" data-name="Variant 1" />
    </div>
  );
}

function Company3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Company">
      <Variant3 />
      <Container106 />
    </div>
  );
}

function Education() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center max-w-[1040px] min-w-0 relative w-full" data-name="Education">
      <Header6 />
      <Company3 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[33.6px]">Skills</p>
      </div>
    </div>
  );
}

function Header8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header">
      <Heading13 />
    </div>
  );
}

function Rectangle55X5F() {
  return (
    <div className="absolute inset-[0_15.24%]" data-name="Rectangle_55_x5F_2">
      <svg className="absolute block inset-0 size-full" fill="none" height="42" preserveAspectRatio="none" viewBox="0 0 29.2005 42" width="29.2005">
        <g id="Rectangle_55_x5F_2">
          <path d={svgPaths.p100aa100} fill="var(--fill-0, #BFE7FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Rectangle55X5F1() {
  return (
    <div className="absolute inset-[62.58%_53.06%_37.42%_33.87%]" data-name="Rectangle_55_x5F_4">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Rectangle_55_x5F_4">
          <path d={svgPaths.p681f040} fill="var(--fill-0, #BFE7FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[0_15.24%]" data-name="Group">
      <Rectangle55X5F />
      <Rectangle55X5F1 />
    </div>
  );
}

function Container107() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5 lg:gap-y-[8px] relative shrink-0 w-full" data-name="Container" data-reveal-stagger>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[16px] h-[200px] items-center py-[51px] relative rounded-[12px] shrink-0 w-[201.6px]" data-name="Skill card">
        <div aria-hidden className="absolute border border-[#c9dfff] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="overflow-clip relative shrink-0 size-[42px]" data-name="supplier-alt 1">
          <svg className="absolute block inset-0 size-full" fill="none" height="42" preserveAspectRatio="none" viewBox="0 0 42 42" width="42">
            <path d={svgPaths.p2f6bce00} fill="var(--fill-0, #BFE7FF)" id="Vector" />
          </svg>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[27px]">Product Design</p>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[16px] h-[200px] items-center py-[51px] relative rounded-[12px] shrink-0 w-[201.6px]" data-name="Skill card">
        <div aria-hidden className="absolute border border-[#c9dfff] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="overflow-clip relative shrink-0 size-[42px]" data-name="users-alt 1">
          <svg className="absolute block inset-0 size-full" fill="none" height="42.0003" preserveAspectRatio="none" viewBox="0 0 41.9985 42.0003" width="41.9985">
            <path d={svgPaths.p26c64800} fill="var(--fill-0, #BFE7FF)" id="Vector" />
          </svg>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[18px] text-center text-white w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[27px]">User Experience Design</p>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[16px] h-[200px] items-center py-[51px] relative rounded-[12px] shrink-0 w-[201.6px]" data-name="Skill card">
        <div aria-hidden className="absolute border border-[#c9dfff] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="overflow-clip relative shrink-0 size-[42px]" data-name="icon">
          <div className="absolute inset-[0.01%_0_0_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="41.9939" preserveAspectRatio="none" viewBox="0 0 42 41.9939" width="42">
              <path d={svgPaths.p20902400} fill="var(--fill-0, #BFE7FF)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[18px] text-center text-white w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[27px]">User Interface Design</p>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[16px] h-[200px] items-center py-[51px] relative rounded-[12px] shrink-0 w-[201.6px]" data-name="Skill card">
        <div aria-hidden className="absolute border border-[#c9dfff] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="overflow-clip relative shrink-0 size-[42px]" data-name="system-cloud 1">
          <div className="absolute inset-[0.01%_0_0_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="41.9966" preserveAspectRatio="none" viewBox="0 0 42 41.9966" width="42">
              <path d={svgPaths.pac24e00} fill="var(--fill-0, #BFE7FF)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[27px]">Design Systems</p>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[16px] h-[200px] items-center py-[51px] relative rounded-[12px] shrink-0 w-[201.6px]" data-name="Skill card">
        <div aria-hidden className="absolute border border-[#c9dfff] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="overflow-clip relative shrink-0 size-[42px]" data-name="ai-technology 1">
          <div className="absolute inset-[-0.04%_4.09%_0_4.09%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="42.0169" preserveAspectRatio="none" viewBox="0 0 38.5614 42.0169" width="38.5614">
              <path d={svgPaths.p27e0ea00} fill="var(--fill-0, #BFE7FF)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[27px]">AI, Developments</p>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[16px] h-[200px] items-center py-[51px] relative rounded-[12px] shrink-0 w-[201.6px]" data-name="Skill card">
        <div aria-hidden className="absolute border border-[#c9dfff] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="overflow-clip relative shrink-0 size-[42px]" data-name="search-alt 1">
          <svg className="absolute block inset-0 size-full" fill="none" height="42" preserveAspectRatio="none" viewBox="0 0 41.9996 42" width="41.9996">
            <path d={svgPaths.p9bc4d00} fill="var(--fill-0, #BFE7FF)" id="Vector" />
          </svg>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[27px]">User Research</p>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[16px] h-[200px] items-center py-[51px] relative rounded-[12px] shrink-0 w-[201.6px]" data-name="Skill card">
        <div aria-hidden className="absolute border border-[#c9dfff] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="overflow-clip relative shrink-0 size-[42px]" data-name="blueprint 1">
          <svg className="absolute block inset-0 size-full" fill="none" height="42" preserveAspectRatio="none" viewBox="0 0 42 42" width="42">
            <path d={svgPaths.p12d63400} fill="var(--fill-0, #BFE7FF)" id="Vector" />
          </svg>
          <div className="absolute inset-[29.17%_12.5%_12.5%_33.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="24.5" preserveAspectRatio="none" viewBox="0 0 22.75 24.5" width="22.75">
              <path d={svgPaths.p3b385d80} fill="var(--fill-0, #BFE7FF)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[27px]">Prototyping</p>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[16px] h-[200px] items-center py-[51px] relative rounded-[12px] shrink-0 w-[201.6px]" data-name="Skill card">
        <div aria-hidden className="absolute border border-[#c9dfff] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="overflow-clip relative shrink-0 size-[42px]" data-name="web-test 1">
          <div className="absolute inset-[4.17%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="38.5" preserveAspectRatio="none" viewBox="0 0 42 38.5" width="42">
              <path d={svgPaths.p3a054300} fill="var(--fill-0, #BFE7FF)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[27px]">Usability Testing</p>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[16px] h-[200px] items-center py-[51px] relative rounded-[12px] shrink-0 w-[201.6px]" data-name="Skill card">
        <div aria-hidden className="absolute border border-[#c9dfff] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="overflow-clip relative shrink-0 size-[42px]" data-name="figma 2">
          <Group3 />
        </div>
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[27px]">Figma</p>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[16px] h-[200px] items-center py-[51px] relative rounded-[12px] shrink-0 w-[201.6px]" data-name="Skill card">
        <div aria-hidden className="absolute border border-[#c9dfff] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="overflow-clip relative shrink-0 size-[42px]" data-name="user-gear 1">
          <div className="absolute inset-[0_1.47%_0_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="42" preserveAspectRatio="none" viewBox="0 0 41.3823 42" width="41.3823">
              <path d={svgPaths.p22391800} fill="var(--fill-0, #BFE7FF)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[27px]">Product Management</p>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="content-stretch flex flex-col gap-[32.01px] items-center justify-center max-w-[1040px] overflow-clip relative shrink-0 w-full" data-name="Skills">
      <Header8 />
      <Container107 />
    </div>
  );
}

function ExperienceHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Experience → Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[33.6px]">Languages</p>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[26px]">Arabic</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[59px]" data-name="Container">
      <Heading14 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#cdd6db] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[27px]">Native or bilingual proficiency</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[239px]" data-name="Container">
      <Container112 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0" data-name="Container">
      <Container110 />
      <Container111 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[26px]">English</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[67px]" data-name="Container">
      <Heading15 />
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#cdd6db] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[27px]">Professional working proficiency</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[262px]" data-name="Container">
      <Container116 />
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center overflow-clip relative shrink-0" data-name="Container">
      <Container114 />
      <Container115 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[32px] sm:gap-[64px] items-start sm:items-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container109 />
      <Container113 />
    </div>
  );
}

function SectionLanguages() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1040px] relative shrink-0 w-full" data-name="Section - Languages">
      <ExperienceHeading />
      <Container108 />
    </div>
  );
}

function Container({ about }: { about: { profileImage: string; name: string; bio: string; socialLinks: { behance: string; linkedin: string } } }) {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center relative shrink-0 w-full max-w-[1040px]" data-name="Container">
      <ScrollReveal className="w-full"><Intro profileImage={about.profileImage} name={about.name} bio={about.bio} socialLinks={about.socialLinks} /></ScrollReveal>
      <ScrollReveal className="w-full"><Experience /></ScrollReveal>
      <ScrollReveal className="w-full"><Licences /></ScrollReveal>
      <ScrollReveal className="w-full"><Education /></ScrollReveal>
      <ScrollReveal className="w-full"><Skills /></ScrollReveal>
      <ScrollReveal className="w-full"><SectionLanguages /></ScrollReveal>
    </div>
  );
}

export default function SectionAbout() {
  const { about } = usePortfolioContent();
  const sectionRef = useRef<HTMLDivElement>(null);
  useStaticTextTranslation(sectionRef);
  return (
    <div ref={sectionRef} className="content-stretch flex flex-col gap-[40px] items-center justify-center px-5 sm:px-8 lg:px-10 xl:px-0 py-[40px] relative w-full" data-name="Section - About">
      <ScrollReveal className="w-full max-w-[1040px]"><Header /></ScrollReveal>
      <Container about={about} />
      <style>{`
        [data-name='Section - About'] [data-name='Skill card'] {
          width: 100%;
          min-width: 0;
          height: clamp(124px, 16vw, 200px);
          padding: clamp(1rem, 4vw, 3.18rem) 0.5rem;
        }

        [data-name='Section - About'] [data-name='Skill card'] .whitespace-nowrap {
          white-space: normal;
        }

        [data-name='Skills'] > [data-name='Container'] {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
          height: auto;
          min-width: 0;
          overflow: visible;
        }

        [data-name='Skills'] [data-name='Skill card'] {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
          min-width: 0;
          height: 8.75rem;
          padding: 1.15rem;
          gap: 0.75rem;
          border: 1px solid rgba(139, 191, 255, 0.24);
          background: linear-gradient(145deg, rgba(17, 48, 80, 0.58), rgba(6, 22, 38, 0.7));
          box-shadow: inset 0 1px 0 rgba(217, 237, 255, 0.06), 0 12px 28px rgba(0, 0, 0, 0.13);
          transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1), border-color 220ms ease, background 220ms ease, box-shadow 220ms ease;
        }

        [data-name='Skills'] [data-name='Skill card']:hover {
          transform: translateY(-4px);
          border-color: rgba(122, 190, 255, 0.68);
          background: linear-gradient(145deg, rgba(22, 72, 119, 0.65), rgba(7, 31, 55, 0.78));
          box-shadow: inset 0 1px 0 rgba(217, 237, 255, 0.08), 0 18px 34px rgba(0, 0, 0, 0.18);
        }

        [data-name='Skills'] [data-name='Skill card'] > :first-child {
          display: grid;
          place-items: center;
          width: 2.6rem;
          height: 2.6rem;
          padding: 0.48rem;
          border: 1px solid rgba(139, 191, 255, 0.2);
          border-radius: 0.75rem;
          background: rgba(8, 28, 48, 0.64);
        }

        [data-name='Skills'] [data-name='Skill card'] > :last-child {
          margin-top: auto;
          text-align: left;
        }

        [data-name='Skills'] [data-name='Skill card'] [data-name] > p,
        [data-name='Skills'] [data-name='Skill card'] p {
          max-width: 100%;
          font-size: 0.8125rem;
          line-height: 1.2rem;
        }

        @media (min-width: 640px) {
          [data-name='Skills'] > [data-name='Container'] {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
          }

          [data-name='Skills'] [data-name='Skill card'] {
            height: 9.25rem;
            padding: 1.35rem;
          }

          [data-name='Skills'] [data-name='Skill card'] [data-name] > p,
          [data-name='Skills'] [data-name='Skill card'] p {
            font-size: 0.9375rem;
            line-height: 1.3rem;
          }
        }

        @media (min-width: 1024px) {
          [data-name='Skills'] > [data-name='Container'] {
            grid-template-columns: repeat(5, minmax(0, 1fr));
          }

          [data-name='Skills'] [data-name='Skill card'] {
            height: 9.75rem;
          }
        }

        [dir='rtl'] [data-name='Skills'] [data-name='Skill card'] > :last-child {
          text-align: right;
        }

        @media (prefers-reduced-motion: reduce) {
          [data-name='Skills'] [data-name='Skill card'] {
            transition: none;
          }
        }

        [data-name='Experience'] [data-name='Company_experiance_3'] {
          min-width: 0;
        }

        [data-name='Experience'] [data-name='Company_experiance_3'] > [data-name='Container'] {
          flex: 1 1 0%;
          width: auto;
          min-width: 0;
        }

        [data-name='Experience'] [data-name='container'] {
          align-items: flex-start;
        }

        [data-name='Experience'] [data-name='container'] .whitespace-nowrap {
          white-space: normal;
        }

        [data-name='Experience'] [data-name='Description'],
        [data-name='Experience'] [data-name='Description'] *,
        [data-name='Experience'] [data-name='CONTAINER'] {
          min-width: 0;
          max-width: 100%;
          overflow-wrap: anywhere;
        }

        [data-name='Experience'] .whitespace-pre-wrap {
          white-space: normal;
        }

        [data-name='Experience'] ul {
          margin: 0;
          padding-inline-start: 1.25rem;
        }

        [data-name='Experience'] li {
          margin-inline-start: 0 !important;
        }

        @media (max-width: 767px) {
          [data-name='Experience'] [data-name='Company_experiance_3'] {
            flex-direction: column;
            gap: 1rem;
          }
        }

        [data-name='Licences'] [data-name='Variant 1'] {
          min-width: 0;
        }

        [data-name='Licences'] [data-name='Variant 1'] > [data-name='Container'] {
          flex: 1 1 0%;
          width: auto;
          min-width: 0;
        }

        [data-name='Licences'] .whitespace-nowrap {
          white-space: normal;
        }

        [data-name='Licences'] [data-name='container'] > [data-name='Container'] {
          flex: 0 0 auto;
          width: auto;
          min-width: 0;
        }

        [data-name='Licences'] [data-name='container'] .whitespace-nowrap {
          white-space: nowrap;
          overflow-wrap: normal;
          word-break: normal;
        }

        @media (max-width: 767px) {
          [data-name='Licences'] [data-name='Variant 1'] {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }

        [data-name='Education'] [data-name='Variant 1'] {
          min-width: 0;
        }

        [data-name='Education'] [data-name='Variant 1'] > [data-name='Container'] {
          flex: 1 1 0%;
          width: auto;
          min-width: 0;
        }

        [data-name='Education'] .whitespace-nowrap {
          white-space: normal;
        }

        @media (max-width: 767px) {
          [data-name='Education'] [data-name='Variant 1'] {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
