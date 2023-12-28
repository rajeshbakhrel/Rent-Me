import React from "react";
import CommonHeroSection from "../Component/CommonHeroSection";
import image1 from "../Assects/house2.gif";
import { BarChart, XAxis, YAxis, Bar } from "recharts";
import "../Style/Home.css";

const About = () => {
  const data = [
    { name: "Narayanghat", value: 15 },
    { name: "Butwal", value: 10 },
    { name: "Pokhara", value: 15 },
    { name: "Kathmandu", value: 20 },
  ];
  return (
    <div>
      <CommonHeroSection
        name="ABOUT-US"
        image={image1}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            accusantium sunt, sapiente nisi consequatur in harum voluptatum necessitatibus
            . Lorem ipsum dolor sit amet consectetur,adipisicing elit.Ad sequi sunt
             laudantium accusantium id!"
      />

      <div className="bar-container">
        <BarChart width={400} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis dataKey="value" />
          <Bar dataKey="value" fill="green" />
        </BarChart>
        <h5>Number of Hostel Booked in Citys</h5>
      </div>
    </div>
  );
};

export default About;
