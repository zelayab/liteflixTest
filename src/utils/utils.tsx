/**
 * * Convert image to base64
 * @param image
 * @returns
 */
export async function convertImage(
  image: any
): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // el type de fileReader es any porque no se puede acceder a la propiedad result de FileReader en typescript
    reader.onload = function (event: any) {
      const fileData = event.target.result;
      resolve(fileData);
    };
    // el type de fileReader es any porque no se puede acceder a la propiedad error de FileReader en typescript
    reader.onerror = function (event: any) {
      reject(event.target.error);
    };

    reader.readAsDataURL(image);
  });
}
