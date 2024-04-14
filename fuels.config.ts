import { createConfig } from 'fuels';
import dotenv from 'dotenv';

dotenv.config({
  path: ['.env.local', '.env'],
});

const nodeUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:4000'
    : 'https://beta-5.fuel.network';

export default createConfig({
  workspace: './sway-programs',
  output: './src/sway-api',
  fuelCorePort: +(process.env.NEXT_PUBLIC_FUEL_NODE_PORT as string) || 4000,
  providerUrl: nodeUrl,
});
