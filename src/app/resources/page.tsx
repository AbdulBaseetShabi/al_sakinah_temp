"use client";
import React from "react";
import PageHeader from "../components/header";
import {
  PartnerServiceCard,
  PartnerServiceCardProps as PartnerServices,
  ResourceCard,
  ResourceCardProps,
} from "../components/service-card";
import PageLayoutComponent from "../components/page-layout";
// https://www.youtube.com/watch?v=ZVnjOPwW4ZA

const partnerServices: PartnerServices[] = [
  {
    partnerName: "UW MSA",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo:
      "https://cdn.pixabay.com/photo/2023/06/28/22/00/tiger-8095253_1280.png",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "UW MSA",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo: "",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "UW MSA",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo:
      "https://cdn.pixabay.com/photo/2023/06/28/22/00/tiger-8095253_1280.png",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "UW MSA",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo: "",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "UW MSA",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo:
      "https://cdn.pixabay.com/photo/2023/06/28/22/00/tiger-8095253_1280.png",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
  {
    partnerName: "UW MSA",
    services: ["Mentorship", "Friendship", "Therapy"],
    partnerEmail: "inquiry@uwmsa.ca",
    partnerNumber: "+1 (226) 505 8989",
    partnerLogo: "",
    partnerSocials: ["https://www.instagram.com/uwmsa"],
  },
];

const resources: ResourceCardProps[] = [
  {
    name: "Ramadan Workbook (2024)",
    description:
      "Want to have a structured Ramadan. Utilize our free workbook that...",
    link: "",
    image: "",
  },
];

const ServicesPage = () => {
  const [isPartnerServiceTab, setIsPartnerServiceTab] =
    React.useState<boolean>(true);
  const activeTab = "tab-active [--tab-bg:#3A3042] text-white";
  return (
    <PageLayoutComponent>
      <div style={{ width: "90%" }} className="mx-auto">
        <PageHeader headerText="Resources" />
        <div>
          <div role="tablist" className="tabs tabs-lifted tabs-lg">
            <a
              role="tab"
              className={`tab ${isPartnerServiceTab ? activeTab : ""}`}
              onClick={() => setIsPartnerServiceTab(true)}
            >
              Partners
            </a>
            <a
              role="tab"
              className={`tab ${!isPartnerServiceTab ? activeTab : ""}`}
              onClick={() => setIsPartnerServiceTab(false)}
            >
              Digital Resources
            </a>
          </div>
          <div className="flex flex-wrap mt-4">
            {isPartnerServiceTab
              ? partnerServices.map((service, index) => (
                  <div key={index} className="mt-2 w-full max-w-96 mx-auto">
                    <PartnerServiceCard {...service} />
                  </div>
                ))
              : resources.map((resource, index) => (
                  <div key={index} className="mt-2 w-full mx-auto">
                    <ResourceCard {...resource} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </PageLayoutComponent>
  );
};

export default ServicesPage;
