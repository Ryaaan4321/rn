import Link from "next/link";
import { ArrowLeftIcon } from "@/components/Icons";
import Footer from "@/components/Footer";
import Booking from "@/components/Booking";

export default function Page() {
    return (
        <div className="min-h-screen bg-[#0c0c0c] flex flex-col">
            <header className="w-full">
                <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-xs text-[#6E6E6E] hover:text-[#F2F2F2] transition-colors tracking-[-0.15px]"
                    >
                        <ArrowLeftIcon size={14} />
                        Back
                    </Link>
                    <a
                        href="mailto:aryanbhofficial@gmail.com"
                        className="text-xs text-[#6E6E6E] hover:text-[#F2F2F2] transition-colors tracking-[-0.15px]"
                    >
                        aryanbhofficial@gmail.com
                    </a>
                </div>
            </header>
            <main className="flex-1 flex justify-center px-4 sm:px-6 pb-12">
                <div className="w-full max-w-[1000px] h-[650px] sm:h-[750px]">
                    <Booking />
                </div>
            </main>

            <Footer />
        </div>
    );
}