import { HeartCrack, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EmptyFavorites() {
    return (
        <div className="text-center py-16">
            <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartCrack className="w-10 h-10 text-rose-400" />
            </div>
            <h4 className="font-semibold text-gray-800 text-lg mb-2">No favorites yet</h4>
            <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                Start exploring problems and add your favorites to keep track of them here.
            </p>
            <Link
                href="/home"
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-pink-500 to-rose-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
                Explore Problems
                <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    );
}
