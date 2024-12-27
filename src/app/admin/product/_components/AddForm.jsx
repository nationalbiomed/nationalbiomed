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
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import imageToUrl from "@nepaltechinnov/img-to-url";
import { X } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { createSlug } from "../../../../lib/slugify";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const formSchema = z.object({
  title: z.string().min(1, "Required"),
  pimage: z.string(),
  description: z.string().optional(),
  excerpt: z.string().optional(),
});

export default function AddNew({ setIsOpen, category, brand }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [cat, setCat] = useState(category[0]?.id);
  const [selectedBrand, setSelectedBrand] = useState(brand[0]?.id);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      pimage: "",
      excerpt: "",
      description: "",
    },
  });

  // Handle single image upload
  const handleImageChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const urls = await imageToUrl(file);
      setImagePreview(urls.mediumUrl);
    }
  };

  // Handle gallery image uploads
  const handleGalleryChange = async (event) => {
    const files = Array.from(event.target.files);
    const uploadedUrls = await Promise.all(
      files.map((file) => imageToUrl(file).then((res) => res.mediumUrl))
    );
    setGalleryImages((prev) => [...prev, ...uploadedUrls]);
  };

  // Remove a gallery image
  const removeGalleryImage = (index) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      values.pimage = imagePreview;
      values.gallery = galleryImages;
      values.category = cat;
      values.brand = selectedBrand;
      values.slug = createSlug(values.title);

      const response = await fetch(`/api/product/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Error adding Product");
      }

      toast.success("Product  added successfully!");
      setIsOpen(false);
      router.refresh();
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Add Product</DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

          <div className="space-y-2 ">
            <h3>Select Category</h3>
            <Select onValueChange={(value) => setCat(value)}>
              <SelectTrigger>
                <SelectValue placeholder={category[0]?.name} />
              </SelectTrigger>
              <SelectContent>
                {category.map((d) => (
                  <SelectItem value={String(d?.id)} key={d?.id}>
                    {d?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 ">
            <h3>Select Brand</h3>
            <Select onValueChange={(value) => setSelectedBrand(value)}>
              <SelectTrigger>
                <SelectValue placeholder={brand[0]?.name} />
              </SelectTrigger>
              <SelectContent>
                {brand.map((d) => (
                  <SelectItem value={String(d?.id)} key={d?.id}>
                    {d?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Banner Image</Label>
            <Input
              type="file"
              accept="image/*"
              required={true}
              onChange={handleImageChange}
            />
            {imagePreview && (
              <div className="mt-2 relative">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  width={300}
                  height={200}
                  className="rounded-md"
                />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label>Gallery Images</Label>
            <div className="flex items-center relative">
              <Input
                type="file"
                accept="image/*"
                multiple
                className="block w-full px-3 py-2 border rounded-none border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                id="gallery-upload"
                onChange={handleGalleryChange}
              />
              <button
                type="button"
                className="   bg-primary text-white p-2 shadow hover:bg-blue-600"
                onClick={() =>
                  document.getElementById("gallery-upload").click()
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {galleryImages.map((url, index) => (
              <div key={index} className="relative">
                <Image
                  src={url}
                  alt={`Gallery Image ${index + 1}`}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                  onClick={() => removeGalleryImage(index)}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>

          <FormField
            control={form.control}
            name="excerpt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="excerpt" {...field} />
                </FormControl>
                <FormMessage />
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

          <DialogFooter className="flex sm:justify-center ">
            {isLoading ? (
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
