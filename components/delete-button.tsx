'use client';

import deleteOrder from '@/lib/actions/deleteOrder';
import { Order } from '@/lib/types';
import { Button } from './ui/button';
import { Trash } from 'lucide-react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';

type DeleteButtonProps = {
  order: Order;
};

export default function DeleteButton({ order }: DeleteButtonProps) {
  const [state, formAction] = useFormState(deleteOrder, null);
  const router = useRouter();

  useEffect(() => {
    if (state?.success === true) {
      toast.success(state.message);
      router.refresh();

    } else if (state?.success === false) {
      toast.error(state?.message);
    }
  }, [router, state, state?.success, state?.message]);

  return (
    <form action={formAction}>
      <input type="hidden" name="orderId" value={order.id} />
      <Button variant="ghost" className="">
        <Trash className="w-4 text-red-500" />
      </Button>
    </form>
  );
}
