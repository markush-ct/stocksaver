import { AppSidebar } from '@/components/app-sidebar';
import { Separator } from '@/components/ui/separator';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';
import { Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({
    children,
    breadcrumbs,
}: {
    children: React.ReactNode;
    breadcrumbs: {
        label: string;
        routeName?: string;
    }[];
}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            {breadcrumbs.map((breadcrumb) => (
                                <React.Fragment key={breadcrumb.label}>
                                    {breadcrumb.routeName && (
                                        <>
                                            <BreadcrumbItem className="hidden md:block">
                                                <BreadcrumbLink asChild>
                                                    <Link
                                                        href={route(
                                                            breadcrumb.routeName,
                                                        )}
                                                    >
                                                        {breadcrumb.label}
                                                    </Link>
                                                </BreadcrumbLink>
                                            </BreadcrumbItem>

                                            <BreadcrumbSeparator className="hidden md:block" />
                                        </>
                                    )}

                                    {breadcrumb.routeName === undefined && (
                                        <BreadcrumbItem>
                                            <BreadcrumbPage>
                                                {breadcrumb.label}
                                            </BreadcrumbPage>
                                        </BreadcrumbItem>
                                    )}
                                </React.Fragment>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>

                <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
            </main>
        </SidebarProvider>
    );
}
