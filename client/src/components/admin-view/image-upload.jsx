import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";



function ProductImageUpload({
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  isEditMode,
}) {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  function handleImageFileChange(e) {
    console.log(e.target.files[0]);
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setImageFile(selectedFile);
      // setUploadedImageUrl(URL.createObjectURL(selectedFile));
    }
  }

  function handleDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      setImageFile(droppedFile);
      // setUploadedImageUrl(URL.createObjectURL(selectedFile));
    }
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    // setUploadedImageUrl('');
  }

  function formatFileSize(size) {
    // Define the size units
    const units = ["Bytes", "KB", "MB", "GB", "TB"];

    let unitIndex = 0; // Start with Bytes

    // Loop to divide the file size and switch units
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }

    // Return the size rounded to two decimal places along with the unit
    return `${Math.round(size * 100) / 100} ${units[unitIndex]}`;
  }

  console.log(imageFile);

  async function uploadImageToCloudinary() {
    setImageLoadingState(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/admin/products/upload-image`,
      data
    );
    console.log("response", response);
    if (response?.data?.success) {
      setUploadedImageUrl(response.data.result.url);
      setImageLoadingState(false);
    }
  }

  useEffect(() => {
    if (imageFile !== null) {
      uploadImageToCloudinary();
    }
  }, [imageFile]);

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        className={`${
          isEditMode ? "opacity-60" : ""
        } border-2 border-dashed rounded-lg p-4 ${
          isDragging ? "border-blue-950" : ""
        }`}
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          accept="image/*"
          ref={inputRef}
          onChange={handleImageFileChange}
          disabled={isEditMode}
          multiple={false}
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className={`${
              isEditMode? "cursor-not-allowed" : ""
            } flex flex-col items-center justify-center h-32 cursor-pointer`}
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground nb-2" />
            <span>Drag & drop or click to upload image</span>
          </Label>
        ) : imageLoadingState ? (
          <Skeleton className="h-10 bg-gray-100" />
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileIcon className="w-8 h-8 text-primary mr-2" />
            </div>
            <p className="text-sm font-medium">
              {imageFile.name}
              {/* ({Math.round(imageFile.size / 1024)} KB) */}(
              {formatFileSize(imageFile.size)})
            </p>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRemoveImage}
              className="text-muted-foreground hover:text-foreground"
            >
              <XIcon className="w-4 h-4 mr-1" />
              <span className="sr-only">Remove</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductImageUpload;