import React from "react";
import "./styles/Products.css";
import Product from "./Product.jsx";
import SProduct from "./SProduct.jsx";
import Slider from "./Slider.jsx";
import Footer from "./Footer.jsx";
const Products = () => {
   





  return (
    <>
      <div className="products__container">
        <div className="products">
          <Product
            product__heading="Gaming accessories"
            link="/gaming"
            head1="Headset"
            head2="Keyboards"
            head3="Computer mice"
            head4="Chairs"
            src1="images/products/gaming/headset.jpg"
            src2="images/products/gaming/keyboard.jpg"
            src3="images/products/gaming/mouse.jpg"
            src4="images/products/gaming/chair.jpg"
          />
          <Product
            product__heading="Shop by Category"
            link="/category"
            head1="Computer"
            head2="Video Games"
            head3="Baby"
            head4="Toys"
            src1="images/products/gaming/computer.jpg"
            src2="images/products/gaming/ps4.jpg"
            src3="images/products/gaming/baby.jpg"
            src4="images/products/gaming/toys.jpg"
          />

          <SProduct
            img="images/products/exercise.jpg"
            heading="Get fit at home"
          />
          <div className="sign__in">
            <div className="securely">
              <p className="sign__pa">Sign in for the best experience</p>
              <button className="sign_in">Sign in securely</button>
            </div>
            <img src="images/products/ship.jpg" alt="" />
          </div>
        </div>
        <div className="product__grid">
          <div className="product1 product">
            <SProduct
              imglink="/dresses"
              img="images/products/dresses.jpg"
              heading="Dresses"
            />
          </div>
          <div className="product2 product">
            <SProduct
              imglink="/computer"
              img="images/products/computer.jpg"
              heading="Computers &amp; Accessories"
            />
          </div>
          <div className="product3 product">
            <SProduct
              imglink="/health"
              img="images/products/care.jpg"
              heading="Health &amp; Personal Care"
            />
          </div>
          <div className="product4 product">
            <SProduct
              img="images/products/ereaders.jpg"
              heading="Kindle E-readers"
            />
          </div>
        </div>
        <Slider
          heading="Top Sellers in Books for you"
          src1="images/products/books/book1.jpg"
          src2="images/products/books/book2.jpg"
          src3="images/products/books/book3.jpg"
          src5="images/products/books/book5.jpg"
          src7="images/products/books/book7.jpg"
          src8="images/products/books/book8.jpg"
        />
        <div className="product__grid2">
          <div className="product1 product">
            <SProduct
              img="images/products/strip.jpg"
              heading="Create with strip lights"
            />
          </div>
          <div className="product2 product">
            <SProduct
              img="images/products/laptop.jpg"
              heading="Shop Laptops &amp; Tablets"
            />
          </div>
          <div className="product3 product">
            <SProduct
              img="images/products/fitness.jpg"
              heading="For your Fitness Needs"
            />
          </div>
          <div className="product4 product">
            <SProduct
              img="images/products/arriavals.jpg"
              heading="New arrivals in Toys"
            />
          </div>
        </div>

        <Slider
          heading="Top Sellers in Books for you"
          src1="images/products/kitchen/item1.jpg"
          src2="images/products/kitchen/item2.jpg"
          src3="images/products/kitchen/item3.jpg"
          src4="images/products/kitchen/item4.jpg"
         
        />
        <div className="product__grid3">
          <div className="product1 product">
            <SProduct
              img="images/products/halloween.jpg"
              heading="Decorate for Halloween"
            />
          </div>
          <div className="product2 product">
            <SProduct
              img="images/products/boots.jpg"
              heading="Statement boots for you"
            />
          </div>
          <div className="product3 product">
            <SProduct
              img="images/products/clothes.jpg"
              heading="Fashion favorites for Fall
"
            />
          </div>
          <div className="product4 product">
            <SProduct img="images/products/wood.png" heading="Easy returns" />
          </div>
        </div>
        <Slider
          heading="Top Sellers in Books for you"
          src1="images/products/beauty/item1.jpg"
          src2="images/products/beauty/item2.jpg"
          src3="images/products/beauty/item3.jpg"
          src4="images/products/beauty/item4.jpg"
          src5="images/products/beauty/item5.jpg"
          src6="images/products/beauty/item6.jpg"
      
        />
      </div>
      <Footer />
    </>
  );
};

export default Products;
