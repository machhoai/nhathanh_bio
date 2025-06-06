import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ message, duration = 2000, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{
                    position: "fixed",
                    //   color: "white",
                    bottom: 20,
                    padding: "10px 24px",
                    backgroundColor: "#FFF",
                    borderRadius: 1000,
                    zIndex: 9999,
                    pointerEvents: "auto",
                    userSelect: "none",
                    fontWeight: "500",
                    fontSize: 16,
                    border: "1px solid #E5E7EB",
                    textAlign: "center",
                }}
            >
                {message}
            </motion.div>
        </AnimatePresence>
    );
};

// Hook quản lý toast
export function useToast() {
    const [toast, setToast] = useState(null);

    function showToast(message, duration) {
        setToast({ message, duration });
    }

    function hideToast() {
        setToast(null);
    }

    const ToastComponent = toast ? (
        <Toast
            message={toast.message}
            duration={toast.duration}
            onClose={hideToast}
        />
    ) : null;

    return { showToast, ToastComponent };
}
