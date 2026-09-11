"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type ModalState = {
  open: boolean;
  prefill: string;
};

type Ctx = {
  state: ModalState;
  openModal: (prefill?: string) => void;
  closeModal: () => void;
};

const ItineraryModalCtx = createContext<Ctx | null>(null);

export function ItineraryModalProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ModalState>({ open: false, prefill: "" });

  const openModal = useCallback((prefill = "") => {
    setState({ open: true, prefill });
  }, []);
  const closeModal = useCallback(() => {
    setState((s) => ({ ...s, open: false }));
  }, []);

  const value = useMemo(() => ({ state, openModal, closeModal }), [state, openModal, closeModal]);

  return <ItineraryModalCtx.Provider value={value}>{children}</ItineraryModalCtx.Provider>;
}

export function useItineraryModal() {
  const ctx = useContext(ItineraryModalCtx);
  if (!ctx) throw new Error("useItineraryModal must be used within ItineraryModalProvider");
  return ctx;
}
