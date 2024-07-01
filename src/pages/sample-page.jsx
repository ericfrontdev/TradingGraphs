// material-ui
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
//import Typography from '@mui/material/Typography';

//import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';
//import { Form } from 'react-router-dom';

// charts
import ApexAreaChart from 'sections/charts/apexchart/ApexAreaChart';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3} columns={6}>
        <Stack spacing={1}>
          <InputLabel>Ticker(s)</InputLabel>
          <TextField />
        </Stack>
      </Grid>
      <Grid item xs={3} columns={6}>
        <Stack spacing={1}>
          <InputLabel>Ticker(s)</InputLabel>
          <TextField />
        </Stack>
      </Grid>
      <Grid item xs={3} columns={6}>
        <Stack spacing={1}>
          <InputLabel>Ticker(s)</InputLabel>
          <TextField />
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Stack spacing={1}>
          <InputLabel>Ticker(s)</InputLabel>
          <TextField />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={1}>
          <InputLabel>Ticker(s)</InputLabel>
          <TextField />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <MainCard title="Area Chart">
          <ApexAreaChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <MainCard title="Area Chart">
          <ApexAreaChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MainCard title="Area Chart">
          <ApexAreaChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MainCard title="Area Chart">
          <ApexAreaChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MainCard title="Area Chart">
          <ApexAreaChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MainCard title="Area Chart">
          <ApexAreaChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MainCard title="Area Chart">
          <ApexAreaChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <MainCard title="Area Chart">
          <ApexAreaChart />
        </MainCard>
      </Grid>
    </Grid>
  );
}
