import { renderHook } from "@testing-library/react";
import { withQueryProvider } from "./withQueryProvider";

type Callback<T> = (props: unknown) => T;

export const renderHookWithProviders = <T>(callback: Callback<T>) => {
    return renderHook(callback, {
        wrapper: ({ children }: { children: React.ReactNode }) => withQueryProvider(children)
    });
};
