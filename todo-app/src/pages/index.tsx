import { type NextPage } from "next";
import { api } from "../utils/api";
import Navbar from "../components/Navbar";
import AddTask from "../components/AddTask";
import GetTasks from "../components/GetTasks";
import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
    <Navbar />
    <Box
    bgColor={"black"}
    h={"100vh"}
    >
    <AddTask />
    <GetTasks />
    </Box>
    </>
  );
};

export default Home;
