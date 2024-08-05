import { createDeliveryClient, IContentItem } from "@kontent-ai/delivery-sdk";
import { ENVIRONMENT_ID } from "../config"; // Update the path as needed

const client = createDeliveryClient({
  environmentId: ENVIRONMENT_ID,
});

const fetchPages = async (): Promise<IContentItem[]> => {
  try {
    const response = await client.items()
      .type('page') // Assuming 'page' is the content type for your pages
      .toPromise();
    return response.data.items;
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
};

export default fetchPages;