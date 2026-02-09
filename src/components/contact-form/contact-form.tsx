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
import { TimeSelect } from "../ui/time-select";
import Clock from "../../svgs/form/clock.svg?react";
import Calendar from "../../svgs/form/calendar.svg?react";

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
    <div className="flex h-full w-full flex-col rounded-2xl bg-transparent p-5 shadow-box sm:p-7.5">
      <h2 className="mb-6 text-center text-xl font-bold text-white sm:mb-12 sm:text-3xl">
        Schedule your free 30-minute consultation today.
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-1 flex-col gap-2 sm:gap-4"
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

          <div className="grid grid-cols-2 gap-7">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Preferred Date"
                        {...field}
                        className="pr-10"
                      />
                      <Calendar className="absolute -right-1.5 -bottom-0.5 shrink-0 sm:-right-2.5 sm:-bottom-2.5 sm:size-13" />
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
                      <TimeSelect
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Preferred Time"
                        className="pr-10"
                      />
                      <Clock className="pointer-events-none absolute -right-1.5 -bottom-1 shrink-0 sm:-right-2.5 sm:-bottom-2 sm:size-13" />
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
            className="mt-2 w-full rounded-xl py-4 text-base transition-all duration-300 sm:mt-auto sm:py-6 sm:text-lg"
          >
            Book Your Call Now
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
