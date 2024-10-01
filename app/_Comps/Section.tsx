import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export const Section = (props: PropsWithChildren<{ classname?: string }>) => {
    return (
        <section className={cn("max-w-6xl px-4 m-auto gap-3", props.classname)}>
            {props.children}
        </section>
    )
}