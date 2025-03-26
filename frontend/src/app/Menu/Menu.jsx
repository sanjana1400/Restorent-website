  
"use client"

import React from "react"
import { useState } from "react"
import { toast } from "sonner"

const menuCategories = ['Starters', 'Main Course', 'Breads', 'Desserts','Drinks']

const menuItems = {
  Starters: [
        {
          id:1,
          name: 'Papad',
          description: 'Crispy lentil wafers served with chutney and crunchy.',
          price: 3.99
        },
        {
          id:2,
                name: 'Dal Baati Churma',
                description: 'Baked wheat balls served with lentils and sweet churma.',
                price: 100
              },
              {
                id:3,
                name: 'Mirchi Bada',
                description: 'Spicy green chili fritters stuffed with mashed potatoes.',
                price: 50
              },
              {
                id:4,
                name: 'Pyaaz Kachori',
                description: 'Flaky, deep-fried pastry stuffed with spiced onion filling.',
                price: 40
              },
              {
                id:5,
                name: 'Makai Seekh Kebabs',
                description: 'Grilled corn and spice-infused kebabs with makai.',
                price: 60
              },
              {
                id:6,
                name: 'Methi Pakora',
                description: 'Deep-fried fenugreek fritters served with chutney.',
                price: 50
              },
              {
                id:7,
                name: 'Aloo Tikki Chaat ',
                description: 'Spiced potato cutlets topped with yogurt and chutneys.',
                price: 30
              },
              {
                id:8,
                name: 'Dahi Vada',
                description: 'Soft lentil dumplings soaked in yogurt and topped with chutneys.',
                price: 40
              },
              {
                id:9,
                name: 'Kalmi Vada',
                description: 'Deep-fried lentil and gram flour dumplings.',
                price: 50
              },
              {
                id:10,
                name: 'Paneer Pakora',
                description: 'Crispy paneer fritters served with chutney.',
                price: 60
              }
      ],
      'Main Course': [
        {
          id:11,
          name: 'Laal Maas',
          description: 'Fiery mutton curry cooked with red chilies and yogurt.',
          price: 14.99
        },
        {
          id:12,
          name: 'Gatte Ki Sabzi',
          description: 'Gram flour dumplings in a spicy yogurt-based curry.',
          price: 9.99
        },
        {
          id:13,
          name: 'Ker Sangri',
          description: 'Traditional desert bean and berry curry.',
          price: 10.99
        },
        {
          id:14,
          name: 'Dal Panchmel',
          description: 'Five-lentil dish cooked with spices and ghee.',
          price: 8.99
        },
        {
          id:15,
          name: 'Rajasthani Kadhi',
          description: 'Tangy yogurt-based curry with gram flour dumplings.',
          price: 8.99
        },
        {
          id:16,
          name: 'Govind Gatta Curry',
          description: 'Royal stuffed gram flour dumplings in a rich gravy.',
          price: 7.99
        },
        {
          id:17,
          name: 'Mohan Maas',
          description: ' A mild and creamy mutton dish with milk and dry fruits.',
          price: 11.99
        },
        {
          id:18,
          name: 'Dal Panchmel ',
          description: 'A five-lentil dish cooked with spices and ghee.',
          price: 12.99
        },
        {
          id:19,
          name: 'Papad Ki Sabzi',
          description: 'Papad cooked in a spicy yogurt-based curry.',
          price: 9.99
        }
      ],
      Breads: [
        {
          id:20,
          name: 'Missi Roti',
          description: 'Spiced gram flour flatbread served with butter.',
          price: 3.99
        },
        {
          id:21,
          name: 'Bajre Ki Roti',
          description: 'Traditional pearl millet flatbread served with ghee.',
          price: 3.49
        },
        {
           id:22,
          name: 'Tandoori Roti',
          description: 'Clay oven-cooked wheat bread with butter ticki.',
          price: 4.99
        },
        {
          id:23,
          name: 'Makki Ki Roti',
          description: 'Corn flour flatbread with a touch of mustard oil.',
          price: 2.99
        },
        {
          id:24,
          name: 'Naan',
          description: 'Soft and fluffy leavened bread baked in a clay oven.',
          price: 3.99
        },
        {
          id:25,
          name: 'Kulcha',
          description: 'Leavened bread stuffed with spiced potatoes and paneer.',
          price: 4.99
        },
        {
          id:26,
          name: 'Paratha',
          description: 'Layered whole wheat bread cooked with ghee.',
          price: 3.99
        },
        {
          id:27,
          name: 'Puri',
          description: 'Deep-fried whole wheat bread served with potato curry.',
          price: 2.99
        },
        {
          id:28,
          name: 'Laccha Paratha',
          description: 'Layered whole wheat bread cooked with ghee.',
          price: 4.99
        },
        {
          id:29,
          name: 'Paratha',
          description: 'Layered whole wheat bread cooked with ghee.',
          price: 3.99
        },
        {
          id:30,
          name: 'Puri',
          description: 'Deep-fried whole wheat bread served with potato curry.',
          price: 2.99
        },
        {
          id:31,
          name: 'Laccha Paratha',
          description: 'Layered whole wheat bread cooked with ghee.',
          price: 4.99
        }
      ],
      Desserts: [
        {
          id:32,
          name: 'Ghewar',
          description: 'Crispy, honeycomb-textured sweet soaked in sugar syrup',
          price: 6.99
        },
        {
          id:33,
          name: 'Malpua',
          description: 'Sweet, deep-fried pancakes served with rabri',
          price: 5.99
        },
        {
          id:34,
          name: 'Moong Dal Halwa',
          description: 'Rich and aromatic lentil-based halwa with pure ghee build.',
          price: 7.99
        },
        {
          id:35,
          name: 'Imarti',
          description: ' Rajasthani-style crispy and juicy jalebi.',
          price: 3.99
        },
        {
          id:36,
          name: 'Churma Ladoo',
          description: 'weet wheat and jaggery-based ladoos.',
          price: 8.99
        },
        {
          id:37,
          name: 'Mawa Kachori',
          description: 'Sweet stuffed pastry filled with khoya and nuts.',
          price: 6.99
        },
        {
          id:38,
          name: 'Gulab Jamun',
          description: 'Soft and spongy milk solids soaked in sugar syrup.',
          price: 4.99   
        },
        {
          id:39,
          name: 'Ras Malai',
          description: 'Soft and spongy milk solids soaked in sugar syrup.',
          price: 5.99
        },
        {
          id:40,
          name: 'Rabri',
          description: 'Sweet, condensed milk-based dessert with saffron and nuts.',
          price: 6.99
        },
        {
          id:41,
          name: 'Kulfi',
          description: 'Rich and creamy frozen dessert made with milk and nuts.',
          price: 4.99
        },
        {
          id:42,
          name: 'Kheer',
          description: 'Creamy rice pudding flavored with cardamom and saffron.',
          price: 3.99
        },
        {
          id:43,
          name: 'Jalebi',
          description: 'Crispy and juicy deep-fried sweet soaked in sugar syrup.',
          price: 2.99
        },
        {
          id:44,
          name: 'Shahi Tukda',
          description: 'Rich and creamy bread pudding topped with nuts and saffron.',
          price: 5.99
        },
        {
          id:45,
          name: 'Kaju Katli',
          description: 'Soft and fudgy cashew nut fudge topped with silver leaf.',
          price: 6.99
        },
        {
          id:46,
          name: 'Gajar Ka Halwa',
          description: 'Rich and aromatic carrot-based halwa with pure ghee.',
          price: 7.99
        },
        {
          id:47,
          name: 'Besan Ladoo',
          description: 'Sweet gram flour-based ladoos topped with nuts.',
          price: 5.99
        },
        {
          id:48,
          name: 'Rasgulla',
          description: 'Soft and spongy cottage cheese balls soaked in sugar syrup.',
          price: 4.99
        },
        {
          id:49,
          name: 'Sandesh',
          description: 'Sweet and creamy cottage cheese fudge flavored with cardamom.',
          price: 3.99
        },
        {
          id:50,
          name: 'Peda',
          description: 'Soft and fudgy milk-based sweet flavored with cardamom.',
          price: 2.99
        },
        {
          id:51,
          name: 'Kalakand',
          description: 'Soft and creamy milk-based sweet flavored with cardamom.',
          price: 4.99
        },
        {
          id:52,
          name: 'Coconut Ladoo',
          description: 'Sweet coconut-based ladoos topped with nuts.',
          price: 3.99
        },
        {
          id:53,
          name: 'Mysore Pak',
          description: 'Sweet gram flour-based fudge topped with nuts.',
          price: 5.99
        },
        {
          id:54,
          name: 'Pineapple Kesari',
          description: 'Sweet semolina pudding flavored with pineapple and saffron.',
          price: 6.99
        },
        {
          id:55,
          name: 'Rava Ladoo',
          description: 'Sweet semolina-based ladoos topped with nuts.',
          price: 4.99
        },
        {
          id:56,
          name: 'Badam Halwa',
          description: 'Rich and aromatic almond-based halwa with pure ghee.',
          price: 5.99
        },
        {
          id:57,
          name: 'Puran Poli',
          description: 'Sweet lentil-stuffed flatbread served with ghee.',
          price: 6.99
        },
        {
          id:58,
          name: 'Kaju Pista Roll',
          description: 'Sweet cashew and pistachio-based rolls topped with silver leaf.',
          price: 7.99
        },
        {
          id:59,
          name: 'Shrikhand',
          description: 'Sweet and creamy strained yogurt flavored with saffron and nuts.',
          price: 8.99
        },
        {
          id:60,
          name: 'Basundi',
          description: 'Sweet and creamy condensed milk-based dessert with saffron and nuts.',
          price: 9.99
        }
      ],
      Drinks: [
        {
          id:61,
          name: 'Chhaachh',
          description: 'Chhachh is a traditional Indian drink made with yogurt and water.',
          price: 1.99,
        },
        {
          id:62,
          name: 'Curd',
          description: 'Curd is a traditional Indian food and drink made with milk.',
          price: 1.50,
        },
        {
          id:63,
          name: 'Lassi',
          description: 'Lassi is a traditional Indian drink made with yogurt and water.',
          price: 2.99,
        },
        {
          id:64,
          name: 'Tea',
          description: 'Tea is a traditional Indian drink made with milk and water.',
          price: 1.99,
        },
        {
          id:65,
          name: 'Coffee',
          description: 'Coffee is a traditional Indian drink made with milk and water.',
          price: 2.99,
        },
        {
          id:66,
          name: 'Cold Drink',
          description: 'Cold Drink is a traditional Indian drink made with milk and water.',
          price: 1.99,
        },
        {
          id:67,
          name: 'Juice',
          description: 'Juice is a traditional Indian drink made with milk and water.',
          price: 2.99,
        },
        {
          id:68,
          name: 'Shake',
          description: 'Shake is a traditional Indian drink made with milk and water.',
          price: 3.99,
        },
        {
          id:69,
          name: 'Butter Milk',
          description: 'Butter Milk is a traditional Indian drink made with milk and water.',
          price: 1.99,
        },
        {
          id:70,
          name: 'Soda',
          description: 'Soda is a traditional Indian drink made with milk and water.',
          price: 1.99,
        },
        {
          id:71,
          name: 'Lemonade',
          description: 'Lemonade is a traditional Indian drink made with milk and water.',
          price: 1.99,
        },
        {
          id:72,
          name: 'Water',
          description: 'Water is a traditional Indian drink made with milk and water.',
          price: 1.99,
        },
        {
          id:73,
          name: 'Milk',
          description: 'Milk is a traditional Indian drink made with milk and water.',
          price: 1.99,
        },
        {
          id:74,
          name: 'Milk Shake',
          description: 'Milk Shake is a traditional Indian drink made with milk and water.',
          price: 2.99,
        },
      ]
}

function Menu({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState("starters")

  const AddToCart = (item) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please Signup first to add items to the cart.");
      window.location.href = "/Signup"; // Redirect to login page
      return;
    }
    addToCart(item)
    toast.success(`${item.name} added to cart!`)
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
      
       {/* Category Tabs */}
         <div className="flex flex-wrap justify-center gap-4 mb-8">
           {Object.keys(menuItems).map((category) => (
             <button
               key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category ? "bg-black text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

{/* Menu Items Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {menuItems[activeCategory]?.length > 0 &&
    menuItems[activeCategory].map((item) => (
      <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
          <p className="text-gray-600 mb-4">{item.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-primary">${item.price.toFixed(2)}</span>
            <button
              onClick={() => AddToCart(item)}
              className="bg-primary hover:bg-amber-100 text-black px-4 py-2 rounded border-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ))}
</div>
    </div>
  )
}

export default Menu

