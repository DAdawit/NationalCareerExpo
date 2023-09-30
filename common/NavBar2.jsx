import { Box, Drawer } from "@mui/material";
import Avatar from "../user/Avatar";
import NavLinks from "./NavLinks";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import { SELLER_INFO } from "@/graphql";
import { FETCH_USER_DATA } from "@/graphql";
import checkToken from "@/pages/verifyToken";
import { IconAddToCart } from "@/Icons/IconAddToCart";
import IconWishlist from "@/Icons/IconWishList";
import IconLogout from "@/Icons/IconLogout";
import { IconLogin } from "@/Icons/IconLogin";
import { useRouter } from "next/router";
import { useEffect } from "react";
import client from "../../../apollo-client";
import { DELIVERER_INFO } from "@/graphql";
import { IconSearch } from "@/Icons/IconSearch";
const NavBar = () => {
  const { push } = useRouter();
  const [state, setState] = useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ left: open });
  };

  return (
    <>
      {!loading ? (
        <div className="fixed top-0 bg-white z-50">
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            <Box
              sx={{
                width: 250,
              }}
              role="presentation"
              onKeyDown={toggleDrawer("right", false)}
            >
              <div>
                <div className="py-4 px-5 flex justify-center">
                  <Avatar />
                </div>
                <NavLinks toggleDrawer={toggleDrawer("right", false)} />
              </div>
            </Box>
          </Drawer>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
