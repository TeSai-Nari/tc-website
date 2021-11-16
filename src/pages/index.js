import * as React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import CardService from "../components/CardService"
import CounterNumber from "../components/Counter"

const SectionWrapper = styled.section`
  background-color: #27272E;
  padding: 3rem 1rem;

  position: relative;
  z-index: 0;

  ul {
    list-style-type: none;
  }

  @media (min-width:1024px) {
    padding: 8.25rem 3rem;
  }

`
const Button = styled.button `
  font-family: 'DM Sans', sans-serif;
  border: 1px solid #5956E9;
  background-color: #5956E9;
  color: #ffffff;
  width: max-content;
  padding: 25px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
`
const SectionContentWidth = styled.div`

  @media (min-width:1024px) {
    max-width: 960px;
    margin: auto;
  }

  @media(min-width:1440px ){
    max-width: 1320px;
    margin: auto;
  }
`
const SectionDesktopGrid = styled(SectionContentWidth)`
  @media (min-width:1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }
`
const SectionContent = styled.div`
  display: grid;
  row-gap: 2rem;
  margin-bottom: 3.125rem;
`

const SectionContentCenter = styled(SectionContent)`
  justify-items: center;
  p, h2 {
    text-align: center;
  }
`
const SectionCaption = styled(SectionContent)`
  @media (min-width:1024px) {
    width: 50%;
  }
`

const HeroJumbotron = styled(SectionWrapper)`
  display: flex;
  background-color: #212121;
  padding: 3rem 1rem;
  /* min-height: 65vh; */

  img {
    width: 100%;
  }

  .shape {
    position: absolute;
    z-index: -1;
  } 

  .m-only {
    @media (min-width:1024px) {
      display: none;
    }
  }

  .desktop-only {
    display: none;

    @media (min-width:1024px) {
      display: block;
    }
  }

  @media (min-width:1024px) {
    .hero-bubble-medium { 
      top: 120px;
      right: 15px;

      filter: brightness(0.3);
    }
  }
`
const ServiceSectionWrapper = styled(SectionWrapper)`

  .shape {
    position: absolute;
    z-index: -1;
  }

  .service-line {
    top: 100px;
    right: 0;

    img {
      width: 100%;
    }
  }

  .service-bubble-small { 
    top: 50%;
    transform: translateY(-50%);
    left: 110px;
  }

  .service-bubble-big {
    bottom: 200px;
    left: 0;
  }
`

const ClientSectionWrapper = styled(SectionWrapper)`
  .shape {
    position: absolute;
    z-index: -1;
  }

  .service-line {
    top: 100px;
    right: 0;

    img {
      width: 100%;
    }
  }

`

const AboutUsSectionWrapper = styled(SectionWrapper)`
  .shape {
    position: absolute;
    z-index: -1;
  }

  img {
    filter: brightness(0.3);
    width: 100%;
  }

  .about-bubble {
    top: 0;
    left: 0;
  }
  
  .about-line-top, .about-line-bottom { 
    display: none;
  } 

  @media (min-width:1024px) {
    .about-line-top, .about-line-bottom {
      display: block;
    }

    .about-line-top { 
      top: 110px;
      left: 0;
    } 

    .about-line-bottom {
      bottom: 140px;
      right: 0;
    }
  }
`
const FeaturedSectionWrapper = styled(SectionWrapper)`
  .shape {
    position: absolute;
    z-index: -1;
  }

  .featured-bubble-big { 
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }

  .featured-bubble-small {
    top: 680px;
    left: 110px;
  }
`
const CtaSectionWrapper =  styled(SectionWrapper)`

  background-color: #27272E;
  padding: 3rem 1rem 0;

  @media (min-width:1024px) {
    background: linear-gradient(#27272e 70%, #212121 30%);

    h2{
      width: 60%;
      margin: auto;
    }
  }

  .shape {
    position: absolute;
    z-index: -1;
  }

  .cta-bubble-blue { 
    top: 0;
    right: 0;

    filter: brightness(0.5);

    @media (min-width:1024px) {
      img {
        width: 50%;
      }
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const CtaThumbnailWrapper = styled.div`
  border-bottom: 1px solid ${({theme})=>theme.colors.grey};

  img {
    width: 100%;
  }

  @media (min-width: 1024px){
    img {
        width: 90%;
        margin: auto;
      }
  }
  
  .m-only {
    @media (min-width:1024px) {
      display: none;
    }
  }

  .desktop-only {
    display: none;

    @media (min-width:1024px) {
      display: block;
    }
  }

`

const CardServiceWrapper = styled.div`
  display: grid;
  row-gap: 2rem;

  @media (min-width:1024px) {
    padding: 3.75rem 0;

    grid-template-columns: repeat(3,1fr);
    column-gap: 2rem;
  }
`
const KeystrokeFormWrapper = styled.div`
  display: grid;
  row-gap: 2rem;

  background-color: #212121;
  border-radius: 30px;

  padding: 1.875rem;

  @media (min-width:1024px) {
    padding: 3.125rem;
  }

  @media (min-width:1440px) {
    margin-left: 8%;
  }
`

const FormWrapper = styled.form`
  display: grid;
  row-gap: 1.5rem;
`
const InputLayout = styled.div`
  display: grid;
  row-gap: 1rem;
`

const Width50Desktop = styled.p`
  @media (min-width:1024px) {
    width: 50%;
    margin: auto;
  }

`

const CounterNumberWrapper = styled.div`
  display: grid;
  /* For mobile */
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;

  @media (min-width:1024px) {
    column-gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
  }
`

const ClientBrandWrapper = styled.div` 
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  row-gap: 2rem;

  img {
    width: 50%;
  }

  column-gap: 2rem;
  align-items: center;

  @media (min-width:1024px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 3rem;
    justify-items: center;

    img {
      width: 30%;
    }
  }
`
const TextAlignCenter = styled.p`
  text-align: center;
`
const ServiceImageWrapper = styled.div`
  position: absolute;
`
const FontRed = styled.p `
  color:${({theme})=>theme.colors.red};
`

const Subtitle = styled(FontRed) `
  font-size: 1rem;

  @media(min-width: 1024px) {
    font-size: 1.25rem;
  }
`
const FontYellow = styled.p `
  color:${({theme})=>theme.colors.yellow};
`
// markup
const IndexPage = () => {
  return (
    <Layout>
      <HeroJumbotron>
        <SectionDesktopGrid>
          <SectionContent>
            <h1>Build beautiful website & mobile apps.</h1>
            <p>Create live segments and target the right people for messages based on their behaviors. Get Started</p>
            <Button>Get Started</Button>
          </SectionContent>
          <div>
            <img src="./hero-bg-mobile.png" alt="hero-bg-mobile" className="m-only" />
            <img src="./hero-bg-desktop.png" alt="hero-bg-desktop" className="desktop-only" />
          </div>
        </SectionDesktopGrid>
        <ul>
          <li className="shape hero-bubble-medium">
            <img src="./hero-bubble-medium.png" alt="hero-bubble-medium" />
          </li>
        </ul>
      </HeroJumbotron>

      <ServiceSectionWrapper id="service-section">
        <SectionContentWidth>
          <SectionCaption>
            <Subtitle>What We Can Do For You</Subtitle>
            <h2>Services we can help you with</h2>
            <p>Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu imperdiet.</p>
          </SectionCaption>
          <CardServiceWrapper>
            <CardService
              image="./icon-1.png"
              title={"Design"}
              description={"Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library."}
            />
            <CardService
              image="./icon-2.png"
              title={"Development"}
              description={"Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library."}
            />

            <CardService
              image="./icon-3.png"
              title={"Online Marketing"}
              description={"Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library."}
            />
            <CardService
              image="./icon-4.png"
              title={"Business"}
              description={"Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library."}
            />
            <CardService
              image="./icon-5.png"
              title={"Technology"}
              description={"Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library."}
            />
            <CardService
              image="./icon-6.png"
              title={"Content Strategy"}
              description={"Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library."}
            />
          </CardServiceWrapper>
        </SectionContentWidth>
        <ul>
          <li className="shape service-bubble-big">
            <img src="./bubble-grey-big.png" alt="bubble-grey-big" />
          </li>
          <li className="shape service-bubble-small">
            <img src="./bubble-grey-small.png" alt="bubble-grey-small" />
          </li>
          <li className="shape service-line">
            <img src="./service-line.png" alt="service-line" />
          </li>
        </ul>
      </ServiceSectionWrapper>

      <AboutUsSectionWrapper id="about-section">
        <SectionDesktopGrid>
          <SectionContent>
            <Subtitle>About Us</Subtitle>
            <h2>We do design, code & develop.</h2>
            <p>Nulla et velit gravida, facilisis quam a, molestie ante. Mauris placerat suscipit dui, eget maximus tellus blandit a. Praesent non tellus sed ligula commodo blandit in et mauris. Quisque efficitur ipsum ut dolor molestie pellentesque.</p>
            <p>Nulla pharetra hendrerit mi quis dapibus. Quisque luctus, tortor a venenatis fermentum, est lacus feugiat nisl, id pharetra odio enim eget libero.</p>
          </SectionContent>
          <KeystrokeFormWrapper>
            <h3>Get a free Keystroke quote now</h3>
            <FormWrapper>
              <InputLayout>
                <label>Name</label>
                <input type="text"></input>
              </InputLayout>
              <InputLayout>
                <label>Email</label>
                <input type="email"></input>
              </InputLayout>
              <InputLayout>
                <label>Phone</label>
                <input type="tel"></input>
              </InputLayout>
              <Button>Get Free Quote</Button>
            </FormWrapper>
          </KeystrokeFormWrapper>
        </SectionDesktopGrid>
        <ul>
          <li className="shape about-bubble">
            <img src="./about-bubble.png" alt="about-bubble" />
          </li>
          <li className="shape about-line-top">
            <img src="./about-line-top.png" alt="about-line-top" />
          </li>
          <li className="shape about-line-bottom">
            <img src="./about-line-bottom.png" alt="about-line-bottom" />
          </li>
        </ul>
      </AboutUsSectionWrapper>

      <FeaturedSectionWrapper id="case-study-section">
        <SectionContentWidth>
          <SectionContentCenter>
            <Subtitle>Featured Case Study</Subtitle>
            <h2>Design Startup movement</h2>
            <Width50Desktop>In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus</Width50Desktop>
          </SectionContentCenter>
          <CounterNumberWrapper>
            <CounterNumber
              image="./icon-7.png"
              number={"0"}
              content={"Years of operation"}
            />
            <CounterNumber
              image="./icon-8.png"
              number={"0"}
              content={"Projects Delivered"}
            />
            <CounterNumber
              image="./icon-9.png"
              number={"0"}
              content={"Specialist"}
            />
            <CounterNumber
              image="./icon-10.png"
              number={"0"}
              content={"Years of operation"}
            />
          </CounterNumberWrapper>
        </SectionContentWidth>
        <ul>
          <li className="shape featured-bubble-big">
            <img src="./bubble-grey-big.png" alt="bubble-big"/>
          </li>
          <li className="shape featured-bubble-small">
            <img src="./bubble-grey-small.png" alt="bubble-small"/>
          </li>
        </ul>
      </FeaturedSectionWrapper>

      <ClientSectionWrapper id="client-section">
        <SectionContentWidth>
          <SectionCaption>
            <Subtitle>Top Clients</Subtitle>
            <h2>We’ve built solutions for...</h2>
            <p>In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus.</p>
          </SectionCaption>
          <ClientBrandWrapper>
            <img src="./gsi-lab-logo.png" alt="GSI Lab" />
            <img src="./lumina-dental.svg" alt="lumina dental" />
            <img src="./ehipasiko-logo.png" alt="ehipasiko" />
            <img src="./klaxon-logo.png" alt="klaxon" />
            <img src="./freshening-logo.png" alt="freshening" />
            <img src="./the-power-lab.png" alt="The Power Lab" />
          </ClientBrandWrapper>
        </SectionContentWidth>
        <ul>
          <li className="shape service-line">
            <img src="./service-line.png" alt="service-line" />
          </li>
        </ul>
      </ClientSectionWrapper>

      <CtaSectionWrapper id="cta-section">
        <SectionContentWidth>
          <SectionContentCenter>
            <FontYellow>Let's Work Together</FontYellow>
            <h2>Need a successful project?</h2>
            <Button>Get Started</Button>
          </SectionContentCenter>
          <CtaThumbnailWrapper>
            {/*<LargeThumbnail>
               <img src="./cta-chat-group.png" alt="cta-chat-group.png"/>
            </LargeThumbnail>
            <ul>
              <li className="shape laptop-poses">
                <img src="./cta-laptop-poses.png" alt="cta-laptop-poses.png"/>
              </li>
              <li className="shape bill-pay">
                <img src="./cta-bill-pay.png" alt="cta-bill-pay.png"/>
              </li>
            </ul> */}
            <img src="./cta-thumbnail-mobile.png" alt="cta-thumbnail-mobile.png" className="m-only"/>
            <img src="./cta-thumbnail-desktop.png" alt="cta-thumbnail-desktop.png" className="desktop-only"/>

          </CtaThumbnailWrapper>
        </SectionContentWidth>
        <ul>
          <li className="shape cta-bubble-blue">
            <img src="./cta-bubble-blue.png" alt="cta-bubble-blue.png"/>
          </li>
        </ul>
      </CtaSectionWrapper>
    </Layout>
  )
}

export default IndexPage
