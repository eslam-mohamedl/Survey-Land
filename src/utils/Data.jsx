import BoxHowWork from "../components/molecules/BoxHowWork";
import { FaUser, FaBook, FaPlay } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      title: "Step 1",
      description: "Register for an account in just a few minutes.",
      icon: <FaUser size={24} />,
    },
    {
      title: "Step 2",
      description: "Browse our wide selection of courses and resources.",
      icon: <FaBook size={24} />,
    },
    {
      title: "Step 3",
      description: "Start learning with interactive lessons and videos.",
      icon: <FaPlay size={24} />,
    },
  ];

  return (
    <BoxHowWork
      cardsData={steps}
      NumberCard={3}
      variant="elevated"
      hoverable
    />
  );
};

export default HowItWorks;
