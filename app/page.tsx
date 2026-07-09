import {
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Download,
  Activity,
  LineChart,
  Package,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

const stats = [
  {
    label: "Revenue",
    value: "$84,240",
    change: "+12.4%",
    trend: "up",
    icon: CircleDollarSign,
  },
  {
    label: "Orders",
    value: "1,284",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    label: "Customers",
    value: "9,642",
    change: "+5.1%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Returns",
    value: "2.8%",
    change: "-1.3%",
    trend: "down",
    icon: Package,
  },
];

const revenue = [42, 58, 51, 74, 68, 86, 79, 96, 88, 104, 112, 126];
const channels = [
  { name: "Organic", value: 42, color: "#317873" },
  { name: "Paid search", value: 27, color: "#d9822b" },
  { name: "Social", value: 19, color: "#6b7fd7" },
  { name: "Referral", value: 12, color: "#d64550" },
];

const orders = [
  { id: "#1084", customer: "Maya Singh", product: "Starter Kit", status: "Paid", total: "$128" },
  { id: "#1083", customer: "Jordan Lee", product: "Pro Plan", status: "Pending", total: "$240" },
  { id: "#1082", customer: "Avery Chen", product: "Desk Lamp", status: "Paid", total: "$76" },
  { id: "#1081", customer: "Sam Rivera", product: "Notebook Set", status: "Shipped", total: "$52" },
];

const tasks = [
  "Review high-value orders",
  "Approve July campaign budget",
  "Restock top-selling bundles",
];

export default function Home() {
  const maxRevenue = Math.max(...revenue);

  return (
    <main className="dashboard-shell">
      <aside className="sidebar" aria-label="Main navigation">
        <div className="brand">
          <div className="brand-mark">L</div>
          <span>Lightdash</span>
        </div>
        <nav className="nav-list">
          <a className="nav-item active" href="#">
            <LineChart size={18} />
            Overview
          </a>
          <a className="nav-item" href="#">
            <ShoppingCart size={18} />
            Orders
          </a>
          <a className="nav-item" href="#">
            <Users size={18} />
            Customers
          </a>
          <a className="nav-item" href="#">
            <Package size={18} />
            Inventory TEST 
          </a>
        </nav>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Dashboard</p>
            <h1>Good morning, Parduman</h1>
          </div>
          <div className="topbar-actions">
            <label className="search">
              <Search size={16} />
              <input placeholder="Search" aria-label="Search dashboard" />
            </label>
            <button className="icon-button" aria-label="Notifications">
              <Bell size={18} />
            </button>
            <button className="primary-button">
              <Download size={17} />
              Export
            </button>
          </div>
        </header>

        <section className="stats-grid" aria-label="Key metrics">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight;
            return (
              <article className="metric-card" key={stat.label}>
                <div className="metric-icon">
                  <Icon size={20} />
                </div>
                <p>{stat.label}</p>
                <div className="metric-row">
                  <strong>{stat.value}</strong>
                  <span className={stat.trend === "up" ? "positive" : "calm"}>
                    <TrendIcon size={15} />
                    {stat.change}
                  </span>
                </div>
              </article>
            );
          })}
        </section>

        <section className="dancing-dots-section" aria-label="Live activity pulse">
          <div className="dots-copy">
            <div className="metric-icon">
              <Activity size={20} />
            </div>
            <div>
              <p className="eyebrow">Live activity</p>
              <h2>Dancing dots are Here</h2>
              <p>Orders, visitors, and campaign signals moving in real time.</p>
            </div>
          </div>
          <div className="dancing-dots" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
        </section>

        <section className="main-grid">
          <article className="panel chart-panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Performance</p>
                <h2>Revenue trend</h2>
              </div>
              <button className="ghost-button">
                <CalendarDays size={16} />
                12 months
              </button>
            </div>
            <div className="bar-chart" aria-label="Monthly revenue bar chart">
              {revenue.map((value, index) => (
                <div className="bar-column" key={index}>
                  <span style={{ height: `${(value / maxRevenue) * 100}%` }} />
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Traffic</p>
                <h2>Sales channels</h2>
              </div>
            </div>
            <div className="channel-list">
              {channels.map((channel) => (
                <div className="channel-row" key={channel.name}>
                  <div>
                    <span className="dot" style={{ background: channel.color }} />
                    {channel.name}
                  </div>
                  <strong>{channel.value}%</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="panel orders-panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Latest</p>
                <h2>Recent orders</h2>
              </div>
              <button className="ghost-button">View all</button>
            </div>
            <div className="table">
              {orders.map((order) => (
                <div className="table-row" key={order.id}>
                  <span>{order.id}</span>
                  <strong>{order.customer}</strong>
                  <span>{order.product}</span>
                  <span className="status">{order.status}</span>
                  <strong>{order.total}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Today</p>
                <h2>Focus list</h2>
              </div>
            </div>
            <div className="task-list">
              {tasks.map((task) => (
                <label className="task" key={task}>
                  <input type="checkbox" />
                  <CheckCircle2 size={18} />
                  <span>{task}</span>
                </label>
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
