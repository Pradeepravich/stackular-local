import { useState, useEffect } from 'react';
import { IContentItem, IContentItemElements, createDeliveryClient } from "@kontent-ai/delivery-sdk";
import { ENVIRONMENT_ID } from "../config";

const client = createDeliveryClient({
  environmentId: ENVIRONMENT_ID,
});

const useKontentServiceApi = (contentTypeName: string) => {
  const [data, setData] = useState<IContentItem<IContentItemElements> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [errorCode, setErrorCode] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {        
        const response = await client.item(contentTypeName).toPromise();        
        setData(response.data.item);        
      } catch (err: any) {
        console.error('Error fetching content items:', err);        
        setError(err as Error);
        setErrorCode(err.errorCode);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [contentTypeName]);

  return { data, loading, error, errorCode };
};

export default useKontentServiceApi;
