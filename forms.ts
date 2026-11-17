// Web3Forms access keys are public by design (they only allow sending to the inbox they were issued for),
// so the fallback keeps forms working when the env var isn't set on the host.
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '9921c6c9-a27a-4b57-9782-f8cb86b95444';

export const submitForm = async (fields: Record<string, string | undefined>) => {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...fields }),
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || !result?.success) {
    throw new Error(result?.message || `Form submission failed (${response.status})`);
  }
};

export const FORM_ERROR_MESSAGE =
  "Your message couldn't be sent. Please try again or email info@genovotech.com directly.";
