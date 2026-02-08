"use client";

import SettingsPanel from "./components/SettingsPanel";

export default function ProfilePage() {
    const user = {
        name: "Alex Nguyen",
        email: "alex.nguyen@example.com",
    };

    return (
        <div className="flex-1">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
                <p className="text-gray-500 text-sm mt-1">Manage your account settings and preferences</p>
            </div>
            <SettingsPanel user={user} />
        </div>
    );
}
