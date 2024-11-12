import { FormFieldType } from '@/types/types';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './ui/form';
import { Select, SelectContent, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import {
    Control,
    ControllerRenderProps,
    FieldPath,
    FieldValues,
} from 'react-hook-form';

export type CustomProps<T extends FieldValues> = {
    control: Control<T>;
    fieldType: FormFieldType;
    name: FieldPath<T>;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
};

const RenderField = <T extends FieldValues>({
    field,
    props,
}: {
    field: ControllerRenderProps<T, FieldPath<T>>;
    props: CustomProps<T>;
}) => {
    const { fieldType, placeholder, className } = props;

    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                <FormControl>
                    <Input
                        placeholder={placeholder}
                        {...field}
                        className={`${className}`}
                    />
                </FormControl>
            );
        case FormFieldType.SELECT:
            return (
                <FormControl>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger className="shad-select-trigger">
                                <SelectValue placeholder={props.placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className="shad-select-content">
                            {props.children}
                        </SelectContent>
                    </Select>
                </FormControl>
            );
            break;
        case FormFieldType.CHECKBOX:
            return (
                <FormControl>
                    <div className="flex items-center gap-4">
                        <Checkbox
                            id={props.name}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                        <label htmlFor={props.name} className="">
                            {props.label}
                        </label>
                    </div>
                </FormControl>
            );
        default:
            break;
    }
};

const CustomFormField = <T extends FieldValues>(props: CustomProps<T>) => {
    const { fieldType, control, label, name } = props;
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {fieldType !== FormFieldType.CHECKBOX && label && (
                        <FormLabel className="font-bold text-[1.125rem]">
                            {label}
                        </FormLabel>
                    )}
                    <RenderField field={field} props={props} />
                    <FormMessage className="shad-error" />
                </FormItem>
            )}
        />
    );
};

export default CustomFormField;
