"use client";

import { useState } from "react";
import { FaRegImages, FaArrowUp, FaTrash } from "react-icons/fa"; // Gallery icon
import ClipLoader from "react-spinners/ClipLoader";

type FormDataType = {
  title: string;
  sportsName: string;
  isTrending: boolean;
  content: string;
  assets: File[];
};

export default function CreateArticle() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    title: "",
    sportsName: "",
    isTrending: false,
    content: "",
    assets: [],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      const checked = e.target.checked;

      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; // 👈 Save first

    if (files && files.length > 0) {
      const fileArray = Array.from(files); // ✅ Now no null error

      const file = fileArray[0]; // First file

      setFormData((prev) => ({
        ...prev,
        assets: fileArray, // ✅ Safe!
      }));

      // Set the preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const POST_URI = process.env.NEXT_PUBLIC_POST_ARTICLE_URI;

    if (!POST_URI) throw new Error("Article Post URI missing");

    if (formData.assets.length === 0) {
      console.error("No files selected for upload.");
      return;
    }

    try {
      setIsSubmitting(true);
      const form = new FormData();

      form.append("title", formData.title);
      form.append("sportsName", formData.sportsName);
      form.append("isTrending", formData.isTrending.toString());
      form.append("content", formData.content);
      form.append("assets", formData.assets[0]);

      const response = await fetch(POST_URI, {
        method: "POST",
        body: form,
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Article created:", data);

        // clear form
        // setFormData({
        //   title: "",
        //   sportsName: "",
        //   isTrending: false,
        //   content: "",
        //   assets: [],
        // });
        // setPreviewUrl(null);
      } else {
        console.error("Failed:", data);
      }
    } catch (error) {
      console.error("Error submitting article:", error);
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 500);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-white">Create New Article</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="sportsName"
          value={formData.sportsName}
          onChange={handleChange}
          required
          className="w-100 p-2 bg-black text-white border rounded"
        >
          <option value="">Select a sport</option>
          <option value="Cricket">Cricket</option>
          <option value="Football">Football</option>
          <option value="Basketball">Basketball</option>
          {/* Add more sports as needed */}
        </select>
        <div className="flex flex-col items-center justify-center border border-gray-400 rounded-lg p-6 cursor-pointer relative w-full max-w-[640px] aspect-video">
          {previewUrl ? (
            <div className="relative w-full h-full">
              <img
                src={previewUrl}
                alt="Preview"
                className="object-cover w-full h-full rounded-lg"
              />
              <button
                type="button"
                onClick={() => {
                  setPreviewUrl(null);
                  setFormData((prev) => ({ ...prev, assets: [] }));
                }}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
              >
                <FaTrash className="text-xs text-gray" />
              </button>
            </div>
          ) : (
            <>
              <FaRegImages className="text-6xl text-gray-400 mb-4" />
              <p className="text-white text-sm mb-5">
                We recommend uploading or dragging in an image that is 1920X1080
                pixels
              </p>
              <button
                type="button"
                onClick={() => document.getElementById("fileInput")?.click()}
                className="text-white px-4 py-2 border border-gray-500 rounded-xl transition flex gap-1"
              >
                <FaArrowUp className="text-xs text-gray" />
                <span className="text-xs">Upload from computer</span>
              </button>
            </>
          )}
          <input
            id="fileInput"
            type="file"
            accept=".png, .jpg, .jpeg, .webp"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        <textarea
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => {
            if (e.target.value.length <= 180) {
              handleChange(e);
            }
          }}
          required
          className="w-full p-2 bg-black text-2xl border rounded text-white overflow-hidden resize-none"
          style={{ minHeight: "3rem", maxHeight: "8rem" }}
          onInput={(e) => {
            e.currentTarget.style.height = "auto";
            e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
          }}
        />
        <div className="text-right text-xs text-gray-400">
          {formData.title.length}/150
        </div>

        <label className="flex items-center space-x-2">
          <span className="text-white">Trending?</span>
          <input
            type="checkbox"
            name="isTrending"
            checked={formData.isTrending}
            onChange={handleChange}
            className="h-4 w-4"
          />
        </label>
        <textarea
          name="content"
          placeholder="Write the article here."
          value={formData.content}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded h-32 bg-black text-white"
          style={{ minHeight: "8rem" }}
          onInput={(e) => {
            e.currentTarget.style.height = "auto";
            e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
          }}
        />
        <button
          type="submit"
          className={`w-full py-2 rounded transition flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <ClipLoader size={20} color="#ffffff" />
          ) : (
            "Submit Article"
          )}
        </button>
      </form>
    </div>
  );
}
