import React from 'react';
import { Typography } from '@mui/material';
import Breadcrumb from '../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../src/components/container/PageContainer';
import DashboardCard from '../../src/components/shared/DashboardCard';

const BCrumb = [
  {
    to: '/dashboard',
    title: 'Home',
  },
  {
    title: 'Dashboard',
  },
];

export default function Home() {
  return (
    <PageContainer title="Dashboard" description="this is Sample page">
      {/* breadcrumb */}
      <Breadcrumb title="Dashboard" items={BCrumb} />
      {/* end breadcrumb */}
      <DashboardCard title="Sample Page">
        <Typography>Dashboard</Typography>
      </DashboardCard>
    </PageContainer>
  );
}
