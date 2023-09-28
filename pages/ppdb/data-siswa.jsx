import React from "react";
import PageContainer from "../../src/components/container/PageContainer";
import DashboardCard from "../../src/components/shared/DashboardCard";
import { Box, Typography } from "@mui/material";
import Breadcrumb from "../../src/layouts/full/shared/breadcrumb/Breadcrumb";

const BCrumb = [
  {
    to: '/dashboard',
    title: 'Home',
  },
  {
    title: 'Data Siswa',
  },
];


export default function DataSiswa() {
  return (
    <PageContainer title="Data Siswa" description="this is Sample page">
      {/* breadcrumb */}
      <Breadcrumb title="Data Siswa" items={BCrumb} />
      {/* end breadcrumb */}
      <DashboardCard title="Data Siswa">
        <Box>
          Data Siswa
        </Box>
      </DashboardCard>
    </PageContainer>
  );
}
