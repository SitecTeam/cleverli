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
import { DatePicker } from "@/components/ui/date-picker";
import Logo from "../../svgs/contact/logo.svg?react";
import { TimeSelect } from "../ui/time-select";
import Clock from "../../svgs/contact/clock.svg?react";
import CalendarIcon from "../../svgs/contact/calendar.svg?react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Min. 2 characters",
  }),
  email: z.string().email({
    message: "Invalid email",
  }),
  date: z.date({
    error: "Please select a date",
  }),
  time: z.string().min(1, {
    message: "Invalid time",
  }),
  message: z.string().optional(),
});

const BookYourCallForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      date: undefined,
      time: "",
      message: "",
    },
  });

  const errors = form.formState.errors;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="relative ml-3 flex w-59 flex-col rounded-md bg-white/50 px-3 py-4.5 align-middle shadow-form backdrop-blur-sm sm:h-full sm:w-70 sm:rounded-2xl sm:py-7.5 md:w-90 lg:ml-0 lg:w-111 lg:px-9 2xl:px-12">
      <div
        className="absolute top-0 left-20 bg-clip-text sm:top-4 sm:left-30 md:top-3.5 md:left-36 lg:hidden"
        aria-hidden="true"
      >
        <Logo />
      </div>
      <h2 className="z-10 mb-4 text-center font-bold sm:text-2xl lg:mb-10">
        Book Your 30-Minute Call
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-0.5 sm:gap-4 md:gap-7"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className="border-slate-800 text-sm shadow-none outline-none placeholder:text-slate-800 md:text-xl"
                  />
                </FormControl>
                {errors.name ? (
                  <FormMessage className="text-xs sm:text-base" />
                ) : (
                  <FormDescription className="pb-4 sm:pb-6" />
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
                  <Input
                    type="email"
                    placeholder="Email"
                    {...field}
                    className="border-slate-800 text-sm shadow-none placeholder:text-slate-800 md:text-xl"
                  />
                </FormControl>
                {errors.email ? (
                  <FormMessage className="text-xs sm:text-base" />
                ) : (
                  <FormDescription className="pb-4 sm:pb-6" />
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <DatePicker
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Preferred Date"
                      disabled={date =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                      className="border-slate-800 pr-10 text-sm text-slate-800 shadow-none md:text-xl"
                    />
                    <CalendarIcon className="pointer-events-none absolute top-1/2 right-0 h-5 w-5 shrink-0 -translate-y-1/2 text-slate-800 md:h-8.5 md:w-9.5" />
                  </div>
                </FormControl>
                {errors.date ? (
                  <FormMessage className="text-xs sm:text-base" />
                ) : (
                  <FormDescription className="pb-4 sm:pb-6" />
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
                      variant="light"
                    />
                    <Clock className="pointer-events-none absolute -right-2 -bottom-1 size-8 shrink-0 sm:-right-2.5 sm:-bottom-2 sm:size-13" />
                  </div>
                </FormControl>
                {errors.time ? (
                  <FormMessage className="text-xs sm:text-base" />
                ) : (
                  <FormDescription className="pb-4 sm:pb-6" />
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="What would you like to discuss?"
                    className="min-h-12 border-slate-800 text-sm shadow-none placeholder:text-slate-800 md:text-xl lg:min-h-24"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="primary"
            className="mt-4 h-10 w-full rounded-lg py-0 text-base font-semibold sm:mt-7 sm:text-xl lg:mt-0 lg:h-12.5"
          >
            Schedule Consultation
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BookYourCallForm;
