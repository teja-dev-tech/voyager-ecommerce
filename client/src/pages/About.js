import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us: Voyaging Beyond the Ordinary"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contact us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h2 className="text-justify mt-4">
            About Us: Voyaging Beyond the Ordinary
          </h2>
          <p className="text-justify mt-2">
            Voyager was born in 2023 with the spirit of exploration and the
            ambition to connect you with the extraordinary. We are a team of
            passionate individuals driven by a desire to curate unique and
            innovative products that ignite your curiosity and enhance your
            everyday life.
          </p>

          <p className="text-justify mt-2">
            We believe in providing a platform for discovery, offering a diverse
            selection of products that cater to a wide range of interests and
            passions. Join us on this exciting journey as we navigate the
            ever-evolving landscape of commerce, bringing you the best the world
            has to offer at competitive prices and exceptional customer service.
            We invite you to explore our curated collections and embark on your
            own voyage of discovery with Voyager.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
