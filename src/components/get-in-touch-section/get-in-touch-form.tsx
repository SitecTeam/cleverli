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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Minimum 2 characters required",
  }),
  email: z.string().email({
    message: "Invalid email",
  }),
  message: z.string().optional(),
});

const GetInTouchForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const errors = form.formState.errors;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex h-full w-full flex-col justify-center rounded-2xl bg-transparent from-[#22272F] to-[#394453] pl-3 lg:bg-linear-to-b lg:px-9 lg:shadow-form 2xl:px-12">
      <h2 className="mb-4 text-xl text-white italic sm:text-3xl lg:mb-12 lg:text-5xl">
        Send Us A Message
      </h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-0.5 sm:gap-4 lg:gap-12"
        >
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
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mt-2">
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
            className="mt-7 h-10 w-full rounded-lg py-0 text-xl lg:mt-0 lg:h-12.5 lg:font-semibold"
          >
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default GetInTouchForm;
