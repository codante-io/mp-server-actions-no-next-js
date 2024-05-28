'use server';

import { revalidatePath } from 'next/cache';
import { nanoid } from 'nanoid';

export default async function deleteOrder(prevState: any, formData: FormData) {
  const orderId = formData.get('orderId');

  const res = await fetch(
    `https://apis.codante.io/api/orders-api/orders/${orderId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  // revalidatePath('/');
  if (!res.ok) {

    return {
      message: `Alguma coisa deu errada. Tente novamente.`,
      success: false,
    };
  } else {

    return {
      message: 'Pedido apagado com sucesso',
      success: true,
    };
  }
}
