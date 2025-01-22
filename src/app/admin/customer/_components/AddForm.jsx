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

const formSchema = z.object({
  title: z.string().min(1, "Required"),
  image: z.string(),
  description: z.string(),
  position: z.preprocess((value) => parseInt(value, 10), z.number().optional()),
});
export default function AddNew({ setIsOpen }) {
  const [imageFile, setImageFile] = useState();
  const [imagePreview, setImagePreview] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      image: "",
      description: "",
      position: 1,
    },
  });

  // Handling image selection
  const handleImageChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(file);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  async function onSubmit(values) {
    setIsLoad(true);
    try {
      if (imageFile) {
        const urls = await imageToUrl(imageFile);
        if (urls) {
          values.image = urls?.originalUrl;
          const response = await fetch(
            `http://nationalbiomed.com.np/api/customer/add`,
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
        } else {
          setIsLoad(false);
          toast.error("Unable To Upload Image !!!");
        }
      } else {
        setIsLoad(false);
        toast.error("Please Upload Image !!!");
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
          Add Customer
        </DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-4">
          <div className="grid  space-y-4 py-4">
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
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input placeholder="1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="">
              <div className="space-y-2">
                <Label htmlFor="image">Image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </div>

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
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="resize-none"
                      {...field}
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
}
