import { CURRENT_ENVIRONMENT } from '@/lib'
import { useEffect, useState } from 'react';

export function useContractId() {
  const [contractId, setContractId] = useState<string>();

  useEffect(() => {
    const fetchContractId = async () => {
      if (CURRENT_ENVIRONMENT === 'local') {
        try {
          const module = await import('@/sway-api/contract-ids.json');
          // @ts-ignore - the file will not exist in a testnet environment
          setContractId(module.default.testContract);
        } catch (error) {
          console.error('Failed to load local contract IDs, setting to undefined');
          setContractId(undefined); // Explicitly setting to undefined if the file is not found
        }
      } 
      
      if (CURRENT_ENVIRONMENT === 'testnet') {
        setContractId('0x7d0e267018076a977b47327286b8a3d98b18950354606bb74492b40a2fd897f3');
      }
    };

    fetchContractId();
  }, []);

  return contractId;
}