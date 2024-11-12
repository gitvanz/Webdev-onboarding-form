import { z } from 'zod';

export const formSchema = z.object({
    webPackage: z.string().min(1, 'Please select a web package'),
    webBuilder: z.string().min(1, 'Please select a web builder'),
    webType: z.string().min(1, 'Please select a web type'),
    webTemplate: z.string().min(1, 'Please select a web template'),
    otherCustomizedPackage: z.boolean().optional(), // Checkbox, can be optional
});
