'use client';

import { formSchema } from '@/lib/valitions';
import { z } from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomFormField from '../CustomFormField';
import { FormFieldType } from '@/types/types';
import { WebBuilder, WebPackage, WebTemplate, WebType } from '@/constants';
import { SelectItem } from '../ui/select';
import SubmitButton from '../SubmitButton';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CustomForm = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            webPackage: '',
            webBuilder: '',
            webType: '',
            webTemplate: '',
            otherCustomizedPackage: false,
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        setIsDisabled(true);

        try {
            // Simulate an async process, e.g., submitting data to an API
            console.log(values);
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
            router.push('/success');
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsLoading(false);
            setIsDisabled(false);
        }
    };

    return (
        <FormProvider {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 flex-1 flex flex-col justify-center items-center"
            >
                <section className="space-y-2 max-w-[800px]">
                    <h1 className="text-[2rem] font-bold">Welcome 👋</h1>
                    <p className="text-[1.25rem]">
                        Let us know more about your project needs by selecting
                        from the options below. This will help us tailor the
                        perfect website solution for you.
                    </p>
                </section>

                <section className="mb-9 space-y-2">
                    <h2 className="text-xl font-semibold text-center">
                        Personal Information
                    </h2>
                    <p className="text-center">
                        Please fill out the details below to help us understand
                        your website preferences.
                    </p>
                </section>

                <div className="space-y-8 flex-1 md:max-w-[500px] w-[350px] md:px-1 px-4">
                    <CustomFormField
                        fieldType={FormFieldType.SELECT}
                        control={form.control}
                        name="webPackage"
                        label="Website Package"
                        placeholder="Select your website package"
                    >
                        {WebPackage.map((item) => (
                            <SelectItem key={item.id} value={item.title}>
                                <p>{item.title}</p>
                            </SelectItem>
                        ))}
                    </CustomFormField>

                    <CustomFormField
                        fieldType={FormFieldType.SELECT}
                        control={form.control}
                        name="webBuilder"
                        label="Website Builder"
                        placeholder="Select your website builder"
                    >
                        {WebBuilder.map((item) => (
                            <SelectItem key={item.id} value={item.title}>
                                <p>{item.title}</p>
                            </SelectItem>
                        ))}
                    </CustomFormField>

                    <CustomFormField
                        fieldType={FormFieldType.SELECT}
                        control={form.control}
                        name="webType"
                        label="Website Type"
                        placeholder="Select your website type"
                    >
                        {WebType.map((item) => (
                            <SelectItem key={item.id} value={item.title}>
                                <p>{item.title}</p>
                            </SelectItem>
                        ))}
                    </CustomFormField>

                    <div className="space-y-4">
                        <CustomFormField
                            fieldType={FormFieldType.SELECT}
                            control={form.control}
                            name="webTemplate"
                            label="Website Template"
                            placeholder="Select your website template"
                        >
                            {WebTemplate.map((item) => (
                                <SelectItem key={item.id} value={item.title}>
                                    <p>{item.title}</p>
                                </SelectItem>
                            ))}
                        </CustomFormField>

                        <CustomFormField
                            fieldType={FormFieldType.CHECKBOX}
                            control={form.control}
                            name="otherCustomizedPackage"
                            label="Other (Check if Customized Package)"
                        />
                    </div>

                    <div className="flex justify-center items-center">
                        <SubmitButton
                            type="submit"
                            isLoading={isLoading}
                            disabled={isDisabled}
                        >
                            Submit
                        </SubmitButton>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default CustomForm;
