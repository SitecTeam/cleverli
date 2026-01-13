import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CalendarDays, Clock } from "lucide-react";
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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Min. 2 characters",
  }),
  email: z.string().email({
    message: "Invalid email",
  }),
  date: z.string().min(1, {
    message: "Invalid date",
  }),
  time: z.string().min(1, {
    message: "Invalid time",
  }),
  message: z.string().optional(),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      date: "",
      time: "",
      message: "",
    },
  });

  const errors = form.formState.errors;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full p-5 sm:p-7.5 rounded-2xl bg-transparent shadow-box h-full flex flex-col">
      <h2 className="text-xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-12">
        Schedule your free 30-minute consultation today.
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col flex-1 gap-2 sm:gap-4"
        >
          <div className="grid grid-cols-2 gap-7">
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
                    <Input placeholder="Email" {...field} />
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

          <div className="grid grid-cols-2 gap-7">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Date" {...field} className="pr-10" />
                      <CalendarDays className="absolute right-0 bottom-0.5 shrink-0 h-10 w-9 text-primary" />
                    </div>
                  </FormControl>
                  {errors.date ? (
                    <FormMessage />
                  ) : (
                    <FormDescription className="pb-5" />
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Time" {...field} className="pr-10" />
                      <Clock className="absolute right-0 bottom-0.5 shrink-0 h-10 w-9 text-primary" />
                    </div>
                  </FormControl>
                  {errors.time ? (
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
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="What would you like to discuss?"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            variant="primary"
            className="w-full py-4 sm:py-6 text-base sm:text-lg rounded-xl transition-all duration-300 mt-2 sm:mt-auto"
          >
            Book Your Call Now
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
