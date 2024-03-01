import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contact us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>Voyager Privacy Policy</h1>
          <p>
            This page informs you of our policies regarding the collection, use,
            and disclosure of personal data when you use our Service and the
            choices you have associated with that data.
          </p>

          <h2>Use of Your Information:</h2>
          <p>
            We use the collected data to: Process your orders and payments
            Provide customer support Send you promotional emails and marketing
            communications (with your consent) Personalize your experience on
            the Service Improve the Service and develop new features
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
