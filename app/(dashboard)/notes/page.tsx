"use client";

import { useState } from "react";
import { Plus, Search, Trash2, Edit3, Save, X, StickyNote, Calendar } from "lucide-react";
import { cn } from "@/app/utils/cn";

interface Note {
    id: number;
    title: string;
    content: string;
    category: string;
    createdAt: string;
    updatedAt: string;
}

const categories = ["All", "Array", "Tree", "Graph", "Dynamic Programming", "String", "General"];

export default function NotesPage() {
    const [notes, setNotes] = useState<Note[]>([
        {
            id: 1,
            title: "Two Pointer Technique",
            content: "Sử dụng 2 con trỏ để duyệt mảng từ 2 đầu. Thường dùng cho bài toán tìm cặp số có tổng bằng target.",
            category: "Array",
            createdAt: "2024-01-15",
            updatedAt: "2024-01-15",
        },
        {
            id: 2,
            title: "DFS vs BFS",
            content: "DFS: Dùng stack/recursion, đi sâu trước. BFS: Dùng queue, đi rộng trước. DFS tốt cho tìm đường, BFS tốt cho shortest path.",
            category: "Graph",
            createdAt: "2024-01-16",
            updatedAt: "2024-01-16",
        },
    ]);

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isCreating, setIsCreating] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [newNote, setNewNote] = useState({ title: "", content: "", category: "General" });

    const filteredNotes = notes.filter((note) => {
        const matchesSearch =
            note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.content.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || note.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleCreateNote = () => {
        if (!newNote.title.trim()) return;
        const today = new Date().toISOString().split("T")[0];
        const note: Note = {
            id: Date.now(),
            title: newNote.title,
            content: newNote.content,
            category: newNote.category,
            createdAt: today,
            updatedAt: today,
        };
        setNotes([note, ...notes]);
        setNewNote({ title: "", content: "", category: "General" });
        setIsCreating(false);
    };

    const handleUpdateNote = (id: number, updates: Partial<Note>) => {
        setNotes(
            notes.map((note) =>
                note.id === id ? { ...note, ...updates, updatedAt: new Date().toISOString().split("T")[0] } : note
            )
        );
        setEditingId(null);
    };

    const handleDeleteNote = (id: number) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">My Notes</h1>
                    <p className="text-gray-500 text-sm mt-1">Ghi chú và tổng hợp kiến thức khi học</p>
                </div>
                <button
                    onClick={() => setIsCreating(true)}
                    className="px-4 py-2.5 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-purple-500/25"
                >
                    <Plus className="w-4 h-4" />
                    New Note
                </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search notes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={cn(
                                "px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                                selectedCategory === cat
                                    ? "bg-purple-100 text-purple-700 border-2 border-purple-200"
                                    : "bg-white/80 text-gray-600 border-2 border-transparent hover:bg-gray-100"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {isCreating && (
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-purple-200 p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-gray-800">Create New Note</h3>
                        <button onClick={() => setIsCreating(false)} className="text-gray-400 hover:text-gray-600">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Note title..."
                            value={newNote.title}
                            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <textarea
                            placeholder="Write your note..."
                            value={newNote.content}
                            onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                            rows={4}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                        />
                        <div className="flex items-center justify-between">
                            <select
                                value={newNote.category}
                                onChange={(e) => setNewNote({ ...newNote, category: e.target.value })}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                            >
                                {categories.filter((c) => c !== "All").map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                            <button
                                onClick={handleCreateNote}
                                className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                            >
                                <Save className="w-4 h-4" />
                                Save Note
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredNotes.map((note) => (
                    <div
                        key={note.id}
                        className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-5 hover:shadow-xl transition-all group"
                    >
                        {editingId === note.id ? (
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    defaultValue={note.title}
                                    onBlur={(e) => handleUpdateNote(note.id, { title: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-semibold"
                                />
                                <textarea
                                    defaultValue={note.content}
                                    onBlur={(e) => handleUpdateNote(note.id, { content: e.target.value })}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-sm"
                                />
                                <button
                                    onClick={() => setEditingId(null)}
                                    className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                                >
                                    Done Editing
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-linear-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                            <StickyNote className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{note.title}</h3>
                                            <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full">
                                                {note.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => setEditingId(note.id)}
                                            className="p-1.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                                        >
                                            <Edit3 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteNote(note.id)}
                                            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{note.content}</p>
                                <div className="flex items-center gap-1 text-xs text-gray-400">
                                    <Calendar className="w-3 h-3" />
                                    <span>Updated {note.updatedAt}</span>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {filteredNotes.length === 0 && (
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <StickyNote className="w-8 h-8 text-gray-400" />
                    </div>
                    <h4 className="font-medium text-gray-700 mb-1">No notes found</h4>
                    <p className="text-sm text-gray-500">Create your first note to start organizing your learning</p>
                </div>
            )}
        </div>
    );
}
