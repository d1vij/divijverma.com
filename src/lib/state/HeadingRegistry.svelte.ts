import { getContext, setContext } from "svelte";

// @ts-ignore
export type HeadingRef = HTMLHeadingElement | undefined;
export type Heading = {
    depth: number;
    title: string;
    id: string,
};

class HeadingRegistry {
    public headings: Heading[] = $state([]);

    public register(depth: number, title: string) {
        const id = title.toLowerCase().replaceAll(" ", '-');
        this.headings.push({ depth, title, id });
        return id;
    }

    public reset() {
        this.headings = [];
    }
}

export const DEFAULT_REGISTRY_KEY = Symbol();
export function getRegistry(): HeadingRegistry {
    return getContext(DEFAULT_REGISTRY_KEY);
}
export function initRegistry(): HeadingRegistry {
    return setContext(DEFAULT_REGISTRY_KEY, new HeadingRegistry());
}
