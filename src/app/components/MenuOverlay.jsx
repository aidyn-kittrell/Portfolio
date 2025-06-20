import React from "react";
import NavBarLink from "./NavBarLink";

const MenuOverlay = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index}>
                    <NavBarLink href={link.href} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;