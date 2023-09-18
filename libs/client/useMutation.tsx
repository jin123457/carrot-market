import { useState } from "react";

interface IUseMutationState {
    loading: boolean;
    data: undefined | any;
    error: undefined | any;
}

type IUseMutationResult = [(data: any) => void, IUseMutationState];

const UseMustation = (url: string): IUseMutationResult => {
    const [mutationState, setMutationState] = useState({
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
};

export default UseMustation;
