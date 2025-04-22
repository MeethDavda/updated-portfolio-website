"use client";
import React from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email"),
  message: z.string().nonempty("Message is required"),
});

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    const formElement = document.querySelector("form") as HTMLFormElement;
    formElement?.submit();
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    form.handleSubmit(onSubmit)(event);

    const errors = form.formState.errors;

    if (errors.email || errors.message) {
      alert("You forgot something!");
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit}
        className="md:w-[75%] w-full mt-10"
        method="POST"
        action={process.env.NEXT_PUBLIC_FORM_SPREE_URL}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="mt-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@email.com"
                    {...field}
                    className="mt-1"
                  />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <div className="mt-10">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="Hi! I really like your work and want to discuss some things...."
                    className="resize-none mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <div className="flex justify-center items-center mt-8">
          <Button type="submit" className="px-8">
            Submit
          </Button>
        </div>
        <div className="text-lg text-gray-500 mt-5 text-center">
          Or just want to have a casual chat? you can just shoot me a dm on
          <span className="font-bold"> LinkedIn.</span>
        </div>
      </form>
    </Form>
  );
}

export default ContactForm;
