import { uniqueId } from "lodash";

export interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}

import {
  // IconAward,
  // IconBoxMultiple,
  IconPoint,
  // IconBan,
  // IconStar,
  // IconMoodSmile,
  IconAperture,
} from "@tabler/icons-react";

const MenuitemsGuests: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconAperture,
    href: "/dashboard",
    // chip: "New",
    chipColor: "secondary",
  },
  {
    navlabel: true,
    subheader: "PPDB",
  },
  {
    id: uniqueId(),
    title: "Data Calon Siswa",
    icon: IconPoint,
    href: "/ppdb/data-siswa",
    children: [
      {
        id: uniqueId(),
        title: "Overview",
        icon: IconPoint,
        href: "/ppdb/data-siswa",
      },
      {
        id: uniqueId(),
        title: "Isi Data",
        icon: IconPoint,
        href: "/ppdb/form-data-siswa",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Daftar Ulang",
    icon: IconPoint,
    href: "/ppdb/daftar-ulang",
  },
  {
    navlabel: true,
    subheader: "Transaksi",
  },
  {
    id: uniqueId(),
    title: "Pembayaran",
    icon: IconPoint,
    href: "/finance/pembayaran",
  },
  // {
  //   id: uniqueId(),
  //   title: "Menu Level",
  //   icon: IconBoxMultiple,
  //   href: "/menulevel/",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Level 1",
  //       icon: IconPoint,
  //       href: "/l1",
  //       children: [
  //         {
  //           id: uniqueId(),
  //           title: "Level 22",
  //           icon: IconPoint,
  //           href: "/l2",
  //         },
  //       ]
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Level 1.1",
  //       icon: IconPoint,
  //       href: "/l1.1",
  //       children: [
  //         {
  //           id: uniqueId(),
  //           title: "Level 2",
  //           icon: IconPoint,
  //           href: "/l2",
  //         },
  //         {
  //           id: uniqueId(),
  //           title: "Level 2.1",
  //           icon: IconPoint,
  //           href: "/l2.1",
  //           children: [
  //             {
  //               id: uniqueId(),
  //               title: "Level 3",
  //               icon: IconPoint,
  //               href: "/l3",
  //             },
  //             {
  //               id: uniqueId(),
  //               title: "Level 3.1",
  //               icon: IconPoint,
  //               href: "/l3.1",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Disabled",
  //   icon: IconBan,
  //   href: "",
  //   disabled: true,
  // },
  // {
  //   id: uniqueId(),
  //   title: "SubCaption",
  //   subtitle: "This is the sutitle",
  //   icon: IconStar,
  //   href: "",
  // },

  // {
  //   id: uniqueId(),
  //   title: "Chip",
  //   icon: IconAward,
  //   href: "",
  //   chip: "9",
  //   chipColor: "primary",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Outlined",
  //   icon: IconMoodSmile,
  //   href: "",
  //   chip: "outline",
  //   variant: "outlined",
  //   chipColor: "primary",
  // },
  // {
  //   id: uniqueId(),
  //   title: "External Link",
  //   external: true,
  //   icon: IconStar,
  //   href: "https://google.com",
  // },
];

export default MenuitemsGuests;
