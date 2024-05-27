'use client';

/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';

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
import { PlusCircle } from 'lucide-react';
import { DatePicker } from './ui/date-picker';

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
        <Button variant="outline">Cadastrar Pedido</Button>
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
  return (
    <form className={cn('grid items-start gap-4', className)}>
      <div className="grid gap-2">
        <Label htmlFor="name">Nome do Cliente</Label>
        <Input type="name" id="name" placeholder="José Carlos da Silva" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email do Cliente</Label>
        <Input type="email" id="email" placeholder="jose@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Status</Label>
        <Select>
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
        <DatePicker />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Valor do Pedido</Label>
        <Input id="username" placeholder="100,00" />
      </div>
      <Button type="submit">Cadastrar</Button>
    </form>
  );
}
