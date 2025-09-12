import {createBrowserRouter } from 'react-router-dom';
import Home from '@/components/pages/Home';
import Contact  from '@/components/pages/Contact';
import FAQs from '@/components/pages/FAQs';
import Pricing from '@/components/pages/Pricing';
import About from '@/components/pages/About';
import Dashboard from '@/components/pages/Dashboard';
import FillingFrom from '@/components/pages/FillingFrom';
import OTP from '@/components/pages/OTP';
import Preview from '@/components/pages/Preview';
import Profile from '@/components/pages/Profile';
import ResetPassword from '@/components/pages/ResetPassword';
import SignUp from '@/components/pages/SignUp';
import SignIn from '../components/pages/SignIn';
import SurveyDetails from '@/components/pages/SurveyDetails';
import SurveyUpsert from '@/components/pages/SurveyUpsert';
import ForgetPasssword from '../components/pages/ForgetPasssword';
import PublicTemplate from "./../components/templates/PublicTemplate";
import DashboardTemplate from "./../components/templates/DashboardTemplate";
import AuthTemplate from "../components/templates/AuthTemplate";
import AuthGuard from "./../guards/AuthGuard";
const AppRouter = createBrowserRouter([
      // Public Template
  {
    path:"/",
    element: <PublicTemplate />,
    children:[
     {index:true, element: <Home />},
      {path:"/about-us", element: <About />},
      {path:"/contact-us", element: <Contact />},
      {path:"/faqs", element: <FAQs />},
      {path:"/pricing", element: <Pricing />},
    ],
  },
    // Auth Template
  {
    path: "/",
    element: <AuthTemplate />,
    children: [
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      { path: "otp", element: <OTP /> },
      { path: "forget-password", element: <ForgetPasssword /> },
      { path: "new-password", element: <ResetPassword /> },
    ],
  },
    // Dashboard Template
    {
      path:"/",
      element:<AuthGuard />,
      children:[
  {
    path: "/",
    element: <DashboardTemplate />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "fillingfrom", element: <FillingFrom /> },
      { path: "preview", element: <Preview /> },
      { path: "profile", element: <Profile /> },
      { path: "surveydetails", element: <SurveyDetails /> },
      { path: "surveyupsert", element: <SurveyUpsert /> },
    ],
  },
      ]
    },
 /// Page Not Page
  { 
        path: "*",
         element: <div>Page Not Found</div>
  }
]);

export default AppRouter;