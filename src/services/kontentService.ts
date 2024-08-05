import { createDeliveryClient } from "@kontent-ai/delivery-sdk";
import { ENVIRONMENT_ID } from "../config";

const client = createDeliveryClient({
  environmentId: ENVIRONMENT_ID,
});

const kontentService = async (contentTypeName: string) => {
  try {
    const response = await client.item(contentTypeName).toPromise();
    return response.data.item;
  } catch (error) {
    console.error('Error fetching content items:', error);
    throw error;
  }
};

export default kontentService;
