import Referral from "../images/referral.png";
import Settings from "../images/settings.png";
import Review from "../images/review.png";

const DashOptions = [
  {
    id: 1,
    img: Review,
    title: "Review Orders",
    action: "/dashboard",
  },

  {
    id: 2,
    img: Settings,
    title: "Settings",
    action: "/dashboard",
  },
  {
    id: 3,
    img: Referral,
    title: "Referral Program",
    action: "/dashboard",
  },
];

export default DashOptions;
