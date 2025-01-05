import { Link } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from './ui/sidebar';

export default function NavMain({
    links,
}: {
    links: { title: string; route: string; icon: LucideIcon }[];
}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {links.map((link) => (
                        <SidebarMenuItem key={link.title}>
                            <SidebarMenuButton asChild>
                                <Link href={route(link.route)}>
                                    <link.icon />
                                    <span>{link.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
