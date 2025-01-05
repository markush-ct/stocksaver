import { Home, List } from 'lucide-react';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenuButton,
    SidebarRail,
} from '@/components/ui/sidebar';
import { router, usePage } from '@inertiajs/react';
import AppLogo from './app-logo';
import NavMain from './nav-main';
import { NavUser } from './nav-user';

export function AppSidebar() {
    const { auth } = usePage().props;

    const user = {
        name: auth.user.name,
        email: auth.user.email,
        avatar: `https://avatar.iran.liara.run/username?username=${auth.user.name}`,
    };

    // Menu items.
    const links = [
        {
            title: 'Home',
            route: 'dashboard',
            icon: Home,
        },
        {
            title: 'Category',
            route: 'category.index',
            icon: List,
        },
    ];

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenuButton size="lg" onClick={() => router.get('/')}>
                    <AppLogo />
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent>
                <NavMain links={links} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
