import Link from "next/link";
import img01 from "../img/img-01.png";
import img02 from "../img/img-02.png";
import img03 from "../img/img-03.png";
import img04 from "../img/img-04.png";
import img05 from "../img/img-05.png";
import img06 from "../img/img-06.png";
import img07 from "../img/img-07.png";
import img08 from "../img/img-08.png";
import img09 from "../img/img-09.png";
import img10 from "../img/img-10.png";
import fig01 from "../img/figma-01.png";
import fig02 from "../img/figma-02.png";
import fig03 from "../img/figma-03.jpeg";

// constant/data.js
const data = [
  // E-Commerce
  { id: 1, category: "Services", title: "Events Website", desc: "Hygiene Music and Arts Festival 2025.", icon: img01, link: "https://hygienemusicandartsfestival.org/"},
  { id: 2, category: "Services", title: "Accounting Website", desc: "Kaven Financial and Accounting.", icon: img02, link: "https://kavenfinancialservices.com/"},
  { id: 3, category: "Services", title: "Barber Website", desc: "ATM Barbers.", icon: img03, link: "https://atmbarbers.com/"},
  { id: 14, category: "Services", title: "Digital Agency", desc: "XenTech Solutions", icon: img04, link: "https://i.postimg.cc/Gm2kb9P9/Xentech-LP.jpg"},
  { id: 13, category: "Services", title: "Finance Website", desc: "XenTech Financials", icon: img04, link: "https://xentechfinancials.com/"},

  // Restaurant
  { id: 4, category: "Ecom", title: "SkinCare Store", desc: "Skins Nutrition Skincare: #1 Online Skin Care Store", icon: img08, link: "https://skinsnutritionskincare.com/"},
  { id: 5, category: "Ecom", title: "Sneakers Store", desc: "REATIVE CUSTOM FASHIONS", icon: img09, link: "https://creativecustomfashions.com/"},
  { id: 6, category: "Ecom", title: "Lipstick Store", desc: "Metallic Soul: #1 Lip Glosses Store in Aurora, IL", icon: img10, link: "https://metallic-soul.com/"},

  // Business
  { id: 7, category: "business", title: "Catering Website", desc: "Linda's Best Hotdog & Catering in Las Vegas", icon: img07, link: "https://lindascart.com/"},
  { id: 8, category: "business", title: "Old Age Home", desc: "Compassionate Care Hospice LLC", icon: img05, link: "https://cch.care/"},
  { id: 9, category: "business", title: "DryWall & Painting", desc: "Esparza Drywallllc", icon: img06, link: "https://esparzadrywallrepair.com/"},

  // Creative
  { id: 10, category: "Figma", title: "Design Studio", desc: "Portfolio with animated galleries.", icon: fig01, link: ""},
  { id: 11, category: "Figma", title: "Design Studio", desc: "Portfolio with animated galleries.", icon: fig02, link: ""},
  { id: 12, category: "Figma", title: "Design Studio", desc: "Portfolio with animated galleries.", icon: fig03, link: ""},
];

export default data;
