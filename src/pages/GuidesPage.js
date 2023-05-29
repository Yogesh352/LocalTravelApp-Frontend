import React, { useEffect, useState } from "react";
import { Grid, Text, Input, Box, Stack, Group } from "@mantine/core";
import { SearchIcon } from "../icons";
import tourguide1 from "../images/tourguide1.jpg";
import { guideData } from "../data/GuideData";
import CardDisplay from "../components/Card/CardDisplay";
import { useNavigate } from "react-router-dom";

const GuidesPage = () => {

  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/users/admin")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Grid className="xl:h-1/2 h-full bg-black px-40 pt-10 rounded-b-lg">
        <Grid.Col className="h-full" span={6}>
          <Text className="text-white font-bold 2xl:text-3xl md:text-lg w-[240px] 2xl:w-[400px]">
            Find the
            <span className="text-gray-400"> buddy</span> to travel the world
          </Text>
          <Input
            className="w-1/2 mt-10"
            size="lg"
            radius="lg"
            icon={<SearchIcon />}
            placeholder="Find Videos For Locations"
          />
        </Grid.Col>
        <Grid.Col className="h-full" span={6}>
          <Grid className="h-full">
            <Grid.Col span={12} className="h-full ">
              <img
                src={tourguide1}
                alt="logo"
                className="h-full ml-[20%] w-[80%] rounded-lg"
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
      <Stack className="px-40">
        <Text className="text-black font-bold text-2xl mt-10">
          GUIDES FOR <span className="text-gray-500">YOU</span>
        </Text>
        <Grid className="mt-4">
          {userData.map((user) => (
            <Grid.Col span={4} 
            className="cursor-pointer" 
            key={user.id}
            onClick={() => {
              navigate("guide", {
                state: {
                  id: user.id,
                  email: user.email,
                  name: user.name,
                  image: user.link,
                  languageSpoken: user.languageSpoken,
                  selfIntro: user.selfIntro,
                  // keyHighlights: tour.highlight,
                  // itenary: tour.itinerary,
                  // reviews: tour.comment,
                },
              });
            }}
            >
              <CardDisplay
                image={user.link}
                title={user.name}
                likes={user.likes}
                description={user.selfIntro}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </>
  );
};

//   return (
//     <>
//       <Grid className="xl:h-1/2  h-full bg-black px-40 pt-10 rounded-b-lg">
//         <Grid.Col className="h-full" span={6}>
//           <Text className="text-white font-bold 2xl:text-3xl md:text-lg w-[240px] 2xl:w-[400px]">
//             Find the
//             <span className="text-gray-400"> buddy</span> to travel the world
//           </Text>
//           <Input
//             className="w-1/2 mt-10"
//             size="lg"
//             radius="lg"
//             icon={<SearchIcon />}
//             placeholder="Find Videos For Locations"
//           />
//         </Grid.Col>
//         <Grid.Col className="h-full" span={6}>
//           <Grid className="h-full">
//             <Grid.Col span={12} className="h-full ">
//               <img
//                 src={tourguide1}
//                 alt="logo"
//                 className="h-full ml-[20%] w-[80%] rounded-lg"
//               />
//             </Grid.Col>
//           </Grid>
//         </Grid.Col>
//       </Grid>
//       <Stack className="px-40">
//         <Text className="text-black font-bold text-2xl mt-10">
//           GUIDES FOR <span className="text-gray-500">YOU</span>
//         </Text>
//         <Grid className="mt-4">
//           {guideData.map((guide) => (
//             <Grid.Col span={4} className="cursor-pointer">
//               <CardDisplay
//                 image={guide.image}
//                 title={guide.name}
//                 likes={guide.likes}
//                 description={guide.description}
//               />
//             </Grid.Col>
//           ))}
//         </Grid>
//       </Stack>
//     </>
//   );
// };

export default GuidesPage;
