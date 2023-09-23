import React from "react";
import Carousel from "./Carousel";
import HopePageCards from "./HopePageCards";

export default function HopmePage() {
  return (
    <div className="bg-amazoneclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto bg-purple-400">
        TESTING
        <Carousel></Carousel>
        <div className="grid grid-cols-3 xl:grid-cols-4">
          <HopePageCards
            title={"we have a surprize for you"}
            image={"../images/home_grid_1.jpg"}
            link={"see more terms and conditions"}
          />
          <HopePageCards
            title={"we have a surprize for you"}
            image={"../images/home_grid_2.jpg"}
            link={"see more terms and conditions"}
          />
          <HopePageCards
            title={"we have a surprize for you"}
            image={"../images/home_grid_4.jpg"}
            link={"see more terms and conditions"}
          />
          <HopePageCards
            title={"we have a surprize for you"}
            image={"../images/home_grid_5.jpg"}
            link={"see more terms and conditions"}
          />
          <HopePageCards
            title={"we have a surprize for you"}
            image={"../images/home_grid_6.jpg"}
            link={"see more terms and conditions"}
          />
          <HopePageCards
            title={"we have a surprize for you"}
            image={"../images/home_grid_7.jpg"}
            link={"see more terms and conditions"}
          />
          <HopePageCards
            title={"we have a surprize for you"}
            image={"../images/home_grid_8.jpg"}
            link={"see more terms and conditions"}
          />
        </div>
      </div>
    </div>
  );
}
