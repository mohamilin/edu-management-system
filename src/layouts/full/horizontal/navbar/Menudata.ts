import { IconPoint, IconAperture, IconBoxMultiple } from "@tabler/icons-react";
import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconAperture,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Menu Level",
    icon: IconBoxMultiple,
    href: "/menulevel/",
    children: [
      {
        id: uniqueId(),
        title: "Level 1",
        icon: IconPoint,
        href: "/l1",
        children: [
          {
            id: uniqueId(),
            title: "Level A",
            icon: IconPoint,
            href: "/l2s",
            children: [
              {
                id: uniqueId(),
                title: "Level A1",
                icon: IconPoint,
                href: "/l22",
              },
              {
                id: uniqueId(),
                title: "Level B1",
                icon: IconPoint,
                href: "/l22",
              },
            ]
          },
        ]
      },
      {
        id: uniqueId(),
        title: "Level 1.12",
        icon: IconPoint,
        href: "/l1.1",
        children: [
          {
            id: uniqueId(),
            title: "Level 2",
            icon: IconPoint,
            href: "/l2",
          },
          {
            id: uniqueId(),
            title: "Level 2.1",
            icon: IconPoint,
            href: "/l2.1",
            children: [
              {
                id: uniqueId(),
                title: "Level 3",
                icon: IconPoint,
                href: "/l3",
              },
              {
                id: uniqueId(),
                title: "Level 3.1",
                icon: IconPoint,
                href: "/l3.1",
              },
            ],
          },
        ],
      },
    ],
  },
];
export default Menuitems;
