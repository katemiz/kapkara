<script>
    import { Link, page } from "@inertiajs/svelte";

    import {
        Building,
        User,
        Box,
        Shield,
        Key,
        LampDesk,
        Presentation,
    } from "@lucide/svelte";

    let user = $derived($page.props.auth?.user);

    let currentPath = $derived($page.url.split("?")[0]);
</script>

<aside class="menu p-4">
    <p class="menu-label">
        Super Admin Panel<br />
        [{user?.name}
        {user?.lastname}]
    </p>

    <ul class="menu-list">
        <li>
            <Link
                href="/admin"
                class="is-fullwidth {currentPath == '/admin'
                    ? 'is-active'
                    : ''}"
            >
                <span class="icon"><Presentation size="18" /></span>
                <span>Dashboard</span>
            </Link>
        </li>
    </ul>
    <p class="menu-label">Management</p>
    <ul class="menu-list">
        <li>
            <Link
                href="/admin/organizations"
                class="is-fullwidth {currentPath == '/admin/organizations'
                    ? 'is-active'
                    : ''}"
            >
                <span class="icon"><Building size="18" /></span>
                <span>Organizations</span>
            </Link>
        </li>
        <li>
            <Link href="/admin/users">
                <span class="icon"><User size="18" /></span>
                <span>Users</span>
            </Link>
        </li>
        <li>
            <Link href="/admin/departments">
                <span class="icon"><LampDesk size="18" /></span>
                <span>Departments</span>
            </Link>
        </li>
    </ul>

    <p class="menu-label">System</p>
    <ul class="menu-list">
        <li>
            <Link href="/admin/modules">
                <span class="icon"><Box size="18" /></span>
                <span>Modules</span>
            </Link>
        </li>
        <li>
            <Link href="/admin/roles">
                <span class="icon"><Shield size="18" /></span>
                <span>Roles</span>
            </Link>
        </li>
        <li>
            <Link href="/admin/permissions">
                <span class="icon"><Key size="18" /></span>
                <span>Permissions</span>
            </Link>
        </li>
    </ul>
</aside>
