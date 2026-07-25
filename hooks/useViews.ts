"use client";

import { useEffect, useState } from "react";

export function useViews(page: string) {
    const [views, setViews] = useState<number | null>(null);
    useEffect(() => {
        const loadViews = async () => {
            const res = await fetch("/api/views", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    page,
                }),
            });
            const data = await res.json();
            setViews(data.views);
        };
        loadViews();
    }, [page]);
    return views;
}