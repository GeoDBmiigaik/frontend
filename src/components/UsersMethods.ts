type Action = 'signup' | 'signin';

export async function formsRequest(action: Action, data: any) {
  const response = await fetch(`http://0.0.0.0:8000/api/users/${action}`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    return await response.json();
  }
}
