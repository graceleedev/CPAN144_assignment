import React, { useState } from 'react';

//handler for hover event
function HoverHandler() {
  //set state for each icons
  const [isNum1Hovered, setIsNum1Hovered] = useState(false);
  const [isNum2Hovered, setIsNum2Hovered] = useState(false);
  const [isNum3Hovered, setIsNum3Hovered] = useState(false);

  return (
<div id="sections">
    <section>
    <p
    onClick={() => setIsNum1Hovered(true)}
    style={{
      color: isNum1Hovered ? "pink" : "gray"
    }}
    >&#10084;</p>
        <h3>Mountain View Grill</h3>
        <p>A rustic grill with panoramic views of the mountains. Enjoy hearty, comfort food while soaking in the breathtaking landscape - great for a family dinner or a weekend getaway.</p>
    </section>
    <section>
    <p
    onClick={() => setIsNum2Hovered(true)}
    style={{
      color: isNum2Hovered ? "pink" : "gray"
    }}
    >&#10084;</p>
        <h3>Mountain View Grill</h3>
        <p>A rustic grill with panoramic views of the mountains. Enjoy hearty, comfort food while soaking in the breathtaking landscape - great for a family dinner or a weekend getaway.</p>
    </section>
    <section>
    <p
    onClick={() => setIsNum3Hovered(true)}
    style={{
      color: isNum3Hovered ? "pink" : "gray"
    }}
    >&#10084;</p>
        <h3>Mountain View Grill</h3>
        <p>A rustic grill with panoramic views of the mountains. Enjoy hearty, comfort food while soaking in the breathtaking landscape - great for a family dinner or a weekend getaway.</p>
    </section>

    </div>
  );
}

export default function App() {
  return (
    <div>
      Click &#10084; to add to your wishlist!
      <HoverHandler />
    </div>
  );
}