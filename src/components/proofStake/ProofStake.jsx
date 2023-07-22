import React from "react";
import planet from "../../assets/maning animation v2.mp4";

function ProofStake() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center mt-5 mb-5">
        <div className="col-lg-6 col-md-12">
          <video autoPlay="autoplay" loop="loop" muted className="w-100 planet" data-aos="fade-up">
            <source src={planet} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-lg-6 col-md-12">
          <h1 className="text-white text-start main-heading mb-3" data-aos="fade-up">
            Proof of Stake Consensus
          </h1>
          <p className="text-white text-start text-paragraph" data-aos="fade-up">
            VRC acts as a decentralized and EVM (Ethereum Virtual Machine)
            compatible public blockchain, driving the VRC platform and
            ecosystem. By using EVM compatible blockchain developers can run
            their code on different systems, reducing development risks. VRC is
            a Proof of Stake blockchain that is designed for low energy
            consumption and the reduction of the cost of creating blockchain
            consensus, where validators stake their VRC to earn Rewards.
          </p>
          <p className="text-white text-start text-paragraph" data-aos="fade-up">
            In order to participate in securing the network consensus, a node
            operator must stake a minimum required amount of 1 VRC.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProofStake;
