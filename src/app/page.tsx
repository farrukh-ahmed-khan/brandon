"use client";

import React, { useState } from "react";


import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Navbar";
import HomeBanner from "@/components/ui/HomeBanner";
import BannerCards from "@/components/ui/BannerCards";
import Image from "next/image";
import bannerOverlay from "../assets/images/banner-overlay.png"
import capsule from "../assets/images/banner-capsule.png"
import liquid from "../assets/images/liquid.png"
import tablet from "../assets/images/tablet.png"
import middlegirl from "../assets/images/middle-girl-img.png"
import arrowicon from "../assets/images/arrow-btn-icon.png"

const Home: React.FC = () => {

  return (
    <>
      <div className="home-wrapper">
        <Header />
        <section className="homeBanner-wrapper">
          <HomeBanner
            title="a personalized plan"
            subtitle="Lose weight with"
            buttons={[
              { label: "Let's Start Your Journey", link: "#" },
            ]}
          />
          <div className='banner-card-wrapper my-5'>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <BannerCards
                    title="Find Relief"
                    subtitle="For Anxiety"
                    image={capsule}
                    buttonText="Learn More"
                    buttonLink="#"
                    icon={arrowicon}
                  />
                </div>
                <div className="col-lg-4">
                  <BannerCards
                    title="Lose"
                    subtitle="Weight"
                    image={liquid}
                    buttonText="Learn More"
                    buttonLink="#"
                    icon={arrowicon}
                  />
                </div>
                <div className="col-lg-4">
                  <BannerCards
                    title="Explore"
                    subtitle="Wellness"
                    image={tablet}
                    buttonText="Learn More"
                    buttonLink="#"
                    icon={arrowicon}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="overlay">
            <Image src={bannerOverlay} alt="banner-overlay"></Image>
          </div>
        </section>


        <section className="personalize-plan-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading">
                  <h5>
                    Lose weight with
                  </h5>
                  <h4>
                    a personalized plan
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="middle-big-text">
                <p>
                  Loseweight
                </p>
              </div>
              <div className="col-lg-3">
                <div className="middle-card">
                  <div className="top-head">
                    <h5>
                      Find Relief
                    </h5>
                    <h4>
                      For Anxiety
                    </h4>
                  </div>
                  <div className="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="middle-img-wrap">
                  <Image src={middlegirl} alt="middle girl"></Image>
                </div>
              </div>
              <div className="col-lg-3 d-flex align-items-end">
                <div className="middle-card">
                  <div className="top-head">
                    <h5>
                      Find Relief
                    </h5>
                    <h4>
                      For Anxiety
                    </h4>
                  </div>
                  <div className="content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
      </div >
    </>
  );
};

export default Home;
