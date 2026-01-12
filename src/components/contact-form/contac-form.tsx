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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  date: z.string().min(1, {
    message: "Please select a valid date.",
  }),
  time: z.string().min(1, {
    message: "Please select a valid time.",
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
    <div className="w-full p-7.5 rounded-2xl bg-transparent shadow-box h-full flex flex-col">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Schedule your free 30-minute consultation today.
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col flex-1 gap-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      className="border-0 border-b border-white/20 rounded-none px-0 bg-transparent focus-visible:ring-0 focus-visible:border-orange-400 text-white h-auto py-2"
                    />
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
                    <Input
                      placeholder="Email"
                      {...field}
                      className="border-0 border-b border-white/20 rounded-none px-0 bg-transparent focus-visible:ring-0 focus-visible:border-orange-400 text-white h-auto py-2"
                    />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Date"
                        {...field}
                        className="border-0 border-b border-white/20 rounded-none px-0 bg-transparent focus-visible:ring-0 focus-visible:border-orange-400 text-white h-auto py-2 pr-10"
                      />
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
                      <Input
                        placeholder="Time"
                        {...field}
                        className="border-0 border-b border-white/20 rounded-none px-0 bg-transparent focus-visible:ring-0 focus-visible:border-orange-400 text-white h-auto py-2 pr-10"
                      />
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
                  <textarea
                    placeholder="What would you like to discuss?"
                    {...field}
                    className="flex w-full  border-0 border-b border-white/20 bg-transparent px-0 py-2 text-sm ring-offset-background placeholder:text-[#8596AB] focus-visible:outline-none focus-visible:border-orange-400 disabled:cursor-not-allowed disabled:opacity-50 text-white min-h-[80px] resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            variant="primary"
            className="w-full py-6 text-lg rounded-xl transition-all duration-300 mt-auto"
          >
            Book Your Call Now
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
