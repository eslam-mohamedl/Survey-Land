import BoxHowWork from "./../components/molecules/BoxHowWork.jsx";

const HowItWorks = () => {
    const steps =[
       {
      title: "Step 1",
      description: "Register for an account in just a few minutes."
    },
    {
      title: "Step 2",
      description: "Browse our wide selection of courses and resources."
    },
    {
      title: "Step 3",
      description: "Start learning and track your progress easily."
    }
    ];
     console.log("steps from HowItWorks:", steps);
   return( 
    <div>
        <BoxHowWork cardsData={steps} variant="elevated"  />
    </div>
   )

}

export default HowItWorks;