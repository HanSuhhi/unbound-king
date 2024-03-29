import { useNow } from "@vueuse/core";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth.store";

// interface NUploadOptions {
//   file: UploadFileInfo
//   fileList: UploadFileInfo[]
// }

export function useAvator() {
  const defaultAvator = useNow().value.getTime().toString();
  const { email } = storeToRefs(useAuthStore());

  return {
    email: computed(() => email?.value || defaultAvator)
  };
}

// ================================================================================================================================================
// ================================================================================================================================================
// ================================================================================================================================================
// The feature has been deprecated but may be re-enabled in the future.

/**
 * Generates a base64-encoded thumbnail from an image.
 *
 * @param {HTMLImageElement} img The original image to thumbnail
 * @returns {string} The base64-encoded thumbnail data
 */
// function drawThumbnailBase64(img: HTMLImageElement): string | undefined {
//   if (import.meta.env.SSR) return;
//   const canvas = document.createElement("canvas");
//   canvas.width = img.width / 2;
//   canvas.height = img.height / 2;
//   canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
//   return canvas.toDataURL("image/png");
// }

/**
 * Asynchronously reads the given file and returns the data URL
 *
 * @param file The file to read
 * @returns The file data URL
 */
// async function readFileAsDataURL(file: File): Promise<string> {
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   return new Promise((resolve) => {
//     reader.onload = () => resolve(reader.result as string);
//   });
// }

/**
 * Asynchronously reads the given image and returns the base64-encoded data
 *
 * @param img The image to read
 * @returns The base64-encoded image data
 */
// async function readImageAsBase64(img: HTMLImageElement): Promise<string> {
//   return new Promise((resolve) => {
//     img.onload = () => resolve(drawThumbnailBase64(img)!);
//   });
// }

/**
 * Asynchronously reads a file and returns the base64-encoded image data
 *
 * @param file The file to read
 * @returns The base64-encoded image data
 */
// async function writeBase64FromFile(file: File): Promise<string> {
//   const img = new Image();
//   img.src = await readFileAsDataURL(file);
//   return await readImageAsBase64(img);
// }

// export function useUploadAvator() {
//   const allowUploadImageList = ["image/png", "image/jpeg", "image/jpg"];
//   const message = useMessage();
//   const File_Size_Limit = 200; // kb
//   const { avator } = storeToRefs(useAuthStore());

//   const updateAvator = async ({ file }: NUploadOptions) => {
//     if (!file.file) {
//       message.error("系统错误");
//       console.warn("系统错误");
//       return false;
//     }
//     if (!allowUploadImageList.includes(file.file?.type || "")) {
//       message.error("图片格式暂时只能为 png、jpg 或者 jpeg");
//       console.warn("图片格式暂时只能为 png、jpg 或者 jpeg");
//       return false;
//     }
//     if (file.file.size / 1024 >= File_Size_Limit) {
//       message.error("图片最大为 200kb");
//       console.warn("图片最大为 200kb");
//       return false;
//     }
//     // avator.value = await writeBase64FromFile(file.file);
//     return false;
//   };

//   return { updateAvator };
// }
