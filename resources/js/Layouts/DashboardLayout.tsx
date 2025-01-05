import { AppSidebar } from '@/components/app-sidebar';
import { Separator } from '@/components/ui/separator';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function DashboardLayout({
    children,
    title = 'Page Title',
}: {
    children: React.ReactNode;
    title?: string;
}) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <h1 className="text-lg font-bold">{title}</h1>
                </header>

                <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
            </main>
        </SidebarProvider>
    );
}
