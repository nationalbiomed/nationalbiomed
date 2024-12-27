import { useState, useEffect } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import imageToUrl from "@nepaltechinnov/img-to-url";
import {
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createSlug } from "../../../../lib/slugify";

import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  image: z.instanceof(File).optional(),
  description: z.string().min(1, "Description is required"),
});

const AddBlogForm = ({ setIsOpen }) => {
  const [imagePreview, setImagePreview] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      image: undefined,
      description: "",
    },
  });

  const handleImageChange = (event, onChange) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (values) => {
    setIsLoad(true);
    values.slug = createSlug(values.title);
    try {
      if (values.image) {
        const urls = await imageToUrl(values.image);
        if (urls) {
          values.image = urls?.mediumUrl;

          const response = await fetch("http://localhost:3000/api/blog/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.error || "Something went wrong!");
          }

          router.refresh();
          setIsOpen(false);
          form.reset();
          toast.success("Added Successfully!");
          setTimeout(() => {
            window.location.reload();
          }, 500);
        } else {
          throw new Error("Unable to upload image!");
        }
      } else {
        throw new Error("Please upload an image!");
      }
    } catch (e) {
      toast.error(e.message);
    } finally {
      setIsLoad(false);
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-textColor font-semibold">
          Add Blog
        </DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid space-y-4 py-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, onChange)}
                      {...rest}
                    />
                  </FormControl>
                  <FormMessage />
                  {value && imagePreview && (
                    <Image
                      src={imagePreview}
                      alt="Image Preview"
                      width={100}
                      height={100}
                      className="mt-4"
                    />
                  )}
                </FormItem>
              )}
            />
            <Controller
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <ReactQuill
                      theme="snow"
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Write a detailed description here"
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
                className="bg-textColor flex  items-center justify-center"
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
                className="bg-textColor hover:bg-textColor hover:contrast-200 cursor-pointer px-6"
              >
                Submit
              </Button>
            )}
          </DialogFooter>
        </form>
      </Form>
    </>
  );
};

export default AddBlogForm;
