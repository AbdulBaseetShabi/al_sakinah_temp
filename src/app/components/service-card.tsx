import React from "react";
import { SocialIcon } from "react-social-icons/component";
import Button from "./button";

export interface ServiceCardProps {
  serviceName: string;
  serviceDescription: string;
  serviceImage: string;
}

export interface PartnerServiceCardProps {
  partnerName: string;
  services: string[];
  partnerLogo?: string;
  partnerEmail: string;
  partnerNumber: string;
  partnerSocials: string[];
}

export interface ResourceCardProps {
  description: string;
  name: string;
  link: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  serviceName,
  serviceDescription,
  serviceImage,
}) => {
  return (
    <div className="rounded-lg box-content p-1.5 max-w-full min-w-96 shadow-md">
      <img
        className="roundered mx-auto"
        width={120}
        src={serviceImage}
        alt={serviceName}
      />
      <h2 className="text-center font-semibold">{serviceName}</h2>
      {/* <p className="text-center">{serviceDescription}</p> */}
    </div>
  );
};

const Information: React.FC<{ info: string }> = ({ info }) => (
  <span className="font-semibold">{info}: </span>
);
const PartnerServiceCard: React.FC<PartnerServiceCardProps> = ({
  partnerName,
  partnerEmail,
  partnerLogo,
  partnerSocials,
  partnerNumber,
  services,
}) => {
  return (
    <div className="border box-content p-4 shadow-lg bg-white">
      {partnerLogo && (
        <img
          className="roundered mx-auto"
          width={120}
          src={partnerLogo}
          alt={partnerName}
        />
      )}
      <div>
        <div className="max-w-fit mx-auto mb-4">
          <h3 className="text-center font-semibold text-lg">{partnerName}</h3>
        </div>
        <p
          style={{
            fontWeight: "100",
          }}
        >
          Call/Text available 7 days of the week 12pm-9pm for spiritual health,
          mental health, drug abuse, etc....
        </p>
        <hr className="w-1/2 mx-auto border my-5" />
        <div style={{ fontWeight: "300" }}>
          <p>
            <Information info="Services" /> {services.join(", ")}
          </p>
          <p>
            <Information info="Email" />{" "}
            <a href={`mailto:${partnerEmail}`}>{partnerEmail}</a>
          </p>
          <p>
            <Information info="Number" /> {partnerNumber}
          </p>
        </div>
        <div>
          {/* {
                partnerSocials.map((social, index) => (
                    <SocialIcon key={index} url={social} />
                ))
            } */}
        </div>
      </div>
    </div>
  );
};

const ResourceCard: React.FC<ResourceCardProps> = ({
  image,
  description,
  link,
  name,
}) => (
  <div className="flex gap-1 border p-4 card glass shadow-md">
    <div className="flex flex-col">
      <h2 className="mb-1 font-extrabold">{name}</h2>
      <p>{description}</p>
      <div className="w-36 self-end mt-4">
        <Button text="View"/>
      </div>
    </div>
  </div>
);
export { ServiceCard, PartnerServiceCard, ResourceCard };
