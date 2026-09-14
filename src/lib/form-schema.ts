import * as z from "zod";

export interface ActionResponse<T = unknown> {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
  inputs?: T;
}
export const formSchema = z.object({
  name: z.string().min(1, "Este campo es obligatorio"),
  email: z.string().min(1, "Este campo es obligatorio").email("Correo inválido"),
  company: z.string().optional(),
  employees: z.string().optional(),
  message: z.string().min(1, "Este campo es obligatorio"),
  agree: z.literal(true, { message: "Debes aceptar la política de privacidad" }),
});
