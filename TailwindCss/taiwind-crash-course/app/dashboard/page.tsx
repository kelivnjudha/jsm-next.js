const stats = [
  { label: "Total Users", value: "8,249", change: "+12.5%", up: true },
  { label: "Revenue", value: "$45,231", change: "+8.2%", up: true },
  { label: "Orders", value: "1,423", change: "-3.1%", up: false },
  { label: "Conversion", value: "3.24%", change: "+1.8%", up: true },
];

const recentOrders = [
  { id: "#3210", customer: "Olivia Martin", status: "Completed", amount: "$42.25", date: "Feb 20, 2026" },
  { id: "#3209", customer: "Jackson Lee", status: "Processing", amount: "$139.99", date: "Feb 19, 2026" },
  { id: "#3208", customer: "Isabella Nguyen", status: "Completed", amount: "$89.00", date: "Feb 19, 2026" },
  { id: "#3207", customer: "William Kim", status: "Pending", amount: "$249.00", date: "Feb 18, 2026" },
  { id: "#3206", customer: "Sofia Davis", status: "Completed", amount: "$19.99", date: "Feb 18, 2026" },
];

function statusColor(status: string) {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";
    case "Processing":
      return "bg-blue-100 text-blue-700";
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Welcome back! Here&apos;s an overview of your store.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-gray-200 p-5"
          >
            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <span
                className={`text-xs font-medium ${
                  stat.up ? "text-green-600" : "text-red-500"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent orders table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200">
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="text-base font-semibold text-gray-900">
              Recent Orders
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100">
                  <th className="px-5 py-3 font-medium">Order</th>
                  <th className="px-5 py-3 font-medium">Customer</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-5 py-3 font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-5 py-3 text-gray-600">
                      {order.customer}
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-right text-gray-900">
                      {order.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity feed */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="text-base font-semibold text-gray-900">
              Recent Activity
            </h2>
          </div>
          <div className="p-5 space-y-4">
            {[
              { text: "New user registered", time: "2 min ago", dot: "bg-green-500" },
              { text: "Order #3210 completed", time: "15 min ago", dot: "bg-blue-500" },
              { text: "Payment received — $139.99", time: "1 hour ago", dot: "bg-purple-500" },
              { text: "Product stock low: Widget Pro", time: "3 hours ago", dot: "bg-yellow-500" },
              { text: "New review on Gadget X", time: "5 hours ago", dot: "bg-pink-500" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${item.dot}`}
                />
                <div className="min-w-0">
                  <p className="text-sm text-gray-700">{item.text}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
