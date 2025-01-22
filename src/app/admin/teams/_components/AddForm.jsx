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
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

const formSchema = z.object({
  name: z.string().min(1, "Required"),
  slug: z
    .string()
    .min(1, "Required")
    .regex(
      /^[a-z0-9-#]+$/,
      "Slug must only contain lowercase letters, numbers, # , and hyphens"
    ),
  post: z.string(),
  teamOrder: z.preprocess(
    (value) => parseInt(value, 10),
    z.number().optional()
  ),
  image: z.string(),
  message: z.string(),
  category: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
});
export default function AddNew({ setIsOpen }) {
  const [imageFile, setImageFile] = useState();
  const [imagePreview, setImagePreview] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      slug: "",
      post: "",
      teamOrder: 1,
      image: "",
      message: "",
      category: "",
      email: "",
      phone: "",
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
          const response = await fetch(`https://nationalbiomedical.vercel.app/api/team/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
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
          Add Team
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
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormControl>
                    <Input placeholder="john-doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input placeholder="Sales" {...field} />
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
                    <Input placeholder="xyz@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+9779800000000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="post"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Post</FormLabel>
                  <FormControl>
                    <Input placeholder="Manager" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="teamOrder"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Order</FormLabel>
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
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
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
}
