import { useEffect, useState } from 'react';
import { Container, Title, Flex, Stack, Paper } from '@mantine/core';
import { DataRow, getMonthlyData, getUniqueOptions } from './utils/parseData';
import rspData from './data/rspData.json';
import { FilterSelect } from './components/Filters';
import RSPChart from './components/RSPChart';
import '@mantine/core/styles.css';

function App() {
  const [data, setData] = useState<DataRow[]>([]);
  const [city, setCity] = useState('');
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    setData(rspData as DataRow[]);
  }, []);

  const { cities, fuels, years } = getUniqueOptions(data);
  const { months, prices } = getMonthlyData(data, city, fuel, year);

  return (
    <Container size="md" pt="xl">
      <Title align="center" order={2} mb="lg">
        RSP Petrol/Diesel - Metro Cities
      </Title>

      <Paper shadow="xs" radius="md" p="md" withBorder>
        <Flex gap="md" justify="center" wrap="wrap">
          <FilterSelect label="City" value={city} data={cities} onChange={setCity} />
          <FilterSelect label="Fuel" value={fuel} data={fuels} onChange={setFuel} />
          <FilterSelect label="Year" value={year} data={years} onChange={setYear} />
        </Flex>
      </Paper>

      <Stack mt="xl" align="center">
        {city && fuel && year && <RSPChart months={months} values={prices} />}
      </Stack>
    </Container>
  );
}

export default App;
