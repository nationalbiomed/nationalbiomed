import {
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { any, z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/navigation";

import imageToUrl from "@nepaltechinnov/img-to-url";
const formSchema = z
  .object({
    name: z.string().min(1, "Required"),

    email: z.string().min(1, "Required").email("Not a valid email"),

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
export default function AddNew({ setIsOpen }) {
  const [isLoad, setIsLoad] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
    },
  });

  async function onSubmit(values) {
    setIsLoad(true);
    try {
      const response = await fetch(
        `https://nationalbiomedical.vercel.app/api/user/register`,
        {
          method: "POST",
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
        setIsOpen(false);
        setIsLoad(false);
        form.reset();
        toast.success("Added Successfully !!!");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (e) {
      setIsLoad(false);
      console.error("Error submitting form:", e);
    }
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-textColor font-semibold ">
          Add User
        </DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-4">
          <div className="grid  space-y-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" {...field} type="password" />
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
    </>
  );
}
