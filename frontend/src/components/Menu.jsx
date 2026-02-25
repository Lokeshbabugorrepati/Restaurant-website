import React, { useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  const menuItems = {
    starters: [
      {
        name: "Medu Vada",
        price: "₹120",
        description: "Crispy lentil donuts served with sambar & chutney",
      },
      {
        name: "Samosa (2 pcs)",
        price: "₹80",
        description: "Crispy pastry filled with spiced potatoes",
      },
      {
        name: "Paneer 65",
        price: "₹220",
        description: "Spicy fried cottage cheese with curry leaves",
      },
      {
        name: "Chicken 65",
        price: "₹280",
        description: "Spicy South Indian fried chicken",
      },
      {
        name: "Masala Papad",
        price: "₹60",
        description: "Crispy papad topped with onions & tomatoes",
      },
    ],
    mains: [
      {
        name: "Masala Dosa",
        price: "₹150",
        description: "Crispy rice crepe with spiced potato filling",
      },
      {
        name: "Ghee Roast Dosa",
        price: "₹180",
        description: "Crispy dosa roasted in pure ghee",
      },
      {
        name: "Idli Sambar (4 pcs)",
        price: "₹100",
        description: "Steamed rice cakes with sambar & chutney",
      },
      {
        name: "Hyderabadi Biryani",
        price: "₹320",
        description: "Aromatic rice with chicken/veg & raita",
      },
      {
        name: "Chettinad Chicken Curry",
        price: "₹350",
        description: "Spicy curry with aromatic Chettinad spices",
      },
      {
        name: "Kerala Fish Curry",
        price: "₹380",
        description: "Traditional fish curry in coconut gravy",
      },
      {
        name: "Bisi Bele Bath",
        price: "₹180",
        description: "Karnataka-style rice with lentils & vegetables",
      },
      {
        name: "Uttapam",
        price: "₹140",
        description: "Thick rice pancake with onions & tomatoes",
      },
    ],
    desserts: [
      {
        name: "Payasam",
        price: "₹120",
        description: "Traditional South Indian sweet pudding",
      },
      {
        name: "Mysore Pak",
        price: "₹100",
        description: "Rich gram flour sweet with ghee",
      },
      {
        name: "Gulab Jamun (3 pcs)",
        price: "₹90",
        description: "Soft milk balls in rose-flavored syrup",
      },
      {
        name: "Rasmalai (3 pcs)",
        price: "₹140",
        description: "Cottage cheese dumplings in sweet milk",
      },
      {
        name: "Banana Halwa",
        price: "₹110",
        description: "Sweet banana dessert with ghee & cardamom",
      },
    ],
    drinks: [
      {
        name: "Filter Coffee",
        price: "₹60",
        description: "Authentic South Indian filter coffee",
      },
      {
        name: "Masala Chai",
        price: "₹50",
        description: "Spiced Indian tea",
      },
      {
        name: "Buttermilk (Chaas)",
        price: "₹40",
        description: "Spiced yogurt drink",
      },
      {
        name: "Fresh Lime Soda",
        price: "₹70",
        description: "Sweet or salted lime soda",
      },
      {
        name: "Mango Lassi",
        price: "₹90",
        description: "Creamy mango yogurt drink",
      },
    ],
  };

  const categories = [
    { id: "starters", label: "Starters", icon: "🥘" },
    { id: "mains", label: "Main Courses", icon: "🍛" },
    { id: "desserts", label: "Desserts", icon: "🍮" },
    { id: "drinks", label: "Beverages", icon: "☕" },
  ];

  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <h2 className="menu-title">Our Menu</h2>
        <p className="menu-subtitle">
          Authentic South Indian delicacies made with love
        </p>

        <div className="menu-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="menu-items">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="item-header">
                <h3 className="item-name">{item.name}</h3>
                <span className="item-price">{item.price}</span>
              </div>
              <p className="item-description">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="menu-note">
          ✨ And many more delicious items available! Visit us to explore our
          complete menu. ✨
        </p>
      </div>
    </section>
  );
};

export default Menu;
