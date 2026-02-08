"use client";

import { useState } from "react";
import {
    User,
    Bell,
    Shield,
    Palette,
    Globe,
    Mail,
    Smartphone,
    Save,
    Eye,
    EyeOff,
} from "lucide-react";
import { cn } from "@/app/utils/cn";

interface UserData {
    name: string;
    email: string;
}

interface SettingsPanelProps {
    user: UserData;
}

export default function SettingsPanel({ user }: SettingsPanelProps) {
    const [activeSection, setActiveSection] = useState<"profile" | "notifications" | "privacy" | "appearance">(
        "profile"
    );
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        currentPassword: "",
        newPassword: "",
        showPassword: false,
    });
    const [notifications, setNotifications] = useState({
        emailDigest: true,
        problemReminders: true,
        achievementAlerts: true,
        weeklyProgress: false,
    });

    const sections = [
        { id: "profile", label: "Profile", icon: User },
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "privacy", label: "Privacy & Security", icon: Shield },
        { id: "appearance", label: "Appearance", icon: Palette },
    ] as const;

    return (
        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 overflow-hidden">
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-56 bg-gray-50 p-4 border-b sm:border-b-0 sm:border-r border-gray-100">
                    <nav className="space-y-1">
                        {sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={cn(
                                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                                        activeSection === section.id
                                            ? "bg-purple-100 text-purple-700"
                                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                                    )}
                                >
                                    <Icon className="w-4 h-4" />
                                    {section.label}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                <div className="flex-1 p-6">
                    {activeSection === "profile" && (
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-gray-800 text-lg mb-1">Profile Settings</h3>
                                <p className="text-sm text-gray-500">Manage your personal information</p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <h4 className="font-semibold text-gray-800 mb-4">Change Password</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Current Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={formData.showPassword ? "text" : "password"}
                                                    value={formData.currentPassword}
                                                    onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all pr-10"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, showPassword: !formData.showPassword })}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    {formData.showPassword ? (
                                                        <EyeOff className="w-4 h-4" />
                                                    ) : (
                                                        <Eye className="w-4 h-4" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">New Password</label>
                                            <input
                                                type={formData.showPassword ? "text" : "password"}
                                                value={formData.newPassword}
                                                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end pt-4">
                                <button className="px-6 py-2.5 bg-linear-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-purple-500/25">
                                    <Save className="w-4 h-4" />
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}

                    {activeSection === "notifications" && (
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-gray-800 text-lg mb-1">Notification Preferences</h3>
                                <p className="text-sm text-gray-500">Choose how you want to be notified</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        key: "emailDigest",
                                        icon: Mail,
                                        title: "Daily Email Digest",
                                        description: "Get a summary of your progress every day",
                                    },
                                    {
                                        key: "problemReminders",
                                        icon: Smartphone,
                                        title: "Problem Reminders",
                                        description: "Remind me to practice when I haven't solved any problems",
                                    },
                                    {
                                        key: "achievementAlerts",
                                        icon: Bell,
                                        title: "Achievement Alerts",
                                        description: "Get notified when you unlock new achievements",
                                    },
                                    {
                                        key: "weeklyProgress",
                                        icon: Globe,
                                        title: "Weekly Progress Report",
                                        description: "Receive a weekly summary of your learning progress",
                                    },
                                ].map((item) => {
                                    const Icon = item.icon;
                                    const isEnabled = notifications[item.key as keyof typeof notifications];

                                    return (
                                        <div
                                            key={item.key}
                                            className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                                    <Icon className="w-5 h-5 text-gray-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                                                    <p className="text-sm text-gray-500">{item.description}</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() =>
                                                    setNotifications({
                                                        ...notifications,
                                                        [item.key]: !isEnabled,
                                                    })
                                                }
                                                className={cn(
                                                    "relative w-12 h-6 rounded-full transition-colors",
                                                    isEnabled ? "bg-purple-600" : "bg-gray-300"
                                                )}
                                            >
                                                <div
                                                    className={cn(
                                                        "absolute w-5 h-5 bg-white rounded-full top-0.5 transition-all shadow-sm",
                                                        isEnabled ? "left-6" : "left-0.5"
                                                    )}
                                                />
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {activeSection === "privacy" && (
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-gray-800 text-lg mb-1">Privacy & Security</h3>
                                <p className="text-sm text-gray-500">Manage your account security settings</p>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-gray-50">
                                    <h4 className="font-medium text-gray-800 mb-2">Profile Visibility</h4>
                                    <p className="text-sm text-gray-500 mb-3">Control who can see your profile and progress</p>
                                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white">
                                        <option>Public - Anyone can view</option>
                                        <option>Friends Only</option>
                                        <option>Private - Only me</option>
                                    </select>
                                </div>

                                <div className="p-4 rounded-xl bg-gray-50">
                                    <h4 className="font-medium text-gray-800 mb-2">Two-Factor Authentication</h4>
                                    <p className="text-sm text-gray-500 mb-3">
                                        Add an extra layer of security to your account
                                    </p>
                                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                        Enable 2FA
                                    </button>
                                </div>

                                <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                                    <h4 className="font-medium text-red-800 mb-2">Danger Zone</h4>
                                    <p className="text-sm text-red-600 mb-3">
                                        Once you delete your account, there is no going back
                                    </p>
                                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                                        Delete Account
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === "appearance" && (
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-gray-800 text-lg mb-1">Appearance</h3>
                                <p className="text-sm text-gray-500">Customize how the app looks</p>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-gray-50">
                                    <h4 className="font-medium text-gray-800 mb-3">Theme</h4>
                                    <div className="grid grid-cols-3 gap-3">
                                        {["Light", "Dark", "System"].map((theme) => (
                                            <button
                                                key={theme}
                                                className={cn(
                                                    "p-3 rounded-lg border-2 text-sm font-medium transition-all",
                                                    theme === "Light"
                                                        ? "border-purple-500 bg-purple-50 text-purple-700"
                                                        : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                                                )}
                                            >
                                                {theme}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-gray-50">
                                    <h4 className="font-medium text-gray-800 mb-3">Accent Color</h4>
                                    <div className="flex gap-3">
                                        {[
                                            { name: "Purple", color: "bg-purple-600" },
                                            { name: "Blue", color: "bg-blue-600" },
                                            { name: "Green", color: "bg-emerald-600" },
                                            { name: "Orange", color: "bg-orange-600" },
                                            { name: "Pink", color: "bg-pink-600" },
                                        ].map((accent) => (
                                            <button
                                                key={accent.name}
                                                className={cn(
                                                    "w-10 h-10 rounded-lg transition-transform hover:scale-110",
                                                    accent.color,
                                                    accent.name === "Purple" && "ring-2 ring-offset-2 ring-purple-600"
                                                )}
                                                title={accent.name}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
