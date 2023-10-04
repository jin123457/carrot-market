import { useState } from "react";

interface IUseMutationState<T> {
    loading: boolean;
    data?: T;
    error: undefined | any;
}

type IUseMutationResult<T> = [(data: any) => void, IUseMutationState<T>];

export default function UseMustation<T = any>(url: string): IUseMutationResult<T> {
    const [mutationState, setMutationState] = useState<IUseMutationState<T>>({
        loading: false,
        data: undefined,
        error: undefined,
    });

    function mutation(data?: any) {
        setMutationState((prev) => ({ ...prev, loading: true }));
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((response) => response.json().catch(() => {}))
            .then((data) => setMutationState((prev) => ({ ...prev, data })))
            .catch((error) => setMutationState((prev) => ({ ...prev, error })))
            .finally(() => setMutationState((prev) => ({ ...prev, loading: false })));
    }

    return [mutation, { ...mutationState }];
}
