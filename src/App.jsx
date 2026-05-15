import { useMemo, useState } from 'react'
import './App.css'

const users = [
  { name: 'Ari Putra', role: 'Product Owner', status: 'Active', revenue: '$12,400' },
  { name: 'Nina Safira', role: 'Finance Lead', status: 'Active', revenue: '$8,920' },
  { name: 'Rio Mahendra', role: 'Ops Manager', status: 'Pending', revenue: '$6,110' },
  { name: 'Dewi Kartika', role: 'Sales Admin', status: 'Active', revenue: '$4,580' },
]

const sales = [42, 58, 46, 70, 63, 86, 78]

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [dark, setDark] = useState(true)
  const [email, setEmail] = useState('demo@company.com')

  const total = useMemo(() => users.length * 2450 + sales.reduce((a, b) => a + b, 0), [])

  if (!loggedIn) {
    return (
      <main className={dark ? 'app dark' : 'app'}>
        <section className="login-panel">
          <div>
            <p className="eyebrow">React Admin Dashboard</p>
            <h1>Internal tool untuk tracking revenue, user, dan aktivitas.</h1>
          </div>
          <form onSubmit={(event) => { event.preventDefault(); setLoggedIn(true) }}>
            <label>Email</label>
            <input value={email} onChange={(event) => setEmail(event.target.value)} />
            <label>Password</label>
            <input type="password" defaultValue="password" />
            <button type="submit">Login Demo</button>
          </form>
        </section>
      </main>
    )
  }

  return (
    <main className={dark ? 'app dark' : 'app'}>
      <aside>
        <strong>OpsPanel</strong>
        <nav>
          <a>Dashboard</a>
          <a>Customers</a>
          <a>Reports</a>
          <a>Settings</a>
        </nav>
      </aside>

      <section className="workspace">
        <header>
          <div>
            <p className="eyebrow">Logged in as {email}</p>
            <h1>Dashboard Overview</h1>
          </div>
          <button className="ghost" onClick={() => setDark(!dark)}>{dark ? 'Light' : 'Dark'} Mode</button>
        </header>

        <div className="metrics">
          <article><span>Total Revenue</span><strong>${total.toLocaleString()}</strong><small>+18.2% this month</small></article>
          <article><span>Active Users</span><strong>1,284</strong><small>+126 new users</small></article>
          <article><span>Conversion</span><strong>12.8%</strong><small>+3.1% growth</small></article>
        </div>

        <section className="content-grid">
          <article className="panel">
            <div className="panel-head">
              <h2>Weekly Sales</h2>
              <span>API-ready chart</span>
            </div>
            <div className="chart">
              {sales.map((value, index) => (
                <div className="bar" style={{ height: `${value}%` }} key={index}><span>{value}</span></div>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-head">
              <h2>Customer Table</h2>
              <span>{users.length} records</span>
            </div>
            <table>
              <thead><tr><th>Name</th><th>Role</th><th>Status</th><th>Revenue</th></tr></thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.name}>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td><mark>{user.status}</mark></td>
                    <td>{user.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </section>
      </section>
    </main>
  )
}

export default App
