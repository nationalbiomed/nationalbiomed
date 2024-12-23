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
import { EditIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
});
export default function EditForm({ data }) {
  const [imageFile, setImageFile] = useState();
  const [imagePreview, setImagePreview] = useState(data?.image);
  const [isLoad, setIsLoad] = useState(false);
  const [openBox, setOpenBox] = useState(false);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data?.name,
      slug: data?.slug,
      post: data?.post,
      teamOrder: data?.teamOrder,
      image: data?.image,
      message: data?.message,
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

  const updateData = async (values) => {
    const response = await fetch(`http://localhost:3000/api/team/edit`, {
      method: "PATCH",
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
      setOpenBox(false);
      setIsLoad(false);
      form.reset();
      toast.success("Updated Successfully !!!");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  async function onSubmit(values) {
    setIsLoad(true);
    try {
      values.id = data?.id;
      if (imageFile) {
        const urls = await imageToUrl(imageFile);
        if (urls) {
          values.image = urls?.originalUrl;
          updateData(values);
        } else {
          toast.error("Unable To Upload Image !!!");
        }
      } else {
        values.image = data?.image;
        updateData(values);
      }
    } catch (e) {
      setIsLoad(false);
      console.error("Error submitting form:", e);
    }
  }

  return (
    <>
      <Dialog open={openBox} onOpenChange={setOpenBox}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-textColor w-[50%] text-white px-3
  py-5   rounded-sm hover:bg-textColor hover:contrast-200 sm:space-x-3 sm:px-4  hover:text-white flex"
          >
            <span className="block">Edit</span>
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
              Edit Team
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
        </DialogContent>
      </Dialog>
    </>
  );
}
