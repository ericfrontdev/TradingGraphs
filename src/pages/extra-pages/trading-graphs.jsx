import { Grid, InputLabel, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import MultipleSelectChip from 'components/MultipleSelectChip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// project import
import MainCard from 'components/MainCard';

// charts
import ApexAreaChart from 'sections/charts/apexchart/ApexAreaChart';

const TradingGraphs = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: 20 }}>
        <Grid container spacing={2} xs={6}>
          <Grid item xs={6}>
            <Stack spacing={1}>
              <Typography variant="h4" style={{ marginBottom: '20px', marginTop: '20px' }}>
                Reports
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </div>
      <div style={{ display: 'flex', gap: 20 }}>
        <Grid container spacing={2} xs={6}>
          <Grid item xs={6}>
            <Stack spacing={1}>
              <InputLabel>Ticker(s)</InputLabel>
              <MultipleSelectChip width={{ width: 340 }} />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={1}>
              <InputLabel>Date</InputLabel>
              <TextField variant="outlined" fullWidth />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={1}>
              <InputLabel>Value Traded (mm)</InputLabel>
              <TextField variant="outlined" fullWidth />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={1}>
              <InputLabel>Comission (&#39;000s)</InputLabel>
              <TextField variant="outlined" fullWidth />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={1} columns={6}>
              <InputLabel>Parent Orders</InputLabel>
              <TextField variant="outlined" fullWidth />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={1}>
              <InputLabel>Arrival Performance</InputLabel>
              <TextField variant="outlined" fullWidth />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={1}>
              <InputLabel>VWAP Performance</InputLabel>
              <TextField variant="outlined" fullWidth />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={1}>
              <InputLabel>Brokers</InputLabel>
              <TextField variant="outlined" fullWidth />
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={2} xs={6}>
          <Grid item xs={4}>
            <Stack spacing={1}>
              <InputLabel>Order types</InputLabel>
              <MultipleSelectChip width={{ width: 220 }} />
              <InputLabel style={{ marginTop: '16px' }}>Securities</InputLabel>
              <TextField fullWidth />
              <InputLabel style={{ marginTop: '16px' }}>Algos</InputLabel>
              <TextField fullWidth />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" style={{ marginTop: '30px' }}>
              View Data
            </Button>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: '30px' }}>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={12} md={6} lg={6}>
            <MainCard title="PricePath">
              <ApexAreaChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <MainCard title="Adverse selection by side">
              <ApexAreaChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MainCard title="Arrival cost by side">
              <ApexAreaChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MainCard title="Arrival cost by Broker">
              <ApexAreaChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MainCard title="Arrival cost by Algo">
              <ApexAreaChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MainCard title="VWAP Cost by side">
              <ApexAreaChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MainCard title="VWAP Cost by Broker">
              <ApexAreaChart />
            </MainCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MainCard title="VWAP Cost by Algo">
              <ApexAreaChart />
            </MainCard>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TradingGraphs;
