"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const MealsType = [
    {
        value: "main course",
        label: "Main Course",
    },
    {
        value: "side dish",
        label: "Side Dish",
    },
    {
        value: "snack",
        label: "Snack",
    },
    {
        value: "soup",
        label: "Soup",
    },
    {
        value: "salad",
        label: "Salad",
    },
]

export function SelectTypeFood({ onValueChange }: { onValueChange: (value: string) => void }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[300px] justify-between"
                >
                    {value
                        ? MealsType.find((MealsType) => MealsType.value === value)?.label
                        : "Sélectionner un type de repas..."}
                    <ChevronsUpDown className="ml-2 h-4 w-6 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
                <Command>
                    <CommandInput placeholder="Rechercher un type de repas..." />
                    <CommandList>
                        <CommandEmpty>Aucun type de repas trouvé.</CommandEmpty>
                        <CommandGroup>
                            {MealsType.map((MealsType) => (
                                <CommandItem
                                    key={MealsType.value}
                                    value={MealsType.value}
                                    onSelect={(currentValue) => {
                                        const newValue = currentValue === value ? "" : currentValue;
                                        setValue(newValue)
                                        setOpen(false)
                                        onValueChange(newValue) // Appel de la fonction callback
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === MealsType.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {MealsType.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

const CusisineType = [
    /*     {
            value: "",
            label: "N'importe",
        }, */
    {
        value: "french",
        label: "French",
    },
    {
        value: "italian",
        label: "Italian",
    },
    {
        value: "mexican",
        label: "Mexican",
    },
    {
        value: "american",
        label: "American",
    },
    {
        value: "japanese",
        label: "Japanese",
    },
    {
        value: "chinese",
        label: "Chinese",
    },
    {
        value: "indian",
        label: "Indian",
    },
    {
        value: "thai",
        label: "Thai",
    },
    {
        value: "vietnamese",
        label: "Vietnamese",
    },
    {
        value: "british",
        label: "British",
    },
    {
        value: "spanish",
        label: "Spanish",
    },
    {
        value: "european",
        label: "European",
    },
    {
        value: "african",
        label: "African",
    },
    {
        value: "caribbean",
        label: "Caribbean",
    },
    {
        value: "mediterranean",
        label: "Mediterranean",
    },
    {
        value: "korean",
        label: "Korean",
    },
]




export function SelectTypeCuisine({ onValueChange }: { onValueChange: (value: string) => void }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[300px] justify-between"
                >
                    {value
                        ? CusisineType.find((CusisineType) => CusisineType.value === value)?.label
                        : "Sélectionner un type de cuisine..."}
                    <ChevronsUpDown className="ml-2 h-4 w-6 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
                <Command>
                    <CommandInput placeholder="Rechercher un type de cuisine..." />
                    <CommandList>
                        <CommandEmpty>Aucun type de cuisine trouvé.</CommandEmpty>
                        <CommandGroup>
                            {CusisineType.map((CusisineType) => (
                                <CommandItem
                                    key={CusisineType.value}
                                    value={CusisineType.value}
                                    onSelect={(currentValue) => {
                                        const newValue = currentValue === value ? "" : currentValue;
                                        setValue(newValue)
                                        setOpen(false)
                                        onValueChange(newValue) // Appel de la fonction callback
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === CusisineType.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {CusisineType.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}