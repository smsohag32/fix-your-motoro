import React from "react";
import styles from "./BlurredImageSection.module.css";

const GetInTouch = () => {
  return (
    <section className="mt-12">
      <div>
        <div className="text-center mb-12">
          <h3 className="text-4xl text-orange-500 text-center font-bold font-sans py-2">
            Engage with Us
          </h3>
          <p className="text-xl text-slate-600 font-semibold tracking-tight font-sans">
            Empowering Your Vehicles with Quality Servicing
          </p>
        </div>
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
              <h2 className="font-bold text-3xl text-slate-700 lg:pt-16">
                Contact Info
              </h2>
              <p className="text-lg font-medium text-slate-600 pt-2">
                56 Banasree - Staff Quarter - Demra Rd, Dhaka
              </p>
              <p className="text-lg font-medium text-slate-600 pt-2">
                Call : +880123698574
              </p>
              <p className="text-lg font-medium text-slate-600 pt-2">
                Email : fixyourmotoro@gmail.com
              </p>
              <h2 className="font-bold text-3xl text-slate-700 lg:pt-16">
                Opening Ours
              </h2>
              <p className="text-lg font-medium text-slate-600 pt-2">
                Sun-Thurs : 9:00 AM - 11:00 PM{" "}
              </p>
              <p className="text-lg font-medium text-slate-600 pt-2">
                Fri : CLOSED
              </p>
              <p className="text-lg font-medium text-slate-600 pt-2">
                Sat : 2:00 PM - 9:00 PM
              </p>
            </div>
          </div>
          <div className="bg-orange-300 p-10 lg:w-96 h-full text-left md:absolute top-0 left-4">
            <h2 className="font-bold text-3xl text-slate-700 lg:pt-16">
              Our Branches
            </h2>
            <p className="font-semibold text-xl text-slate-600 pt-2">
              Divisions -
            </p>
            <li className="text-lg font-medium text-slate-600 pt-2">Dhaka</li>
            <li className="text-lg font-medium text-slate-600 pt-2">
              Chittogong
            </li>
            <li className="text-lg font-medium text-slate-600 pt-2">
              Rajshahi
            </li>
            <li className="text-lg font-medium text-slate-600 pt-2">
              Barishal
            </li>
            <li className="text-lg font-medium text-slate-600 pt-2">Khulna</li>
            <li className="text-lg font-medium text-slate-600 pt-2">Shylet</li>
            <li className="text-lg font-medium text-slate-600 pt-2">
              Maymansingh
            </li>
            <li className="text-lg font-medium text-slate-600 pt-2">Rangpur</li>
          </div>
        </section>
      </div>
    </section>
  );
};

export default GetInTouch;
