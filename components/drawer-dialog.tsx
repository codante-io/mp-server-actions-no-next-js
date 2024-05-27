'use client';

/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import { cn } from '@/lib/utils';
import { useMediaQuery } from 'usehooks-ts';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoaderIcon, PlusCircle } from 'lucide-react';
import { DatePicker } from './ui/date-picker';
import createOrder from '@/lib/actions/createOrder';
import { format } from 'date-fns';

export function DrawerDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" className="flex gap-2">
            <PlusCircle className="h-5 w-5" />
            Cadastrar Pedido
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cadastrar Pedido</DialogTitle>
            <DialogDescription>
              Cadastre um pedido. Clique em salvar quando terminar.
            </DialogDescription>
          </DialogHeader>
          <OrderForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="default" className="flex gap-2">
          <PlusCircle className="h-5 w-5" />
          Cadastrar Pedido
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Cadastrar Pedido</DrawerTitle>
          <DrawerDescription>
            Cadastre um pedido. Clique em salvar quando terminar.
          </DrawerDescription>
        </DrawerHeader>
        <OrderForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function OrderForm({ className }: React.ComponentProps<'form'>) {
  const [orderDate, setOrderDate] = React.useState<Date>();
  const [state, formAction] = useFormState(createOrder, null)

  console.log(state)

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
