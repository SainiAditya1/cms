const APPX_AUTH_KEY = process.env.APPX_AUTH_KEY;
const APPX_CLIENT_SERVICE = process.env.APPX_CLIENT_SERVICE;
const APPX_BASE_API = process.env.APPX_BASE_API;

const baseUrl = `${APPX_BASE_API}/get/checkemailforpurchase`;

const headers = {
  'Client-Service': APPX_CLIENT_SERVICE,
  'Auth-Key': APPX_AUTH_KEY,
};

export async function checkUserEmailForPurchase(
  email: string,
  courseId: string,
) {
  const params = new URLSearchParams({
    email,
    itemtype: '10',
    itemid: courseId,
  });

  try {
    const response = await fetch(`${baseUrl}?${params}`, { headers });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation: ', error);
    throw error;
  }
}
