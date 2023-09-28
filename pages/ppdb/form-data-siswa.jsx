import React from 'react';
import { Box, Card, CardContent, Divider, Grid, Tab, Tabs, Typography } from '@mui/material';
import Breadcrumb from '../../src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../src/components/container/PageContainer';
import BlankCard from '../../src/components/shared/BlankCard';
import { IconUserCircle } from '@tabler/icons-react';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Data Siswa',
  },
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function FormDataSiswa() {
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };


  return (
    <PageContainer title="Data Calon Siswa" description="this is Sample page">
      {/* breadcrumb */}
      <Breadcrumb title="Data Calon Siswa" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BlankCard>
            <Box >
              <Tabs
              value={value}
              onChange={handleChange}
              scrollButtons="auto"
              aria-label="basic tabs example"
              >
                <Tab 
                  iconPosition='start'
                  icon={<IconUserCircle size={22}/>}
                  label="Data Pribadi"
                  {...a11yProps(0)}
                />
                <Tab 
                  iconPosition='start'
                  icon={<IconUserCircle size={22}/>}
                  label="Data Orang Tua"
                  {...a11yProps(1)}
                />
                </Tabs>
            </Box>
            <Divider />
             <CardContent>
              <TabPanel value={value} index={0}>
              <p>Data Pribadi</p>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <p>Data Orang Tua</p>
              </TabPanel>
              
            </CardContent>
          </BlankCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
