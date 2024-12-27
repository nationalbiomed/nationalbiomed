"use client";

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
  DialogContent,
  DialogTrigger,
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

import { Dialog } from "@/components/ui/dialog";
import { EditIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { createSlug } from "../../../../lib/slugify";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  image: z.union([z.string(), z.instanceof(File)]).optional(),
  description: z.string().min(1, "Description is required"),
});

export default function EditForm({ blogData }) {
  const [imageFile, setImageFile] = useState();
  const [imagePreview, setImagePreview] = useState(blogData?.image);
  const [isLoad, setIsLoad] = useState(false);
  const [openBox, setOpenBox] = useState(false);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: blogData?.title || "",
      slug: blogData?.slug || "",
      image: blogData?.image || "",
      description: blogData?.description || "",
    },
  });

  const handleImageChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (values) => {
    setIsLoad(true);
    try {
      values.id = blogData?.id;
      values.slug = createSlug(values.title);
      if (imageFile) {
        const urls = await imageToUrl(imageFile);
        if (urls) {
          values.image = urls?.mediumUrl;
        } else {
          throw new Error("Unable to upload image!");
        }
      } else {
        values.image = blogData?.image;
      }

      const response = await fetch(`http://localhost:3000/api/blog/edit`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong!");
      }

      router.refresh();
      setOpenBox(false);
      form.reset();
      toast.success("Updated Successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (e) {
      console.error("Error submitting form:", e);
      toast.error(e.message);
    } finally {
      setIsLoad(false);
    }
  };

  return (
    <Dialog open={openBox} onOpenChange={setOpenBox}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-textColor w-[50%] text-white px-3 py-5 rounded-sm hover:bg-textColor hover:contrast-200 sm:space-x-3 sm:px-4 hover:text-white flex"
        >
          <span className="block">Edit</span>
          <EditIcon />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-textColor font-semibold">
            Edit Blog
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
                        onChange={(e) => handleImageChange(e)}
                        {...rest}
                      />
                    </FormControl>
                    <FormMessage />
                    {imagePreview && (
                      <div className="mt-2 relative w-full sm:h-[150px] h-[100px]">
                        <Image
                          src={imagePreview}
                          alt="Preview"
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-md"
                        />
                      </div>
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
            <DialogFooter>
              <Button
                type="submit"
                className="bg-textColor hover:bg-textColor hover:contrast-200 cursor-pointer px-6"
                disabled={isLoad}
              >
                {isLoad ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
