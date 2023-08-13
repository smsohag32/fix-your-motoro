import React from "react";
import styles from "./BlurredImageSection.module.css";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

const GetInTouch = () => {
  return (
    <section className="">
      <div>
        <div className="text-center mb-12">
          <SectionTitle
            title="Engage With Us"
            subTitle={"Empowering Your Vehicles with Quality Servicing"}
          />
        </div>
        <section className="md:relative mt-8">
          <div className={styles.sectionContainer}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.blurOverlay}></div>
            <div className={styles.imageOverlay}></div>
            <div className={styles.rightBlurOverlay}></div>
            {/* Your content for the section */}
          </div>
          <div className="bg-black bg-opacity-90 text-white p-10 lg:w-[450px] h-full text-left md:absolute top-0 right-5">
            <div className="">
              <h2 className="font-bold text-3xl text-white lg:pt-16">
                Contact Info
              </h2>
              <p className="text-lg font-medium text-gray-400 pt-2">
                56 Banasree - Staff Quarter - Demra Rd, Dhaka
              </p>
              <p className="text-lg font-medium text-gray-400 pt-2">
                Call : +880123698574
              </p>
              <p className="text-lg font-medium text-gray-400 pt-2">
                Email : fixyourmotoro@gmail.com
              </p>
              <h2 className="font-bold text-3xl text-white lg:pt-16">
                Opening Ours
              </h2>
              <p className="text-lg font-medium text-gray-400 pt-2">
                Sun-Thurs : 9:00 AM - 11:00 PM{" "}
              </p>
              <p className="text-lg font-medium text-gray-400 pt-2">
                Fri : CLOSED
              </p>
              <p className="text-lg font-medium text-gray-400 pt-2">
                Sat : 2:00 PM - 9:00 PM
              </p>
            </div>
          </div>
          <div className="bg-black bg-opacity-90 p-10 lg:w-96 h-full text-left md:absolute top-0 left-4">
            <h2 className="font-bold text-3xl text-white lg:pt-16">
              Our Branches
            </h2>
            <p className="font-semibold text-xl text-gray-400 pt-2">
              Divisions -
            </p>
            <li className="text-lg font-medium text-gray-400 pt-2">Dhaka</li>
            <li className="text-lg font-medium text-gray-400 pt-2">
              Chittogong
            </li>
            <li className="text-lg font-medium text-gray-400 pt-2">Rajshahi</li>
            <li className="text-lg font-medium text-gray-400 pt-2">Barishal</li>
            <li className="text-lg font-medium text-gray-400 pt-2">Khulna</li>
            <li className="text-lg font-medium text-gray-400 pt-2">Shylet</li>
            <li className="text-lg font-medium text-gray-400 pt-2">
              Maymansingh
            </li>
            <li className="text-lg font-medium text-gray-400 pt-2">Rangpur</li>
          </div>
        </section>
      </div>
    </section>
  );
};

export default GetInTouch;
