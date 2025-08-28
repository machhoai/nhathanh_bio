import { useState } from "react";

export default function ImageViewer({ src, alt }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Ảnh nhỏ */}
            <img
                src={src}
                alt={alt}
                className="h-auto max-w-full rounded-lg cursor-pointer transition hover:scale-[1.02]"
                onClick={() => setOpen(true)}
            />

            {/* Modal hiển thị ảnh lớn */}
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    onClick={() => setOpen(false)}
                >
                    <div className="relative max-h-[90%] max-w-[90%] rounded-lg bg-white p-4">
                        <img
                            src={src}
                            alt={alt}
                            className="max-h-[85vh] max-w-full rounded-lg"
                            onClick={(e) => e.stopPropagation()} // tránh đóng khi click vào ảnh
                        />
                    </div>
                </div>
            )}
        </>
    );
}
