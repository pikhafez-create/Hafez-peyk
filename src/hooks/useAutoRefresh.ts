import { useEffect } from "react";

export function useAutoRefresh(callback: () => void, interval = 3000) {
  useEffect(() => {
    const id = setInterval(() => {
      callback();
    }, interval);

    return () => clearInterval(id);
  }, []);
}
