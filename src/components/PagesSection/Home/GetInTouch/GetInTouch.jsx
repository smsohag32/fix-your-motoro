import React from "react";
import styles from "./BlurredImageSection.module.css";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

const GetInTouch = () => {
  return (
    <section className="mt-12">
      <div>
      <SectionTitle
          title={"Engage with Us"}
          subTitle="Empowering Your Vehicles with Quality Servicing"
        />
        <section className="md:relative">
          <div className={styles.sectionContainer}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.blurOverlay}></div>
            <div className={styles.imageOverlay}></div>
            <div className={styles.rightBlurOverlay}></div>
            {/* Your content for the section */}
          </div>
          <div className="bg-orange-300 p-10 lg:w-[450px] h-full text-left md:absolute top-0 right-5">
            <div className="">
              <h2 className="text-3xl font-bold text-slate-700 lg:pt-16">
                Contact Info
              </h2>
              <p className="pt-2 text-lg font-medium text-slate-600">
                56 Banasree - Staff Quarter - Demra Rd, Dhaka
              </p>
              <p className="pt-2 text-lg font-medium text-slate-600">
                Call : +880123698574
              </p>
              <p className="pt-2 text-lg font-medium text-slate-600">
                Email : fixyourmotoro@gmail.com
              </p>
              <h2 className="text-3xl font-bold text-slate-700 lg:pt-16">
                Opening Ours
              </h2>
              <p className="pt-2 text-lg font-medium text-slate-600">
                Sun-Thurs : 9:00 AM - 11:00 PM{" "}
              </p>
              <p className="pt-2 text-lg font-medium text-slate-600">
                Fri : CLOSED
              </p>
              <p className="pt-2 text-lg font-medium text-slate-600">
                Sat : 2:00 PM - 9:00 PM
              </p>
            </div>
          </div>
          <div className="top-0 h-full p-10 text-left bg-orange-300 lg:w-96 md:absolute left-4">
            <h2 className="text-3xl font-bold text-slate-700 lg:pt-16">
              Our Branches
            </h2>
            <p className="pt-2 text-xl font-semibold text-slate-600">
              Divisions -
            </p>
            <li className="pt-2 text-lg font-medium text-slate-600">Dhaka</li>
            <li className="pt-2 text-lg font-medium text-slate-600">
              Chittogong
            </li>
            <li className="pt-2 text-lg font-medium text-slate-600">
              Rajshahi
            </li>
            <li className="pt-2 text-lg font-medium text-slate-600">
              Barishal
            </li>
            <li className="pt-2 text-lg font-medium text-slate-600">Khulna</li>
            <li className="pt-2 text-lg font-medium text-slate-600">Shylet</li>
            <li className="pt-2 text-lg font-medium text-slate-600">
              Maymansingh
            </li>
            <li className="pt-2 text-lg font-medium text-slate-600">Rangpur</li>
          </div>
        </section>
      </div>
    </section>
  );
};

export default GetInTouch;
