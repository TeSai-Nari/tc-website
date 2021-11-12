import * as React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import CardService from "../components/CardService"
import CounterNumber from "../components/Counter"

const SectionWrapper = styled.section`
  background-color: #27272E;
  padding: 3rem 1rem;

  @media (min-width:1024px) {
    padding: 6.25rem 3rem;
  }

`
const SectionContentWidth = styled.div`
  max-width: 960px;
  margin: auto;

  @media (min-width:1024px) {
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
  margin-bottom: 3rem;
`

const SectionCaption = styled.div`
  @media (min-width:1024px) {
    width: 70%;
  }
`

const HeroJumbotron = styled.section`
  background-color: #212121;
  padding: 80px 1rem 3rem;
  min-height: 65vh;

  background-image: url("/hero-bg-mobile.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom center;

  @media (min-width:1024px) {
    background-repeat: no-repeat;
    background-image: url("/hero-bg-desktop.png");
    background-size: 50%;
    background-position: right center;
  }
`
const ServiceSectionWrapper = styled(SectionWrapper)`
  border: 1px solid transparent;
  /* For mobile */
  /* padding: 3rem 1rem; */
`

const CardServiceWrapper = styled.div`
  display: grid;
  row-gap: 2rem;

  @media (min-width:1024px) {
    padding: 6.25rem 3rem;

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
  width: 50%;
  margin: auto;
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
  row-gap: 2rem;

  img {
    width: 75%;
  }

  column-gap: 2rem;
  align-items: center;

  @media (min-width:1024px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 3rem;
    justify-items: center;

    img {
      width: 50%;
      /* filter: grayscale(100%); */
    }
  }
`
const TextAlignCenter = styled.p`
  text-align: center;
`
// markup
const IndexPage = () => {
  return (
    <Layout>
      <HeroJumbotron>
        <SectionDesktopGrid>
          <SectionContent>
            <h1>Digital product design agency</h1>
            <p>Create live segments and target the right people for messages based on their behaviors. Get Started</p>
            {/* <div className={homeStyle.buttonPurple}>Get Started</div> */}
          </SectionContent>
          <div></div>
        </SectionDesktopGrid>
      </HeroJumbotron>

      <ServiceSectionWrapper>
        <SectionContentWidth>
          <SectionContent>
            <SectionCaption>
              {/* <p className={`${homeStyle.fontRed} ${homeStyle.subtitle}`}>What We Can Do For You</p> */}
              <h2>Services we can help you with</h2>
              <p>Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu imperdiet.</p>
            </SectionCaption>
          </SectionContent>
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
      </ServiceSectionWrapper>

      <SectionWrapper>
        <SectionDesktopGrid>
          <SectionContent>
            <p>About Us</p>
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
                <input type="text"></input>
              </InputLayout>
              {/* <button className={`${homeStyle.buttonPurple} ${homeStyle.textAlignCenter}`}>Get Free Quote</button> */}
            </FormWrapper>
          </KeystrokeFormWrapper>
        </SectionDesktopGrid>
      </SectionWrapper>

      <SectionWrapper>
        <SectionContentWidth>
          <SectionContent>
            <p>Featured Case Study</p>
            <h2>Design Startup movement</h2>
            <p>In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus</p>
          </SectionContent>
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
      </SectionWrapper>

      <SectionWrapper>
        <SectionContentWidth>
          <SectionContent>
            <SectionCaption>
              {/* <p className={`${homeStyle.fontRed} ${homeStyle.subtitle}`}>Top Clients</p> */}
              <h2>We’ve built solutions for...</h2>
              <p>In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus.</p>
            </SectionCaption>
            <ClientBrandWrapper>
              <img src="./lumina-dental.svg" alt="GSI Lab" />
              <img src="./lumina-dental.svg" alt="GSI Lab" />
              <img src="./ehipasiko-logo.png" alt="GSI Lab" />
              <img src="./klaxon-logo.png" alt="GSI Lab" />
              <img src="./freshening-logo.png" alt="GSI Lab" />
              <img src="./the-power-lab.png" alt="The Power Lab" />
            </ClientBrandWrapper>
          </SectionContent>
        </SectionContentWidth>
      </SectionWrapper>

      <SectionWrapper>
        <SectionContentWidth>
          <SectionContent>
            <TextAlignCenter>Lets Work Together</TextAlignCenter>
            <TextAlignCenter>Need a successful project?</TextAlignCenter>
            <TextAlignCenter>Get Free Quote</TextAlignCenter>
          </SectionContent>
        </SectionContentWidth>
      </SectionWrapper>
    </Layout>
  )
}

export default IndexPage
