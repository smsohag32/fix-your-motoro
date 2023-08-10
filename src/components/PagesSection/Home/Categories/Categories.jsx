"use client";

import React from "react";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img1 from "../../../../assets/serviceCategory/main.jpg";
import img2 from "../../../../assets/serviceCategory/oil.jpg";
import img3 from "../../../../assets/serviceCategory/paint.jpg";
import img4 from "../../../../assets/serviceCategory/paint2.jpg";
import img5 from "../../../../assets/serviceCategory/perform.jpg";
import img6 from "../../../../assets/serviceCategory/performance.jpg";

const Categories = () => {
  return (
    <section className="text-center default-container mb-20">
      <div className="mb-8">
        <h1 className="text-4xl primary-text font-bold font-sans py-2">
          Services Category
        </h1>
        <p className="text-xl text-slate-600 font-semibold tracking-tight font-sans">
          We aim to earn your trust and have a long term relationship with you
        </p>
      </div>
      <div className="mt-20">
        <Tabs>
          <TabList className="border-0">
            <Tab>
              <span className="hover:text-orange-600 text-2xl font-bold uppercase">
                Maintenance
              </span>
            </Tab>
            <Tab>
              <span className="hover:text-orange-600 text-2xl font-bold uppercase">
                Detailing
              </span>
            </Tab>
            <Tab>
              <span className="hover:text-orange-600 text-2xl font-bold uppercase">
                Performance
              </span>
            </Tab>
          </TabList>

          <TabPanel>
            <section className="mt-8 w-full lg:relative">
              <h2 className="text-3xl font-mono font-semibold primary-text">
                Maintain Your vehicle perfectly
              </h2>
              <div className="lg:flex lg:justify-around lg:items-center gap-5 pt-8">
                <Image
                  src={img1}
                  alt="Maintenance"
                  className="lg:w-[50%] mb-2"
                />
                <Image
                  src={img2}
                  alt="Maintenance"
                  className="lg:w-[50%] mb-2"
                />
              </div>
              <div className="lg:flex lg:justify-center">
                <div className="bg-black backdrop-blur-md lg:w-[75%] text-left px-16 py-8 lg:absolute -bottom-32 lg:flex lg:justify-around ">
                  <div>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Oil Change and Filter Replacement
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Brake System Inspection and Repair
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Check Engine Light Diagnosis
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Engine Diagnostics and Repair
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Tire Rotation and Balancing
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Battery Testing and Replacement
                    </li>
                  </div>
                  <div>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Fuel System Cleaning
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Cabin Air Filter Replacement
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Suspension and Steering Repairs
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Air Conditioning Service
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Transmission Fluid Change
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Coolant System Flush
                    </li>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="mt-8 lg:relative">
              <h2 className="text-3xl font-mono font-semibold primary-text">
                Make Your vehicle GORGEOUS
              </h2>
              <div className="lg:flex lg:justify-around lg:items-center gap-5 pt-8">
                <Image
                  src={img3}
                  alt="Maintenance"
                  className="lg:w-[50%] mb-2"
                />
                <Image
                  src={img4}
                  alt="Maintenance"
                  className="lg:w-[50%] mb-2"
                />
              </div>
              <div className="lg:flex lg:justify-center">
                <div className="bg-black backdrop-blur-2xl lg:w-[75%] text-left px-16 py-8 lg:absolute -bottom-32 lg:flex lg:justify-around ">
                  <div>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Dent and Scratch Repair
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Paint Touch-Up
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Collision Repair
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Panel Replacement
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Rust Repair
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Paint Restoration
                    </li>
                  </div>
                  <div>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Bumper Repair and Refinishing
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Windshield and Glass Replacement
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Frame Straightening
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Custom Paint Jobs
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Body Kit Installation
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Vinyl Wrap Installation
                    </li>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="mt-8 lg:relative">
              <h2 className="text-3xl font-semibold primary-text">
                Upgrade Your Machine
              </h2>
              <div className="lg:flex lg:justify-around lg:items-center gap-5 pt-8">
                <Image
                  src={img5}
                  alt="Maintenance"
                  className="lg:w-[50%] mb-2"
                />
                <Image
                  src={img6}
                  alt="Maintenance"
                  className="lg:w-[50%] mb-2"
                />
              </div>
              <div className="lg:flex lg:justify-center">
                <div className="bg-slate-600 lg:w-[75%] text-left px-16 py-8 lg:absolute -bottom-32 lg:flex lg:justify-around ">
                  <div>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Engine Tuning
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Exhaust System Upgrades
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Suspension Enhancements
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Intake System Upgrades
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Turbocharger or Supercharger Installation
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Performance Chip Tuning
                    </li>
                  </div>
                  <div>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Brake System Upgrades
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Transmission Upgrades
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Performance Wheels and Tires
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      ECU Remapping
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Nitrous Oxide Kit Installation
                    </li>
                    <li className="text-lg font-semibold pb-2 text-white">
                      Suspension Lowering or Lifting
                    </li>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Categories;
