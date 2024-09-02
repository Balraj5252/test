// Filename - components/SidebarData.js

import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "my Apps",
        path: "/my/tac",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Tic Tac",
                path: "/my/tac",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Table",
                path: "/my/table",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "CharPrint",
                path: "/my/charPrint",
                icon: <IoIcons.IoIosPaper />,
            }
        ],
    }
];
