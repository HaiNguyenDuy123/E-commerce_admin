"use client";

import * as z from "zod"
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod"
import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/modal";

const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  
  return (
  <Modal 
    title="Create store"
    description="Add a new store to manage products and categories"
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}
  >
    Future Create Store Form
  </Modal>
  );
};