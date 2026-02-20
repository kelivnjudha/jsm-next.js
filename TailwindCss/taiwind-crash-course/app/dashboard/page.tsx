"use client";

import Link from "next/link";

const roles = [
  {
    name: "Admin",
    href: "/dashboard/admin",
    color: "bg-red-600 hover:bg-red-700",
    description: "Manage products, users, branches, inventory decisions, staff onboarding rules, and system logs.",
    features: ["Products & Catalog", "User Management", "Branch Analytics", "Inventory Decisions", "Staff Rules", "Logs & Backups"],
  },
  {
    name: "Manager",
    href: "/dashboard/manager",
    color: "bg-amber-600 hover:bg-amber-700",
    description: "Oversee branch operations, approve appointments, manage salespersons, and set commissions.",
    features: ["Branch Dashboard", "Appointments", "Salesperson Mgmt", "Inventory Requests", "Commission Policies", "Product Targeting"],
  },
  {
    name: "Salesperson",
    href: "/dashboard/salesperson",
    color: "bg-emerald-600 hover:bg-emerald-700",
    description: "View your appointments, track product possessions, and monitor your sales performance.",
    features: ["My Appointments", "Possessions", "Performance Summary"],
  },
];

export default function DashboardLanding() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Jade<span className="text-emerald-600">Palace</span> Dashboard
        </h1>
        <p className="text-gray-500 mt-2">
          Select a role to explore the dashboard UI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map((r) => (
          <Link
            key={r.name}
            href={r.href}
            className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-lg text-white text-lg font-bold ${r.color} transition-colors`}
            >
              {r.name[0]}
            </div>
            <h2 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
              {r.name}
            </h2>
            <p className="mt-1 text-sm text-gray-500 leading-relaxed">
              {r.description}
            </p>
            <ul className="mt-4 space-y-1.5">
              {r.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="w-1 h-1 bg-gray-400 rounded-full" />
                  {f}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}
