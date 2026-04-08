import React from 'react';
import { ShoppingCart, TrendingUp, Users } from 'lucide-react';

export const shoppersData = {
  title: "For Shoppers and\nFood & Beverage Buyers",
  subtitle: "Discover, compare, and shop with confidence. Our platform gives you access to the market info you need to make informed decisions and secure the best deals.",
  icon: <ShoppingCart className="w-[22px] h-[22px] stroke-[2.5]" />,
  imagePath: "https://socal-theta-psi.vercel.app/Assets/For Shoppers section.png",
  imageAlt: "Shopper checking vegetables",
  reverse: false,
  grayBackground: false,
  features: [
    {
      title: "Search Farmers Markets",
      description: "Find recommended markets based on your location and preference",
      link: "https://app.farmersmarketsocal.com/farmers-markets-near-me"
    },
    {
      title: "See Market Details",
      description: "Get info like parking & bathroom availability, number of vendors, accepted forms of payment, promotional announcements and more"
    },
    {
      title: "Buy Direct from Vendors",
      description: "Shop local or regional with 3rd party and private delivery options",
      link: "https://app.farmersmarketsocal.com/search-vendors"
    },
    {
      title: "Easy Product Search",
      description: "Search products across regions, by vendor, by keyword or based on attributes like organic, no sugar, non-pasteurized and more",
      link: "https://app.farmersmarketsocal.com/search-products"
    },
    {
      title: "Get to Know Your Farmers",
      description: "Know who you're buying from with Vendor and Farmer Profiles"
    },
    {
      title: "Product Transparency",
      description: "Know what you're buying with product details including ingredients, health benefits and more"
    }
  ]
};

export const farmersData = {
  title: "For Farmers and Vendors",
  subtitle: "Reach more customers and grow your revenue. Our seller tools help you find more buyers, manage orders, and get paid fast.",
  icon: <TrendingUp className="w-[22px] h-[22px] stroke-[2.5]" />,
  imagePath: "https://socal-theta-psi.vercel.app/Assets/For farmers and vendors section.png",
  imageAlt: "Farmer loading carrots into truck",
  reverse: true,
  grayBackground: true,
  features: [
    {
      title: "Sell to More Buyers",
      description: "Earn more money and sell more online or in-person at farmers markets"
    },
    {
      title: "Low-Cost Shipping",
      description: "Get the best rates for shipping your orders with UPS, FedEx, USPS"
    },
    {
      title: "Fast Payments",
      description: "Get paid on orders directly to your bank account within 24-48 hours of your sale"
    },
    {
      title: "New Wholesale Opportunities",
      description: "Make it easy for wholesale buyers to find you and discover your products"
    },
    {
      title: "Manage Wholesale Orders",
      description: "Create invoices, collect payment and manage transactions online"
    }
  ]
};

export const managersData = {
  title: "For Managers",
  subtitle: "Increase your market's visibility and improve operational efficiency. Our marketing suite helps you build your online presence, manage promotions and attract more shoppers",
  icon: <Users className="w-[22px] h-[22px] stroke-[2.5]" />,
  imagePath: "https://socal-theta-psi.vercel.app/Assets/For Managers Section.png",
  imageAlt: "Market manager at stall",
  reverse: false,
  grayBackground: false,
  features: [
    {
      title: "Simplify Your Operations",
      description: "Manage vendors, vendor pay-outs and new vendor applications"
    },
    {
      title: "Bring in More Shoppers",
      description: "Increase market visibility and extend accessibility beyond the hyper-local region"
    },
    {
      title: "Personalize Your Market Profile",
      description: "Manage market details like location/address, operating days and hours, market reviews and unique attributes"
    },
    {
      title: "Custom Announcements and Promotions",
      description: "Promote new markets, new vendors, and programs that support local communities"
    }
  ]
};
