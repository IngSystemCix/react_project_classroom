import { z } from 'zod';

export const schemaForm = z.object({
    email: z.string().email('Correo electronico invalido').min(5, 'El correo al menos debe ser mayor a 5 caracteres'),
    question: z.string().min(5, 'la pregunta es muy corta').max(255, 'la pregunta es muy larga'),
});

export type FormValues = z.infer<typeof schemaForm>;