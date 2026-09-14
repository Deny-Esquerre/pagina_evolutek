"use server";
import { actionClient } from "./safe-action";

import { formSchema } from "@/lib/form-schema";

export const serverAction = actionClient
  .inputSchema(formSchema)
  .action(async ({ parsedInput }) => {
    // eslint-disable-next-line no-console
    console.log(parsedInput);
    return {
      success: true,
      message: "Formulario enviado correctamente",
    };
  });
