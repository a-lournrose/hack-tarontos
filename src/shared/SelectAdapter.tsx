import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.tsx";

interface SelectItemType {
    value: string;
    label: string;
}

interface CustomSelectProps {
    items: SelectItemType[];
    label?: string;
    placeholder: string;
}

const SelectAdapter: React.FC<CustomSelectProps> = ({items, label, placeholder}) => (
    <Select>
        <SelectTrigger className="w-full">
            <SelectValue placeholder={placeholder}/>
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                {label && <SelectLabel>{label}</SelectLabel>}
                {items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                        {item.label}
                    </SelectItem>
                ))}
            </SelectGroup>
        </SelectContent>
    </Select>
);

export default SelectAdapter;
