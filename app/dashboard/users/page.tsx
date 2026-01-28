import Link from "next/link";

const Users = () => {
    return (
        <div>
            <h1>Dashboard Users</h1>

            <ul className="mt-10">
                <li><Link href="/dashboard/users/1"></Link> User 1</li>
                <li><Link href="/dashboard/users/2"></Link> User 2</li>
                <li><Link href="/dashboard/users/3"></Link> User 3</li>
                <li><Link href="/dashboard/users/4"></Link> User 4</li>
            </ul>
        </div>
    )
}
export default Users
