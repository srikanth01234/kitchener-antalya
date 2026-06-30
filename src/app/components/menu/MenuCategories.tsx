"use client";

import React, { useEffect, useRef, useState } from "react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tags?: string[];
}

const menuData: Record<string, MenuItem[]> = {
  "Appetizers": [
    { 
      name: "Babaganoush", 
      description: "Smoky roasted eggplant blended with tahini, olive oil, garlic, and yogurt.", 
      price: "$9.00", 
      image: "/menu/babaganoush.png",
      tags: ["Vegetarian"] 
    },
    { 
      name: "Spicy Mashed Salad (Ezme)", 
      description: "Finely chopped tomatoes, peppers, onions, walnuts, garlic, and pomegranate molasses.", 
      price: "$9.00", 
      image: "/menu/spicy-mashed-salad.png",
      tags: ["Spicy", "Vegetarian"] 
    },
    { 
      name: "Mixed Appetizer Plate", 
      description: "A selection of our best cold starters including Hummus, Haydari, Babaganoush, and Ezme.", 
      price: "$22.00", 
      image: "/menu/mixed-appetizer-plate.png",
      tags: ["Popular"] 
    },
    { 
      name: "Sigara Boregi (5 pcs)", 
      description: "Crispy rolled pastry filled with feta cheese and parsley, fried to golden perfection.", 
      price: "$10.00", 
      image: "/menu/sigara-boregi.png",
      tags: ["Traditional"] 
    },
    { 
      name: "Haydari", 
      description: "Thick creamy strained yogurt infused with fresh dill, mint, garlic, and olive oil.", 
      price: "$9.00", 
      image: "/menu/haydari.png",
      tags: ["Vegetarian"] 
    },
    { 
      name: "Hummus", 
      description: "Smooth blend of chickpeas, tahini, garlic, fresh lemon juice, and olive oil.", 
      price: "$9.00", 
      image: "/menu/hummus.png",
      tags: ["Vegetarian"] 
    },
    { 
      name: "Lentil Soup", 
      description: "Traditional Turkish soup made with red lentils, herbs, and spices, served with fresh bread.", 
      price: "$8.00", 
      image: "/menu/lentil-soup.png",
      tags: ["Warm & Hearty"] 
    },
  ],
  "Salads": [
    { 
      name: "Green Salad", 
      description: "Crisp seasonal greens, cucumber, tomato, green pepper, olive oil, and lemon dressing.", 
      price: "$11.00", 
      image: "/menu/green-salad.png",
      tags: ["Fresh"] 
    },
    { 
      name: "Greek Salad", 
      description: "Fresh romaine lettuce, tomatoes, cucumbers, red onion, feta cheese, and kalamata olives.", 
      price: "$13.00", 
      image: "/menu/greek-salad.png",
      tags: ["Vegetarian"] 
    },
    { 
      name: "Shepherd Salad", 
      description: "Diced tomatoes, cucumbers, onions, and parsley tossed in olive oil and lemon juice.", 
      price: "$12.00", 
      image: "/menu/shepherd-salad.png",
      tags: ["Traditional"] 
    },
    { 
      name: "Caesar Salad", 
      description: "Romaine lettuce tossed in Caesar dressing, topped with parmesan cheese and garlic croutons.", 
      price: "$12.00", 
      image: "/menu/caesar-salad.png"
    },
  ],
  "Kebabs": [
    { 
      name: "Adana (Mild)", 
      description: "Skewered minced lamb seasoned with red bell pepper, grilled over charcoal, served with rice.", 
      price: "$21.00", 
      image: "/menu/adana(mild).png",
      tags: ["Charcoal Grilled"] 
    },
    { 
      name: "Veal Shish", 
      description: "Tender chunks of marinated veal, skewered and charcoal grilled, served with rice and salad.", 
      price: "$23.00", 
      image: "/menu/veal-shish.png",
      tags: ["Charcoal Grilled"] 
    },
    { 
      name: "Lamb Chops", 
      description: "Marinated tender lamb chops grilled to perfection, served with rice and seasonal vegetables.", 
      price: "$29.00", 
      image: "/menu/lamb-chops.png",
      tags: ["Popular", "Charcoal Grilled"] 
    },
    { 
      name: "Lamb Shish", 
      description: "Skewered cubes of marinated tender lamb grilled over hot charcoal, served with rice.", 
      price: "$25.00", 
      image: "/menu/lamb-shish.png",
      tags: ["Charcoal Grilled"] 
    },
    { 
      name: "Kofta", 
      description: "Turkish style grilled lamb meatballs blended with spices and herbs, served with rice.", 
      price: "$20.00", 
      image: "/menu/kofta.png",
      tags: ["Traditional"] 
    },
    { 
      name: "Chicken Shish", 
      description: "Charcoal grilled skewered chunks of marinated chicken breast, served with rice.", 
      price: "$21.00", 
      image: "/menu/chicken-shish.png",
      tags: ["Popular"] 
    },
    { 
      name: "Chicken Wings", 
      description: "Marinated chicken wings grilled over hot charcoal, served with rice and salad.", 
      price: "$20.00", 
      image: "/menu/chicken-wings.png"
    },
    { 
      name: "Chicken Adana", 
      description: "Minced chicken seasoned with red peppers and spices, grilled on skewers, served with rice.", 
      price: "$20.00", 
      image: "/menu/chicken-adana.png"
    },
    { 
      name: "Doner", 
      description: "Authentic vertical spit-roasted shaved meat doner, served with rice and salad.", 
      price: "$21.00", 
      image: "/menu/doner.png"
    },
    { 
      name: "Mixed Doner", 
      description: "A combination of spit-roasted shaved meat doner and chicken doner, served with rice.", 
      price: "$22.00", 
      image: "/menu/mixed-doner.png"
    },
    { 
      name: "Meat Doner", 
      description: "Shaved vertical spit-roasted beef and lamb doner served over traditional Turkish rice.", 
      price: "$21.00", 
      image: "/menu/meat-doner.png"
    },
    { 
      name: "Chicken Doner", 
      description: "Seasoned spit-roasted chicken shaved doner meat, served with rice and fresh salad.", 
      price: "$19.00", 
      image: "/menu/chicken-doner.png"
    },
    { 
      name: "Iskender Kebab", 
      description: "Shaved meat doner served over pita pieces, topped with hot tomato sauce, melted butter, and yogurt.", 
      price: "$24.00", 
      image: "/menu/iskender-kebab.png",
      tags: ["Signature"] 
    },
    { 
      name: "Chicken Iskender", 
      description: "Shaved chicken doner served over warm pita pieces, finished with tomato sauce and yogurt.", 
      price: "$22.00", 
      image: "/menu/chicken-iskender.png"
    },
  ],
  "Sandwiches & Wraps": [
    { 
      name: "Meat Doner Sandwich", 
      description: "Shaved meat doner stuffed in fresh Turkish bread with lettuce, onion, and tomato.", 
      price: "$14.00", 
      image: "/menu/meat-doner-sandwich.png"
    },
    { 
      name: "Meat Doner Wrap", 
      description: "Shaved meat doner wrapped in thin lavash bread with fresh vegetables and house sauce.", 
      price: "$14.00", 
      image: "/menu/wraps.png",
      tags: ["Popular"] 
    },
    { 
      name: "Chicken Doner Wrap", 
      description: "Spit-roasted chicken doner wrapped in warm lavash with garlic sauce and salad.", 
      price: "$13.00", 
      image: "/menu/chicken-doner-wrap.png"
    },
    { 
      name: "Chicken Doner Sandwich", 
      description: "Shaved chicken doner served inside toasted bread with tomato, lettuce, and onions.", 
      price: "$13.00", 
      image: "/menu/chicken-doner-sandwich.png"
    },
    { 
      name: "Adana Wrap", 
      description: "Charcoal grilled minced lamb Adana shish wrapped in lavash bread with sumac onions.", 
      price: "$15.00", 
      image: "/menu/adana-wrap.png",
      tags: ["Spicy"] 
    },
    { 
      name: "Kofta Wrap", 
      description: "Turkish grilled meatballs wrapped in lavash bread with tomato, lettuce, and onions.", 
      price: "$14.00", 
      image: "/menu/kofta-wrap.png"
    },
  ],
  "Special Mix Platters": [
    { 
      name: "Kebab Mix", 
      description: "A grand selection of Adana kebab, Veal shish, Chicken shish, and Kofta, served with rice.", 
      price: "$49.00", 
      image: "/menu/kebab-mix.png",
      tags: ["For 2 People"] 
    },
    { 
      name: "Chicken Lovers Mix", 
      description: "A platter of Chicken shish, Chicken Adana, and Chicken wings, served with rice and sides.", 
      price: "$45.00", 
      image: "/menu/chicken-lovers-mix.png"
    },
    { 
      name: "The Antalya Special", 
      description: "The ultimate feast: Lamb shish, Chicken shish, Adana kebab, Lamb chops, and Meat doner.", 
      price: "$79.00", 
      image: "/menu/antalalya-special.png",
      tags: ["Chef's Selection", "For 3-4 People"] 
    },
  ],
  "Specialty Dishes": [
    { 
      name: "Manti", 
      description: "Tiny boiled Turkish dumplings filled with seasoned ground beef, topped with garlic yogurt and hot butter sauce.", 
      price: "$19.00", 
      image: "/menu/manti.png",
      tags: ["Traditional"] 
    },
    { 
      name: "Ali Nazik", 
      description: "Smoky roasted eggplant puree with yogurt, topped with tender sautéed veal cubes.", 
      price: "$23.00", 
      image: "/menu/ali-nazik.png",
      tags: ["Signature"] 
    },
    { 
      name: "Adana Ali Nazik", 
      description: "Eggplant puree with garlic yogurt, topped with a skewer of hot charcoal-grilled Adana kebab.", 
      price: "$22.00", 
      image: "/menu/adana-ali-nazik.png"
    },
    { 
      name: "Yogurtlu Kuzu", 
      description: "Tender cubes of lamb cooked in a savory broth, served over yogurt and crispy toasted bread pieces.", 
      price: "$24.00", 
      image: "/menu/yogurtlu-kuzu.png"
    },
  ],
  "Pides": [
    { 
      name: "Lahmacun", 
      description: "Very thin flatbread topped with minced beef, lamb, tomatoes, onions, garlic, and herbs.", 
      price: "$8.00", 
      image: "/menu/lahmacun.png",
      tags: ["Popular"] 
    },
    { 
      name: "Sujuk Pide", 
      description: "Boat-shaped Turkish flatbread baked with spicy garlic beef sausage and mozzarella cheese.", 
      price: "$17.00", 
      image: "/menu/sujuk-pide.png"
    },
    { 
      name: "Cheese Pide", 
      description: "Flatbread topped with rich mozzarella cheese and baked in a stone oven.", 
      price: "$15.00", 
      image: "/menu/cheese-pide.png",
      tags: ["Vegetarian"] 
    },
    { 
      name: "Veal Doner Pide with Mozzarella Cheese", 
      description: "Stone baked flatbread filled with shaved veal doner and melted mozzarella cheese.", 
      price: "$18.00", 
      image: "/menu/veal-doner-pide.png"
    },
    { 
      name: "Veggie Pide", 
      description: "Baked flatbread topped with tomatoes, peppers, olives, mushrooms, and mozzarella cheese.", 
      price: "$16.00", 
      image: "/menu/veggie-pide.png",
      tags: ["Vegetarian"] 
    },
    { 
      name: "Ground Beef Pide", 
      description: "Baked flatbread stuffed with sautéed ground beef, onions, tomatoes, and mozzarella.", 
      price: "$17.00", 
      image: "/menu/ground-beef-pide.png"
    },
    { 
      name: "Spinach Cheese Pide", 
      description: "Flatbread stuffed with fresh spinach, feta cheese, and mozzarella, baked golden.", 
      price: "$16.00", 
      image: "/menu/spinach-cheese-pide.png",
      tags: ["Vegetarian"] 
    },
    { 
      name: "Mixed Pide", 
      description: "Baked flatbread topped with sujuk, ground beef, veal doner, and mozzarella cheese.", 
      price: "$19.00", 
      image: "/menu/mixed-pide.png",
      tags: ["Traditional"] 
    },
    { 
      name: "Chicken Doner Pide with Mozzarella Cheese", 
      description: "Baked flatbread stuffed with spit-roasted chicken doner and melted mozzarella.", 
      price: "$17.00", 
      image: "/menu/chicken-doner-pide.png"
    },
  ],
  "Sides": [
    { 
      name: "Rice", 
      description: "Buttery traditional Turkish pilaf.", 
      price: "$4.00", 
      image: "/menu/rice.png"
    },
    { 
      name: "Yogurt", 
      description: "Thick and creamy house-strained yogurt.", 
      price: "$4.00", 
      image: "/menu/yogurt.png"
    },
    { 
      name: "Kofta (1 Skewer)", 
      description: "One skewer of charcoal-grilled lamb meatballs.", 
      price: "$8.00", 
      image: "/menu/kofta(skw).png"
    },
    { 
      name: "Lamb Chops (4 pcs)", 
      description: "Four pieces of marinated charcoal-grilled lamb chops.", 
      price: "$22.00", 
      image: "/menu/lamb-chops(4pcs).png"
    },
    { 
      name: "Veal Shish (1 Skewer)", 
      description: "One skewer of tender marinated veal shish cubes.", 
      price: "$9.00", 
      image: "/menu/veal-shish(skw).png"
    },
    { 
      name: "French Fries (Regular)", 
      description: "Crispy golden fried regular-cut potatoes.", 
      price: "$5.00", 
      image: "/menu/french-fries.png"
    },
    { 
      name: "French Fries (Large)", 
      description: "Large portion of crispy golden fried fries.", 
      price: "$8.00", 
      image: "/menu/french-fries-large.png"
    },
    { 
      name: "Bulgur", 
      description: "Cracked wheat pilaf cooked with tomatoes and onions.", 
      price: "$4.00", 
      image: "/menu/bulgur.png"
    },
    { 
      name: "Bread", 
      description: "Freshly baked traditional Turkish flatbread.", 
      price: "$2.00", 
      image: "/menu/bread.png"
    },
    { 
      name: "Adana (1 Skewer)", 
      description: "One skewer of spicy charcoal-grilled minced lamb shish.", 
      price: "$8.00", 
      image: "/menu/adana(skw).png"
    },
  ],
  "Drinks": [
    { 
      name: "Soda", 
      description: "Coke, Diet Coke, Coke Zero, Sprite, Ginger Ale, Iced Tea, or Sparkling Water.", 
      price: "$2.50", 
      image: "/menu/soda.png"
    },
    { 
      name: "Bottle of Water", 
      description: "Chilled bottled spring water.", 
      price: "$2.00", 
      image: "/menu/water.png"
    },
    { 
      name: "Uludag (Orange / White)", 
      description: "Traditional sweet carbonated soft drink from Turkey.", 
      price: "$3.00", 
      image: "/menu/uludag.png"
    },
    { 
      name: "Ayran (Yogurt Drink)", 
      description: "Traditional cold yogurt beverage mixed with salt.", 
      price: "$3.50", 
      image: "/menu/ayran.png",
      tags: ["Traditional"] 
    },
    { 
      name: "Turkish Tea Pot", 
      description: "Brewed black tea served in a traditional double teapot.", 
      price: "$9.00", 
      image: "/menu/tea-pot.png",
      tags: ["For sharing"] 
    },
    { 
      name: "Perrier (Carbonated Water)", 
      description: "Sparkling natural mineral water.", 
      price: "$3.00", 
      image: "/menu/parrier.png"
    },
    { 
      name: "Turkish Tea", 
      description: "A single glass of freshly brewed hot black tea.", 
      price: "$2.50", 
      image: "/menu/tea.png"
    },
    { 
      name: "Turkish Coffee", 
      description: "Rich, strong Turkish coffee brewed in traditional pots, served with Turkish delight.", 
      price: "$4.00", 
      image: "/menu/coffee.png",
      tags: ["Popular"] 
    },
    { 
      name: "Shalgam", 
      description: "Traditional pickled turnip juice, spicy or mild option.", 
      price: "$3.00", 
      image: "/menu/shalgam.png"
    },
    { 
      name: "Dimes Juice", 
      description: "Delicious premium fruit juices imported from Turkey.", 
      price: "$3.00", 
      image: "/menu/dimes-juice.png"
    },
  ],
  "Desserts": [
    { 
      name: "Baklava (3 Pieces)", 
      description: "Layered phyllo pastry filled with crushed pistachios and sweetened with syrup.", 
      price: "$9.00", 
      image: "/menu/baklava.png",
      tags: ["Signature"] 
    },
    { 
      name: "Trilice (Milk Cake)", 
      description: "Soft sponge cake soaked in three kinds of milk, topped with caramel layer.", 
      price: "$9.00", 
      image: "/menu/trilice.png",
      tags: ["Popular"] 
    },
    { 
      name: "Sutlac", 
      description: "Classic oven-baked creamy Turkish rice pudding, served chilled.", 
      price: "$8.00", 
      image: "/menu/sutlac.png",
      tags: ["Traditional"] 
    },
    { 
      name: "Cold Baklava (3 Pieces)", 
      description: "Modern chilled baklava soaked in milk syrup and dusted with cocoa powder.", 
      price: "$10.00", 
      image: "/menu/cold-baklava.png",
      tags: ["New Specialty"] 
    },
  ]
};

const MenuCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Appetizers");
  const [activeCategory, setActiveCategory] = useState<string>("Appetizers");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleCategoryChange = (category: string) => {
    if (category === selectedCategory || isTransitioning) return;
    setIsTransitioning(true);
    setSelectedCategory(category);
    setTimeout(() => {
      setActiveCategory(category);
      setIsTransitioning(false);
    }, 250);
  };

  const categories = Object.keys(menuData);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#fdfdfb] py-16 px-6 md:px-12 border-t border-[#e6e2d8]"
      id="full-menu-section"
    >
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        
        {/* Title */}
        <h3 className={`text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 mb-4 uppercase tracking-wider transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}>
          Explore Our Menu
        </h3>
        
        {/* Small Decorative Diamond */}
        <svg className={`w-4 h-4 text-[#B89564] mb-12 transition-all duration-1000 delay-150 ease-out transform ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>

        {/* Unique Split Pinned Layout */}
        <div className="w-full flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Left Navigation: Pinned sidebar on desktop, slider on mobile */}
          <div 
            className={`w-full lg:w-[25%] lg:sticky lg:top-24 flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 z-30 bg-[#faf6f0] p-4 rounded-2xl border border-gray-100 shadow-sm scrollbar-hide shrink-0 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="hidden lg:block font-sans text-[10px] font-bold tracking-[3px] text-[#B89564] uppercase mb-4 pl-2">
              Categories
            </span>
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => {
                    handleCategoryChange(category);
                    // Smooth scroll check to ensure usability on mobile after tap
                    if (window.innerWidth < 1024) {
                      const element = document.getElementById("full-menu-section");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`px-4 py-3 rounded-xl text-[11px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer text-left whitespace-nowrap lg:whitespace-normal flex justify-between items-center ${
                    isActive 
                      ? "bg-[#7a1f1f] text-white shadow-md translate-x-1" 
                      : "bg-white lg:bg-transparent text-gray-800 hover:bg-white hover:text-[#7a1f1f] hover:translate-x-0.5 border border-gray-100 lg:border-none"
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-[10px] opacity-60 ml-2 font-mono ${isActive ? "text-white" : "text-gray-400"}`}>
                    ({menuData[category].length})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Layout: Menu Items Visual Grid */}
          <div className="w-full lg:w-[75%] min-h-[500px]">
            <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-300 transform ${
              isTransitioning ? "opacity-0 translate-y-3 scale-[0.98] blur-[2px]" : "opacity-100 translate-y-0 scale-100 blur-0"
            }`}>
              {menuData[activeCategory].map((item) => {
                return (
                  <div
                    key={item.name}
                    className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 flex items-center hover:shadow-md transition-shadow duration-300 relative overflow-hidden group"
                  >
                    {/* Hover highlights */}
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#7a1f1f] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                    
                    {/* Visual food thumbnail */}
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0 border border-gray-200 shadow-inner relative bg-gray-50">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          // Fallback food silhouette if Unsplash blocks or fails
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=150&auto=format&fit=crop";
                        }}
                      />
                    </div>

                    {/* Description Details on right */}
                    <div className="flex flex-col justify-between pl-4 md:pl-5 flex-1 h-full min-h-[80px] md:min-h-[96px]">
                      <div>
                        {/* Name & price line */}
                        <div className="flex justify-between items-start gap-3 mb-1">
                          <h4 className="font-serif text-[15px] md:text-lg font-bold text-gray-900 leading-tight">
                            {item.name}
                          </h4>
                          <span className="font-serif text-[15px] md:text-lg font-bold text-[#7a1f1f] shrink-0 pl-1">
                            {item.price}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-xs md:text-[13px] leading-relaxed line-clamp-2 md:line-clamp-3 mb-2">
                          {item.description}
                        </p>
                      </div>

                      {/* Tag badges */}
                      <div className="flex flex-wrap gap-1 mt-auto">
                        {item.tags?.map((tag) => (
                          <span 
                            key={tag} 
                            className="bg-[#faf6f0] text-[#B89564] border border-[#B89564]/30 px-2 py-0.5 rounded text-[8px] font-bold tracking-wider uppercase scale-90 origin-left"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MenuCategories;
