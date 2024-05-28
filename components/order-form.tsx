import createOrder from "@/lib/actions/createOrder";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from "@/lib/utils";
import { DatePicker } from "./ui/date-picker";
import { format } from "date-fns";
import { Button } from "./ui/button";
import { LoaderIcon } from "lucide-react";

export default function OrderForm({
  className,
  setOpen,
}: {
  className?: string;
  setOpen: (open: boolean) => void;
}) {
  const [orderDate, setOrderDate] = useState<Date>();
  const [state, formAction] = useFormState(createOrder, null);

  useEffect(() => {
    if (state?.success === true) {
      setOpen(false);
      toast.success(state.message);

      // close the dialog
    } else if (state?.success === false) {
      toast.error(state?.message);
    }
  }, [state?.success, state?.message, state?.key]);

  return (
    <form
      action={formAction}
      className={cn('grid items-start gap-4', className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="customer_name">Nome do Cliente</Label>
        <Input
          name="customer_name"
          id="customer_name"
          placeholder="José Carlos da Silva"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="customer_email">Email do Cliente</Label>
        <Input
          name="customer_email"
          type="email"
          id="customer_email"
          placeholder="jose@example.com"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="status">Status</Label>
        <Select name="status">
          <SelectTrigger className="">
            <SelectValue placeholder="Pendente | Completo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pendente</SelectItem>
            <SelectItem value="completed">Completo</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Data do Pedido</Label>
        <DatePicker onSelect={(date) => setOrderDate(date)} />
        <Input
          type="hidden"
          name="order_date"
          defaultValue={orderDate ? format(orderDate, 'yyyy-MM-dd') : ''}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="amount_in_cents">Valor do Pedido</Label>
        <Input
          name="amount_in_cents"
          id="amount_in_cents"
          placeholder="100,00"
        />
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="flex gap-2">
      {pending ? <LoaderIcon className="h-4 w-4" /> : 'Cadastrar'}
    </Button>
  );
}
