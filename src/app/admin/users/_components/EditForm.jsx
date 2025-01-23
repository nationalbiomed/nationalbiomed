import {
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { any, z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EditIcon } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    password: z
      .string()
      .min(1, "Required")
      .min(8, { message: "Less than 8 characters" })
      .max(20, { message: "More than 20 charcaters" })
      .refine((password) => /[A-Z]/.test(password), {
        message: "Must contain at least 1 capital letter",
      })
      .refine((password) => /[a-z]/.test(password), {
        message: "Must contain at least 1 small letter",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "Must contain at least 1 number",
      })
      .refine((password) => /[!@#$%^&*]/.test(password), {
        message: "Must contain at least 1 special character",
      }),

    confirm: z.string().min(1, "Required"),
  })
  .superRefine(({ confirm, password }, ctx) => {
    if (confirm !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirm"],
      });
    }
  });
export default function EditForm({ id }) {
  const [isLoad, setIsLoad] = useState(false);
  const [openBox, setOpenBox] = useState(false);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm: "",
    },
  });

  async function onSubmit(values) {
    setOpenBox(true);
    try {
      values.id = id;

      const response = await fetch(
        `https://nationalbiomed.com.np/api/user/reset`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        setIsLoad(false);
        toast.error(data.error || "Something went wrong!");
      } else {
        router.refresh();
        setOpenBox(false);
        setIsLoad(false);
        form.reset();
        toast.success("Updated Successfully !!!");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (e) {
      setOpenBox(false);
      console.error("Error submitting form:", e);
    }
  }

  return (
    <>
      <Dialog open={openBox} onOpenChange={setOpenBox}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
             className="w-full text-white bg-[#0b9d50] hover:bg-[#091e13] hover:text-white"
          >
            <span className="block">Reset</span>
            <EditIcon />
          </Button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-[500px] max-h-[80%] overflow-y-auto "
          onPointerDownOutside={(e) => e.preventDefault()}
          onInteractOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-textColor font-semibold ">
              Edit Banner
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-4">
              <div className="grid  space-y-4 py-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Confirm Password"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter className="flex sm:justify-center ">
                {isLoad ? (
                  <Button
                    disabled={true}
                    type="submit"
                    className="w-full text-white bg-[#0b9d50] hover:bg-[#091e13] hover:text-white"
                  >
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-100"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-100"
                        fill="currentColor"
                        d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8H4z"
                      />
                    </svg>
                    Submit
                  </Button>
                ) : (
                  <Button
                    type="submit"
                     className="w-full text-white bg-[#0b9d50] hover:bg-[#091e13] hover:text-white"
                  >
                    Submit
                  </Button>
                )}
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
