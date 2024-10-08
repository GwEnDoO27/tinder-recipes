'use client'

import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { Section } from "./Section";

export const CardContent = (props: {
    recipes: Array<{
        id: number;
        title: string;
        readyInMinutes: number;
        sourceUrl: string;
        image: string;
        link: string;
    }>;
}) => {
    return (
        <Section classname="w-full h-auto mx-auto px-4">
            <ApiCard recipes={props.recipes} />
        </Section>
    );
};

const ApiCard = (props: {
    recipes: Array<{
        id: number;
        title: string;
        readyInMinutes: number;
        sourceUrl: string;
        image: string;
        link: string;
    }>;
}) => {
    return (
        <Carousel className="w-full p-10">
            <CarouselContent>
                {props.recipes.map((recipe) => (
                    <CarouselItem key={recipe.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                        <div className="p-4 bg-white rounded-lg shadow-md h-full flex flex-col">
                            <CardHeader className="flex-grow">
                                <Image src={recipe.image} alt={recipe.title} width={300} height={200} className="w-full h-52 object-cover rounded-t-lg" />
                                <CardTitle className="mt-2 text-lg line-clamp-2">{recipe.title}</CardTitle>
                                <CardDescription>Prêt en {recipe.readyInMinutes} minutes</CardDescription>
                            </CardHeader>
                            <div className="mt-auto">
                                <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    Voir la recette
                                </a>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};
