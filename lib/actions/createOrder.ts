'use server';

import { revalidatePath } from 'next/cache';
import { nanoid } from 'nanoid';

export default async function createOrder(prevState: any, formData: FormData) {
  const rawFormData = {
    customer_name: formData.get('customer_name'),
    customer_email: formData.get('customer_email'),
    status: formData.get('status'),
    order_date: formData.get('order_date'),
    amount_in_cents: Number(formData.get('amount_in_cents')) * 100,
  };

  const res = await fetch('https://apis.codante.io/api/orders-api/orders', {
    method: 'POST',
    body: JSON.stringify(rawFormData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  revalidatePath('/');
  if (!res.ok) {
    return {
      key: nanoid(),
      message: `Alguma coisa deu errada. Tente novamente. Erro: "${data.message}"`,
      success: false,
    };
  } else {
    return {
      key: nanoid(),
      message: 'Pedido criado com sucesso',
      success: true,
    };
  }
}
