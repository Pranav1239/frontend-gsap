"use client";
import React, { useState } from "react";
import Header from "../header/Index";
import Menu from "../header/menu/index";
import HorizontalPixelTransition from "./horizontal/index";
const IndexHeader = () => {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);
  return (
    <div>
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
      {menuIsActive && (
        <>
          <Menu menuIsActive={menuIsActive} />
        </>
      )}
      {/* <CenteredPixelTransition menuIsActive={menuIsActive}/> */}
      <HorizontalPixelTransition menuIsActive={menuIsActive} />
      {/* <VerticalPixelTransition menuIsActive={menuIsActive} /> */}
    </div>
  );
};

export default IndexHeader;
