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
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";

const Categories = () => {
  return (
    <section className="pt-6 pb-12 text-center default-container">
      <div className="mb-8">
        <SectionTitle
          title="Service Categories"
          subTitle="Choice our collections of services"
        />
      </div>
      <div className="mt-14">
        <Tabs>
          <TabList className="border-0">
            <Tab>
              <span className="text-lg font-bold uppercase hover:text-gray-800">
                Maintenance
              </span>
            </Tab>
            <Tab>
              <span className="text-lg font-bold uppercase hover:text-gray-800">
                Detailing
              </span>
            </Tab>
            <Tab>
              <span className="text-lg font-bold uppercase hover:text-gray-800">
                Performance
              </span>
            </Tab>
          </TabList>

          <TabPanel>
            <section className="w-full mt-8 lg:relative">
              <h2 className="text-xl font-semibold">
                Maintain Your vehicle perfectly
              </h2>
              <div className="gap-5 pt-8 lg:flex lg:justify-around lg:items-center">
                <Image
                  src={img1}
                  alt="Maintenance"
                  className="lg:w-[50%] mb-2"
                  width={350}
                  height={350}
                />
                <Image
                  src={img2}
                  alt="Maintenance"
                  className="lg:w-[50%] mb-2"
                  height={350}
                />
              </div>
              <div className="lg:flex lg:justify-center">
                <div className="bg-black backdrop-blur-md lg:w-[75%] text-left px-16 py-8 lg:absolute -bottom-32 lg:flex lg:justify-around ">
                  <div>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Oil Change and Filter Replacement
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Brake System Inspection and Repair
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Check Engine Light Diagnosis
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Engine Diagnostics and Repair
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Tire Rotation and Balancing
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Battery Testing and Replacement
                    </li>
                  </div>
                  <div>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Fuel System Cleaning
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Cabin Air Filter Replacement
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Suspension and Steering Repairs
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Air Conditioning Service
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Transmission Fluid Change
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Coolant System Flush
                    </li>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="mt-8 lg:relative">
              <h2 className="text-xl font-semibold">
                Make Your vehicle GORGEOUS
              </h2>
              <div className="gap-5 pt-8 lg:flex lg:justify-around lg:items-center">
                <Image
                  src={img3}
                  alt="Maintenance"
                  className="lg:w-[50%] mb-2"
                />
                <Image
                  src={img4}
                  alt="Maintenance"
                  className="lg:w-[50%] mb-2"
                  height={350}
                />
              </div>
              <div className="lg:flex lg:justify-center">
                <div className="bg-black backdrop-blur-2xl lg:w-[75%] text-left px-16 py-8 lg:absolute -bottom-32 lg:flex lg:justify-around ">
                  <div>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Dent and Scratch Repair
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Paint Touch-Up
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Collision Repair
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Panel Replacement
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Rust Repair
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Paint Restoration
                    </li>
                  </div>
                  <div>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Bumper Repair and Refinishing
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Windshield and Glass Replacement
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Frame Straightening
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Custom Paint Jobs
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Body Kit Installation
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Vinyl Wrap Installation
                    </li>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="mt-8 lg:relative">
              <h2 className="text-xl font-semibold">Upgrade Your Machine</h2>
              <div className="gap-5 pt-8 lg:flex lg:justify-around lg:items-center">
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
                <div className="bg-black lg:w-[75%] text-left px-16 py-8 lg:absolute -bottom-32 lg:flex lg:justify-around ">
                  <div>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Engine Tuning
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Exhaust System Upgrades
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Suspension Enhancements
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Intake System Upgrades
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Turbocharger or Supercharger Installation
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Performance Chip Tuning
                    </li>
                  </div>
                  <div>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Brake System Upgrades
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Transmission Upgrades
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Performance Wheels and Tires
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      ECU Remapping
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
                      Nitrous Oxide Kit Installation
                    </li>
                    <li className="pb-2 text-lg font-semibold text-white">
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
