import Link from 'next/link';
import { Grid } from '@mui/material';
import PageContainer from '../src/components/container/PageContainer';

const Index = () => (
  <PageContainer title="Login" description="this is Login page">
    <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
     <p>Home</p>
     <Link href="/dashboard">
     Dashboard
     </Link>
    </Grid>
  </PageContainer>
);

Index.layout = "Blank";
export default Index;
