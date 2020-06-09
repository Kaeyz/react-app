// modules
import React from "react";
import styled from "styled-components";
import leftImg from "../../assets/leftFlower.png";
import rightImg from "../../assets/rightFlower.png";
import firstBank from "../../assets/client2.png";
import client2 from "../../assets/client1.png";

const Wrapper = styled.div`
  /* clients styling goes here */
  background: #f8f9fb;
  height: 848px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .leftImg {
    position: absolute;
    bottom: -102px;
    left: -26.17px;
  }
  .rightImg {
    position: absolute;
    top: 67px;
    right: 0;
  }
  .clientContent {
	text-align: center;
	flex-direction: column
  }
  .clientHead {
    width: 704px;
  }
  .clientHead > h1 {
    font-size: 32px;
    line-height: 38px;
    color: #1d1d1d;
    margin-bottom: 20px;
  }
  .clientHead > p {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #606161;
  }

  /*
  CSS for the main interaction
 */
 .tabset > input[type="radio"] {
   position: absolute;
   left: -200vw;
 }
 
 .tabset .tab-panel {
   display: none;
 }
 
 .tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,
 .tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),
 .tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),
 .tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),
 .tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),
 .tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {
   display: block;
 }
 
 /*
  Styling
 */
 
 .tabset > label {
   position: relative;
   display: inline-block;
   padding: 15px 15px 25px;
   border: 1px solid transparent;
   border-bottom: 0;
   cursor: pointer;
   font-weight: 600;
 }
 
 .tabset > label::after {
   content: "";
   position: absolute;
   left: 15px;
   bottom: 10px;
   width: 22px;
   height: 4px;
   background: #8d8d8d;
 }
 
 .tabset > label:hover,
 .tabset > input:focus + label {
   color: #06c;
 }
 
 .tabset > label:hover::after,
 .tabset > input:focus + label::after,
 .tabset > input:checked + label::after {
   background: #06c;
 }
 
 .tabset > input:checked + label {
   border-color: #ccc;
   border-bottom: 1px solid #fff;
   margin-bottom: -1px;
 }
 
 .tab-panel {
   padding: 30px 0;
   border-top: 1px solid #ccc;
 }
 
 
 .tabset {
   max-width: 65em;
 }
}
`;

export default function OurClients() {
  return (
    <Wrapper>
      {/* clients component goes here */}

      <img className="leftImg" src={leftImg} alt="leftImg" />
      <img className="rightImg" src={rightImg} alt="leftImg" />
      <div className="clientContent flex">
        <div className="clientHead">
          <h1>Who we’ve served</h1>
          <p>
            Companies of every size have made Choose Life their go-to provider
            on Wellness. We believe in our mission and we are geared to help you
            achieve more.
          </p>
        </div>

  
<div class="tabset">
  {/* <!-- Tab 1 --> */}
  <input type="radio" name="tabset" id="tab1" aria-controls="marzen" checked/>
  <label for="tab1">Märzen</label>
  {/* <!-- Tab 2 --> */}
  <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier"/>
  <label for="tab2">Rauchbier</label>
 
  <div class="tab-panels">
    <section id="marzen" class="tab-panel">
      <h2>6A. Märzen</h2>
      <p><strong>Overall Impression:</strong> An elegant, malty German amber lager with a clean, rich, toasty and bready malt flavor, restrained bitterness, and a dry finish that encourages another drink. The overall malt impression is soft, elegant, and complex, with a rich aftertaste that is never cloying or heavy.</p>
      </section>
    <section id="rauchbier" class="tab-panel">
      <h2>6B. Rauchbier</h2>
      <p><strong>Overall Impression:</strong>  An elegant, malty German amber lager with a balanced, complementary beechwood smoke character. Toasty-rich malt in aroma and flavor, restrained bitterness, low to high smoke flavor, clean fermentation profile, and an attenuated finish are characteristic.</p>
      
    </section>
  </div>
      </div>
	  </div>
    </Wrapper>
  );
}

OurClients.propTypes = {
  //TODO: clients prop types goes here
};
