import { useState, useEffect } from "react";
import "./style.css"

export const products = [
  {
    name: "Dell Inspiron Laptop",
    version: "i5 11th Gen, 8GB RAM, 512GB SSD",
    price: "₹55,000",
    brand: "Dell"
  },
  {
    name: "HP Pavilion Laptop",
    version: "Ryzen 5 5500U, 16GB RAM, 1TB SSD",
    price: "₹59,990",
    brand: "HP"
  },
  {
    name: "Lenovo IdeaPad Slim",
    version: "i3 10th Gen, 8GB RAM, 256GB SSD",
    price: "₹39,999",
    brand: "Lenovo"
  },
  {
    name: "Asus VivoBook Pro",
    version: "i7 12th Gen, 16GB RAM, 512GB SSD",
    price: "₹79,999",
    brand: "Asus"
  },
  {
    name: "Apple MacBook Air M1",
    version: "M1 Chip, 8GB RAM, 256GB SSD",
    price: "₹84,900",
    brand: "Apple"
  },
  {
    name: "Acer Aspire 7",
    version: "i5 12th Gen, 8GB RAM, 1TB HDD + 256GB SSD",
    price: "₹64,500",
    brand: "Acer"
  },
  {
    name: "MSI GF63 Gaming Laptop",
    version: "i7 11th Gen, 16GB RAM, RTX 3050 GPU",
    price: "₹92,000",
    brand: "MSI"
  },
  {
    name: "Asus ROG Strix",
    version: "Ryzen 7 5800H, 16GB RAM, 512GB SSD",
    price: "₹89,990",
    brand: "Asus"
  },
  {
    name: "HP 15s",
    version: "i5 10th Gen, 8GB RAM, 1TB HDD",
    price: "₹48,500",
    brand: "HP"
  },
  {
    name: "Dell XPS 15",
    version: "i9 13th Gen, 32GB RAM, 1TB SSD",
    price: "₹1,59,999",
    brand: "Dell"
  },
  {
    name: "Lenovo Flex 5",
    version: "Ryzen 3 5300U, 8GB RAM, 512GB SSD",
    price: "₹44,990",
    brand: "Lenovo"
  },
  {
    name: "Asus Chromebook",
    version: "Intel Pentium, 4GB RAM, 128GB SSD",
    price: "₹23,999",
    brand: "Asus"
  },
  {
    name: "HP Envy x360",
    version: "i5 12th Gen, 16GB RAM, 512GB SSD",
    price: "₹68,990",
    brand: "HP"
  },
  {
    name: "Apple MacBook Air M2",
    version: "M2 Chip, 8GB RAM, 256GB SSD",
    price: "₹99,900",
    brand: "Apple"
  },
  {
    name: "MSI Stealth 16 Studio",
    version: "i7 13th Gen, 32GB RAM, 1TB SSD, RTX 4060",
    price: "₹1,79,000",
    brand: "MSI"
  }
];


function Search(){

    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');  // this for delay 500ms after searching instead of every letter

    const handleChange =(e) =>{
        setSearch(e.target.value);
    }

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedSearch(search);
        },500);

        return () =>{
            clearTimeout(handler);
        }
    },[search])

    const filterdProducts = products.filter(product => product.brand.toLowerCase().includes(debouncedSearch.toLocaleLowerCase()));

    return (
        <div className="web-container">
            <div className="input-container">
              <h1 className="title">Search Filter App Using React Hooks...</h1>
              <input className="input" onChange={handleChange} type="text" placeholder="Enter the brand you want to search" />
            </div>

            <div className="container">
                {
                    filterdProducts && filterdProducts.length > 0 ? (
                        filterdProducts.map((product,index) =>
                        <div key={index} className="nested-container">
                            <h1>{product.name}</h1>
                            <p><strong>Version: </strong> { product.version}</p>
                            <p><strong>Price: </strong> { product.price}</p>
                            <p><strong>Brand: </strong> { product.brand}</p>
                        </div>
                    )) : (
                        <li>No users found</li>
                    )
                }
            </div>
        </div>
    )
}

export default Search;