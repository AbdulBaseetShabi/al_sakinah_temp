// import Head from "next/head";
// import { motion } from "framer-motion";

// import PageLayoutComponent from "../components/page-layout";
// import { ServiceCardProps } from "../components/service-card";
// import PageHeader from "../components/header";
// import { EventComponent, events } from "../events/page";
// import { parse } from "date-fns";
// import Button from "../components/button";

// interface MissionAndVisionCardProp {
//   title: string;
//   description: string;
//   image: string;
// }

// const ourServices: ServiceCardProps[] = [
//   {
//     serviceName: "Youth Empowerment and Mentorship",
//     serviceDescription:
//       "We promote positive socialization, personal growth, and social connection by providing safe spaces for BIPOC Muslims in Kitchener. Mentorship programs guide youth in personal and spiritual growth, enhancing self-esteem, leadership skills, and overall development.",
//     serviceImage:
//       "https://cdn.pixabay.com/photo/2024/01/26/15/08/smiling-8534123_1280.png",
//   },
//   {
//     serviceName: "Educational Workshops",
//     serviceDescription:
//       "We create brave spaces for open discussions on stigmatized topics, fostering dialogue among Black and racialized Muslims and other faiths. Our workshops focus on spirituality, personal development, resiliency, and well-being, breaking down barriers to knowledge. Past topics include mental health, self-development, and healthy relationships.",
//     serviceImage:
//       "https://cdn.pixabay.com/photo/2024/01/27/11/18/cowboy-8535714_960_720.png",
//   },
//   {
//     serviceName: "Community Engagement and Outreach",
//     serviceDescription:
//       "We raise funds and resources for community needs to mobilize for social justice causes. Projects include collecting funds for Tent City residents, winter jacket donations for the unhoused, and collaboration with Ray of Hope to provide halal meals. We host social gatherings, community meals, and cultural exchanges, fostering a sense of community. Our Instagram presence shares resources, education, and updates.",
//     serviceImage:
//       "https://cdn.pixabay.com/photo/2024/01/27/18/37/monster-8536553_960_720.png",
//   },
// ];

// const missionAndVision: MissionAndVisionCardProp[] = [
//   {
//     title: "Mission",
//     description:
//       " By fostering brave spaces with BIPOC Muslims, we seek to facilitate open dialogue through the co-contribution of knowledge and lived experiences to support personal and spiritual growth and foster community building.",
//     image: "./rocket.png",
//   },
//   {
//     title: "Vision",
//     description:
//       "A united and thriving community that serves as an intellectual hub to promote the holistic well-being of BIPOC Muslims in the KW region.",
//     image: "./binoculars.png",
//   },
// ];

// export const SpecialCard: React.FC<MissionAndVisionCardProp> = ({
//   title,
//   description,
//   image,
// }) => {
//   return (
//     <div className="w-1/2 min-w-96  px-4 py-2 grow glass">
//       <PageHeader headerText={title} />
//       <div
//         style={{ width: "80px", height: "80px", backgroundColor: "#3A3042" }}
//         className="shadow-lg rounded-full mx-auto"
//       >
//         <img src={image} style={{ objectFit: "contain" }}></img>
//       </div>
//       <p>{description}</p>
//     </div>
//   );
// };

const Home = () => {
    return (<main>Here</main>)
};

// const ServiceCard: React.FC<ServiceCardProps & { number: number }> = ({
//   serviceDescription,
//   serviceImage,
//   serviceName,
//   number,
// }) => {
//   return (
//     <div
//       style={{
//         margin: "10px auto",
//         padding: "0px 8px",
//       }}
//     >
//       <div
//         style={{ width: "40px", height: "40px", backgroundColor: "#3A3042" }}
//         className="shadow-lg rounded-md my-4"
//       >
//         {/* <img src={image} style={{ objectFit: "contain" }}></img> */}
//         <p
//           style={{
//             color: "white",
//             fontSize: "20px",
//             textAlign: "center",
//             lineHeight: "40px",
//           }}
//         >
//           {number}
//         </p>
//       </div>
//       <h2 className="mb-2 font-extrabold">{serviceName}</h2>
//       <p>{serviceDescription}</p>
//     </div>
//   );
// };
export default Home;
