import cloudinary, { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

/**
 * 
 * @param file - File to upload
 * @param public_id - Public id for the file. This can be passed or generated by cloudinary
 * @param overwrite - Overwrite the file if it exists
 * @param invalidate - Invalidate the cache of the file or not
 * @returns 
 */
export function uploads(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        resource_type: 'auto' // can be used to upload any type of file like images, zip, etc.
      },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) resolve(error);
        resolve(result);
      }
    );
  });
}

/**
 * Method to upload video files in chunks of 50kb
 * @param file 
 * @param public_id 
 * @param overwrite 
 * @param invalidate 
 * @returns 
 */
export function videoUpload(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        chunk_size: 50000,
        resource_type: 'video'
      },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) resolve(error);
        resolve(result);
      }
    );
  });
}