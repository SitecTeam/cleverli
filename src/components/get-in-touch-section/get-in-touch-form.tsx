import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { ensureBotProtection } from "@/lib/bot-protection";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Min. 2 characters",
  }),
  email: z.string().email({
    message: "Invalid email",
  }),
  message: z.string().optional(),
});

const GetInTouchForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    ensureBotProtection();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const errors = form.formState.errors;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-message.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      toast({
        title: "Message Sent",
        description: "Thanks for reaching out!",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex h-fit w-full flex-col justify-center rounded-2xl bg-transparent from-[#22272F] to-[#394453] pl-3 lg:bg-linear-to-b lg:px-9 lg:pt-8 lg:pb-10 lg:shadow-form 2xl:px-12">
      <h2 className="mb-4 text-xl text-white italic sm:text-3xl lg:mb-7 lg:text-4xl xl:text-5xl">
        Send Us A Message
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-0.5 sm:gap-4 lg:gap-6"
        >
          <div className="contents lg:grid lg:grid-cols-2 lg:gap-7 xl:gap-11">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  {errors.name ? (
                    <FormMessage />
                  ) : (
                    <FormDescription className="pb-5" />
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  {errors.email ? (
                    <FormMessage />
                  ) : (
                    <FormDescription className="pb-5" />
                  )}
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mt-2 lg:mt-6">
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Message"
                    className="min-h-12 lg:min-h-24"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="primary"
            className="mt-7 h-10 w-full rounded-lg py-0 text-xl lg:mt-5 lg:h-12.5 lg:font-semibold"
          >
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default GetInTouchForm;
